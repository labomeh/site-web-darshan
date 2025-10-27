'use client';

import { useState } from 'react';
import Link from 'next/link';
import DropdownMenu from '@/components/Header/DropdownMenu';
import Logo from '@/components/ui/Logo';
import { LABELS, SITE, SERVICES } from '@/config/site';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [{ href: '/', label: LABELS.nav.home }];

const serviceMenuItems: { href: string; label: string }[] = SERVICES.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.name,
}));

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '/' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 right-0 left-0 z-[200] bg-secondary shadow-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="-m-1 flex items-center gap-4 rounded p-1 transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label={LABELS.nav.backToHome}
            onClick={() => setMenuOpen(false)}
          >
            <Logo variant="primary" size="md" alt={SITE.name} />
            <h1 className="m-0 font-logo text-[28px] tracking-[2px] text-primary transition-colors hover:text-primary-light">
              {SITE.name.toUpperCase()}
            </h1>
          </Link>

          <button
            className={cn(
              'z-[201] min-h-[48px] min-w-[48px] p-1 lg:hidden',
              'focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  'block h-[3px] w-[25px] bg-primary transition-all duration-300',
                  menuOpen && 'translate-y-[8px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-[3px] w-[25px] bg-primary transition-all duration-300',
                  menuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-[3px] w-[25px] bg-primary transition-all duration-300',
                  menuOpen && '-translate-y-[6px] -rotate-45'
                )}
              />
            </div>
          </button>

          <ul
            className={cn(
              'm-0 flex list-none gap-8 p-0',
              'max-lg:fixed max-lg:top-[70px] max-lg:left-0 max-lg:h-[calc(100vh-70px)] max-lg:w-full',
              'max-lg:flex-col max-lg:bg-secondary max-lg:p-12 max-lg:shadow-lg',
              'max-lg:transition-transform max-lg:duration-300',
              !menuOpen && 'max-lg:-translate-x-full'
            )}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative inline-flex min-h-[48px] items-center px-4 py-2',
                    'font-medium text-off-white no-underline transition-colors duration-300',
                    'hover:text-primary',
                    'focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none',
                    'after:absolute after:bottom-2 after:left-4 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300',
                    'hover:after:w-[calc(100%-2rem)]',
                    currentPage === item.href && 'text-primary after:w-[calc(100%-2rem)]',
                    'max-lg:after:hidden'
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <DropdownMenu
                label="Services"
                items={serviceMenuItems}
                currentPage={currentPage}
                onItemClick={() => setMenuOpen(false)}
              />
            </li>

            <li>
              <Link
                href="/contact"
                className={cn(
                  'relative inline-flex min-h-[48px] items-center px-4 py-2',
                  'font-medium text-off-white no-underline transition-colors duration-300',
                  'hover:text-primary',
                  'focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none',
                  'after:absolute after:bottom-2 after:left-4 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300',
                  'hover:after:w-[calc(100%-2rem)]',
                  currentPage === '/contact' && 'text-primary after:w-[calc(100%-2rem)]',
                  'max-lg:after:hidden'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {LABELS.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
