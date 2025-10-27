import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import ServiceSidebar, { type PricingItem, type RelatedEvent } from './ServiceSidebar';
import StickyBottomBar from './StickyBottomBar';

export interface ServicePageLayoutProps {
  title: string;
  duration: string;
  pricing: PricingItem[];
  relatedEvents?: RelatedEvent[];
  onBookingClick: () => void;
  onQuestionClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function ServicePageLayout({
  title,
  duration,
  pricing,
  relatedEvents,
  onBookingClick,
  onQuestionClick,
  children,
  className,
}: ServicePageLayoutProps) {
  return (
    <main className={className}>
      <PageHeader title={title} compact />

      <section className="bg-off-white py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="min-w-0">{children}</div>

            <ServiceSidebar
              duration={duration}
              pricing={pricing}
              relatedEvents={relatedEvents}
              onBookingClick={onBookingClick}
              onQuestionClick={onQuestionClick}
            />
          </div>
        </Container>
      </section>

      <StickyBottomBar onBookingClick={onBookingClick} onQuestionClick={onQuestionClick} />
    </main>
  );
}
