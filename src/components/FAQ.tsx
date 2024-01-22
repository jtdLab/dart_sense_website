import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { config } from '../config';

interface Faq {
  question: string;
  answer: string;
}

interface Props {
  faqs?: Faq[];
  forAdditionalQuestions: string;
  askUsOnDiscord: string;
}

export const FAQ = (props: Props) => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="faq" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <h2 className="mb-16 dartsense-block-big-title text-center">FAQs</h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {props.faqs.map((faq, index) => (
              <div key={index} className="w-full p-1">
                <FAQBox
                  title={faq.question}
                  content={faq.answer}
                  defaultOpen={true}
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-center text-white">
              {props.forAdditionalQuestions}{' '}
              <a target="_blank" className="underline" href={config.discordUrl}>
                {props.askUsOnDiscord}
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-dartsenseBg3 dartsense-border-gray-darker mb-4 relative hover:bg-dartsenseBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" dartsense-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <ReactMarkdown
          className={`prose prose-invert text-dartsenseTextGray pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
          // skipHtml={false} TODO: can be used later?
          children={`${content}`}
        ></ReactMarkdown>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? 'rotate-[180deg]' : 'rotate-[270deg]'
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#0196C0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
