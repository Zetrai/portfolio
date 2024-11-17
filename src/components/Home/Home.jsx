import Card from '../../common/Card';
import {
  ReactIcon,
  AngularIcon,
  TailwindIcon,
  HtmlIcon,
  ScssIcon,
  NodeJsIcon,
  MySqlIcon,
  UnityIcon,
} from '../../assets';

const Home = () => {
  return (
    <section id='aboutme' className='min-h-[85vh]'>
      <div className='grid grid-cols-[68%_30%] grid-rows-[auto_auto] gap-4'>
        <Card className='size-full'>
          <p className='text-[15px] text-gray-700 dark:text-slate-200'>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
          </p>
          <p className='mt-4 text-[15px] text-gray-700 dark:text-slate-200'>
            Currently, I'm a Senior Software Engineer at Wipro, specializing in
            Frontend technologies. I contribute to developing and maintaining
            Wipro's client platform, ensuring the platform meets web
            accessibility standards and best practices to deliver an inclusive
            user experience.
          </p>
          <p className='mt-4 text-[15px] text-gray-700 dark:text-slate-200'>
            In the past, I'hv had oppotunity to develop various different
            features such as <b>PWA, Dynamic Forms, and Responsive Graphs.</b>
          </p>
          <p className='mt-4 text-[15px] text-gray-700 dark:text-slate-200'>
            In my spare time, I’m usually reading novels, listninig songs, and
            watching streams.
          </p>
        </Card>
        <Card className='size-full'>
          <div className='w-full h-full relative'>
            <h2 className='font-archivo text-2xl sm:text-[34px] lg:text-6xl text-black tracking-widest dark:text-gray-100 opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              Technical Skills
            </h2>
            <div className='w-full h-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center justify-items-center gap-6'>
              <div className='p-2'>
                <ReactIcon className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
              <div className='p-2'>
                <AngularIcon className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
              <div className='p-2'>
                <TailwindIcon className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
              <div className='p-2'>
                <HtmlIcon className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
              <div className='p-2'>
                <ScssIcon className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
              <div className='p-2'>
                <NodeJsIcon className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
              <div className='p-2'>
                <MySqlIcon className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
              <div className='p-2'>
                <UnityIcon className='fill-black dark:fill-white h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]' />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Home;
