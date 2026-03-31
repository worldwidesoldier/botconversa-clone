# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/hero.png`
- **Interaction model:** static (entry animations on load)

## DOM Structure
```
<section> (hero, full-width, min-height ~700px)
  <div> (centered content, max-width ~880px)
    <div> (Meta Business Partner badge)
      [Meta icon SVG] "Meta Business Partner"
    </div>
    <h1> "Automate your WhatsApp chats with AI Assistants" </h1>
    <p> "Create in minutes. No programming needed. Scale your conversations without increasing your team." </p>
    <a href="#signup"> "START NOW" </a>
  </div>
  <div> (background grid/funnel SVG — decorative) </div>
</section>
```

## Computed Styles

### Section
- background-color: #f7faff
- padding-top: 120px (approximate — to clear fixed nav)
- padding-bottom: 0
- min-height: 700px
- display: flex
- flex-direction: column
- align-items: center

### Meta Badge Container
- background: radial-gradient(43% 75% at 50% 100%, #d6e6ff 0%, #c1c1c3 100%)
- border-radius: 28px
- padding: 8px 12px
- display: flex
- align-items: center
- gap: 8px
- margin-bottom: 32px

### Meta Badge Text
- font-size: 13px
- font-weight: 500
- color: #212327

### H1
- font-size: 64px
- font-weight: 700
- line-height: 64px (1:1 ratio)
- color: rgb(24, 25, 28) = #18191c
- text-align: center
- max-width: 700px
- margin-bottom: 24px
- font-family: Nunito Sans

### Subtitle paragraph
- font-size: 20px
- font-weight: 400
- line-height: 28px
- color: rgb(109, 111, 116) = #6d6f74
- text-align: center
- max-width: 600px
- margin-bottom: 40px

### START NOW Button
- background: linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)
- border-radius: 8px
- padding: 16px 32px
- height: 48px
- font-size: 14px
- font-weight: 700
- letter-spacing: 0.08em
- color: #ffffff
- text-transform: uppercase
- display: inline-flex
- align-items: center
- cursor: pointer
- border: none

### Hero Background (grid/funnel graphic)
- This is a large SVG with concentric elliptical grid lines creating a funnel/vortex effect
- The SVG has viewBox="867 0 2400 1080" (or similar wide viewBox)
- Lines are thin, color ~rgba(0,0,0,0.08) on light bg
- Positioned at bottom of hero section, centered
- The first image (img[0] = `/images/hero-image.png`) may contain parts of this
- Also there's `/images/lines-bg.png` which may be the converging lines image

## States & Behaviors

### Entry Animation (on page load)
- H1: opacity 0→1, scale 1.2→1, y -20→0, delay 0.6s, duration 1.5s, ease [0.12, 0.23, 0.5, 1]
- Subtitle: opacity 0→1, scale 1.2→1, y -20→0, delay 0.7s
- Button: opacity 0→1, scale 1.2→1, y -20→0, delay 0.8s
- Background grid: opacity 0→0.2, delay 1.2s, duration 1s
- **Implementation:** CSS animation with delays, or IntersectionObserver

### Hover — START NOW button
- Slight opacity reduction (0.9) or scale up (1.02)

## Assets
- `<MetaIcon />` from icons.tsx
- `/images/hero-image.png` or inline SVG for grid background

## Text Content (verbatim)
- Badge: "Meta Business Partner"
- H1: "Automate your WhatsApp chats with AI Assistants"
- Subtitle: "Create in minutes. No programming needed. Scale your conversations without increasing your team."
- Button: "START NOW"
- Social proof: "Over 45,000 companies are multiplying their results with BotConversa"

## Responsive Behavior
- **Desktop (1440px):** H1 64px, max-width ~700px, centered
- **Tablet (768px):** H1 ~48px, same layout
- **Mobile (390px):** H1 ~36px, padding adjustments, button full-width
- **Breakpoint:** ~810px
