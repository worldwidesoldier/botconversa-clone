# Footer + CTA Section Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## CTA Section (above footer)
Background: #f7faff with decorative blob shapes (left: BotConversa mark large, right: WhatsApp icon large)

### CTA Container
- background: rgba(110, 168, 255, 0.08) (very light blue tint)
- border-radius: 24px
- padding: 80px 60px
- margin: 0 40px
- text-align: center
- position: relative
- overflow: hidden
- Two decorative images:
  - Left: `/images/logo-mark.png` (large, ~180px, absolute positioned left side)
  - Right: WhatsApp logo style image (absolute positioned right side)

### CTA Heading
- Text: "Transform conversations into sales today"
- font-size: 48px, font-weight: 700, color: #18191c, text-align: center
- max-width: 600px, margin: 0 auto

### CTA Subtitle
- Text: "Respond instantly, engage, and convert more customers starting today"
- font-size: 16px, color: #6d6f74, text-align: center, max-width: 400px

### START NOW Button
Same as hero button:
- background: linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)
- border-radius: 8px, padding: 16px 32px, height: 48px
- font-size: 14px, font-weight: 700, letter-spacing: 0.08em, color: #fff, uppercase

## Footer Section

### Footer Container
- background: #ffffff
- padding: 48px 80px 32px
- border-top: 1px solid rgba(0,0,0,0.06)

### Footer Layout (4 columns)
Col 1 (logo+description+social):
- BotConversa logo (mark + text)
- Text: "The largest conversational marketing platform for WhatsApp in Brazil"
  font-size: 13px, color: #6d6f74, max-width: 220px, margin-top: 12px
- Social icons row (Facebook, Instagram, YouTube, LinkedIn)
  icons: 18px, color: #6d6f74, gap: 16px, margin-top: 16px
  hover: color #18191c

Col 2 (Seções / Sections):
- Heading: "Seções" (font-size 12px, UPPERCASE, letter-spacing 0.1em, color #6d6f74, font-weight 600)
- Links: Resources, Prices, Testimonials, Frequently Asked Questions
  font-size: 14px, color: #212327, hover: color #2b76e5

Col 3 (Seções / Sections - duplicate):
- Same heading "Seções"
- Links: Resources, Prices

### Footer Bottom
- margin-top: 40px
- border-top: 1px solid rgba(0,0,0,0.06)
- padding-top: 16px
- Text (if any): copyright or legal info

## Responsive
- Desktop: 4 columns
- Mobile: Stack to 2 columns or 1 column

## Assets
- `/images/logo-mark.png` for CTA decoration (large, ~180px opacity 0.6)
- WhatsApp icon from icons.tsx for CTA decoration (large green circle, ~150px)
- Social icons from icons.tsx
