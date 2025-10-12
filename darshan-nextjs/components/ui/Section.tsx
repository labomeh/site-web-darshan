import { SectionProps } from '@/types';

export default function Section({
  children,
  className = '',
  variant = 'default',
  id,
}: SectionProps) {
  const baseClasses = 'py-3xl';

  const variantClasses = {
    default: 'bg-off-white',
    alt: 'bg-white',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  );
}
