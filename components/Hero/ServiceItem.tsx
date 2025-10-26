interface ServiceItemProps {
  icon: string;
  label: string;
}

export default function ServiceItem({ icon, label }: ServiceItemProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 text-off-white">
      <i className={`${icon} text-xl text-primary md:mb-1 md:text-[2rem]`} aria-hidden="true" />
      <span className="text-center text-sm font-medium md:text-lg">{label}</span>
    </div>
  );
}
