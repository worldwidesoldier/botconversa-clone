# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/navbar.png`
- **Interaction model:** scroll-driven (transparent full-width → frosted glass pill on scroll)

## DOM Structure
```
<nav> (fixed, top, centered)
  <div> (pill container - transitions on scroll)
    <div> (logo area - left)
      [BotConversa logo SVG]
    </div>
    <div> (nav links - center)
      <a>Resources</a>
      <a>Prices</a>
      <a>Testimonials</a>
      <a>Frequently Asked Questions</a>
    </div>
    <div> (right area)
      <a>Log In</a> (button style)
    </div>
  </div>
</nav>
```

## Computed Styles (exact values from getComputedStyle)

### Pill Container — State A (scroll=0)
- width: 860px
- height: 48px
- border-radius: 40px
- background-color: rgba(255, 255, 255, 0)
- backdrop-filter: blur(0px)
- border: 1px solid rgba(117, 115, 114, 0) (transparent border)
- padding: 8px 8px 8px 24px
- transition: all

### Pill Container — State B (scrolled)
- width: 640px
- height: 48px
- border-radius: 16px
- background-color: rgba(255, 255, 255, 0.5)
- backdrop-filter: blur(10px)
- border: 1px solid rgba(255, 255, 255, 0.6)
- padding: 8px 8px 8px 24px

### Nav Position (outer wrapper)
- position: fixed
- top: 16px
- left: 50%
- transform: translateX(-50%)
- z-index: 100

### Logo
- Logo mark: `/images/logo-mark.png`, 28x28px
- Text: "botconversa", font-weight 700, font-size 16px, color #18191c

### Nav Links (text)
- color: rgb(33, 35, 39) = #212327
- font-size: 14px
- font-weight: 500
- font-family: Nunito Sans
- padding: 4px 12px
- No underline, hover: subtle color change

### Log In Button
- background: transparent
- border: 1px solid rgba(0,0,0,0.12)
- border-radius: 8px
- padding: 0px 20px
- height: 32px
- font-size: 14px
- font-weight: 500
- color: #212327
- hover: background rgba(0,0,0,0.04)

## States & Behaviors

### Scroll-triggered pill transformation
- **Trigger:** window.scrollY > 80 (approx)
- **State A:** width 860px, radius 40px, transparent bg, no blur, transparent border
- **State B:** width 640px, radius 16px, rgba(255,255,255,0.5) bg, blur(10px), rgba(255,255,255,0.6) border
- **Transition:** all properties, ~0.3s ease
- **Implementation:** useEffect with scroll event listener + useState to toggle class

## Assets
- Logo mark: `/images/logo-mark.png`
- Logo text: "botconversa" rendered as text

## Text Content (verbatim)
- Resources
- Prices
- Testimonials
- Frequently Asked Questions
- Log In

## Responsive Behavior
- **Desktop (1440px):** Full navbar with all links visible
- **Tablet (768px):** Compress nav, may hide some links
- **Mobile (390px):** Hamburger menu (hide nav links, show menu button)
- **Breakpoint:** ~810px
