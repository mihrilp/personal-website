import { Skill, Experience, Title } from "@/components";
import experiences from "@/constants/experiences";
import skills from "@/constants/skills";

function About() {
  return (
    <div>
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
  );
}

export default About;
