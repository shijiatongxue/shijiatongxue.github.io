import Project from "./components/project";
import PROJECTS from "../../const/projects";

export default function Projects() {
  return (
    <div className="flex gap-[24px] pt-[44px] flex-wrap justify-center px-[4px]">
      {PROJECTS.map((item) => (
        <Project {...item} key={item.name} />
      ))}
    </div>
  );
}
