import { Layout } from "../components";
import Experience from "../components/Experience";

function About() {
  return (
    <Layout title="About">
      <h2 className="text-2xl font-semibold font-roboto group-hover:text-orange mb-7">
        Experience
      </h2>
      <div>
        <Experience
          title="Frontend Developer"
          company="Appcent"
          positions={[
            { time: "Dec 2021 - Feb 2022", jobType: "Internship" },
            { time: "Mar 2022 - May 2022", jobType: "Part-time" },
            { time: "Jun 2022 - Present", jobType: "Full-time" },
          ]}
        />
        <Experience
          title="React Native Developer"
          company="Papyon LAB"
          positions={[{ time: "Nov 2021 - Feb 2023", jobType: "Freelance" }]}
        />
      </div>
    </Layout>
  );
}

export default About;
