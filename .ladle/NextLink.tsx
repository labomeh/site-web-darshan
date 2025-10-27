/**
 * Mock Next.js Link component for Ladle
 * This allows components using next/link to work in Ladle's isolated environment
 */

import type React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: unknown;
}

export default function Link({ href, children, className, target, rel, ...props }: LinkProps) {
  return (
    <a href={href} className={className} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
}
