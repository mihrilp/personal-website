import { Project } from "@/components";

function Projects() {
  return (
    <div className="h-3/4 flex flex-col justify-between items-center">
      <div className="flex space-x-6 flex-wrap">
        <Project
          name="Filmophile"
          description="Filmophile is a movie app. It uses the TMDB API to fetch movies and TV shows. It also uses the OMDB API to fetch movie details. It is built with Next.js, Tailwind CSS, and TypeScript."
        />
        <Project
          name="Filmophile"
          description="lorem2lfkslfk It is built with Next.js, Tailwind CSS, and TypeScript"
        />
        <Project name="filmophile.svg" description="lorem2lfkslfk" />
      </div>
    </div>
  );
}

export default Projects;
