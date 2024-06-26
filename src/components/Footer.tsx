import { config } from '../config';

import { DiscordIcon } from '../assets/icons/DiscordIcon';
import { InstagramIcon } from '../assets/icons/InstagramIcon';
import { DartSenseLogo } from '../assets/logos/DartSenseLogo';

interface Props {
  slogan: string;
  companySection: string;
  companySectionContactUs: string;
  legalSection: string;
  legalSectionImprint: string;
  legalSectionTerms: string;
  legalSectionPrivacy: string;
  linkGoToImprint: string;
  linkGoToTerms: string;
  linkGoToPrivacy: string;
}

export const Footer = (props: Props) => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-dartsenseBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <DartSenseLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  {config.app}
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                {props.slogan}
              </p>
              <div className="w-36 mx-auto lg:mx-0 flex justify-center lg:justify-start">
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 bg-dartsenseBg2 dartsense-border-gray hover:bg-gray-700 rounded-xl"
                  target="_blank"
                  aria-label="discord"
                  href={config.discordUrl}
                >
                  <DiscordIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 bg-dartsenseBg2 dartsense-border-gray hover:bg-gray-700 rounded-xl"
                  target="_blank"
                  aria-label="instagram"
                  href={config.instagramUrl}
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  {props.companySection}
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href={`mailto:${config.contactEmail}`}
                      aria-label="contact us"
                    >
                      {props.companySectionContactUs}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  {props.legalSection}
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href={props.linkGoToImprint}
                      aria-label="imprint"
                    >
                      {props.legalSectionImprint}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href={props.linkGoToTerms}
                      aria-label="terms of use"
                    >
                      {props.legalSectionTerms}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href={props.linkGoToPrivacy}
                      aria-label="privacy policy"
                    >
                      {props.legalSectionPrivacy}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2024, JTD Lab
          </p> */}
        </div>
      </div>
    </footer>
  );
};
