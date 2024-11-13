import { useState, useEffect } from 'react';

const Spotlight = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className='relative text-white z-30'>
      {/* Spotlight Circle */}
      <div
        className='absolute rounded-full pointer-events-none transition-transform duration-100'
        style={{
          width: '750px', // Spotlight size
          height: '750px',
          left: `${mousePos.x - 370}px`, // Offset by half of circle's size
          top: `${mousePos.y - 360}px`,
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(103, 142, 234, 0.15) 0%, rgba(103, 142, 234, 0) 50%)`, // Softer radial gradient
          mixBlendMode: 'overlay', // Blend spotlight effect
        }}></div>
    </div>
  );
};
export default Spotlight;
