import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ── Standard 3D Simplex Noise GLSL (Ian McEwan / Ashima Arts) ─ */

const snoiseGLSL = `
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  float n_ = 0.142857142857; // 1.0/7.0
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); // mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

/* ── Point Cloud Shaders ───────────────────────────────── */

const pointVertexShader = `
uniform float uTime;
uniform float uBreathe;
uniform float uNoiseAmp;
uniform float uPixelRatio;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vNoise;
varying float vDepth;

${snoiseGLSL}

void main() {
  vNormal = normal;
  
  // 3D simplex noise with slow spatial frequency
  vec3 noisePos = position * 1.35 + vec3(uTime * 0.22, uTime * 0.18, uTime * 0.15);
  float n = snoise(noisePos);
  vNoise = n;
  
  // Organic vertex displacement along normal + respiration breathing scale
  vec3 displaced = position * uBreathe + normal * (n * uNoiseAmp);
  vPosition = displaced;
  
  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  vDepth = -mvPosition.z;
  
  gl_Position = projectionMatrix * mvPosition;
  
  // Point size with perspective attenuation
  float baseSize = 7.5 * uPixelRatio;
  gl_PointSize = baseSize * (1.8 / max(0.1, -mvPosition.z));
  gl_PointSize = clamp(gl_PointSize, 2.0, 16.0);
}
`;

const pointFragmentShader = `
precision highp float;

uniform vec3 uColorEmerald;
uniform vec3 uColorViolet;
uniform vec3 uColorBrass;
uniform float uOpacity;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vNoise;
varying float vDepth;

void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);
  if (dist > 0.5) discard;
  
  // Soft glowing point with intense radiant nucleus
  float glow = smoothstep(0.5, 0.06, dist);
  float core = smoothstep(0.18, 0.0, dist);
  
  // Dynamic color palette: emerald primary (#0F6E4C), violet accent (#7C3AED), brass crests (#C8A84E)
  float mixVal = smoothstep(-0.3, 0.35, vNoise);
  vec3 col = mix(uColorEmerald, uColorViolet, mixVal);
  
  // Highlight elevation crests with warm brass gold (#C8A84E)
  if (vNoise > 0.22) {
    col = mix(col, uColorBrass, smoothstep(0.22, 0.55, vNoise));
  }
  
  // Core high-intensity radiant spark
  col = mix(col, vec3(1.0, 1.0, 0.95), core * 0.65);
  
  float alpha = glow * uOpacity * (0.65 + 0.35 * core);
  gl_FragColor = vec4(col, alpha);
}
`;

/* ── Wireframe Shaders ─────────────────────────────────── */

const wireVertexShader = `
uniform float uTime;
uniform float uBreathe;
uniform float uNoiseAmp;

varying float vNoise;
varying float vDepth;

${snoiseGLSL}

void main() {
  vec3 noisePos = position * 1.35 + vec3(uTime * 0.22, uTime * 0.18, uTime * 0.15);
  float n = snoise(noisePos);
  vNoise = n;
  
  vec3 displaced = position * uBreathe + normal * (n * uNoiseAmp);
  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  vDepth = -mvPosition.z;
  
  gl_Position = projectionMatrix * mvPosition;
}
`;

const wireFragmentShader = `
precision highp float;

uniform vec3 uColorEmerald;
uniform vec3 uColorViolet;
uniform float uOpacity;

varying float vNoise;
varying float vDepth;

