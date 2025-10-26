import type { Service } from '@/types';
import Card from './ui/Card';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hoverable className="service-card flex h-full flex-col">
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="mb-md h-48 w-full rounded-md object-cover"
        />
      )}

      {service.icon && (
        <div className="mb-md text-center text-4xl text-primary">
          <i className={service.icon} />
        </div>
      )}

      <h3 className="text-h4 mb-md text-center font-headings text-black">{service.title}</h3>

      <p className="mb-md flex-grow text-center text-dark-gray">{service.description}</p>

      {service.details && (
        <div className="mt-auto border-t border-light-gray pt-md text-sm text-gray">
          {service.details}
        </div>
      )}
    </Card>
  );
}
