import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleDarkMode } from '../../global.slice';

import { logo, lightmodeIcon, darkmodeIcon } from '../../assets';
import PulseIcon from '../../common/PurseIcon';

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
    <nav className='px-5 py-4 flex flex-row justify-center items-center fixed w-full min-h-[15vh] top-0 left-0 right-0 z-20 dark:bg-backgroundDark bg-backgroundLight'>
      <img src={logo} alt='logo' height={45} width={45} />
      <nav className='flex flex-1 gap-5 justify-center items-center text-2xl font-montserrat font-semibold text-primary'>
        <a
          href='#home'
          label='Home'
          className='hover:scale-110 transition-transform'>
          HOME
        </a>
        <a
          href='#aboutme'
          label='About me'
          className='hover:scale-110 transition-transform'>
          ABOUT ME
        </a>
      </nav>
      <PulseIcon
        icon={modeIcon}
        alt='dark-mode'
        onClickHandler={darkModeHandler}
        enablePulse='true'
        className='h-[45px] w-[45px]'
      />
    </nav>
  );
};
export default Navigation;