void main() {
  float mixVal = smoothstep(-0.35, 0.35, vNoise);
  vec3 col = mix(uColorEmerald, uColorViolet, mixVal * 0.75);
  gl_FragColor = vec4(col, uOpacity);
}
`;

/* ── Sphere 3D Scene Component ─────────────────────────── */

interface BreathingSphereMeshProps {
  reducedMotion: boolean;
}

function BreathingSphereMesh({ reducedMotion }: BreathingSphereMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetTiltX = useRef(0);
  const targetTiltY = useRef(0);
  const curTiltX = useRef(0);
  const curTiltY = useRef(0);
  const baseRotY = useRef(0.2);

  // Detail 3 = 642 vertices, detail 4 = 2562 vertices
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.22, 3), []);

  const pointUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBreathe: { value: 1.0 },
      uNoiseAmp: { value: 0.1 },
      uColorEmerald: { value: new THREE.Color("#0F6E4C") },
      uColorViolet: { value: new THREE.Color("#7C3AED") },
      uColorBrass: { value: new THREE.Color("#C8A84E") },
      uOpacity: { value: 0.95 },
      uPixelRatio: {
        value: typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.75) : 1,
      },
    }),
    []
  );

  const wireUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBreathe: { value: 1.0 },
      uNoiseAmp: { value: 0.1 },
      uColorEmerald: { value: new THREE.Color("#0F6E4C") },
      uColorViolet: { value: new THREE.Color("#7C3AED") },
      uOpacity: { value: 0.14 },
    }),
    []
  );

  const pointMaterial = useMemo(() => {
    try {
      return new THREE.ShaderMaterial({
        vertexShader: pointVertexShader,
        fragmentShader: pointFragmentShader,
        uniforms: pointUniforms,
        transparent: true,
        depthWrite: false,
      });
    } catch (err) {
      console.error("[HeroSphere3D] Error creating point shader material:", err);
      throw err;
    }
  }, [pointUniforms]);

  const wireMaterial = useMemo(() => {
    try {
      return new THREE.ShaderMaterial({
        vertexShader: wireVertexShader,
        fragmentShader: wireFragmentShader,
        uniforms: wireUniforms,
        transparent: true,
        wireframe: true,
        depthWrite: false,
      });
    } catch (err) {
      console.error("[HeroSphere3D] Error creating wireframe shader material:", err);
      throw err;
    }
  }, [wireUniforms]);

  // Log successful shader material creation
  useEffect(() => {
    console.log("[HeroSphere3D] Shaders compiled and initialized successfully");
  }, []);

  // Mouse tilt listener with subtle range (sphere leans toward cursor)
  useEffect(() => {
    if (typeof window === "undefined" || reducedMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      targetTiltX.current = ny * 0.22;
      targetTiltY.current = nx * 0.32;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      pointMaterial.uniforms.uTime.value = 1.6;
      pointMaterial.uniforms.uBreathe.value = 1.025;
      pointMaterial.uniforms.uNoiseAmp.value = 0.11;
      wireMaterial.uniforms.uTime.value = 1.6;
      wireMaterial.uniforms.uBreathe.value = 1.025;
      wireMaterial.uniforms.uNoiseAmp.value = 0.11;
      groupRef.current.rotation.x = 0.08;
      groupRef.current.rotation.y = 0.35;
      return;
    }

    const dt = Math.min(delta, 0.05);
    const t = state.clock.getElapsedTime();

    // Respiration wave: ~5.0s period sine wave
    const period = 5.0;
    const phase = (t * 2.0 * Math.PI) / period;

    // Scale eases smoothly between 1.0 and 1.055
    const breath = 1.0 + 0.0275 * (1.0 + Math.sin(phase - Math.PI / 2.0));
    // Noise amplitude pulses in phase between 0.09 and 0.13
    const noiseAmp = 0.09 + 0.04 * (0.5 + 0.5 * Math.sin(phase - Math.PI / 2.0));

    pointMaterial.uniforms.uTime.value = t;
    pointMaterial.uniforms.uBreathe.value = breath;
    pointMaterial.uniforms.uNoiseAmp.value = noiseAmp;

    wireMaterial.uniforms.uTime.value = t;
    wireMaterial.uniforms.uBreathe.value = breath;
    wireMaterial.uniforms.uNoiseAmp.value = noiseAmp;

    // Smooth damped tilt lerp
    curTiltX.current = THREE.MathUtils.lerp(curTiltX.current, targetTiltX.current, Math.min(1, dt * 3.0));
    curTiltY.current = THREE.MathUtils.lerp(curTiltY.current, targetTiltY.current, Math.min(1, dt * 3.0));

    // Slow constant Y rotation
    baseRotY.current += dt * 0.15;

    groupRef.current.rotation.x = curTiltX.current;
    groupRef.current.rotation.y = baseRotY.current + curTiltY.current;
  });

  return (
    <group ref={groupRef}>
      {/* Low-opacity architectural wireframe lattice */}
      <mesh geometry={geometry} material={wireMaterial} />

      {/* Point cloud nodes */}
      <points geometry={geometry} material={pointMaterial} />
    </group>
  );
}

/* ── Main Canvas Component Export ───────────────────────── */

interface HeroSphereCanvasProps {
  reducedMotion?: boolean;
}

export default function HeroSphereCanvas({ reducedMotion = false }: HeroSphereCanvasProps) {
  useEffect(() => {
    console.log("[HeroSphere3D] Canvas mounted with R3F WebGL context");
  }, []);

  return (
    <div
      className="relative select-none pointer-events-none"
      style={{ width: "320px", height: "320px" }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 3.4], fov: 46 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <BreathingSphereMesh reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
