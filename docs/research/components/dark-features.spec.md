# Dark Features Section Specification

## Overview
- **Target file:** `src/components/DarkFeaturesSection.tsx`
- **Screenshot:** `docs/design-references/dark-features.png`
- **Interaction model:** scroll-driven entry animations (IntersectionObserver)

## DOM Structure
```
<section> (dark background, #18191c)
  <!-- Transition: Light → Dark with blue glow gradient -->
  <div> (blue radial glow transition element)

  <!-- Section header -->
  <div> (centered text block)
    <h2> "Everything you need to succeed — without hiring" </h2>
    <p> "Designed for entrepreneurs, not for engineers" </p>
  </div>

  <!-- Feature 1: Build with blocks -->
  <div> (2-col grid: text left, feature UI right)
    <div> (left text)
      <h3> "Build with blocks – or let AI build for you" </h3>
      <p> "Create chatbots, automations, and AI assistants simply by connecting blocks — no programming required" </p>
    </div>
    <div> (right: flow builder screenshot)
      <img src="/images/product-dashboard.png" />
      <!-- Plus: integration icons marquee row below screenshot -->
    </div>
  </div>

  <!-- Feature 2: Connect existing tools (integration marquee) -->
  <div> (marquee of integration icons: RD Station, Gemini AI, HubSpot, etc.)

  <!-- Feature 3: AI automation steps + real-time metrics -->
  <div> (2-col grid)
    <div> (left: real-time metrics feature card)
    </div>
    <div> (right: AI automation steps list)
      <ul>
        <li> "New lead on WhatsApp" </li>
        <li> "AI Analysis" </li>
        <li> "AI leads the conversation" </li>
        <li> "Closing the deal" </li>
      </ul>
      <div> "Let AI manage your chats"
        <p> "Automatically qualify leads, manage chats, and scale your operations on WhatsApp—24/7, without manual work." </p>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: rgb(24, 25, 28) = #18191c
- padding: 80px 0 120px

### Blue Glow Transition (top of dark section)
- Position: absolute or relative at top
- background: radial-gradient(ellipse at center bottom, rgba(43, 118, 229, 0.6) 0%, transparent 60%)
- height: ~300px
- width: 100%

### Section Header
- text-align: center
- padding: 0 24px 80px

### H2 (section heading)
- font-size: 48px
- font-weight: 700
- color: #ffffff
- line-height: 1.1
- text-align: center
- max-width: 700px

### Section Subheading
- font-size: 16px
- color: rgba(255, 255, 255, 0.6)
- text-align: center
- margin-top: 12px

### Feature H3
- font-size: 28px
- font-weight: 700
- color: #ffffff
- line-height: 1.3

### Feature paragraph
- font-size: 16px
- color: rgba(255, 255, 255, 0.7)
- line-height: 1.6

### AI Steps list
Each step item:
- display: flex
- align-items: center
- gap: 12px
- padding: 12px 0
- border-bottom: 1px solid rgba(255,255,255,0.08)
- font-size: 14px
- font-weight: 500
- color: rgba(255,255,255,0.8)
The active/highlighted step has a blue dot indicator

### "Let AI manage your chats" card
- background: rgba(255,255,255,0.05)
- border-radius: 12px
- padding: 24px
- border: 1px solid rgba(255,255,255,0.1)

### Integration marquee icons
- Dark pill-shaped container for each: background rgba(255,255,255,0.07), rounded,
- Icon + text label inside each pill

## States & Behaviors

### Scroll-reveal entries
- Elements fade in as they enter viewport
- opacity: 0 → 1, scale: 1.05 → 1, y: -10px → 0
- Transition: 1.5s cubic-bezier(0.12, 0.23, 0.5, 1)

### Integration icons marquee
- Same as logo marquee but dark version
- Items: RD Station, Gemini AI, HubSpot, Chat GPT, Gmail, Bitrix24, WooCommerce, Shopify

## Assets
- `/images/product-dashboard.png` — flow builder UI screenshot
- `/images/mobile-app-preview.png` — may be used in feature area

## Text Content (verbatim)
- H2: "Everything you need to succeed — without hiring"
- Sub: "Designed for entrepreneurs, not for engineers"
- Feature 1 title: "Build with blocks – or let AI build for you"
- Feature 1 desc: "Create chatbots, automations, and AI assistants simply by connecting blocks — no programming required"
- Feature 2 title: "Connect your existing tools"
- Feature 2 desc: "Integrate with your CRM, ERP, payment provider, or any internal system"
- AI Steps: "New lead on WhatsApp", "AI Analysis", "AI leads the conversation", "Closing the deal"
- Card title: "Let AI manage your chats"
- Card desc: "Automatically qualify leads, manage chats, and scale your operations on WhatsApp—24/7, without manual work."
- Feature 3 title: "Real-time Metrics Control"
- Feature 3 desc: "Monitor conversations and performance. Identify bottlenecks and expand with data—not with guesswork."

## Responsive Behavior
- **Desktop:** 2-column layout for features
- **Mobile:** Stack to single column, images below text
