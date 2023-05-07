import { Layout } from "../components";
import Experience from "../components/Experience";
import experiences from "../constants/experiences";

function About() {
  return (
    <Layout title="About">
      <div className="h-3/4">
        <h2 className="text-2xl font-semibold font-roboto group-hover:text-orange mb-5">
          Experience
        </h2>
        <div>
          {experiences.map((experience) => (
            <Experience key={experience.id} {...experience} />
          ))}
        </div>
        <h2 className="text-2xl font-semibold font-roboto group-hover:text-orange mb-5 mt-12">
          Skills
        </h2>
      </div>
    </Layout>
  );
}

export default About;
