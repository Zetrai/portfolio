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
    <nav className='px-5 py-4 flex-center flex-row fixed w-full min-h-[15vh] top-0 left-0 right-0 z-20 dark:bg-backgroundDark bg-backgroundLight'>
      <img src={logo} alt='logo' height={45} width={45} />
      <nav className='flex-1 gap-5 text-2xl font-semibold flex-center font-montserrat text-primary'>
        <a
          href='#home'
          label='Home'
          className='uppercase transition-transform hover:scale-110'>
          Home
        </a>
        <a
          href='#aboutme'
          label='About me'
          className='uppercase transition-transform hover:scale-110'>
          Projects
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
