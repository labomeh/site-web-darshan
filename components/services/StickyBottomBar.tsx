import { cn } from '@/lib/utils';

export interface StickyBottomBarProps {
  onBookingClick: () => void;
  onQuestionClick: () => void;
  className?: string;
}

export default function StickyBottomBar({
  onBookingClick,
  onQuestionClick,
  className,
}: StickyBottomBarProps) {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50',
        'bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)]',
        'lg:hidden',
        className
      )}
    >
      <div className="flex gap-3 p-4">
        <button
          type="button"
          onClick={onBookingClick}
          className="flex-1 rounded-lg bg-primary px-4 py-3 font-medium text-white transition-colors hover:bg-primary-dark active:bg-primary-dark"
        >
          <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
          Réserver
        </button>
        <button
          type="button"
          onClick={onQuestionClick}
          className="flex-1 rounded-lg border-2 border-primary bg-white px-4 py-3 font-medium text-primary transition-colors hover:bg-primary/5 active:bg-primary/10"
        >
          <i className="fa-solid fa-message mr-2" aria-hidden="true" />
          Question
        </button>
      </div>
    </div>
  );
}
