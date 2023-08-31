import { motion } from 'framer-motion';

import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon';
import inGamePage from '../assets/images/in_game_page.png';

export const ProductsDartSense = () => {
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
              Play dart without typing
            </h2>
            <p className="mb-8 text-dartsenseTextGray leading-loose">
              DartSense is a mobile application that allows users to keep track
              of their scores & stats without typing
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Offline Voice Recognition powered by AI</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Play offline or online with your friends</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Get indepth insights with advanced stats</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row">
              <a
                target="_blank"
                href="/dashboard"
                className="dartsense-button-colored w-full h-12 mr-0 sm:mr-4 lg:mr-4 mb-2 sm:mb-0"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-4/5 lg:w-2/3 lg:pl-16 mx-auto pt-16 lg:pt-0 flex-1">
            <div className="relative inline-flex space-x-4">
              <img
                src={inGamePage.src}
                alt="Get Started with DartSense on Android"
                width="280"
                height="500"
                className="rounded-xl dartsense-border-gray"
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
