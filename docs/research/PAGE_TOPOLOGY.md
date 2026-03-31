# Page Topology — botconversa.com.br/en

## Overall Structure
- Scroll container: `<body>` / normal browser scroll (no Lenis/Locomotive detected)
- Background: `#f7faff` (light section), `#18191c` (dark mid section)
- Framework: Framer (framerusercontent.com assets)
- Breakpoints: Desktop ≥1280px, Tablet 810–1279px, Mobile ≤809px

## Sections (Top → Bottom)

| # | Name | Position | Interaction Model | Background |
|---|------|----------|-------------------|------------|
| 1 | Navbar | fixed, top, z-index high | scroll-driven (transparent→frosted pill) | transparent → rgba(255,255,255,0.5) |
| 2 | Hero | flow | static + entry animations | #f7faff gradient |
| 3 | Product Screenshot | flow | static | #f7faff |
| 4 | Logo Marquee | flow | time-driven (auto-scroll marquee) | #f7faff |
| 5 | Dark Intro | flow | scroll-driven entry animations | #18191c |
| 6 | Features Dark | flow | scroll-driven reveal | #18191c |
| 7 | Special Tools Tabs | flow | click-driven (tabs switch content+screenshot) | white |
| 8 | Integrator | flow | static grid with icon tiles | #18191c |
| 9 | Solution Comparison | flow | static | #18191c |
| 10 | Pricing | flow | static | #18191c |
| 11 | Guarantee Banner | flow | static | blue gradient |
| 12 | Testimonials | flow | static horizontal scroll/carousel | #f7faff |
| 13 | FAQ Accordion | flow | click-driven (expand/collapse) | #f7faff |
| 14 | CTA | flow | static | #f7faff (with blob decorations) |
| 15 | Footer | flow | static | white |

## Z-Index Layers
1. WhatsApp float button (bottom-right, z: very high)
2. Navbar (sticky top, z: high)
3. Page content (flow)

## Dependencies
- Navbar overlays everything — must be `fixed` or `sticky` with z-index
- Dark section (#18191c) spans sections 5–11 (Features through Guarantee)
- Light section resumes at Testimonials (#f7faff)

## Navbar Scroll Behavior
- **Scroll = 0:** width 860px, border-radius 40px, bg transparent, backdrop-filter none
- **Scroll > ~100px:** width 640px, border-radius 16px, bg rgba(255,255,255,0.5), backdrop-filter blur(10px)
- transition: all (smooth)
- Position: fixed, centered horizontally, top ~16px
