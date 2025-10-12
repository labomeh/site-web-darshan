import { Event } from '@/types';
import Card from './ui/Card';

interface EventCardProps {
  event: Event;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="event-card">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-auto object-cover rounded-md mb-md"
        />
      )}

      <div className="event-content">
        <h3 className="text-h4 font-headings text-black mb-md">{event.title}</h3>

        <div className="event-meta flex flex-col gap-sm mb-md text-dark-gray">
          <span className="flex items-center gap-sm">
            <i className="fas fa-calendar-alt text-primary" />
            {formatDate(event.date)}
          </span>
          {event.location && (
            <span className="event-location flex items-center gap-sm">
              <i className="fas fa-map-marker-alt text-primary" />
              {event.location}
            </span>
          )}
        </div>

        <div
          className="event-description prose prose-sm max-w-none mb-md"
          dangerouslySetInnerHTML={{ __html: event.bodyHtml }}
        />

        {event.available_spots !== undefined && (
          <p className="spots text-primary font-medium mb-md">
            Places disponibles : {event.available_spots}
          </p>
        )}

        {event.contact_info && (
          <div className="event-contact bg-off-white p-md rounded-md border-l-4 border-primary">
            <strong className="block mb-xs">Pour vous inscrire :</strong>
            <span className="text-sm">{event.contact_info}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
