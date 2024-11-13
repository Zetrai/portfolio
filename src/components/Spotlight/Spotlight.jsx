import { useState, useEffect } from 'react';

const Spotlight = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className='relative h-[85%] text-white'>
      {/* Spotlight Circle */}
      <div
        className='absolute rounded-full pointer-events-none transition-transform duration-100'
        style={{
          width: '500px', // Spotlight size
          height: '500px',
          left: `${mousePos.x - 250}px`, // Offset by half of circle's size
          top: `${mousePos.y - 250}px`,
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 50%)`, // Softer radial gradient
          mixBlendMode: 'overlay', // Blend spotlight effect
        }}></div>
    </div>
  );
};
export default Spotlight;
