'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export interface ProfileFaqItem {
  question: string;
  answer: string;
}

export function ProfileFaq({ items, locale }: { items: ProfileFaqItem[]; locale: string }) {
  const isAr = locale === 'ar';

  if (!items || items.length === 0) return null;

  return (
    <section style={{ marginTop: 48 }}>
      <div className="row-between" style={{ marginBottom: 20 }}>
        <div>
          <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>
            {isAr ? 'أسئلة شائعة' : 'Sourcing Questions'}
          </span>
          <h2 className="h2">
            {isAr ? 'معلومات التعامل مع هذا المورد' : 'Working with this Producer'}
          </h2>
        </div>
      </div>

      <Accordion type="single" collapsible className="accordion-root">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
