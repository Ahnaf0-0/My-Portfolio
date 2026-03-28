interface ChipProps {
  label: string;
  className?: string;
}

export default function Chip({ label, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs text-silver2 bg-lift/80 border border-white/[0.07] rounded-full ${className}`}
    >
      {label}
    </span>
  );
}
