import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleDarkMode } from '../../global.slice';

import { logo, lightmodeIcon, darkmodeIcon } from '../../assets';

const Navigation = () => {
  const darkMode = useSelector((state) => state.global.darkMode);
  const dispatch = useDispatch();

  // const [darkMode, setDarkMode] = useState(false);
  const [modeIcon, setModeIcon] = useState(lightmodeIcon);

  const darkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    setModeIcon(darkMode ? darkmodeIcon : lightmodeIcon);
  }, [darkMode]);

  return (
    <section className='p-5 flex flex-row justify-center items-center h-[15vh]'>
      <img src={logo} alt='logo' height={45} width={45} />
      <nav className='flex flex-1 gap-5 justify-center items-center text-2xl font-bold font-montserrat text-primary'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
      </nav>
      <img
        src={modeIcon}
        alt='dark-mode'
        onClick={darkModeHandler}
        height={35}
        width={35}
      />
    </section>
  );
};
export default Navigation;
