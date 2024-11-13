const PulseIcon = ({ icon }) => {
  return (
    <div className='relative inline-block group'>
      {/* Logo */}
      <img src={icon} alt='Logo' height={45} width={45} />

      {/* Pulsing circle */}
      <div className='hidden group-hover:block absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-white/30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse'></div>
    </div>
  );
};

export default PulseIcon;
