import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleDarkMode } from "../../global.slice";

import { logo, lightmodeIcon, darkmodeIcon } from "../../assets";
import PulseIcon from "../../common/PurseIcon";

const Navigation = () => {
  const darkMode = useSelector((state) => state.global.darkMode);
  const dispatch = useDispatch();

  // const [darkMode, setDarkMode] = useState(false);
  const [modeIcon, setModeIcon] = useState(lightmodeIcon);
  const [activeSection, setActiveSection] = useState("");

  const darkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    setModeIcon(darkMode ? darkmodeIcon : lightmodeIcon);
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Adjust selector if sections aren't direct <section> elements.
    const observerOptions = {
      root: null, // Observe relative to the viewport
      threshold: 0.5, // Section is considered active if 50% is in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section based on visible section
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex-center fixed left-0 right-0 top-0 z-20 min-h-[15vh] w-full flex-row bg-backgroundLight px-5 py-4 dark:bg-backgroundDark">
      <img src={logo} alt="logo" height={45} width={45} />
      <nav className="flex-center text:xl flex-1 gap-4 font-montserrat font-semibold text-primary lg:gap-7 lg:text-2xl">
        <a
          href="#home"
          label="Home"
          data-to-scrollspy-id="#home"
          className={`uppercase transition-transform hover:scale-125 ${
            activeSection === "home" ? "m-5 scale-125 text-amber-600" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#experience"
          label="Experience"
          data-to-scrollspy-id="#experience"
          className={`uppercase transition-transform hover:scale-125 ${
            activeSection === "experience" ? "m-5 scale-125 text-amber-600" : ""
          }`}
        >
          Experience
        </a>
        <a
          href="#projects"
          label="Projects"
          data-to-scrollspy-id="#projects"
          className={`uppercase transition-transform hover:scale-125 ${
            activeSection === "projects" ? "m-5 scale-125 text-amber-600" : ""
          }`}
        >
          Projects
        </a>
      </nav>
      <PulseIcon
        icon={modeIcon}
        alt="dark-mode"
        onClickHandler={darkModeHandler}
        enablePulse="true"
        className="h-[45px] w-[45px]"
      />
    </nav>
  );
};
export default Navigation;
