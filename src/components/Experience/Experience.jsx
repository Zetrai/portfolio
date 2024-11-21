import ExperienceCard from "../../common/ExperienceCard";

const Experience = () => {
  const wsibDetails = {
    name: "WSIB",
    role: "Senior Software Engineer",
    body: [
      "Developed dynamic, responsive features for OSBC and OSPC applications using JUTRO and RRACT, enhancing user experience with optimized frontend components.",
      "Collaborated with clients extensively to understand their vision, provide regular development updates, and align project goals with business objectives.",
      "Improved application performance by refactoring code for enhanced efficiency, readability, and adherence to coding standards.",
      "Led a team of 3 engineers, improving development speed and ensuring successful delivery of key features on time.",
      "Mentored junior developers in React JS and frontend best practices, helping them enhance their technical expertise.",
    ],
    skills: ["React JS", "SCSS", "Jutro Framework", "Git", "Jira"],
  };
  const bpDetails = {
    name: "BP",
    role: "Software Engineer",
    body: [
      "Developed and styled dynamic PWAs focusing on giving the consumers practical help reducing their CO2 emissions. Worked closely with cross-functional teams including developers, designers, and product managers.",
      "Developed various complex features such as Energy Consumption Graphs, Cost Graphs, and dynamic pages. Strategized and wrote unit tests for observable functions to improve API call reliability and maintainability.",
      "Optimized API performance and response times while implementing robust validation and error-handling mechanisms for data security.",
      "Collaborated with backend teams to ensure smooth integration of frontend features with Node.js APIs.",
      "Optimized user experience through responsive design, ensuring seamless access across multiple devices.",
    ],
    skills: [
      "Angular JS",
      "SCSS",
      "Ionic Framework",
      "Node JS",
      "Microservices",
      "Git",
      "AWS",
    ],
  };
  return (
    <section
      id="experience"
      className="grid-row relative grid min-h-[85vh] items-center justify-center justify-items-center text-textLight dark:text-textDark lg:grid-cols-[2fr_0.6fr_2fr]"
    >
      <ExperienceCard details={wsibDetails} />
      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <div className="size-1 rounded-full border-4 border-primary bg-backgroundDark" />
        <div className="h-5 border-2 border-red-400 lg:h-fit lg:w-full" />
        <div className="size-1 rounded-full border-4 border-primary bg-backgroundDark" />
      </div>
      <ExperienceCard details={bpDetails} />
    </section>
  );
};
export default Experience;
