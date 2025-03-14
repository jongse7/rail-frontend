import { ProjectCard } from "@/components/project-card";
import { projects } from "../const/projects";

export function ProjectSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          img={project.img}
          title={project.title}
          badge={project.badge}
          badgeColor={project.badgeColor}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
}
