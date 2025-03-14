import { CareerSection } from "./section/career-section";
import { ProfileSecion } from "./section/profile-secion";
import { ProjectSection } from "./section/project-section";
import { TechStackSection } from "./section/techstack-section";

export default function MainPage() {
  return (
    <div className="flex flex-col items-start ml-8 gap-8 pb-8">
      <ProfileSecion />
      <CareerSection />
      <TechStackSection />
      <ProjectSection />
    </div>
  );
}
