import Link from 'next/link';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { SERVICES } from '@/config/site';
import { cn } from '@/lib/utils';

export default function ServicesGrid() {
  return (
    <Section>
      <Container>
        <Heading level={2}>Nos Services</Heading>
        <p className="mt-6 text-center text-lg text-dark-gray">
          Découvrez l'ensemble de nos soins et accompagnements pour votre bien-être
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={cn(
                'group rounded-lg border border-light-gray bg-white p-6 shadow-sm',
                'transition-all duration-300',
                'hover:border-primary/30 hover:shadow-md',
                'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none'
              )}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={cn(
                    'mb-4 flex h-16 w-16 items-center justify-center rounded-full',
                    'bg-primary/10 transition-all duration-300',
                    'group-hover:scale-110 group-hover:bg-primary/20'
                  )}
                >
                  <i className={`${service.icon} text-3xl text-primary`} aria-hidden="true" />
                </div>

                <h3 className="mb-3 font-headings text-xl font-semibold text-black transition-colors group-hover:text-primary">
                  {service.name}
                </h3>

                <p className="mb-4 text-dark-gray">{service.shortDescription}</p>

                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary">
                  En savoir plus
                  <i
                    className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
