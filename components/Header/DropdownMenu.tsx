import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface DropdownItem {
  href: string;
  label: string;
}

export interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  currentPage?: string;
  onItemClick?: () => void;
}

export default function DropdownMenu({
  label,
  items,
  currentPage,
  onItemClick,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'relative inline-flex min-h-[48px] cursor-pointer items-center gap-2 px-4 py-2',
          'font-medium text-off-white no-underline transition-colors duration-300',
          'hover:text-primary',
          'focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none',
          'after:absolute after:bottom-2 after:left-4 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300',
          'hover:after:w-[calc(100%-2rem)]',
          isOpen && 'text-primary after:w-[calc(100%-2rem)]',
          'max-lg:w-full max-lg:justify-between max-lg:after:hidden'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <i
          className={cn(
            'fa-solid fa-chevron-down text-sm transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          className={cn(
            'absolute top-full left-0 z-10 mt-2 min-w-[280px]',
            'list-none rounded-lg bg-secondary-light p-0 shadow-lg',
            'max-lg:static max-lg:mt-2 max-lg:w-full max-lg:shadow-none'
          )}
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={handleItemClick}
                className={cn(
                  'block px-6 py-3 text-off-white no-underline transition-colors duration-200',
                  'hover:bg-primary/10 hover:text-primary',
                  'focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:outline-none',
                  'first:rounded-t-lg last:rounded-b-lg',
                  currentPage === item.href && 'bg-primary/10 text-primary'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
