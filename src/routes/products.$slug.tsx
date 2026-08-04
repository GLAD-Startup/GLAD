import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  animate,
  useMotionTemplate,
} from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Smartphone,
  Layers,
  GitBranch,
  CheckCircle2,
  RefreshCw,
  Lock,
  FileCheck,
  Database,
  ArrowRight,
  ArrowUp,
  Play,
  Sparkles,
  Check,
  X,
  Loader2,
  KeyRound,
  Handshake,
  Coins,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/routes/images/settledesk/hero-3d.png";
import phoneImg from "@/routes/images/settledesk/phone-3d.png";
import securityImg from "@/routes/images/settledesk/security-3d.png";
import propertiesImg from "@/routes/images/settledesk/properties-3d.png";
import commissionImg from "@/routes/images/settledesk/commission-3d.png";
import approvalsImg from "@/routes/images/settledesk/approvals-3d.png";
import syncImg from "@/routes/images/settledesk/sync-3d.png";
import skylineImg from "@/routes/images/settledesk/skyline-3d.jpg";
import buildingImg from "@/routes/images/settledesk/building.png";
import modernOfficeFacadeImg from "@/routes/images/settledesk/modern-office-facade.png";
import luxuryVillaImg from "@/routes/images/settledesk/luxury-villa.png";
import brokerOfficeImg from "@/routes/images/settledesk/broker-office.png";
import skyscraperSunsetImg from "@/routes/images/settledesk/skyscraper-sunset.png";
import brokerDealImg from "@/routes/images/settledesk/broker-deal.png";
import realEstateContractImg from "@/routes/images/settledesk/real-estate-contract.png";
import realEstateAppImg from "@/routes/images/settledesk/real-estate-app.png";
import corporateServerImg from "@/routes/images/settledesk/corporate-server.png";
import brokerageBoardroomImg from "@/routes/images/settledesk/brokerage-boardroom.png";
import securityAboutBgImg from "@/routes/images/settledesk/graphic-design-building-architecture-creative-city-building-vector.png";

// Video Assets
import propVideo from "@/routes/images/settledesk/videos/every property always up to date.mp4";
import commissionVideo from "@/routes/images/settledesk/videos/Commission Plans, Built Your Way.mp4";
import approvalsVideo from "@/routes/images/settledesk/videos/From Submitted to Sold, Automatically.mp4";
import syncVideo from "@/routes/images/settledesk/videos/One Source of Truth. Every Device.mp4";
import demoBgVideo from "@/routes/images/settledesk/videos/request a demo background.mp4";
import logoVideo from "@/routes/images/settledesk/videos/video logo.mp4";

// Database & Server Function Imports
import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export const signupFn = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://bbqltggvuosmzvyagxgu.supabase.co";
    const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseServiceRole) {
      throw new Error("SUPABASE_SERVICE_ROLE_KEY is not defined in server environment");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRole, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { organization_name, contact_name, contact_email, contact_phone, password } = data;

    // Use password chosen by user, or generate fallback
    const userPassword =
      password && password.trim().length >= 8
        ? password.trim()
        : Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8).toUpperCase() +
          "!1a";

    // 0. Format values
    const rawPhone = contact_phone.replace(/\D/g, "").slice(-10); // Extract last 10 digits
    if (rawPhone.length !== 10) {
      throw new Error("Please enter a valid 10-digit mobile number");
    }
    const formattedPhone = `+91${rawPhone}`;

    // 1. Create client profile in platform_clients
    const { data: client, error: clientErr } = await supabase
      .from("platform_clients")
      .insert({
        organization_name,
        contact_name,
        contact_email,
        contact_phone: formattedPhone,
        business_type: "proprietorship",
        consent_accepted: true,
        consent_accepted_at: new Date().toISOString(),
        consent_version: "v1",
        status: "active",
      })
      .select()
      .single();

    if (clientErr) throw new Error(`Client profile error: ${clientErr.message}`);

    // 2. Create Login credentials in Supabase Auth directly with user's real email & phone
    let authUser;
    const realEmail = contact_email.trim();

    let { data: newAuthUser, error: authErr } = await supabase.auth.admin.createUser({
      email: realEmail,
      phone: formattedPhone,
      password: userPassword,
      email_confirm: true,
      phone_confirm: true,
      user_metadata: {
        full_name: contact_name,
        organization: organization_name,
        phone: rawPhone,
      },
    });

    if (authErr) {
      // Check if this is an orphaned auth user whose client/public user was deleted
      const { data: existingUser } = await supabase
        .from("users")
        .select("id, platform_client_id")
        .or(
          `phone.eq."${formattedPhone}",id.in.(select id from auth.users where email='${realEmail}')`,
        )
        .maybeSingle();

      if (!existingUser) {
        // Find orphan auth user in auth.users
        const { data: userList } = await supabase.auth.admin.listUsers();
        const orphan = (userList?.users || []).find(
          (u) => u.phone === formattedPhone || u.email === realEmail,
        );

        if (orphan) {
          await supabase.auth.admin.deleteUser(orphan.id);
          // Retry create user
          const retryRes = await supabase.auth.admin.createUser({
            email: realEmail,
            phone: formattedPhone,
            password: userPassword,
            email_confirm: true,
            phone_confirm: true,
            user_metadata: {
              full_name: contact_name,
              organization: organization_name,
              phone: rawPhone,
            },
          });
          newAuthUser = retryRes.data;
          authErr = retryRes.error;
        }
      }
    }

    if (authErr || !newAuthUser?.user) {
      // Cleanup client profile if auth fails
      await supabase.from("platform_clients").delete().eq("id", client.id);
      const errMsg = authErr?.message?.toLowerCase() || "";
      if (errMsg.includes("already been registered") || errMsg.includes("already registered")) {
        throw new Error(
          `An active company workspace is already registered for ${realEmail} / +91 ${rawPhone}. Please log in to your dashboard.`,
        );
      }
      throw new Error(
        `Auth credentials error: ${authErr?.message || "Failed to create user credentials"}`,
      );
    }
    const userId = newAuthUser.user.id;

    // 3. Create public.users profile row
    const { error: userErr } = await supabase.from("users").insert({
      id: userId,
      phone: formattedPhone,
      full_name: contact_name,
      role: "company_admin",
      platform_client_id: client.id,
      is_active: true,
    });

    if (userErr) throw new Error(`User profile error: ${userErr.message}`);

    // Seed onboarding checklist steps (initial setup completed by system)
    await supabase.from("platform_client_onboarding").insert({
      client_id: client.id,
      step: "account_created",
      status: "completed",
      completed_at: new Date().toISOString(),
    });

    await supabase.from("platform_client_onboarding").insert({
      client_id: client.id,
      step: "credentials_generated",
      status: "completed",
      completed_at: new Date().toISOString(),
    });

    console.log(`Successfully created single Auth user for ${realEmail} (+91 ${rawPhone})`);

    return {
      success: true,
      loginId: rawPhone,
      organization: organization_name,
      message: "Client account created successfully. Please login to continue onboarding.",
    };
  });

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground as Background } from "@/components/site/Background";
import { ReactLenis } from "lenis/react";

