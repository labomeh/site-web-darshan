import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  if (items.length === 0) {
    return <div className={className} />;
  }

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);

        return (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-primary/30"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between p-4 text-left transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-headings font-semibold text-black">
                {item.question}
              </span>
              <i
                className={cn(
                  'fa-solid fa-chevron-down text-primary transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </button>

            <div
              className={cn(
                'grid transition-all duration-300',
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-gray-200 p-4 text-dark-gray">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
