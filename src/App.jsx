import { isMobile } from 'react-device-detect';

import { Navigation, Home, AboutMe } from './components';
import { Spotlight } from './components';

const App = () => {
  console.log(isMobile);
  return (
    <>
      {!isMobile && <Spotlight />}
      <Navigation />
      <div className='min-h-screen w-full flex flex-col relative z-10 pt-[15vh]'>
        <div className='min-h-[85vh] px-[24px]'>
          <Home />
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default App;
