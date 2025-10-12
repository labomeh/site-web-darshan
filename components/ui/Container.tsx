import { ContainerProps } from '@/types';
import styles from './Container.module.css';

export default function Container({
  children,
  className = '',
  maxWidth = 'container',
}: ContainerProps) {
  const widthClass = maxWidth === 'content' ? styles.content : '';
  const combinedClasses = `${styles.container} ${widthClass} ${className}`.trim();

  return <div className={combinedClasses}>{children}</div>;
}
