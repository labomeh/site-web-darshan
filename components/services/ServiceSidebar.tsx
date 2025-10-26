import { cn } from '@/lib/utils';

export interface PricingItem {
  name: string;
  price: string;
  duration?: string;
  savings?: string;
}

export interface RelatedEvent {
  title: string;
  date: string;
}

export interface ServiceSidebarProps {
  duration: string;
  pricing: PricingItem[];
  onBookingClick: () => void;
  onQuestionClick: () => void;
  relatedEvents?: RelatedEvent[];
  className?: string;
}

export default function ServiceSidebar({
  duration,
  pricing,
  onBookingClick,
  onQuestionClick,
  relatedEvents,
  className,
}: ServiceSidebarProps) {
  return (
    <aside
      className={cn(
        'sticky top-[94px] space-y-6',
        'hidden lg:block',
        className
      )}
    >
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <i className="fa-solid fa-clock text-primary" aria-hidden="true" />
          <div>
            <p className="text-sm text-dark-gray">Durée</p>
            <p className="font-medium text-black">{duration}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 font-headings text-lg font-semibold text-black">
            Tarifs
          </h3>
          <div className="space-y-3">
            {pricing.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-light-gray bg-off-white p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-black">{item.name}</p>
                    {item.duration && (
                      <p className="mt-1 text-sm text-dark-gray">
                        {item.duration}
                      </p>
                    )}
                  </div>
                  <p className="text-xl font-bold text-primary">{item.price}</p>
                </div>
                {item.savings && (
                  <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {item.savings}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={onBookingClick}
            className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
          >
            <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
            Réserver
          </button>
          <button
            type="button"
            onClick={onQuestionClick}
            className="w-full rounded-lg border-2 border-primary bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/5"
          >
            <i className="fa-solid fa-message mr-2" aria-hidden="true" />
            Une question ?
          </button>
        </div>
      </div>

      {relatedEvents && relatedEvents.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-headings text-lg font-semibold text-black">
            Événements à venir
          </h3>
          <div className="space-y-3">
            {relatedEvents.map((event, index) => (
              <div
                key={index}
                className="rounded-lg border border-light-gray bg-off-white p-3"
              >
                <p className="font-medium text-black">{event.title}</p>
                <p className="mt-1 text-sm text-dark-gray">
                  <i
                    className="fa-solid fa-calendar mr-1 text-primary"
                    aria-hidden="true"
                  />
                  {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
