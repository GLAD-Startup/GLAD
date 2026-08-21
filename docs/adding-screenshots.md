# Project Screenshot & Image Drop-in Workflow

This document outlines the standardized capture-and-drop-in pipeline for case studies, products, and marketing screenshots.

---

## 1. Asset Location & Structure

All screenshots and media assets must be placed within `src/routes/images/` under their respective domain directories:

```
src/routes/images/
├── projects/              # Case study screenshots & project deliverables
│   ├── fluxor.png
│   ├── prayas-app.png
│   ├── stock-management.png
│   ├── ai-mock-interview.png
│   ├── lead-enrichment.png
│   └── q-safe.png
├── settledesk/            # SettleDesk product screenshots & UI captures
├── glad-hms/              # GLAD HMS product screenshots
└── about/                 # Team portraits and leadership media
```

---

## 2. Naming Conventions

1. **Format**: Use clean, lowercase kebab-case for all files (e.g. `lead-enrichment-dashboard.png`).
2. **Extensions**: `.png` (recommended for lossless UI captures) or `.jpg` / `.jpeg`.
3. **Aspect Ratios**:
   - Portfolio cards & `Shot` component media: `16:10` (e.g. 1920x1200 or 1440x900)
   - Team portraits: `1:1` square (e.g. 800x800)

---

## 3. Image Optimization Command

Once screenshots are dropped into `src/routes/images/`, execute the responsive conversion pipeline:

```bash
npm run optimize:images
```

This runs `scripts/process-images.mjs` using `sharp` to automatically generate:
- **AVIF variants**: `-480w.avif`, `-960w.avif`, `-1440w.avif`
- **WebP variants**: `-480w.webp`, `-960w.webp`, `-1440w.webp`

---

## 4. Component Usage (`Shot.tsx`)

The design system `Shot` component automatically detects and mounts `<picture>` tags with AVIF, WebP, and original fallbacks:

```tsx
import { Shot } from "@/components/ui/Shot";
import myProjectImg from "@/routes/images/projects/my-project.png";

<Shot
  src={myProjectImg}
  category="AI & ML"
  title="Autonomous Lead Pipeline"
  width={800}
  height={500}
/>
```

When `src` is omitted, `Shot` gracefully falls back to the zero-byte skeleton loader without causing layout shifts.
