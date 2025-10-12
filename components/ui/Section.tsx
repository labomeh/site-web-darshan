import { SectionProps } from '@/types';
import styles from './Section.module.css';

export default function Section({
  children,
  className = '',
  variant = 'default',
  id,
}: SectionProps) {
  const variantClass = variant === 'alt' ? styles.alt : styles.default;
  const combinedClasses = `${styles.section} ${variantClass} ${className}`.trim();

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  );
}
