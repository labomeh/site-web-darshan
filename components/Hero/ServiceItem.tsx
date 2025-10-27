import Link from 'next/link';

interface ServiceItemProps {
  icon: string;
  label: string;
  slug?: string;
}

export default function ServiceItem({ icon, label, slug }: ServiceItemProps) {
  if (slug) {
    return (
      <Link
        href={`/services/${slug}`}
        className="flex w-full flex-col items-center justify-center gap-2 text-off-white transition-transform duration-300 hover:scale-110 hover:text-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary focus-visible:outline-none"
      >
        <i className={`${icon} text-xl text-primary md:mb-1 md:text-[2rem]`} aria-hidden="true" />
        <span className="text-center text-sm font-medium md:text-lg">{label}</span>
      </Link>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 text-off-white">
      <i className={`${icon} text-xl text-primary md:mb-1 md:text-[2rem]`} aria-hidden="true" />
      <span className="text-center text-sm font-medium md:text-lg">{label}</span>
    </div>
  );
}
