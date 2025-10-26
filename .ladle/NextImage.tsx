/**
 * Mock Next.js Image component for Ladle
 * This allows components using next/image to work in Ladle's isolated environment
 */

import type React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  [key: string]: unknown;
}

export default function Image({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = 'lazy',
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={loading}
      {...props}
    />
  );
}
