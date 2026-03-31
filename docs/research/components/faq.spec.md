# FAQ Section Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Interaction model:** click-driven (accordion expand/collapse)

## Layout
- Background: #f7faff
- Centered, max-width: 800px
- padding: 80px 24px

## Heading
- Text: "Any questions left?"
- font-size: 40px, font-weight: 700, color: #18191c
- Subheading: "Clear your main doubts and start harnessing the full power of the tool to sell more through WhatsApp."
- font-size: 16px, color: #6d6f74, max-width: 500px, text-align: center

## Accordion Item Styles

### Item container
- border-bottom: 1px solid rgba(0,0,0,0.08)
- padding: 20px 0
- cursor: pointer

### Question row
- display: flex, justify-content: space-between, align-items: center
- Question text: font-size: 16px, font-weight: 600, color: #18191c
- Plus/minus icon: color: #18191c, width: 20px, height: 20px
  - Closed: "+" icon
  - Open: "×" or "-" icon

### Answer text (shown when open)
- font-size: 15px, line-height: 1.6, color: #6d6f74
- padding-top: 12px
- Animation: height expand with opacity fade (0→1)

## FAQ Data (verbatim)

1. Q: "What is the difference between the Starter and PRO plans?"
   A: "The difference between them is simple: the Starter Plan has everything you need to start selling with WhatsApp automations—access to campaigns, broadcasting, multi-agent support (up to 5 people per number), unlimited conversation flow creation, campaigns, and much more. The PRO Plan includes everything in the Starter Plan, plus the Official API, AI that understands audio and text, integrator and Kanban CRM in the annual plan, GPT Assistant, and access to the GPT Specialist. The perfect plan for those who want to implement AI right from the start."

2. Q: "Is there any support available in case of questions?"
   A: "Yes, our support team will be available via email and chat in the help center to assist you with any technical questions or content inquiries."

3. Q: "How does payment work? Can I pay in installments?"
   A: "We accept payment via credit card and Pix. Installments can be made in up to 12 interest-free payments using a credit card."

4. Q: "Is there a satisfaction guarantee?"
   A: "Yes. If you are not satisfied, you can request a full refund up to 7 days after purchasing the monthly plan or up to 30 days after purchasing the annual plan."

5. Q: "Do you have an official Meta API?"
   A: "Yes, the BotConversa in the PRO plan has an official coexistence API (the most advanced and technological level of the official Meta API)."

6. Q: "Do I have access to artificial intelligence within WhatsApp?"
   A: "Yes, by subscribing to the PRO Plan, you will have access to the 'GPT Assistant' block within BotConversa, where you can run OpenAI's AI on your WhatsApp."

7. Q: "Can I guarantee the Kanban CRM in the Starter plan?"
   A: "Yes, the Kanban CRM works on any BotConversa plan. Whether with or without the official API."

8. Q: "Can I secure the Integrator in the starter plan?"
   A: "Yes, the Integrator works seamlessly with any BotConversa plan."

9. Q: "I want to obtain more than one license, how do I do that?"
   A: "Simply make more than one purchase using the same email"

## Implementation
Use React useState to track which item is open.
Only one item open at a time (close others when opening new one).
