import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AccordionCardProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export function AccordionCard({
  title,
  children,
  className = "",
}: AccordionCardProps) {
  return (
    <Accordion type="single" collapsible className={cn(className)}>
      <AccordionItem value="item-1">
        <AccordionTrigger className={cn("sm:text-sm")}>
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
