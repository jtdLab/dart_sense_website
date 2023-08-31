import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import adamHeadshot from '../assets/images/adam-headshot.png';
import davidHeadshot from '../assets/images/david-headshot.png';
import jonasHeadshot from '../assets/images/jonas-headshot.jpg';
import scottHeadshot from '../assets/images/scott-headshot.png';

const team = [
  {
    name: 'Adam Rampp',
    title: 'Founder',
    bio: 'Technican and salesman.',
    headshot: adamHeadshot,
  },
  {
    name: 'David Schlauch',
    title: 'Founding Engineer',
    bio: 'Worldclass marketing guy and commedian.',
    headshot: davidHeadshot,
  },
  {
    name: 'Jonas Schlauch',
    title: 'Founding Engineer',
    bio: 'Clown and tech hater.',
    headshot: jonasHeadshot,
  },
  {
    name: 'Scott',
    title: 'Founding Engineer',
    bio: 'Cocain enjoyer.',
    headshot: scottHeadshot,
  },
];

export const Team = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 relative">
    <div className="absolute -top-16" id="team" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="dartsense-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Built by experts
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {team.map((member, index) => (
            <motion.div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 dartsense-border-gray-darker rounded-xl bg-dartsenseBg3 text-white flex flex-col p-4"
              key={`${member.name}-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex">
                <img
                  className="rounded-xl h-[45px] w-[45px]"
                  src={member.headshot.src}
                  alt={`${member.name} headshot`}
                  width="45"
                  height="45"
                />
                <div className="flex flex-col justify-center ml-4">
                  <div className="font-medium text-2xl">{member.name}</div>
                </div>
              </div>
              <div className="mt-4 mb-2 xl:mt-8 xl:mb-4">
                <ReactMarkdown className="prose prose-invert text-dartsenseTextGray">
                  {member.bio}
                </ReactMarkdown>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
