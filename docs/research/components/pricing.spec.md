# Pricing Section Specification

## Overview
- **Target file:** `src/components/PricingSection.tsx`
- **Interaction model:** static

## Text Content (verbatim)
- Section heading: "Plans & Pricing"
- Subheading: "Choose the plan that matches your workflow – no hidden fees, no surprises"

### Beginner Plan
- Label: "Beginner"
- Badge: "Annual Plan"
- Price: "BRL 189" Per month
- Billing note: "Charged as a single payment of R$2,268"
- Member limit: "Up to 5 team members"
- "Main Tools:" header
- Features:
  - Overview of Key Indicators
  - Contact Organization: Tags and Custom Fields
  - "Automation:" header
  - Flow Builder
  - Keywords
  - Message sequences
  - Campaigns
- CTA: "START WITH STARTER" (outline/secondary button)

### Pro Plan (Recommended/highlighted)
- Label: "Pro"
- Badge: "Recommended" (highlighted badge)
- Period badge: "Annual Plan"
- Price: "BRL 199" Per month
- Billing note: "Charged as a single payment of R$2,388"
- "Unlimited team members"
- "Everything in the Starter, plus:" header
- Features:
  - AI Assistant
  - Broadcasts
  - "Exclusive Tools:" header
  - Access to integrations (Zapier, Webhook, and APIs)
  - Webhook Automation
  - GPT Specialist
  - CRM Kanban
  - Integrator (3-month license)
  - Access to META's Official API
  - Reduces risk of blockage
  - Coexistence Connection
- CTA: "START WITH PRO" (filled blue gradient button)

## Layout
- Dark background: #18191c
- Section padding: 80px 0
- Cards: side-by-side, max-width ~900px, centered

## Card Styles

### Starter Card
- background: rgba(255,255,255,0.04)
- border: 1px solid rgba(255,255,255,0.1)
- border-radius: 16px
- padding: 32px
- width: 50%

### Pro Card (highlighted)
- background: rgba(43, 118, 229, 0.12)
- border: 1px solid rgba(43, 118, 229, 0.4)
- border-radius: 16px
- padding: 32px
- width: 50%
- position: relative (for "Recommended" badge)

### Plan name
- font-size: 24px, font-weight: 700, color: #fff

### "Annual Plan" badge
- background: rgba(255,255,255,0.1)
- border-radius: 20px
- padding: 4px 12px
- font-size: 12px
- color: rgba(255,255,255,0.7)

### Price
- font-size: 48px, font-weight: 800, color: #fff
- "BRL" prefix: font-size 20px, vertical-align super
- "/month": font-size 14px, color rgba(255,255,255,0.6)

### Billing note
- font-size: 12px, color: rgba(255,255,255,0.5)

### Feature list items
- font-size: 14px, color: rgba(255,255,255,0.8)
- display: flex, gap: 8px
- Check icon: small blue checkmark circle (from CheckIcon in icons.tsx)
- Headers ("Main Tools:", "Automation:", "Exclusive Tools:"): font-size 11px, UPPERCASE, letter-spacing 0.1em, color rgba(255,255,255,0.4), margin-top 16px

### CTA Buttons
Starter:
- background: rgba(255,255,255,0.08)
- border: 1px solid rgba(255,255,255,0.2)
- color: #fff
- border-radius: 8px, padding: 14px 24px, font-size: 14px, font-weight: 700, text-transform: UPPERCASE, letter-spacing: 0.08em

Pro:
- background: linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)
- border: none
- color: #fff
- border-radius: 8px, padding: 14px 24px, font-size: 14px, font-weight: 700, text-transform: UPPERCASE, letter-spacing: 0.08em

## Guarantee Banner (sub-component within this section)
Render below pricing cards:
- background: linear-gradient(135deg, #4d7bf3 0%, #2b76e5 100%)
- border-radius: 16px
- padding: 32px 40px
- display: flex, align-items: center, gap: 32px
- max-width: 900px, margin: 40px auto 0

Left image: `/images/feature-1.png` (crystal/diamond 3D object), width ~120px

Badge (inside):
- background: rgba(255,255,255,0.2)
- border-radius: 20px, padding: 4px 12px
- display flex, items center, gap 6px
- 👍 emoji + "Special 100% Risk-Free Guarantee"

Title: "Try BotConversa for 7 Days – No Commitment"
- font-size: 28px, font-weight: 700, color: #fff

Body text: "We are confident that you will love being part of our ecosystem. However, if for any reason you are not satisfied, you can request a full refund within 7 days of purchasing a monthly plan — or within 30 days for annual plans."
- font-size: 14px, color: rgba(255,255,255,0.85), max-width: 600px

## Responsive
- Desktop: 2 cards side by side
- Mobile: Stack to single column
