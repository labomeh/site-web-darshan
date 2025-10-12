'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HeaderProps, NavItem } from '@/types';
import styles from './Header.module.css';

const navItems: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ currentPage = '/' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <Link
            href="/"
            className={styles.logo}
            aria-label="Retour à l'accueil"
            onClick={closeMenu}
          >
            <img
              src="/images/logo.svg"
              alt="Darshan"
              className={styles.logoImage}
            />
            <h1 className={styles.logoText}>DARSHAN</h1>
          </Link>

          {/* Menu Toggle (Mobile) */}
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
            id="menuToggle"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Navigation Links */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`} id="navLinks">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={currentPage === item.href ? styles.active : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
