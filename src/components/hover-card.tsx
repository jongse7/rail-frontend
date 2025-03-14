import { useState, ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverCardProps {
  text: string;
  children: ReactNode;
}

export function CustomHoverCard({ text, children }: HoverCardProps) {
  const [open, setOpen] = useState(false);

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth <= 768;
  };

  return (
    <HoverCard open={open} onOpenChange={setOpen}>
      <HoverCardTrigger
        asChild
        onClick={() => {
          if (isMobile()) setOpen((prev) => !prev);
        }}
      >
        <p className="text-white hover:underline font-semibold cursor-pointer">
          {text}
        </p>
      </HoverCardTrigger>
      <HoverCardContent className="p-4">{children}</HoverCardContent>
    </HoverCard>
  );
}
