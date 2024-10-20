import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { config } from '../config';
import { DartSenseLogo } from '../assets/logos/DartSenseLogo';
import { DiscordIcon } from '../assets/icons/DiscordIcon';
import { InstagramIcon } from '../assets/icons/InstagramIcon';

interface NavbarLink {
  label: string;
  href: string;
  ariaLabel: string;
}

// Cant use this because index.astro yells then
// interface Props {
//   links?: NavbarLink[];
//   languageSelector: any;
// }

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-dartsenseBg1 lg:bg-dartsenseBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a
            className="navbar-link"
            href={props.linkGoToHome}
            aria-label="Home"
          >
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                <DartSenseLogo />
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl">
                {config.app}
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {props.links?.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <div className="flex p-4 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="grow basis-0 justify-end items-center hidden lg:flex">
              <a
                className="text-white rounded-xl
           bg-dartsenseBg2 text-sm flex"
                href={config.instagramUrl}
                target="_blank"
                aria-label="discord"
              >
                <InstagramIcon />
              </a>
              {/*             <a
              className="text-white ml-4 border-2 border-slate-600 rounded-md p-2 hover:border-slate-400"
              href={config.consoleUrl}
              target="_blank"
              aria-label="source code"
            >
              Sign In
            </a> */}
            </div>
          </motion.div>
          <div className="hidden lg:flex">{props.languageSelector}</div>
        </div>
        {props.links ? (
          <div
            className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-dartsenseBg2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-dartsenseBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-dartsenseBg3 pt-10
        "
            >
              {/* <a
                className="navbar-link"
                href={config.consoleUrl}
                target="_blank"
                aria-label="source code"
              >
                Sign In
              </a> */}
              {props.links?.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link p-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              {props.languageSelector}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
