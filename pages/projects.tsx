import { Project } from "../components";

export default function Projects() {
  return (
    <div className="flex space-x-6">
      <Project
        imgPath="filmophile.svg"
        description="Filmophile is a movie app. It uses the TMDB API to fetch movies and TV shows. It also uses the OMDB API to fetch movie details. It is built with Next.js, Tailwind CSS, and TypeScript."
      />
      <Project
        imgPath="filmophile.svg"
        description="lorem2lfkslfk It is built with Next.js, Tailwind CSS, and TypeScript"
      />
      <Project imgPath="filmophile.svg" description="lorem2lfkslfk" />
    </div>
  );
}
