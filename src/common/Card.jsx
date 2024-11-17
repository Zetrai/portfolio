const Card = ({ children, className }) => {
  return (
    <div
      className={`card relative bg-gray-300 px-7 pb-8 pt-6 dark:bg-[#080d17] sm:px-5 sm:pb-10 sm:pt-7 lg:p-8 ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
