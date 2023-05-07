import { Layout, Skill } from "../components";
import Experience from "../components/Experience";
import Title from "../components/Title";
import experiences from "../constants/experiences";
import { Typescript } from "../components/icons/skills";
import skills from "../constants/skills";

function About() {
  return (
    <Layout title="About">
      <div className="h-3/4">
        <Title text="Experience" />
        <div className="mb-12">
          {experiences.map((experience) => (
            <Experience key={experience.id} {...experience} />
          ))}
        </div>
        <Title text="Skills" />
        <div className="flex flex-wrap border border-gray rounded-md p-5">
          {skills.map((skill) => (
            <Skill key={skill.id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default About;
