import { isMobile } from "react-device-detect";

import { Navigation, Home } from "./components";
import { Spotlight } from "./components";

const App = () => {
  console.log(isMobile);
  return (
    <>
      {!isMobile && <Spotlight />}
      <Navigation />
      <div className="relative z-10 flex min-h-screen w-full flex-col pt-[15vh]">
        <div className="mx-6 min-h-[85vh]">
          <Home />
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
