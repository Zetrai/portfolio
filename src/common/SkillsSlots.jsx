const SkillsSlots = ({ skill }) => {
  return (
    <div className="inline-block whitespace-nowrap rounded-lg border-2 border-primary px-3 py-1 text-center text-xs font-medium text-gray-800 dark:border-none dark:bg-gray-200 dark:shadow-md lg:text-sm">
      {skill}
    </div>
  );
};
export default SkillsSlots;
