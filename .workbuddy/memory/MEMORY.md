# CryoMax Industrial B2B Website

## Project Overview
- **Workspace:** D:\fridge
- **Tech Stack:** Next.js 16.2.9 + React 19.2.4 + TypeScript + Tailwind CSS v4 + shadcn/ui v4
- **Theme:** Dark industrial / cryogenic cyan accent
- **Font:** System font stack (Inter + monospace) — Google Fonts blocked in China network
- **Shadcn v4 Key Differences:**
  - Uses `@base-ui/react` primitives (not Radix UI)
  - `Button` has no `asChild` prop → use `buttonVariants()` + `Link` with `cn()` instead
  - `Accordion` has no `type` prop → removed from usage
  - Animation uses `tw-animate-css` not tailwindcss-animate

## Site Structure (14 routes)
- `/` — Homepage (Hero, Product Categories, Industries, Why Us, Technology, Case Studies, RFQ CTA)
- `/products` — Product listing (3 products)
- `/products/freeze-dryer` — Commercial freeze dryer detail
- `/products/ultra-low-freezer` — -80°C ULT freezer detail
- `/products/humidity-chamber` — Temp/humidity chamber detail
- `/applications` — 6 application scenarios
- `/industries` — 4 industry verticals
- `/technology` — 5 technology deep-dives
- `/resources` — Documentation & buying guides
- `/quote` — RFQ form with country selector
- `/contact` — Contact info + map

## Components
- `src/components/layout/` — Header (fixed, mobile menu), Footer (4-column), WhatsApp FAB
- `src/components/sections/` — Hero, ProductCategories, Industries, WhyChooseUs, TechnologyHighlights, CaseStudies, RFQCTA

## Data Layer
- `src/data/site.ts` — Company info, navigation, footer config (No database — all static)
- `src/data/products.ts` — 3 products with specs, features, applications, FAQs
- `src/data/industries.ts` — 4 industry verticals

## Design Spec
- Dark theme: background oklch(0.13 0.008 250), Card oklch(0.16 0.008 250)
- Primary accent: oklch(0.72 0.14 210) — cold cyan-blue evoking cryogenic temperatures
- Radius: 0.375rem (industrial, sharp corners)
- Background glow effects, grid pattern overlay for depth

## Build Status
- ✅ `next build` compiles successfully
- ✅ 16 static routes generated
- ✅ TypeScript type checking passes

## Catalog System
- PDF parsed via Python + PyMuPDF (scripts/parse-catalog.py)
- 53 pages extracted as images → /public/catalog/arsenbo/
- Catalog viewer at /catalog — masonry gallery with lazy loading

## OEM & Customization
- /oem page with 6 primary compressor brands + 8 additional brands
- Danfoss, Secop, Embraco, Copeland (Emerson), Tecumseh, Bitzer
- Also: Panasonic, LG, Hitachi, Sanyo, Cubigel, Huayi, Donper, Wanbao
- 5-step OEM process, 4 capability cards, compliance certification options

## Not Yet Built
- `[slug]` detail pages for applications, industries, technology
- SEO schema (JSON-LD)
- Multilingual routing (/en, /es, /ar, /ru, /fr, /pt)
- GSAP/Motion scroll animations (only motion used in WhyChooseUs counter)
- Blog system (MDX)
- Case studies detail pages
