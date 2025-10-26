import type { Story } from '@ladle/react';
import TestimonialCard from './TestimonialCard';

export const FiveStars: Story = () => (
  <TestimonialCard
    authorName="M.P."
    content="Excellente expérience avec l'hydrotherapie du côlon. Je me sens beaucoup mieux et plus légère. Je recommande vivement!"
    rating={5}
    location="Evian-les-Bains"
  />
);

FiveStars.meta = {
  description: '5-star testimonial with location',
};

export const FourStarsVerified: Story = () => (
  <TestimonialCard
    authorName="J.D."
    content="Très professionnel et à l'écoute. L'environnement est calme et apaisant. Je reviendrai certainement."
    rating={4}
    location="Thonon-les-Bains"
    verified={true}
  />
);

FourStarsVerified.meta = {
  description: '4-star verified testimonial',
};

export const ThreeStarsBasic: Story = () => (
  <TestimonialCard
    authorName="S.L."
    content="Bonne prestation dans l'ensemble. Le centre est bien situé."
    rating={3}
  />
);

ThreeStarsBasic.meta = {
  description: '3-star testimonial without location',
};

export const LongTestimonial: Story = () => (
  <TestimonialCard
    authorName="A.B."
    content="J'ai découvert le Centre Darshan lors d'un week-end de jeûne. L'expérience a été transformative. L'accompagnement est exceptionnel, les locaux sont magnifiques avec vue sur le lac, et l'équipe est vraiment bienveillante. J'ai fait plusieurs séances d'hydrothérapie et je me sens revivre. Je recommande à 100%!"
    rating={5}
    location="Genève"
    verified={true}
  />
);

LongTestimonial.meta = {
  description: 'Long testimonial with verified badge',
};

export const MinimalTestimonial: Story = () => (
  <TestimonialCard
    authorName="C.D."
    content="Très bien, merci!"
    rating={5}
  />
);

MinimalTestimonial.meta = {
  description: 'Minimal testimonial (shortest content)',
};

export const MobileView: Story = () => (
  <div className="flex flex-col gap-4">
    <TestimonialCard
      authorName="M.P."
      content="Excellente expérience, je recommande vivement!"
      rating={5}
      location="Evian"
      verified={true}
    />
    <TestimonialCard
      authorName="J.D."
      content="Très professionnel et à l'écoute."
      rating={4}
      location="Thonon"
    />
    <TestimonialCard
      authorName="S.L."
      content="Bonne prestation dans l'ensemble."
      rating={3}
    />
  </div>
);

MobileView.meta = {
  width: 'xsmall',
  description: 'Mobile view with stacked testimonials',
};

export const DesktopGrid: Story = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <TestimonialCard
      authorName="M.P."
      content="Excellente expérience avec l'hydrotherapie du côlon."
      rating={5}
      location="Evian"
      verified={true}
    />
    <TestimonialCard
      authorName="J.D."
      content="Très professionnel et à l'écoute. Je reviendrai."
      rating={4}
      location="Thonon"
    />
    <TestimonialCard
      authorName="S.L."
      content="Bonne prestation dans l'ensemble."
      rating={3}
    />
    <TestimonialCard
      authorName="A.B."
      content="Accompagnement exceptionnel, équipe bienveillante."
      rating={5}
      verified={true}
    />
    <TestimonialCard
      authorName="C.D."
      content="Très bien, atmosphère calme et apaisante."
      rating={4}
      location="Genève"
    />
    <TestimonialCard
      authorName="E.F."
      content="Je recommande ce centre pour la qualité des soins."
      rating={5}
      location="Lausanne"
    />
  </div>
);

DesktopGrid.meta = {
  width: 'xlarge',
  description: 'Desktop grid layout with 2-3 columns',
};
