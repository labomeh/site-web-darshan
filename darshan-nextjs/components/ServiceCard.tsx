import { Service } from '@/types';
import Card from './ui/Card';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hoverable className="service-card h-full flex flex-col">
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover rounded-md mb-md"
        />
      )}

      {service.icon && (
        <div className="text-4xl text-primary mb-md text-center">
          <i className={service.icon} />
        </div>
      )}

      <h3 className="text-h4 font-headings text-black mb-md text-center">
        {service.title}
      </h3>

      <p className="text-dark-gray text-center mb-md flex-grow">
        {service.description}
      </p>

      {service.details && (
        <div className="text-sm text-gray border-t border-light-gray pt-md mt-auto">
          {service.details}
        </div>
      )}
    </Card>
  );
}
