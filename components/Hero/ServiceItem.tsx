interface ServiceItemProps {
  icon: string;
  label: string;
}

export default function ServiceItem({ icon, label }: ServiceItemProps) {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-2 text-off-white md:w-auto md:flex-col">
      <i className={`${icon} mb-0 text-[1.2rem] text-primary md:mb-1 md:text-[2rem]`} />
      <span className="text-[13px] font-medium md:text-sm">{label}</span>
    </div>
  );
}
