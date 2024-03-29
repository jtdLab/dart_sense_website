import { motion } from 'framer-motion';
import inGameDartbot from '../assets/images/in_game_dartbot.png';
import appStore from '../assets/images/app_store_badge.png';
import playStore from '../assets/images/google_play_badge.png';

import { config } from '../config';
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon';

interface Props {
  title: string;
  slogan: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
}

export const ProductsDartSense = (props: Props) => {
  return (
    <section
      className="lg:mb-16 w-full flex flex-col justify-center items-center bg-dartsenseBg1"
      id="products-dart-sense"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-dartsenseBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <h2 className="mt-10 mb-8 text-4xl md:text-5xl dartsense-block-big-title">
              {props.title}
            </h2>
            <p className="mb-8 text-dartsenseTextGray leading-loose">
              {props.slogan}
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>{props.bullet1}</span>
                {/* <span className="text-xs ml-6">1&#41;</span> */}
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>{props.bullet2}</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>{props.bullet3}</span>
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <a
                href={config.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2"
              >
                <img
                  src={appStore.src}
                  alt="App Store Logo"
                  className="h-12 xs:h-16" // Set a fixed height for uniformity on larger devices
                />
              </a>
              <a
                href={config.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2"
              >
                <img
                  src={playStore.src}
                  alt="Play Store Logo"
                  className="h-12 xs:h-16" // Set a fixed height for uniformity on larger devices
                />
              </a>
            </div>
          </div>
          <div className="w-4/5 lg:w-2/3 lg:pl-16 mx-auto pt-16 lg:pt-0 flex items-center justify-center">
            <div className="relative inline-flex">
              <img
                src={inGameDartbot.src}
                alt="DartSense Demo"
                className="rounded-l h-[500px] xs:h-[600px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-dart-sense w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="dartsense-bg2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="dartsense-bg1"
          ></path>
        </svg>
      </div>
    </section>
  );
};
