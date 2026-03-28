import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import Image from "next/image";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

export default function Icon({ name, size = 24, ...props }: IconProps) {
  const lowerName = name.toLowerCase();

  // Custom interception for public folder logos
  // Multiplying size by 1.6 scales the PNGs to match the visual footprint of SVGs 
  // without needing hardcoded values (size=20 becomes 32px)
  const logoSize = Number(size) * 1.6;

  if (lowerName === "github") {
    return (
      <Image 
        src="/github.png" 
        alt="GitHub" 
        width={logoSize} 
        height={logoSize} 
        className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md object-contain"
      />
    );
  }
  
  if (lowerName === "linkedin") {
    return (
      <Image 
        src="/Linkedin.png" 
        alt="LinkedIn" 
        width={logoSize} 
        height={logoSize} 
        className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md object-contain"
      />
    );
  }

  // Case-insensitive lookup for maximal compatibility
  const iconKey = Object.keys(LucideIcons).find(
    (key) => key.toLowerCase() === lowerName || 
             key.toLowerCase() === `${lowerName}icon`
  );
  
  const LucideIcon = iconKey ? (LucideIcons as any)[iconKey] : null;
  
  if (!LucideIcon) {
    if (typeof window !== 'undefined') {
      console.warn(`Icon "${name}" not found in lucide-react exports.`);
    }
    return null;
  }
  
  return <LucideIcon size={size} {...props} />;
}
