# Testimonials Section Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** static (horizontal scroll/overflow on mobile)

## Layout
Light background (#f7faff), heading centered, then a row of testimonial cards (slightly offset/staggered), horizontally scrollable.

## Heading
- "Real outcomes from our clients"
- font-size: 40px, font-weight: 700, color: #18191c, text-align: center
- Subheading: "See how our platform is transforming WhatsApp customer service for businesses of all sizes, multiplying their results with less effort."
- font-size: 16px, color: #6d6f74, text-align: center, max-width: 600px

## Testimonial Cards

### Card Container
- background: #ffffff
- border: 1px solid rgba(0,0,0,0.06)
- border-radius: 16px
- padding: 28px
- width: ~380px (fixed, for horizontal scroll)
- display: flex, flex-direction: column, gap: 16px
- box-shadow: 0 2px 12px rgba(0,0,0,0.04)

### Quote text
- font-size: 15px
- line-height: 1.6
- color: #212327
- The keywords/highlighted words are in bold (black) in original site

### Author section
- display: flex, align-items: center, gap: 12px
- Avatar: img, width 44px, height 44px, border-radius 50%, object-fit: cover
- Name: font-size 14px, font-weight: 600, color: #18191c
- Title: font-size: 12px, color: #6d6f74
- Company logo (if present): height 20px, object-fit: contain, ml: auto

## Testimonial Data (verbatim)

1. Quote: "We used to receive daily complaints about slow responses and an overwhelmed team. After implementing BotConversa's AI, everything changed. Now the AI understands natural messages, responds 24/7, and even closes sales on its own. In the first week, response time dropped from up to 24 hours to less than an hour."
   - Name: Bruna Dorneles
   - Title: Manager of Liberty Driving School
   - Avatar: /images/testimonial-1.jpg

2. Quote: "Our old workflow used to fail whenever a customer exited the menu. Conversations got lost and customers became frustrated. With BotConversa's artificial intelligence, everything changed. The assistant now maintains natural conversations, responds to detailed questions about veterinary exams, and goes far beyond scripted answers."
   - Name: Cláudio Paiva
   - Title: CEO
   - Avatar: /images/testimonial-2.jpg
   - Company logo: Planet Pet (use text if no logo image)

3. Quote: "Managing students in different cities meant endless WhatsApp groups and tedious manual work. With BotConversa's AI, I standardized our sales and billing processes, automated spreadsheets, and reduced the manual workload. Now we handle more inquiries every day with organized and efficient workflows."
   - Name: Camila
   - Title: Manager at CEFOP
   - Avatar: /images/testimonial-7.png

4. Quote: "With our previous bot, we struggled to achieve 5 appointments per week. After switching to BotConversa, we scheduled 15 consultations in just 10 business days—surpassing our previous goal by 50%. The AI assistant responds to leads quickly and clearly, instantly applying all the technical expertise of our clinic."
   - Name: Dr. Ricardo Rocha
   - Title: Urologist
   - Avatar: /images/testimonial-3.png

5. Quote: "We used to handle multiple WhatsApp numbers and manual sales processes, which made everything chaotic. With BotConversa, I centralized all communication, easily built message flows, and finally gained full control over how we receive new students. Our team is now more productive, and our sales operations truly appear professional."
   - Name: Daniel Teixeira
   - Title: CEO of Barista Wave
   - Avatar: /images/testimonial-8.jpg

6. Quote: "I noticed that customer messages were going unanswered on my secretary's WhatsApp. Now, every message—at any time—receives an instant response. Customers feel welcomed, have all their questions answered, and are ready to move forward. During initial tests, friends and clients told me it felt exactly like chatting with a real person—in a relaxed, friendly, and natural way."
   - Name: Dr. Marcelo Spinola
   - Title: CEO
   - Avatar: /images/testimonial-4.png

7. Quote: "When I started seeing patients at my clinic, I quickly realized that slow responses were costing me appointments. With BotConversa, I automated scheduling and estimates, ensuring no one has to wait. After adding AI, the conversations became so natural that patients rarely ask for a real person now."
   - Name: Dr. José Freire
   - Title: Gynecologist
   - Avatar: /images/testimonial-5.png

8. Quote: "My sales team used to spend hours answering the same questions, unable to keep up with demand, and we were losing sales due to slow responses. Now, AI handles repetitive inquiries 24/7, qualifies customers, and only hands off ready-to-buy leads to my team. We saw results in the first week."
   - Name: Carlos Rafael
   - Title: Manager at Plantão Íntimos

9. Quote: "The experience was amazing, the service was quick, and the results exceeded my expectations. I highly recommend it!"
   - Name: John Victor
   - Title: CPTO at G4 Education

10. Quote: "If you are using WhatsApp in your business and not using BotConversa, you are literally missing out on money that should already be yours."
    - Name: Bruno Picinini
    - Title: Expert in AI & Content Marketing

11. Quote: "Nowadays, it makes no sense for an entrepreneur using WhatsApp not to take advantage of BotConversa automations to sell and provide better service."
    - Name: Max Peters
    - Title: CEO Adapts Org

## Cards layout
- Desktop: 3 cards visible at a time, overflow-x: auto with snap scrolling (or just flex-nowrap)
- The cards appear in a horizontally scrolling row
- Add subtle gradient mask at left/right edges (fade to transparent)

## Responsive
- Desktop: 3 cards visible, scroll for more
- Mobile: 1 card visible, swipe to scroll
