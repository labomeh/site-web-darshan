import Link from 'next/link';
import { FooterProps } from '@/types';
import styles from './Footer.module.css';

export default function Footer({}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2025 Darshan</p>
        <p>21 Route de Chez Monnet, 74500 Saint-Gingolph</p>
        <p>
          <Link href="/mentions-legales">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
