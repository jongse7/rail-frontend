import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  img: string;
  title: string;
  badge: string[];
  badgeColor: string[];
  projectUrl: string;
}

export function ProjectCard({
  img,
  title,
  badge,
  badgeColor,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div
      className="w-[320px] cursor-pointer hover:opacity-90 transition"
      onClick={() => window.open(projectUrl, "_blank")}
    >
      <AspectRatio
        ratio={2 / 1}
        className="overflow-hidden rounded-t-lg rounded-b-none"
      >
        <img src={img} alt="Image" className="object-cover w-full h-full" />
      </AspectRatio>
      <div className="h-[80px] rounded-t-none rounded-b-lg bg-[#262626] flex flex-col items-start justify-between p-4">
        <h4 className="text-sm font-medium leading-none text-white">{title}</h4>
        <div className="flex flex-row-reverse gap-2">
          {badge.map((text, index) => (
            <Badge
              key={index}
              className={cn(
                `${badgeColor[index]}`,
                "text-white px-2 py-1 rounded-md"
              )}
            >
              {text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
