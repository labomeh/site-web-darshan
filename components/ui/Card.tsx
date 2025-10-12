import { CardProps } from '@/types';
import styles from './Card.module.css';

export default function Card({
  children,
  className = '',
  hoverable = false,
}: CardProps) {
  const hoverClass = hoverable ? styles.hoverable : '';
  const combinedClasses = `${styles.card} ${hoverClass} ${className}`.trim();

  return <div className={combinedClasses}>{children}</div>;
}
