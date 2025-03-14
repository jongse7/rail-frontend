import { AccordionCard } from "@/components/accordion-card";
import { cn } from "@/lib/utils";
import { SquareCheck } from "lucide-react";
import { FLUTTER, REACT } from "../const/tech-stack";

export function TechStackSection() {
  return (
    <section className="w-full max-sm:w-[340px] items-start  border-gray-500 border-2 p-2 rounded-md">
      <div className="flex flex-row items-center gap-2 mb-2">
        <SquareCheck className={cn("size-8")} />
        <p className="text-2xl font-medium">기술 스택</p>
      </div>
      <p className="text-2xl font-medium mt-2">React</p>
      {REACT.map((e, index) => (
        <AccordionCard className="mb-1" key={index} title={e.title}>
          {e.details.map((detail, idx) => (
            <p key={idx}>{detail}</p>
          ))}
        </AccordionCard>
      ))}
      <p className="text-2xl font-medium mt-4">Flutter</p>
      {FLUTTER.map((e, index) => (
        <AccordionCard className="mb-1" key={index} title={e.title}>
          {e.details.map((detail, idx) => (
            <p key={idx}>{detail}</p>
          ))}
        </AccordionCard>
      ))}
    </section>
  );
}
