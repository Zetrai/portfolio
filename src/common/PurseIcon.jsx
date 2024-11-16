const PulseIcon = ({ icon, onClickHandler }) => {
  return (
    <div className='relative inline-block group'>
      {/* Pulsing circle */}
      <div className='hidden group-hover:block absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-white/30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer z-0'></div>

      {/* Logo */}
      <img
        className='cursor-pointer relative z-10'
        src={icon}
        alt='Logo'
        height={45}
        width={45}
        onClick={onClickHandler}
      />
    </div>
  );
};

export default PulseIcon;
