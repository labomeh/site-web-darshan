import Button from '@/components/ui/Button';
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
        'fixed right-0 bottom-0 left-0 z-50',
        'bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)]',
        'lg:hidden',
        className
      )}
    >
      <div className="flex gap-3 p-4">
        <Button onClick={onBookingClick} variant="primary" size="md" className="flex-1">
          <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
          Réserver
        </Button>
        <Button onClick={onQuestionClick} variant="outline" size="md" className="flex-1">
          <i className="fa-solid fa-message mr-2" aria-hidden="true" />
          Question
        </Button>
      </div>
    </div>
  );
}
