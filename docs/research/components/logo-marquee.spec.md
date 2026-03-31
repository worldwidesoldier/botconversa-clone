# Logo Marquee Section Specification

## Overview
- **Target file:** `src/components/LogoMarquee.tsx`
- **Screenshot:** `docs/design-references/logo-marquee.png`
- **Interaction model:** time-driven (CSS infinite marquee animation)

## DOM Structure
```
<section>
  <p> "Over 45,000 companies are multiplying their results with BotConversa" </p>
  <div> (marquee container, overflow: hidden)
    <div> (track, display flex, animate translateX)
      [logo items repeated twice for seamless loop]
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #f7faff
- padding: 48px 0
- display: flex
- flex-direction: column
- align-items: center
- gap: 32px

### Subtitle text
- font-size: 14px
- font-weight: 500
- color: rgb(109, 111, 116) = #6d6f74
- text-align: center

### Marquee Container
- width: 100%
- overflow: hidden
- mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)
  (fade edges)

### Marquee Track
- display: flex
- flex-direction: row
- align-items: center
- gap: 48px
- animation: marquee 30s linear infinite

### Logo Images
- height: 32px (approximately)
- width: auto
- object-fit: contain
- opacity: 0.7 (slightly muted)
- filter: none (logos are in their original colors but somewhat muted)

## States & Behaviors

### Marquee Animation
- **Trigger:** Always running (CSS animation)
- **Animation:** translateX from 0 to -50% (since track is duplicated)
- **Duration:** 30s linear infinite
- **CSS:** `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`

## Assets
Logos (from /images/):
- `logo-nuvio.png` - Nuvio (dark text logo)
- `logo-klyra.png` - Klyra (dark text logo)
- `logo-knot.png` - Knot logo
- `logo-veltix.png` - Veltix (text logo)

The logos are used in a repeating pattern. Duplicate each logo twice in the track for seamless loop.

Looking at the original site, the visible company logos include (from screenshots):
- tunimed (text logo)
- ADAPTA (text logo)
- 4COMPANY (with icon)
- Reserva (text)
- Plus the logo image files above

Use the downloaded images. For logos that appear as text only (tunimed, ADAPTA, etc.), they may actually be from the marquee image files. Use the available logo images.

## Text Content (verbatim)
- "Over 45,000 companies are multiplying their results with BotConversa"

## Responsive Behavior
- **All breakpoints:** Same marquee animation, logos scale with the track
- **Mobile:** May reduce logo size slightly
