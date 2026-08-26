# Project Design Contract & Agent Guidelines

> **CRITICAL:** This document is the persistent design contract for this project. Read it before every task and **never** deviate from these values and rules.

---

## 1. Project Overview

- **Project:** A pixel-faithful rebuild of a dark, editorial, Japanese-influenced portfolio site.
- **Reference Design Width:** `1512px`.
- **Measurement Rule:** All pixel values specified in instructions and designs are measured at `1512px` and must be treated as exact at that width.

---

## 2. Color Tokens

Define these tokens as CSS custom properties in `app/globals.css`:

```css
:root {
  --bg:          #FBFBF9;   /* warm off-white, not pure #FFF */
  --surface:     #F2F2EE;   /* cards, tiles */
  --surface-2:   #E9E9E4;   /* card hover */
  --fg:          #0A0A0B;   /* GLAD's existing brand black */
  --fg-muted:    #6B6B70;
  --fg-dim:      #A8A8AD;
  --accent:      #4E6B00;   /* deep lime — eyebrow labels, passes AA on --bg */
  --accent-bright:#C6F000;  /* brochure lime — fills and highlights only, never text */
  --line:        rgba(10,10,11,0.13);
  --line-solid:  #E2E2DD;
  --rail-bg:     #0A0A0B;   /* INVERTED */
  --rail-fg:     #FBFBF9;   /* INVERTED */
}
```

> **Color Rule:** There is no other color anywhere. All saturation in the design comes from photography. Do not introduce gradients, glows, or a second accent.

---

## 3. Typography

- **Font Family:** Display and body copy share one family.
  - **Primary:** **General Sans** from Fontshare:
    `https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap`
  - **Font Stack:** `'General Sans', 'Noto Sans JP', 'Noto Sans Devanagari', 'Helvetica Neue', Arial, sans-serif`
  - **Japanese & Devanagari Fallbacks:** **Noto Sans JP** (Google Fonts, weights 400 / 500) and **Noto Sans Devanagari** (weights 400 / 500 / 600) — load and append to stack:
    `'General Sans', 'Noto Sans JP', 'Noto Sans Devanagari', 'Helvetica Neue', Arial, sans-serif`
- **Weights Used:**
  - `400`: Display headlines, body text
  - `500`: Nav labels, titles, buttons
  - `600`: Rail items
  - **Prohibition:** *Never* bold anything to `700`.

### Type Scale (Measured at 1512px Reference Width)

| Token | Size | Line Height | Letter Spacing | Weight | Usage / Context |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `wordmark` | `clamp(0px, 13.5vw, 250px)` | `0.80` | `-0.045em` | `400` | (GLAD studio®) |
| `marquee` | `185px` | `0.90` | `-0.035em` | `400` | (Scrolling section titles) |
| `display` | `190px` | `0.88` | `-0.035em` | `400` | (Services, Awards) |
| `display-sm` | `150px` | `0.90` | `-0.035em` | `400` | (Tenure., Pick Plans., FAQ.) |
| `statement` | `62px` | `1.18` | `-0.02em` | `400` | (Profile paragraph) |
| `heading` | `52px` | `1.02` | `-0.02em` | `400` | (Hero headline) |
| `heading-sm` | `44px` | `1.15` | `-0.02em` | `400` | (13+ years statement) |
| `price` | `68px` | `1.00` | `-0.03em` | `500` | Pricing headers |
| `title-lg` | `19px` | `1.30` | `-0.01em` | `500` | (Service titles) |
| `body` | `15px` | `1.55` | `0` | `400` | General body text |
| `body-sm` | `13.5px`| `1.45` | `0` | `400` | (Descriptions) |
| `label` | `13px` | `1.40` | `0` | `500` | (Nav, rail, table cells) |
| `eyebrow` | `11px` | `1.00` | `0.045em` | `500` | Uppercase |

---

## 4. Layout & Spacing

- **Page Gutters:** `40px` left and right.
- **Max Width:** No `max-width` container — sections are full-bleed and content is positioned inside the gutters.
- **Border Radii:**
  - `12px`: Large media
  - `10px`: Inner / overlay media
  - `14px`: Cards
  - `999px`: Buttons (pill)

---

## 5. Hard Rules

1. **Sections overlap on purpose.** Media frequently bleeds past the gutter and off the viewport edge — never clamp it back inside. Use `overflow-x: hidden` on `<body>` only.
2. **Scattered layouts are absolute-positioned.** They live inside a relative container with an explicit height. Do **not** convert them into flex or grid rows.
3. **`mix-blend-mode: difference` on large text over images.** This is load-bearing — it is why text appears blue/gray over photos. Never remove it.
4. **Motion is restrained.** No fade-up-on-every-element. The only allowed motion is:
   - Infinite marquees
   - Scroll-linked parallax
   - Custom cursor
   - Hover states
5. **Every image and video slot must have a real placeholder URL.** Never render an empty box or a gray div.
6. **Desktop-first.** Ignore mobile entirely until explicitly told to do a responsive pass.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
