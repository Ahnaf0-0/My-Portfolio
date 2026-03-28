import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  // Case-insensitive lookup for maximal compatibility
  const iconKey = Object.keys(LucideIcons).find(
    (key) => key.toLowerCase() === name.toLowerCase() || 
             key.toLowerCase() === `${name.toLowerCase()}icon`
  );
  
  const LucideIcon = iconKey ? (LucideIcons as any)[iconKey] : null;
  
  if (!LucideIcon) {
    if (typeof window !== 'undefined') {
      console.warn(`Icon "${name}" not found in lucide-react exports.`);
    }
    return null;
  }
  
  return <LucideIcon {...props} />;
}
