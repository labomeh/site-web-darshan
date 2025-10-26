import type { ReactNode } from 'react';
import Container from '../Container';
import Heading from '../Heading';

interface PageHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  compact?: boolean;
}

export default function PageHeader({ title, subtitle, compact = false }: PageHeaderProps) {
  if (compact) {
    return (
      <section className="border-b border-light-gray bg-white px-6 py-8 text-center">
        <Container>
          <Heading level={1} className="!mb-0">
            {title}
          </Heading>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-light-gray bg-white px-12 py-24 text-center max-md:px-6 max-md:py-16">
      <Container>
        <Heading level={1} className="mb-4">
          {title}
        </Heading>
        {subtitle && <p className="mx-auto max-w-[700px] text-lg text-dark-gray">{subtitle}</p>}
      </Container>
    </section>
  );
}
