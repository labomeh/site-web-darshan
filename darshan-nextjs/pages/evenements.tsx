import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import EventCard from '@/components/EventCard';
import { getUpcomingEvents } from '@/lib/events';
import { Event } from '@/types';

interface EvenementsProps {
  events: Event[];
}

export default function Evenements({ events }: EvenementsProps) {
  return (
    <Layout
      currentPage="/evenements"
      title="Événements - Darshan"
      description="Découvrez nos prochains stages et ateliers : jeûne, méditation, détox."
    >
      {/* Page Header */}
      <section className="page-header bg-off-white py-3xl">
        <Container>
          <h2 className="text-h2 font-headings text-black text-center mb-md">
            Événements à venir
          </h2>
          <p className="text-dark-gray text-center">
            Rejoignez-nous pour nos prochains stages et ateliers
          </p>
        </Container>
      </section>

      {/* Events Section */}
      <Section variant="default" className="events-section">
        <Container>
          <div id="events-container" className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-xl">
            {events.length === 0 ? (
              <p className="col-span-full text-center text-gray">
                Aucun événement à venir pour le moment.
              </p>
            ) : (
              events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            )}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// Fonction exécutée au moment du build pour récupérer les événements
export async function getStaticProps() {
  const events = await getUpcomingEvents();

  return {
    props: {
      events,
    },
  };
}
