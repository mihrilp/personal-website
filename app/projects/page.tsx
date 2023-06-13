import { Project } from "@/components";
import { projects } from "@/constants/projects";

function Projects() {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-wrap space-x-4">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
