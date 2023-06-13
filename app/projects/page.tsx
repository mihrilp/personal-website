import { Project } from "@/components";

function Projects() {
  return (
    <div className="flex flex-row justify-between items-start space-x-6 h-full">
      <Project
        name="Filmophile"
        description="Filmophile is a movie app. It uses the TMDB API to fetch movies and TV shows. It also uses the OMDB API to fetch movie details. It is built with Next.js, Tailwind CSS, and TypeScript."
      />
      <Project
        name="Filmophile"
        description="lorem2lfkslfk It is built with Next.js, Tailwind CSS, and TypeScript"
      />
      {/* <Project name="filmophile.svg" description="lorem2lfkslfk" /> */}
    </div>
  );
}

export default Projects;