export const Route = createFileRoute("/products/$slug")({
  head: () => ({
    meta: [
      { title: "SettleDesk — Run Your Entire Brokerage on One Platform" },
      {
        name: "description",
        content:
          "All-in-one, multi-tenant real estate brokerage SaaS. Unify properties, agents, deals, and commissions in one secure real-time platform.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIntro, setFadeIntro] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasPlayed = sessionStorage.getItem("settledesk_intro_played");
      if (hasPlayed === "true") {
        setShowIntro(false);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleStart = () => {
    setHasInteracted(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("settledesk_intro_played", "true");
    }

    timeoutRef.current = setTimeout(() => {
      setFadeIntro(true);
      setTimeout(() => setShowIntro(false), 800);
    }, 6000);

    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.warn("Audio autoplay blocked even after user gesture:", err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch((e) => console.error("Muted playback failed:", e));
        }
      });
    }
  };

  const handleEnded = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFadeIntro(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("settledesk_intro_played", "true");
    }
    setTimeout(() => {
      setShowIntro(false);
    }, 800);
  };

  const handleSkip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFadeIntro(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("settledesk_intro_played", "true");
    }
    setTimeout(() => {
      setShowIntro(false);
    }, 800);
  };

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener("open-signup-modal", handleOpen);
    return () => window.removeEventListener("open-signup-modal", handleOpen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ReactLenis root>
      {showIntro && (
        <div
          className={`intro-overlay fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-800 ${
            fadeIntro ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            ref={videoRef}
            src={logoVideo}
            playsInline
            onEnded={handleEnded}
            className={`w-full h-full object-contain transition-opacity duration-500 ${hasInteracted ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />

          {!hasInteracted && (
            <button
              onClick={handleStart}
              className="absolute inset-0 flex flex-col items-center justify-center bg-background cursor-pointer border-none outline-none group"
            >
              <div className="relative flex items-center justify-center h-28 w-28 rounded-full border border-gold/40 bg-gold/5 shadow-[0_0_50px_rgba(255,184,0,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:border-gold group-hover:shadow-[0_0_60px_rgba(255,184,0,0.25)]">
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-gold to-violet opacity-80 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                <svg
                  className="relative z-10 h-10 w-10 text-white translate-x-0.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <span className="mt-8 font-display text-lg font-bold tracking-widest text-foreground/80 group-hover:text-foreground transition-colors duration-300 uppercase">
                Enter SettleDesk
              </span>
              <span className="mt-2 text-xs text-muted-foreground tracking-wide font-medium">
                Click to play experience with sound
              </span>
            </button>
          )}

          {hasInteracted && (
            <div className="absolute bottom-8 right-8 z-[101]">
              <button
                onClick={handleSkip}
                className="px-5 py-2.5 rounded-full border border-border/40 bg-background/50 hover:bg-background/90 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300 backdrop-blur-md shadow-sm cursor-pointer"
              >
                Skip Intro
              </button>
            </div>
          )}
        </div>
      )}

      <div className="crm-theme min-h-screen bg-background text-foreground overflow-x-hidden font-sans relative">
        <Background />
        <Header />
        <main className="relative z-10">
          <Hero />
          <ThreeTier />
          <Features />
          <div className="relative z-0 overflow-hidden bg-background">
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-multiply pointer-events-none"
              style={{ backgroundImage: `url(${securityAboutBgImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background -z-10 pointer-events-none" />

            <Security />
            <AdvancedSecurity />
            <About />
          </div>
          <HowItWorks />
          <Testimonials />
          <Gallery />
          <Pricing />
          <FinalCTA />
        </main>
        <Footer />
        <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {!showIntro && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-background/60 backdrop-blur-md text-gold shadow-lg transition-all duration-300 hover:border-gold hover:bg-background/90 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,184,0,0.25)] focus:outline-none cursor-pointer ${
              showScrollTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            aria-label="Back to Top"
          >
            <ArrowUp className="h-5 w-5 stroke-[2.5]" />
          </button>
        )}
      </div>
    </ReactLenis>
  );
}

function Hero() {
  const stats = [
    { v: "500+", l: "Brokers Onboarded" },
    { v: "10,000+", l: "Property Units Managed" },
    { v: "99.9%", l: "Platform Uptime" },
    { v: "Bank-Grade", l: "Data Security" },
  ];
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Large Cityscape Silhouette Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Blueprint grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full"
          style={{ opacity: 0.06 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="oklch(0.85 0.1 80)"
                strokeWidth="0.8"
              />
            </pattern>
            <pattern id="blueprint-grid-lg" width="300" height="300" patternUnits="userSpaceOnUse">
              <path
                d="M 300 0 L 0 0 0 300"
                fill="none"
                stroke="oklch(0.85 0.1 80)"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          <rect width="100%" height="100%" fill="url(#blueprint-grid-lg)" />
        </svg>

        {/* Massive Skyline Silhouette */}
        <motion.svg
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-full h-[520px]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient
              id="building-grad"
              x1="0"
              y1="50"
              x2="0"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="oklch(0.75 0.12 75)" stopOpacity="0.28" />
              <stop offset="40%" stopColor="oklch(0.80 0.10 80)" stopOpacity="0.20" />
              <stop offset="100%" stopColor="oklch(0.90 0.05 85)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.7" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="skyline-mask">
              <rect width="1440" height="400" fill="url(#skyline-fade)" />
            </mask>
          </defs>
          <g mask="url(#skyline-mask)" fill="url(#building-grad)">
            <rect x="10" y="160" width="90" height="240" rx="3" />
            <polygon points="10,160 55,130 100,160" />
            <rect x="120" y="200" width="110" height="200" rx="3" />
            <rect x="250" y="240" width="120" height="160" rx="3" />
            <rect x="390" y="100" width="75" height="300" rx="3" />
            <polygon points="390,100 427,70 465,100" />
            <rect x="485" y="180" width="100" height="220" rx="3" />
            <rect x="605" y="140" width="80" height="260" rx="3" />
            <rect x="705" y="220" width="140" height="180" rx="3" />
            <rect x="865" y="80" width="80" height="320" rx="3" />
            <polygon points="865,80 905,50 945,80" />
            <rect x="965" y="180" width="105" height="220" rx="3" />
            <rect x="1090" y="150" width="90" height="250" rx="3" />
            <rect x="1200" y="140" width="100" height="260" rx="3" />
            <rect x="1320" y="200" width="110" height="200" rx="3" />
            <polygon points="1320,200 1375,170 1430,200" />
          </g>
        </motion.svg>

        {/* Decorative architectural compass lines */}
        <motion.svg
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.05, rotate: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute -top-10 -right-20 w-[600px] h-[600px]"
          viewBox="0 0 500 500"
          fill="none"
          stroke="oklch(0.85 0.1 80)"
          strokeWidth="1"
        >
          <line x1="0" y1="0" x2="500" y2="500" />
          <line x1="100" y1="0" x2="500" y2="400" />
          <line x1="200" y1="0" x2="500" y2="300" />
          <line x1="0" y1="100" x2="400" y2="500" />
          <line x1="0" y1="200" x2="300" y2="500" />
          <circle cx="250" cy="250" r="200" />
          <circle cx="250" cy="250" r="150" />
          <circle cx="250" cy="250" r="100" />
          <rect x="50" y="50" width="400" height="400" />
          <rect x="100" y="100" width="300" height="300" />
        </motion.svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 border border-gold/30 backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
              Premium Brokerage Operations
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] xl:text-[6.5rem] font-extrabold tracking-tight leading-[1.04] text-foreground">
              Run Your Entire Brokerage.
              <br />
              <span className="gradient-text font-extrabold block sm:inline mt-1 sm:mt-0">
                On One Platform.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground/90 font-normal leading-relaxed">
              SettleDesk unifies property management, agent operations, lead tracking, and
              commission payouts into one secure, real-time system — built for brokerages that are
              ready to scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => window.dispatchEvent(new Event("open-signup-modal"))}
                className="btn-gradient inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-extrabold uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-gold/25 hover:scale-[1.02] transition-all"
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#how"
                className="glass inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-wider hover:border-gold/50 transition-colors"
              >
                <Play className="h-4 w-4" /> Watch Overview
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Building Graphic with Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-[550px] lg:h-[600px] flex flex-col lg:block items-center justify-center">
              {/* Soft gold/violet background glow behind the building */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-gold/15 to-violet/10 blur-3xl opacity-60 pointer-events-none" />

              <img
                src={buildingImg}
                alt="Brokerage Building"
                className="relative z-10 w-full h-auto max-h-[460px] lg:max-h-none object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-500 ease-out select-none"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 140px)",
                  maskImage: "linear-gradient(to top, transparent 0%, black 140px)",
                }}
              />

              {/* Floating Stats Cards around the building */}
              <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0 lg:contents justify-items-center">
                {stats.map((s, i) => (
                  <div
                    key={s.l}
                    className={`float-stats-${i} ${
                      i === 0
                        ? "lg:absolute lg:left-[-20px] lg:top-[14%] lg:z-20"
                        : i === 1
                          ? "lg:absolute lg:right-[-10px] lg:top-[28%] lg:z-20"
                          : i === 2
                            ? "lg:absolute lg:left-[-15px] lg:bottom-[34%] lg:z-20"
                            : "lg:absolute lg:right-[-25px] lg:bottom-[20%] lg:z-20"
                    }`}
                  >
                    <div data-label={s.l} className="corner-expand-card">
                      <div className="stat-value font-display text-xl font-bold text-navy">
                        {s.v}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ThreeTier() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Super Admin Portal",
      role: "For Platform Operators",
      desc: "Manage every brokerage on SettleDesk from a single command center — subscriptions, billing, onboarding, and platform-wide analytics.",
      bullets: [
        "Subscription & billing management",
        "Client onboarding & lifecycle tracking",
        "Platform-wide audit logs",
      ],
    },
    {
      icon: Building2,
      title: "Client Admin Dashboard",
      role: "For Brokerage Owners & Managers",
      desc: "Take full control of your brokerage's operations — from listing properties to approving deals and structuring commissions your way.",
      bullets: [
        "Property & portfolio management",
        "Version-controlled commission plans",
        "Deal & payout approvals",
      ],
    },
    {
      icon: Smartphone,
      title: "Broker Mobile App",
      role: "For Agents on the Go",
      desc: "Everything your agents need to close deals, right from their phones — live listings, lead tracking, and real-time commission visibility.",
      bullets: [
        "Real-time property browsing",
        "Lead & deal management",
        "Live commission tracking",
      ],
    },
  ];
  return (
    <section id="product" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="One Platform, Three Experiences"
          title={
            <>
              Everyone Gets the Right <span className="gradient-text">Tools for Their Job</span>
            </>
          }
          watermark="platform"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Card header: title left, icon right */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-gold font-extrabold">
                    {c.role}
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold leading-snug text-foreground">
                    {c.title}
                  </h3>
                </div>
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 flex items-center justify-center transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/15 group-hover:scale-110">
                  <c.icon className="h-5 w-5 text-gold" />
                </div>
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-gold/30 via-border/30 to-transparent" />
              <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
              <ul className="mt-5 space-y-2.5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-sm font-semibold text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      video: propVideo,
      title: "Every Property. Always Up to Date.",
      eyebrow: "Property & Portfolio Management",
      desc: "Create, manage, and track your entire property portfolio in real time. Update unit statuses — Draft, Active, Sold — and keep every agent working from the same live data.",
    },
    {
      video: commissionVideo,
      title: "Commission Plans, Built Your Way.",
      eyebrow: "Commission Structure Engine",
      desc: "Design version-controlled commission structures and assign them precisely — by broker, by property, by deal. No spreadsheets, no guesswork.",
    },
    {
      video: approvalsVideo,
      title: "From Submitted to Sold, Automatically.",
      eyebrow: "Deal & Payout Approvals",
      desc: "When a broker closes a deal, admins review and approve it in one click — instantly updating unit status and queuing the commission payout.",
    },
    {
      video: syncVideo,
      title: "One Source of Truth. Every Device.",
      eyebrow: "Real-Time Sync Across Devices",
      desc: "Whether it's the mobile app or the web dashboard, everyone sees the same data, the same moment it changes — no fragmentation, no delays.",
    },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 space-y-32">
        {items.map((it, i) => (
          <div key={it.title} className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={i % 2 === 1 ? "lg:order-2" : ""}
            >
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 border border-gold/20 mb-3">
                {it.eyebrow}
              </div>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.08] text-foreground">
                {it.title}
              </h3>
              <p className="mt-5 text-base md:text-lg text-muted-foreground/90 max-w-lg leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={"relative " + (i % 2 === 1 ? "lg:order-1" : "")}
            >
              <div
                className="absolute inset-0 -m-8 rounded-full"
                style={{ background: "var(--gradient-glow)", opacity: 0.7 }}
              />

              {/* Premium Browser Mockup Container */}
              <div className="group relative rounded-3xl border border-border/40 bg-card/60 p-2.5 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-gold/45 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]">
                {/* Browser top window bar */}
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border/20 mb-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60 transition-colors group-hover:bg-red-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60 transition-colors group-hover:bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60 transition-colors group-hover:bg-green-500" />
                  <div className="mx-auto text-[10px] text-muted-foreground font-mono tracking-tight bg-background/50 px-4 py-0.5 rounded-full border border-border/10">
                    settledesk.io/
                    {it.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}
                  </div>
                </div>
                {/* Video Wrapper */}
                <div className="relative overflow-hidden rounded-2xl aspect-video bg-background/40">
                  <video
                    src={it.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover shadow-inner"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Security() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal movement (runs from right to left as you scroll down)
  const xVal = useTransform(scrollYProgress, [0, 1], ["100vw", "-20vw"]);

  const items = [
    {
      icon: Lock,
      t: "Row-Level Security",
      d: "Database-enforced isolation ensures one brokerage can never access another's data.",
      color: "navy",
    },
    {
      icon: FileCheck,
      t: "Immutable Audit Trails",
      d: "Every critical action is automatically logged for full compliance and traceability.",
      color: "gold",
    },
    {
      icon: Database,
      t: "Enterprise Data Isolation",
      d: "A single unified database architected for multi-tenant safety at scale.",
      color: "navy",
    },
  ];
  return (
    <section ref={sectionRef} id="security" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.3_0.05_260/0.05),transparent_60%)]" />

      {/* Reduced Size Dark Grey Watermark */}
      <motion.div
        style={{ x: xVal }}
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -z-10 select-none text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] font-display font-semibold text-slate-700/15 dark:text-zinc-600/20 tracking-tight whitespace-nowrap lowercase"
      >
        secure
      </motion.div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 border border-gold/25 backdrop-blur-md mb-3">
            Enterprise-Grade Security
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold leading-[1.08] text-foreground">
            Bank-Grade Security. <br />
            <span className="gradient-text font-extrabold">Zero Data Leaks Between Tenants.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SettleDesk is built on strict database-level isolation, so every brokerage's data stays
            completely private — even on a shared platform.
          </p>
        </motion.div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.li
              key={item.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`group relative rounded-2xl border backdrop-blur-sm p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 ${
                item.color === "navy"
                  ? "bg-gradient-to-br from-navy/[0.06] to-card/90 border-navy/10 hover:border-navy/35 hover:shadow-[0_20px_50px_-12px_rgba(48,76,120,0.12)]"
                  : "bg-gradient-to-br from-gold/15 to-card/90 border-gold/20 hover:border-gold/45 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.14)]"
              }`}
            >
              <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 flex items-center justify-center transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/15 group-hover:scale-110 mb-4">
                <item.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                  {item.t}
                </div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      t: "Onboard",
      d: "Your brokerage gets provisioned and configured in minutes.",
      img: propertiesImg,
      phase: "Phase 1: Setup",
      metric: { label: "Setup Time", value: "Under 5m" },
      badgeIcon: KeyRound,
      checklist: [
        "Create dedicated tenant DB",
        "Configure custom subdomain",
        "Invite initial Super Admin",
      ],
    },
    {
      t: "Configure",
      d: "Admins set up properties, teams, and commission structures.",
      img: commissionImg,
      phase: "Phase 2: Rules",
      metric: { label: "Rules Saved", value: "Versioned" },
      badgeIcon: FileText,
      checklist: [
        "Upload properties catalog",
        "Define agent split tiers",
        "Set office caps & royalty fee",
      ],
    },
    {
      t: "Sell",
      d: "Brokers manage leads and close deals from the mobile app.",
      img: syncImg,
      phase: "Phase 3: Sales",
      metric: { label: "App Access", value: "Real-time" },
      badgeIcon: Handshake,
      checklist: [
        "Browse active property list",
        "Log client offer & contract",
        "Upload closing signatures",
      ],
    },
    {
      t: "Get Paid",
      d: "Deals get approved, and commissions are calculated automatically.",
      img: approvalsImg,
      phase: "Phase 4: Finance",
      metric: { label: "Split Calculation", value: "Instant" },
      badgeIcon: Coins,
      checklist: [
        "One-click admin approval",
        "Calculate split & split caps",
        "Queue bank payout transfer",
      ],
    },
  ];
  return (
    <section id="how" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="How It Works"
          title={
            <>
              From Onboarding to Payout, <span className="gradient-text">in Four Steps</span>
            </>
          }
          watermark="workflow"
        />
        <div className="mt-20">
          <div className="how-it-works-grid grid gap-6 lg:grid-cols-4 lg:items-start relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 overflow-visible transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_60px_-15px_rgba(255,184,0,0.1)] hover:-translate-y-2"
                style={{ marginTop: `calc(${i} * var(--stagger))` }}
              >
                {/* Top Gradient Border Highlight */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent group-hover:via-gold/70 transition-all duration-500 pointer-events-none" />

                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                {/* Top Phase Tag & Metric Badge */}
                <div className="relative z-10 flex items-center justify-between mb-4 text-xs font-mono">
                  <span className="text-gold/80 font-bold uppercase tracking-wider flex items-center">
                    <span className="relative flex h-1.5 w-1.5 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/60 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
                    </span>
                    {s.phase}
                  </span>
                  <span className="bg-gold/10 text-gold border border-gold/20 px-2.5 py-0.5 rounded-md font-semibold">
                    {s.metric.value}
                  </span>
                </div>

                {/* Video/Image Frame */}
                <div className="relative mb-5 rounded-2xl overflow-hidden bg-background/40 h-40 flex items-center justify-center p-2 border border-border/10 transition-colors duration-500 group-hover:border-gold/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-gold/5 opacity-50" />
                  <img
                    src={s.img}
                    alt={s.t}
                    className="relative z-10 w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-500 ease-out drop-shadow-xl"
                  />
                </div>

                {/* Card Title & Content */}
                <div className="relative z-10 pb-4">
                  <div className="font-display text-xl font-bold flex items-center gap-2 text-foreground group-hover:text-gold transition-colors duration-300">
                    <span className="text-gold">0{i + 1}.</span> {s.t}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.d}</p>

                  {/* Checklist Divider */}
                  <div className="my-4 h-px bg-gradient-to-r from-gold/30 via-border/30 to-transparent" />

                  {/* Themed Tasks Checklist */}
                  <ul className="space-y-2 text-xs text-muted-foreground/80">
                    {s.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span className="truncate group-hover:text-foreground/90 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Serial Footnote */}
                <div className="absolute bottom-4 left-6 font-mono text-[9px] tracking-widest text-muted-foreground/35 uppercase pointer-events-none select-none transition-colors duration-500 group-hover:text-gold/50">
                  {i === 0
                    ? "SYS-STP // 01"
                    : i === 1
                      ? "SYS-RLS // 02"
                      : i === 2
                        ? "SYS-SLS // 03"
                        : "SYS-FIN // 04"}
                </div>

                {/* Faded Watermark Number */}
                <div className="absolute -bottom-4 -right-4 text-[7rem] font-display font-bold leading-none text-foreground/[0.08] group-hover:text-gold/[0.20] transition-colors duration-500 pointer-events-none select-none">
                  0{i + 1}
                </div>

                {/* Bottom Gradient Border Highlight */}
                <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/40 transition-all duration-500 pointer-events-none" />

                {/* Desktop Step Connectors */}
                {i < steps.length - 1 && (
                  <div className="absolute left-full top-[140px] w-6 h-[3.5rem] pointer-events-none hidden lg:block z-20">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 24 56" fill="none">
                      {/* Outer Glow Path */}
                      <path
                        d="M 0 0 H 12 V 56 H 24"
                        stroke="var(--color-gold)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-15 blur-[2px]"
                      />
                      {/* Main Path */}
                      <path
                        d="M 0 0 H 12 V 56 H 24"
                        stroke="var(--color-gold)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-45"
                      />
                      {/* Dotted animated overlay */}
                      <path
                        d="M 0 0 H 12 V 56 H 24"
                        stroke="var(--color-gold)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4 4"
                        className="opacity-80 animate-path-dash"
                      />
                    </svg>
                    {/* Themed Badge in the middle of step */}
                    <div className="absolute left-[12px] top-[28px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full glass border border-gold/30 shadow-glow z-30 group-hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const NextIcon = steps[i + 1].badgeIcon;
                        return <NextIcon className="w-3.5 h-3.5 text-gold" />;
                      })()}
                    </div>
                  </div>
                )}

                {/* Mobile Vertical Step Connectors */}
                {i < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-6 h-6 pointer-events-none block lg:hidden z-20">
                    {/* Vertical Line */}
                    <div className="w-0.5 h-full bg-gradient-to-b from-gold/40 to-gold/10 border-dashed border-l border-gold/40 mx-auto" />
                    {/* Themed Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full glass border border-gold/30 shadow-glow z-30">
                      {(() => {
                        const NextIcon = steps[i + 1].badgeIcon;
                        return <NextIcon className="w-2.5 h-2.5 text-gold" />;
                      })()}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "SettleDesk replaced three different tools we were using to manage listings, agents, and payouts. Now it's all in one place, and my team actually uses it.",
      a: "Operations Director",
      r: "Mid-Size Brokerage",
    },
    {
      q: "The commission engine alone saved us hours every month. No more manual calculations or disputes with agents.",
      a: "Managing Broker",
      r: "Regional Real Estate Firm",
    },
    {
      q: "Our agents love the mobile app. They can close deals without ever touching a desktop.",
      a: "Founder",
      r: "Boutique Brokerage",
    },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="What Brokerages Say"
          title={
            <>
              Loved by teams that <span className="gradient-text">actually use it</span>
            </>
          }
          watermark="reviews"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.a}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: i === 1 ? -16 : 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="testimonial-book group"
            >
              {/* Inner Page (contains the quote) */}
              <p className="text-foreground/95 leading-relaxed font-semibold italic text-center text-sm md:text-base px-6">
                "{t.q}"
              </p>

              {/* Book Cover (contains the author, role, and opens on hover) */}
              <div className="testimonial-book-cover flex p-3">
                {/* Gold Embossed Inner Border Container */}
                <div className="w-full h-full border border-gold/20 rounded-xl flex flex-col items-center justify-center p-6 relative">
                  {/* Decorative corner brackets */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold/30" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold/30" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold/30" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold/30" />

                  <div className="text-5xl text-gold font-display leading-none mb-3 select-none">
                    "
                  </div>
                  <div className="text-gold font-mono text-[10px] font-bold uppercase tracking-widest text-center mb-1.5 max-w-[180px]">
                    {t.r}
                  </div>
                  <div className="text-white font-display text-xl font-bold text-center leading-snug max-w-[180px]">
                    {t.a}
                  </div>
                  <div className="text-gold/70 text-xs font-semibold mt-auto flex items-center gap-1 opacity-90 group-hover:text-gold transition-colors duration-300">
                    Open Testimony →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCard {
  tag: string;
  title: string;
  img: string;
  metric: string;
  description: string;
  aspect: string;
}

function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationXVal = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);
  const isPointerDown = useRef(false);

  // Dynamic Responsive Dimensions
  const [windowWidth, setWindowWidth] = useState(1200);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards: FeatureCard[] = [
    {
      tag: "PORTFOLIO",
      title: "Listing Catalog",
      img: luxuryVillaImg,
      metric: "12,450 Listed Properties",
      aspect: "aspect-[16/10]",
      description:
        "SettleDesk's core listing engine allows admins to manage massive property portfolios. It supports draft, active, and sold states, real-time filtering, and automatic listing syndication to agent mobile apps.",
    },
    {
      tag: "COMPENSATE",
      title: "Dynamic Split Matrices",
      img: realEstateContractImg,
      metric: "Custom Tiers & Office Caps",
      aspect: "aspect-square",
      description:
        "Set up complex, multi-tiered commission structures. Define splits by agent tier, property type, or deal volume. Automatically tracks office caps, franchise fees, and royalty percentages.",
    },
    {
      tag: "CONNECT",
      title: "Broker App Synchronizer",
      img: brokerOfficeImg,
      metric: "12ms Response Latency",
      aspect: "aspect-[4/3]",
      description:
        "Keep your agents in the loop with instant updates. The synchronizer coordinates data between the Client Admin Dashboard and the Broker Mobile App with sub-second latency.",
    },
    {
      tag: "COMPLIANCE",
      title: "Submission to Approval",
      img: realEstateAppImg,
      metric: "1-Click Legal Sign-offs",
      aspect: "aspect-[16/9]",
      description:
        "Simplify deal closures. When a broker submits a contract from their phone, the admin is notified instantly. Approvals trigger automatic property status changes and payout calculations.",
    },
    {
      tag: "IDENTITY",
      title: "Dedicated Tenant Isolation",
      img: corporateServerImg,
      metric: "End-to-End Encryption",
      aspect: "aspect-[4/3]",
      description:
        "SettleDesk is built with multi-tenant security at its core. Database row-level security (RLS) ensures that your brokerage's listings, commissions, and agent data remain completely isolated and secure.",
    },
    {
      tag: "PRESTIGE",
      title: "Luxury Branding Hub",
      img: modernOfficeFacadeImg,
      metric: "Private Office Spaces",
      aspect: "aspect-[4/3]",
      description:
        "Customize the platform to match your brand. Customize subdomains, email templates, app icons, and reports to deliver a cohesive, premium experience to your agents and clients.",
    },
    {
      tag: "PIPELINE",
      title: "Instant Client Routing",
      img: brokerDealImg,
      metric: "Zero Lead Leakage",
      aspect: "aspect-[16/10]",
      description:
        "Route leads dynamically based on location, listing type, or agent availability. Ensures that client inquiries are instantly connected to the right agent, boosting conversion rates.",
    },
    {
      tag: "MANAGEMENT",
      title: "Operations Command Center",
      img: brokerageBoardroomImg,
      metric: "Real-time Activity Logs",
      aspect: "aspect-square",
      description:
        "Track everything happening across your brokerage. The activity log monitors logins, property updates, commission changes, and payouts, providing a complete audit trail.",
    },
    {
      tag: "FORECAST",
      title: "Volume & Profit Analytics",
      img: skylineImg,
      metric: "Daily Volume Metrics",
      aspect: "aspect-[3/2]",
      description:
        "Gain deep insights into your brokerage's financial health. Track total sales volume, average commission splits, net profit margins, and top-performing agents in real time.",
    },
    {
      tag: "FINANCE",
      title: "Instant Bank Payouts",
      img: skyscraperSunsetImg,
      metric: "Zero-Delay Clearing",
      aspect: "aspect-[16/9]",
      description:
        "Accelerate agent payouts. SettleDesk integrates with major banking systems to process commission disbursements directly to your agents' bank accounts once a deal is approved.",
    },
  ];

  let cardWidth = 300;
  let cardHeight = 220;
  let radius = 460;

  if (windowWidth < 640) {
    cardWidth = 180;
    cardHeight = 132;
    radius = 277;
  } else if (windowWidth < 1024) {
    cardWidth = 240;
    cardHeight = 176;
    radius = 369;
  } else if (windowWidth < 1280) {
    cardWidth = 280;
    cardHeight = 205;
    radius = 431;
  }

  // Helper for safe modulo distance calculation
  const getDistance = (cardAngle: number, r: number) => {
    const angle = (((cardAngle + r) % 360) + 360) % 360;
    const normalized = ((((angle + 180) % 360) + 360) % 360) - 180;
    return Math.abs(normalized);
  };

  // Auto-play effect: slowly rotate when not dragging
  useAnimationFrame((time, delta) => {
    if (!isDragging) {
      // 0.008 degrees per millisecond (~5 degrees/second)
      rotationXVal.set(rotationXVal.get() - delta * 0.008);
    }
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDown.current = true;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartRotation.current = rotationXVal.get();
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    const deltaX = e.clientX - dragStartX.current;
    // Rotation sensitivity
    const sensitivity = 0.22;
    rotationXVal.set(dragStartRotation.current + deltaX * sensitivity);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isPointerDown.current = false;
    setIsDragging(false);
    const target = e.currentTarget as HTMLElement;
    try {
      target.releasePointerCapture(e.pointerId);
    } catch (err) {
      // Ignore if pointer capture wasn't active
    }
  };

  const rotateToCard = (index: number) => {
    const targetRotation = -index * 36;
    const current = rotationXVal.get();

    // Find the nearest equivalent angle to prevent large rotations
    const newTarget = targetRotation + Math.round((current - targetRotation) / 360) * 360;

    animate(rotationXVal, newTarget, {
      type: "spring",
      stiffness: 85,
      damping: 18,
    });
  };

  const handleCardClick = (index: number) => {
    const targetRotation = -index * 36;
    const current = rotationXVal.get();
    const newTarget = targetRotation + Math.round((current - targetRotation) / 360) * 360;

    const isClose = Math.abs(current - newTarget) < 4;
    if (isClose) {
      setSelectedCardIndex(index);
    } else {
      animate(rotationXVal, newTarget, {
        type: "spring",
        stiffness: 90,
        damping: 19,
        onComplete: () => {
          setSelectedCardIndex(index);
        },
      });
    }
  };

  const handleNext = () => {
    const current = rotationXVal.get();
    const currentIndex = Math.round(-current / 36);
    rotateToCard(currentIndex + 1);
  };

  const handlePrev = () => {
    const current = rotationXVal.get();
    const currentIndex = Math.round(-current / 36);
    rotateToCard(currentIndex - 1);
  };

  const dynamicRotateX = useTransform(rotationXVal, (r) => {
    const rad = (r * Math.PI) / 180;
    const pitch = -20 + Math.cos(10 * rad) * 2;
    return `${pitch}deg`;
  });

  const cylinderTransform = useMotionTemplate`rotateX(${dynamicRotateX}) rotateY(${rotationXVal}deg) rotateZ(12deg)`;

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <SectionHead
          eyebrow="Visual Platform"
          title={
            <>
              The Operating System <span className="gradient-text">for Modern Real Estate</span>
            </>
          }
          watermark="gallery"
        />
      </div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full h-[480px] md:h-[550px] overflow-visible flex items-center justify-center select-none">
        {/* Soft shadow below the cylinder */}
        <div className="absolute bottom-6 w-[300px] md:w-[600px] h-[30px] md:h-[45px] bg-black/10 rounded-full blur-2xl pointer-events-none z-0" />

        {/* Cylinder Track wrapper containing perspective */}
        <div className="perspective-1200 w-full h-full relative flex items-center justify-center overflow-visible z-10">
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform: cylinderTransform,
            }}
            className="w-full h-full relative flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible transform-style-3d"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {cards.map((card, i) => {
              const cardAngle = i * 36;

              // Custom motion value mapping for depth-of-field effects
              const cardTransform = useTransform(rotationXVal, (r) => {
                const distance = getDistance(cardAngle, r);
                const scale = 0.88 + 0.12 * (1 - distance / 180);
                return `rotateY(${cardAngle}deg) translateZ(${radius}px) scale(${scale})`;
              });

              const opacity = useTransform(rotationXVal, (r) => {
                const distance = getDistance(cardAngle, r); // 0 (front) to 180 (back)
                return 0.18 + 0.82 * (1 - distance / 180);
              });

              const filter = useTransform(rotationXVal, (r) => {
                const distance = getDistance(cardAngle, r);
                const blur = 3.5 * (distance / 180);
                return `blur(${blur}px)`;
              });

              const labelIndex = i + 1;
              const labelStr = labelIndex < 10 ? `0${labelIndex}` : `${labelIndex}`;

              return (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: cardWidth,
                    height: cardHeight,
                    marginLeft: -cardWidth / 2,
                    marginTop: -cardHeight / 2,
                    transform: cardTransform,
                    opacity,
                    filter,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => handleCardClick(i)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative w-full h-full transform-style-3d transition-transform duration-300">
                    {/* CARD FRONT: Rich Product Details (visible when facing camera) */}
                    <div className="card-front backface-hidden absolute inset-0 rounded-2xl border border-gold/30 bg-neutral-950/95 p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
                      {/* Film celluloid glossy highlights */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-white/5 pointer-events-none" />

                      {/* Top Sprocket Holes */}
                      <div className="absolute top-1.5 left-0 right-0 flex justify-between px-3 pointer-events-none">
                        {Array.from({ length: 8 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-2.5 h-3 bg-background border border-gold/30 rounded-xs"
                          />
                        ))}
                      </div>

                      {/* Viewfinder Image */}
                      <div className="relative aspect-video w-full mt-4 rounded-lg bg-black border border-gold/10 overflow-hidden flex items-center justify-center">
                        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-gold/45 z-10" />
                        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-gold/45 z-10" />
                        <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-gold/45 z-10" />
                        <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-gold/45 z-10" />

                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Content Area */}
                      <div className="mt-2.5 flex flex-col justify-end">
                        <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-gold font-bold">
                          <span>{card.tag}</span>
                          <span className="opacity-40">// {labelStr}</span>
                        </div>
                        <h4 className="font-display text-sm font-bold text-white mt-1 group-hover:text-gold transition-colors duration-300 truncate">
                          {card.title}
                        </h4>
                        <span className="text-[10px] text-muted-foreground mt-0.5 truncate">
                          {card.metric}
                        </span>
                      </div>

                      {/* Bottom Sprocket Holes */}
                      <div className="absolute bottom-1.5 left-0 right-0 flex justify-between px-3 pointer-events-none">
                        {Array.from({ length: 8 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-2.5 h-3 bg-background border border-gold/30 rounded-xs"
                          />
                        ))}
                      </div>
                    </div>

                    {/* CARD BACK: Pure Film Loop aesthetic (visible when facing center/back) */}
                    <div className="card-back backface-hidden rotate-y-180 absolute inset-0 rounded-2xl border border-gold/15 bg-neutral-950/90 p-4 flex flex-col justify-between overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gold/2 to-transparent pointer-events-none" />

                      {/* Top Sprocket Holes */}
                      <div className="absolute top-1.5 left-0 right-0 flex justify-between px-3 pointer-events-none">
                        {Array.from({ length: 8 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-2.5 h-3 bg-background border border-gold/20 rounded-xs"
                          />
                        ))}
                      </div>

                      {/* Large Seriffed Gold Frame Number */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="font-display text-7xl font-bold text-gold/10 select-none">
                          {labelStr}
                        </div>
                      </div>

                      {/* Bottom Sprocket Holes */}
                      <div className="absolute bottom-1.5 left-0 right-0 flex justify-between px-3 pointer-events-none">
                        {Array.from({ length: 8 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-2.5 h-3 bg-background border border-gold/20 rounded-xs"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Control Stage (Arrows and Index Indicators) */}
      <div className="mt-20 flex flex-col items-center gap-4 z-20 relative">
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full glass border border-gold/30 flex items-center justify-center text-navy hover:text-gold hover:border-gold/60 hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Drag instruction tip */}
          <span className="text-xs font-semibold text-muted-foreground/80 tracking-wide uppercase bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Drag to spin • Click to inspect
          </span>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full glass border border-gold/30 flex items-center justify-center text-navy hover:text-gold hover:border-gold/60 hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCardIndex !== null && (
          <GalleryModal
            card={cards[selectedCardIndex]}
            onClose={() => setSelectedCardIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// GORGEOUS 3D GLASSMORPHIC MODAL
function GalleryModal({ card, onClose }: { card: FeatureCard; onClose: () => void }) {
  useEffect(() => {
    // Lock scroll on open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/60 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
        className="relative w-full max-w-3xl glass-strong rounded-3xl border border-gold/30 overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
      >
        {/* Left Side: Viewfinder Media Frame */}
        <div className="md:w-1/2 p-6 md:p-8 flex items-center justify-center bg-slate-950/95 relative border-b md:border-b-0 md:border-r border-gold/15">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-white/5 pointer-events-none" />

          {/* Top & Bottom film strip edge styling */}
          <div className="absolute left-2.5 top-0 bottom-0 w-4 flex flex-col justify-between py-4 pointer-events-none opacity-40">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="h-2.5 w-3 bg-background border border-gold/20 rounded-xs" />
            ))}
          </div>

          <div className="absolute right-2.5 top-0 bottom-0 w-4 flex flex-col justify-between py-4 pointer-events-none opacity-40">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="h-2.5 w-3 bg-background border border-gold/20 rounded-xs" />
            ))}
          </div>

          {/* Viewfinder Image */}
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-gold/20 shadow-2xl flex items-center justify-center ml-4 mr-4">
            <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-gold/80 z-10" />
            <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-gold/80 z-10" />
            <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-gold/80 z-10" />
            <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-gold/80 z-10" />

            <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Side: Copy & Actions */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border bg-card/85 flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95 transition cursor-pointer animate-none"
          >
            <X className="w-4 h-4" />
          </button>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-gold font-bold flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/60 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
              </span>
              {card.tag}
            </div>

            <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold leading-tight text-navy">
              {card.title}
            </h3>

            <span className="inline-block mt-2 bg-gold/10 text-gold border border-gold/25 px-3 py-1 rounded-md text-xs font-semibold">
              {card.metric}
            </span>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => {
                onClose();
                window.dispatchEvent(new Event("open-signup-modal"));
              }}
              className="btn-gradient flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Get Started Now <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={onClose}
              className="glass px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-gold/50 transition cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Pricing() {
  const tiers = [
    {
      n: "Starter",
      p: "For small brokerages getting started",
      f: [
        "Up to 10 agents",
        "Core property & lead management",
        "Standard commission plans",
        "Email support",
      ],
    },
    {
      n: "Professional",
      p: "For growing brokerages that need more control",
      f: [
        "Up to 50 agents",
        "Advanced commission engine",
        "Deal approval workflows",
        "Priority support",
      ],
      featured: true,
    },
    {
      n: "Enterprise",
      p: "For large, multi-branch operations",
      f: [
        "Unlimited agents",
        "Custom integrations & SLAs",
        "Dedicated onboarding & support",
        "Advanced audit & compliance tools",
      ],
    },
  ];
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Pricing"
          title={
            <>
              Simple Plans. <span className="gradient-text">Built to Scale With You.</span>
            </>
          }
          watermark="pricing"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: t.featured ? -16 : 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                "group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 " +
                (t.featured
                  ? "border-2 border-gold/40 bg-card/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
                  : "border border-border/40 bg-card/60 backdrop-blur-sm hover:border-gold/40 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]")
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-amber-500 px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="font-display text-xl font-bold text-foreground">{t.n}</div>
              <div className="mt-1.5 text-xs text-muted-foreground/80 leading-relaxed">{t.p}</div>
              <div className="mt-5 h-px bg-gradient-to-r from-gold/30 via-border/30 to-transparent" />
              <ul className="mt-5 space-y-2.5">
                {t.f.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-muted-foreground/90 font-medium"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.dispatchEvent(new Event("open-signup-modal"))}
                className={
                  "mt-6 w-full block text-center rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer " +
                  (t.featured
                    ? "bg-gradient-to-r from-gold to-amber-500 text-white shadow-md hover:shadow-gold/30 hover:scale-[1.02]"
                    : "border border-border/40 hover:border-gold/40 hover:bg-gold/5 hover:text-gold")
                }
              >
                {t.n === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="demo" className="relative py-32 overflow-hidden bg-background">
      {/* Background Video with z-index positioning */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-45"
        >
          <source src={demoBgVideo} type="video/mp4" />
        </video>
        {/* Gradient overlay to ensure text contrast and smooth edge blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-6 text-center relative z-20"
      >
        <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
          Ready to Modernize <br /> <span className="gradient-text">Your Brokerage?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          See how SettleDesk brings your properties, agents, and commissions together — start your
          30-day free trial now.
        </p>
        <div className="mt-10">
          <button
            onClick={() => window.dispatchEvent(new Event("open-signup-modal"))}
            className="btn-gradient inline-flex items-center gap-2 rounded-xl px-10 py-5 text-base font-bold uppercase tracking-widest cursor-pointer"
          >
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  watermark,
  watermarkOpacity = "text-slate-700/15 dark:text-zinc-600/20",
}: {
  eyebrow: string;
  title: React.ReactNode;
  watermark?: string;
  watermarkOpacity?: string;
}) {
  return (
    <div className="relative text-center">
      {watermark && (
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] font-display font-semibold tracking-tight whitespace-nowrap lowercase opacity-60 ${watermarkOpacity}`}
        >
          {watermark}
        </div>
      )}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 border border-gold/25 backdrop-blur-md mb-3">
          {eyebrow}
        </div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold tracking-tight leading-[1.08] text-foreground max-w-5xl mx-auto">
          {title}
        </h2>
      </motion.div>
    </div>
  );
}

function AdvancedSecurity() {
  const blocks = [
    {
      icon: Database,
      title: "One Database. Real-Time Everywhere.",
      body: "Instead of maintaining separate databases for the mobile app and web dashboards, SettleDesk runs on a single, unified PostgreSQL database via Supabase. Every change syncs in real time across every application, for every role.",
      color: "navy",
    },
    {
      icon: ShieldCheck,
      title: "The Right Access, for the Right Role",
      body: "SettleDesk's three-tier architecture isn't just about different interfaces — it's about enforced boundaries. Platform operators manage the platform. Brokerage admins manage their business. Brokers sell. Each tier only ever sees what it's authorized to see.",
      color: "gold",
    },
  ];
  return (
    <section className="relative pb-32 pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 ${
                b.color === "navy"
                  ? "bg-gradient-to-br from-navy/[0.06] to-card/90 border-navy/10 hover:border-navy/35 hover:shadow-[0_30px_60px_-15px_rgba(48,76,120,0.12)]"
                  : "bg-gradient-to-br from-gold/15 to-card/90 border-gold/20 hover:border-gold/45 hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.14)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-snug text-foreground">
                  {b.title}
                </h3>
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 flex items-center justify-center transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/15 group-hover:scale-110">
                  <b.icon className="h-5 w-5 text-gold" />
                </div>
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-gold/30 via-border/30 to-transparent" />
              <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const beliefs = [
    {
      t: "Clean business rules.",
      d: "Admins control properties and commission structures. Brokers sell. The platform enforces this so nothing gets messy.",
      color: "navy",
    },
    {
      t: "Real-time, always.",
      d: "Every device — mobile or web — reflects the same live data, the moment it changes.",
      color: "gold",
    },
    {
      t: "Security isn't optional.",
      d: "Multi-tenant systems demand strict data isolation. We built that in from day one.",
      color: "navy",
    },
    {
      t: "Built for scale.",
      d: "From a single-office brokerage to a multi-branch enterprise operation, the platform grows with you.",
      color: "gold",
    },
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Our Story"
          title={
            <>
              Built by People Who <span className="gradient-text">Understand Real Estate</span>
            </>
          }
          watermark="about"
          watermarkOpacity="text-foreground/[0.14]"
        />
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Why We Built SettleDesk
            </h3>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Real estate brokerages sit at the center of a lot of moving parts — properties,
              agents, leads, deals, and payouts — but most of the software built for the industry
              only solves one piece of that puzzle at a time. Teams end up stitching together a CRM,
              a spreadsheet for commissions, a separate tool for property listings, and a group chat
              for approvals.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              We built SettleDesk to be the operational backbone brokerages actually need: one
              platform, one source of truth, built for every role in the business — from platform
              operators to brokerage owners to the agents closing deals in the field.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {beliefs.map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className={`group relative rounded-2xl border backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-1 ${
                  b.color === "navy"
                    ? "bg-gradient-to-br from-navy/[0.06] to-card/90 border-navy/10 hover:border-navy/35 hover:shadow-[0_20px_50px_-12px_rgba(48,76,120,0.12)]"
                    : "bg-gradient-to-br from-gold/15 to-card/90 border-gold/20 hover:border-gold/45 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.14)]"
                }`}
              >
                <div className="font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                  {b.t}
                </div>
                <div className="mt-4 h-px bg-gradient-to-r from-gold/30 via-border/30 to-transparent" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SignupModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    organization_name: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    password: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await signupFn({ data: formData });
      setSuccessData(res);
      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/60 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/40 bg-card/90 p-8 shadow-2xl backdrop-blur-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors p-1 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {status === "success" ? (
            <div className="text-center py-6">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-6 animate-pulse">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-bold">Workspace Ready!</h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Your workspace <strong>{successData?.organization}</strong> has been provisioned
                successfully.
              </p>

              <div className="mt-8 p-5 rounded-2xl bg-background/50 border border-border/20 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <KeyRound className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      Login ID (Email or Phone)
                    </div>
                    <div className="text-sm font-mono font-bold text-foreground">
                      {formData.contact_email} / +91 {successData?.loginId}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      Password
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Password set during registration
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="http://localhost:5173/login"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-center block shadow-lg cursor-pointer"
                >
                  Go to Admin Dashboard
                </a>
                <button
                  onClick={onClose}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-2 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center md:text-left">
                <div className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold mb-4">
                  <Sparkles className="h-3 w-3" />
                  30-Day Free Trial
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">Start Free Trial</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get instant access to your admin workspace. Setup takes 5 seconds.
                </p>
              </div>

              {status === "error" && (
                <div className="mt-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-500 leading-relaxed">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Brokerage Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SettleDesk Realty"
                    value={formData.organization_name}
                    onChange={(e) =>
                      setFormData({ ...formData, organization_name: e.target.value })
                    }
                    className="w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Rajput"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@settledesk.com"
                      value={formData.contact_email}
                      onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                      className="w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="e.g. 8791730385"
                      value={formData.contact_phone}
                      onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                      className="w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Choose Password *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    placeholder="Min. 8 characters"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <div className="flex items-start gap-2.5 mt-4">
                  <input
                    id="privacy-consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-border/40 bg-background/50 text-gold accent-gold focus:ring-gold/50 cursor-pointer"
                  />
                  <label
                    htmlFor="privacy-consent"
                    className="text-[11px] text-muted-foreground leading-relaxed cursor-pointer select-none"
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gold hover:underline font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gold hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                    , and consent to the processing of my contact and organization details.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gradient w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Provisioning Workspace...
                    </>
                  ) : (
                    <>
                      Create Free Workspace <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
