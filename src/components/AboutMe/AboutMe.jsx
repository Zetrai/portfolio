import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../../common/Card';
import {
  angularIcon,
  reactIcon,
  tailwindIcon,
  htmlIcon,
  scssIcon,
  nodeJsIcon,
  mySqlIcon,
} from '../../assets';
import PulseIcon from './../../common/PurseIcon';

const AboutMe = () => {
  return (
    <section id='aboutme' className='min-h-[85vh]'>
      <div className='grid grid-cols-[60%_30%] grid-rows-[auto_auto] gap-4'>
        <Card className='size-full'>
          <p className='text-[15px] text-black dark:text-gray-200'>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
          </p>
          <p className='mt-4 text-[15px] text-black dark:text-gray-200'>
            Currently, I'm a Senior Software Engineer at Wipro, specializing in
            Frontend technologies. I contribute to developing and maintaining
            Wipro's client platform, ensuring the platform meets web
            accessibility standards and best practices to deliver an inclusive
            user experience.
          </p>
          <p className='mt-4 text-[15px] text-black dark:text-gray-200'>
            In the past, I'hv had oppotunity to develop various different
            features such as <b>PWA, Dynamic Forms, and Responsive Graphs.</b>
          </p>
          <p className='mt-4 text-[15px] text-black dark:text-gray-200'>
            In my spare time, I’m usually reading novels, listninig songs, and
            watching streams.
          </p>
        </Card>
        <Card className='size-full'>
          <div className='w-full h-full'>
            <h2 className='font-archivo text-2xl sm:text-[34px] lg:text-6xl text-black tracking-widest dark:text-gray-100 opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              Technical Skills
            </h2>
            <div className='w-full h-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center justify-items-center gap-6'>
              <div className='p-2'>
                <PulseIcon
                  icon={reactIcon}
                  alt='react'
                  enablePulse='true'
                  className='size-[35px] lg:size-[45px]'
                />
              </div>
              <div className='p-2'>
                <PulseIcon
                  icon={angularIcon}
                  alt='react'
                  enablePulse='true'
                  className='size-[35px] lg:size-[45px]'
                />
              </div>
              <div className='p-2'>
                <PulseIcon
                  icon={tailwindIcon}
                  alt='react'
                  enablePulse='true'
                  className='size-[35px] lg:size-[45px]'
                />
              </div>
              <div className='p-2'>
                <PulseIcon
                  icon={htmlIcon}
                  alt='react'
                  enablePulse='true'
                  className='size-[35px] lg:size-[45px]'
                />
              </div>
              <div className='p-2'>
                <PulseIcon
                  icon={scssIcon}
                  alt='react'
                  enablePulse='true'
                  className='size-[35px] lg:size-[45px]'
                />
              </div>
              <div className='p-2'>
                <PulseIcon
                  icon={nodeJsIcon}
                  alt='react'
                  enablePulse='true'
                  className='size-[35px] lg:size-[45px]'
                />
              </div>
              <div className='p-2'>
                <PulseIcon
                  icon={mySqlIcon}
                  alt='react'
                  enablePulse='true'
                  className='h-[35px] w-[45px] lg:h-[45px] lg:w-[60px]'
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default AboutMe;
