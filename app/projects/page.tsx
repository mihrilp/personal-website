import { Project } from "@/components";
import { projects } from "@/constants/projects";

function Projects() {
  return (
    <div className="flex flex-row justify-center items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
