# Behaviors — botconversa.com.br/en

## Scroll Behaviors

### Navbar Transformation (scroll-driven)
- **Trigger:** window.scrollY > ~100px
- **State A (top):** width 860px, border-radius 40px, background rgba(255,255,255,0), backdrop-filter blur(0px), border-color rgba(117,115,114,0)
- **State B (scrolled):** width 640px, border-radius 16px, background rgba(255,255,255,0.5), backdrop-filter blur(10px), border-color rgba(255,255,255,0.6)
- **Transition:** `transition: all` (Framer animates all properties)
- **Implementation:** useScrollY hook with CSS transition

### Entrance Animations (scroll-driven, IntersectionObserver)
Framer's appear effects fire as elements enter viewport:
- Default entrance: opacity 0.001→1, scale 1.2→1, y -20→0
- Duration: 1.5s, ease [0.12, 0.23, 0.5, 1]
- Stagger delays: 0.6s, 0.7s, 0.8s, 0.9s per element
- Background grid animation: opacity 0→0.2, delay 1.2s, duration 1s
- **Implementation:** IntersectionObserver + CSS transitions or Framer Motion

## Click Behaviors

### Special Tools Tabs
- 4 tabs: GPT Assistant, GPT Specialist, CRM Kanban, Integrator
- Clicking a tab: shows its description + switches screenshot on right
- **Interaction model:** click-driven tab switching
- Active tab indicator: bottom border line on active item
- Transition: likely opacity fade on content change

### FAQ Accordion
- Click "+" to expand an item, shows answer text
- "+" rotates to "×" when open
- Only one open at a time (likely)
- **Transition:** height expand, opacity fade

## Hover Behaviors

### Nav Links
- Underline or color change on hover (subtle)

### Buttons (START NOW / START WITH PRO etc.)
- Slight opacity change or scale on hover

## Time-Driven Behaviors

### Logo Marquee (section 4)
- Logos scroll horizontally in an infinite loop
- Two rows of the same logos, animating in opposite/same direction
- CSS animation: `transform: translateX(...)` infinite loop
- Speed: moderate, continuous

### Integration Icons Marquee (section 8 / Integrator)
- Integration partner icons scroll in horizontal marquee rows

## Page-Level
- No smooth scroll library (native browser scroll)
- No scroll-snap
- Framer appear animations use `data-framer-appear-id` attributes
- WhatsApp floating button bottom-right (green circle, fixed position)
