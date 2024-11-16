const Card = ({ children, className }) => {
  return (
    <div className={`card relative p-6 lg:p-10 dark:bg-[#080d17] ${className}`}>
      {children}
    </div>
  );
};
export default Card;
