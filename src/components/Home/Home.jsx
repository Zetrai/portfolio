import Card from "../../common/Card";
import {
  ReactIcon,
  AngularIcon,
  TailwindIcon,
  HtmlIcon,
  ScssIcon,
  NodeJsIcon,
  MySqlIcon,
  UnityIcon,
  CSharpIcon,
} from "../../assets";

const Home = () => {
  return (
    <section id="home" className="mb-9 min-h-[85vh]">
      <div className="grid grid-cols-[2fr_1fr] grid-rows-[auto_auto] gap-4">
        <Card className="flex min-h-[400px] flex-col justify-center">
          <p className="text-[15px] text-textLight dark:text-textDark">
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
          </p>
          <p className="mt-4 text-[15px] text-textLight dark:text-textDark">
            Currently, I'm a Senior Software Engineer at Wipro, specializing in
            Frontend technologies. I contribute to developing and maintaining
            Wipro's client platform, ensuring the platform meets web
            accessibility standards and best practices to deliver an inclusive
            user experience.
          </p>
          <p className="mt-4 text-[15px] text-textLight dark:text-textDark">
            In the past, I'hv had oppotunity to develop various different
            features such as <b>PWA, Dynamic Forms, and Responsive Graphs.</b>
          </p>
          <p className="mt-4 text-[15px] text-textLight dark:text-textDark">
            In my spare time, I’m usually reading novels, listninig songs, and
            watching streams.
          </p>
        </Card>
        <Card className="gradient-light dark:gradient-dark relative flex flex-col items-center justify-center gap-10 rounded-lg p-1">
          <div className="grid h-[90%] w-[90%] grid-cols-1 items-center justify-center justify-items-center gap-6 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ReactIcon className="h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]" />
            <AngularIcon className="h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]" />
            <NodeJsIcon className="h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]" />
            <CSharpIcon className="h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]" />
            <UnityIcon className="h-[35px] w-[45px] fill-black dark:fill-white lg:h-[45px] lg:w-[60px]" />
            <TailwindIcon className="h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]" />
            <HtmlIcon className="h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]" />
            <ScssIcon className="h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]" />
          </div>
          <h2 className="w-[95%] text-center font-saira text-base uppercase tracking-widest text-textLight opacity-50 dark:text-gray-100 dark:opacity-30 lg:text-xl">
            Technical Skills
          </h2>
        </Card>
      </div>
      <div className="grid grid-cols-3 grid-rows-[auto_auto] gap-4 lg:grid-cols-5">
        <Card className="flex min-h-[150px] flex-col items-center justify-around gap-2 lg:min-h-[200px]">
          <p className="mb-10 mt-4 text-center text-textLight dark:text-textDark">
            <span className="text-4xl">6</span> Years
          </p>

          <h2 className="absolute bottom-5 break-words text-center font-saira text-xs uppercase tracking-widest text-textLight opacity-50 dark:text-gray-100 dark:opacity-30 sm:text-base lg:text-xl">
            Total Experience
          </h2>
        </Card>
        <Card className="flex flex-col items-center justify-around gap-2">
          <h2 className="text-center font-saira text-xs uppercase tracking-widest text-textLight dark:text-gray-100 sm:text-base lg:mb-5 lg:text-xl">
            Full stack Developer
          </h2>

          <h2 className="absolute bottom-5 text-center font-saira text-xs uppercase tracking-widest text-textLight opacity-50 dark:text-gray-100 dark:opacity-30 sm:text-base lg:text-xl">
            Role
          </h2>
        </Card>
        <Card className="flex flex-col items-center justify-around gap-2">
          <h2 className="text-center font-saira text-lg uppercase tracking-widest text-textLight dark:text-gray-100 sm:text-xl lg:mb-5 lg:text-2xl">
            M.Tech
            <p className="text-center font-saira text-xs uppercase tracking-widest text-textLight dark:text-gray-100 sm:text-xs lg:text-base">
              in Software Systems
            </p>
          </h2>

          <h2 className="absolute bottom-5 text-center font-saira text-xs uppercase tracking-widest text-textLight opacity-50 dark:text-gray-100 dark:opacity-30 sm:text-base lg:text-xl">
            Education
          </h2>
        </Card>
        <Card className="flex min-h-[150px] flex-col items-center justify-around gap-4 sm:p-[3px] lg:min-h-[200px] lg:p-2">
          <p className="break-all text-center font-saira text-sm lowercase tracking-widest text-textLight dark:text-gray-100 sm:text-base lg:mb-5 lg:text-lg">
            karanpatadia28@gmail.com
          </p>

          <h2 className="absolute bottom-5 text-center font-saira text-sm uppercase tracking-widest text-textLight opacity-50 dark:text-gray-100 dark:opacity-30 sm:text-base lg:text-xl">
            Contact me
          </h2>
        </Card>

        <Card className="flex-center">
          <div className="flex-center size-full rounded-full bg-[#FF715B]/70 hover:border-[6px] hover:border-white/40 dark:bg-primary">
            <p className="rounded-full text-center font-saira text-lg tracking-widest text-textLight dark:text-gray-100 sm:text-xl lg:text-2xl">
              Download Resume
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Home;
