import type { ReactNode } from 'react';
import Card from '@/components/ui/Card';

interface ContactInfoCardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export default function ContactInfoCard({ icon, title, children }: ContactInfoCardProps) {
  return (
    <Card hoverable={false} className="p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
          <i className={`${icon} text-lg text-primary`} />
        </div>
        <h3 className="m-0 font-headings text-lg font-medium text-black">{title}</h3>
      </div>
      <div className="m-0 pl-13 leading-relaxed text-dark-gray">{children}</div>
    </Card>
  );
}
