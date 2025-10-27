import Link from 'next/link';
import type { EventCardProps } from '@/components/events/EventCard';
import EventCard from '@/components/events/EventCard';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

interface UpcomingEventsProps {
  events?: Omit<EventCardProps, 'className'>[];
  maxEvents?: number;
}

export default function UpcomingEvents({ events = [], maxEvents = 3 }: UpcomingEventsProps) {
  const displayedEvents = events.slice(0, maxEvents);
  const hasEvents = events.length > 0;

  return (
    <Section>
      <Container>
        <Heading level={2}>Événements à venir</Heading>

        {!hasEvents && (
          <p className="mt-6 text-center text-dark-gray">
            Aucun événement prévu pour le moment. Revenez bientôt pour découvrir nos prochaines
            activités !
          </p>
        )}

        {hasEvents && (
          <>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/evenements"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Voir tous les événements
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
