import { AccordionCard } from "@/components/accordion-card";
import { cn } from "@/lib/utils";
import { SquareCheck } from "lucide-react";
import { EXPERIENCES } from "../const/experiences";

export function CareerSection() {
  return (
    <section className="w-full max-sm:w-[340px] items-start border-gray-500 border-2 p-2 rounded-md">
      <div className="flex flex-row items-center gap-2 mb-2">
        <SquareCheck className={cn("size-8")} />
        <p className="text-2xl font-medium">주요경력</p>
      </div>
      {EXPERIENCES.map((exp, index) => (
        <AccordionCard className="mb-1" key={index} title={exp.title}>
          {exp.details.map((detail, idx) => (
            <p key={idx}>{detail}</p>
          ))}
        </AccordionCard>
      ))}
    </section>
  );
}
