import SkillsSlots from "./SkillsSlots";

const ExperienceCard = ({ children, className, details }) => {
  const { name, role, body, skills } = details;
  return (
    <div
      className={`card relative m-16 h-full w-full rounded-xl bg-[#FFF0E5] p-9 dark:bg-[#080d17] lg:h-[90%] ${className}`}
    >
      <div className="absolute left-2 top-2 size-5 rounded-full border-2 border-black bg-backgroundDark"></div>
      <h2 className="text-2xl text-textLight dark:text-textDark">{name}</h2>
      <p className="">{role}</p>
      <div className="flex flex-row">
        <div className="flex-center mt-3 w-[2%] flex-col gap-0">
          <div className="size-3 rounded-full border-2 border-primary bg-backgroundDark" />
          <div className="h-full border-[1px] border-primary" />
        </div>
        <div className="w-[98%]">
          {body.map((data, index) => (
            <p className="mx-3 mt-3" key={index}>
              {data}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 grid grid-cols-3 gap-2 pr-9 xs:grid-cols-3 sm:grid-cols-5 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <SkillsSlots skill={skill} key={skill} />
        ))}
      </div>
      {children}
    </div>
  );
};
export default ExperienceCard;
