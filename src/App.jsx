import { isMobile } from "react-device-detect";

import { Navigation, Home } from "./components";
import { Spotlight } from "./components";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <>
      {!isMobile && <Spotlight />}
      <Navigation />
      <div className="relative z-10 flex min-h-screen w-full flex-col bg-backgroundLight pt-[15vh] dark:bg-backgroundDark">
        <div className="mx-6 min-h-[85vh]">
          <Home />
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default App;
