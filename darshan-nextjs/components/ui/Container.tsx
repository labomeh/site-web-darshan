import { ContainerProps } from '@/types';

export default function Container({
  children,
  className = '',
  maxWidth = 'container',
}: ContainerProps) {
  const baseClasses = 'mx-auto px-lg';

  const maxWidthClasses = {
    container: 'max-w-container',
    content: 'max-w-content',
  };

  const combinedClasses = `${baseClasses} ${maxWidthClasses[maxWidth]} ${className}`.trim();

  return <div className={combinedClasses}>{children}</div>;
}
