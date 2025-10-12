'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HeaderProps, NavItem } from '@/types';

const navItems: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/evenements', label: 'Événements' },
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
      <nav className="navbar">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="logo flex items-center gap-4 hover:opacity-90 transition-opacity"
            aria-label="Retour à l'accueil"
            onClick={closeMenu}
          >
            <img
              src="/images/logo.svg"
              alt="Darshan"
              className="logo-image"
            />
            <h1 className="logo-text">DARSHAN</h1>
          </Link>

          {/* Menu Toggle (Mobile) */}
          <button
            className="menu-toggle tablet-lg:hidden flex flex-col gap-[6px] w-8 h-8 items-center justify-center z-[100]"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? 'rotate-45 translate-y-2' : ''} />
            <span className={menuOpen ? 'opacity-0' : ''} />
            <span className={menuOpen ? '-rotate-45 -translate-y-2' : ''} />
          </button>

          {/* Navigation Links */}
          <ul
            className={`nav-links flex gap-6
              tablet-lg:flex tablet-lg:flex-row tablet-lg:static tablet-lg:bg-transparent
              max-tablet-lg:fixed max-tablet-lg:top-20 max-tablet-lg:left-0 max-tablet-lg:right-0
              max-tablet-lg:bg-secondary max-tablet-lg:flex-col max-tablet-lg:p-8 max-tablet-lg:shadow-lg
              max-tablet-lg:transition-all max-tablet-lg:duration-300
              ${menuOpen ? 'max-tablet-lg:translate-y-0 max-tablet-lg:opacity-100' : 'max-tablet-lg:-translate-y-full max-tablet-lg:opacity-0 max-tablet-lg:pointer-events-none'}
            `}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={currentPage === item.href ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Spacer pour compenser le header fixed */}
      <div className="h-20" />
    </header>
  );
}
