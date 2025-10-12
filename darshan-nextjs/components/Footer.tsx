import Link from 'next/link';
import { FooterProps } from '@/types';

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-secondary text-off-white py-3xl mt-3xl">
      <div className="container mx-auto text-center">
        <p className="mb-sm">&copy; 2025 Darshan</p>
        <p className="mb-sm">21 Route de Chez Monnet, 74500 Saint-Gingolph</p>
        <p>
          <Link
            href="/mentions-legales"
            className="text-primary hover:text-primary-light transition-colors duration-300 underline"
          >
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
