import { isMobile } from "react-device-detect";
import ScrollSpy from "react-ui-scrollspy";

import { Navigation, Home } from "./components";
import { Spotlight } from "./components";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <>
      {!isMobile && <Spotlight />}
      <Navigation />
      <div className="relative z-10 flex min-h-screen w-full flex-col pt-[15vh]">
        <div className="mx-6 min-h-[85vh]">
          <ScrollSpy // parentScrollContainerRef={parentScrollContainerRef}
            activeClass="ss-active-demo-2"
            offsetBottom={100}
            scrollThrottle={80}
            useBoxMethod
          >
            <Home />
            <Experience />
            <Projects />
          </ScrollSpy>
        </div>
      </div>
    </>
  );
};

export default App;
