import React, { useState } from "react";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// about data
export const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desenvolvedor Web",
        icons: [
          { id: "html5", component: <FaHtml5 key="html5" /> },
          { id: "css3", component: <FaCss3 key="css3" /> },
          { id: "js", component: <FaJs key="js" /> },
          { id: "react", component: <FaReact key="react" /> },
          { id: "nextjs", component: <SiNextdotjs key="nextjs" /> },
          { id: "framer", component: <SiFramer key="framer" /> },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { id: "figma", component: <FaFigma key="figma" /> },
          { id: "adobexd", component: <SiAdobexd key="adobexd" /> },
          { id: "photoshop", component: <SiAdobephotoshop key="photoshop" /> },
        ],
      },
    ],
  },
  {
    title: "Prêmios",
    info: [
      {
        title: "Webby Awards - Homenageado",
        stage: "2022 - 2023",
      },
      {
        title: "Adobe Design Achievement Awards - Arte Finalista",
        stage: "2023 - 2024",
      },
    ],
  },
  {
    title: "Experiências",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full py-32 text-center bg-primary/30 xl:text-left">
      <Circles />
      {/* avatar img*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden h-[750px] xl:flex absolute bottom-0 -left-[80px]"
      >
        <Avatar />
      </motion.div>
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center -mt-[-10px] ">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Trajetória <span className="text-accent"> História </span>
            Desenvolvedor Designer.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Há 3 anos, comecei a trabalhar como freelancer como desenvolvedor.
            Desde então, eu fiz trabalho remoto para agências, dei consultoria
            para startups e colaborei em produtos digitais para uso comercial e
            de consumidor.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden mx-auto mb-8 md:flex md:max-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}

              <div
                className="relative flex-1 after:w-[1px] after:h-full
          after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="mb-2 text-2xl font-extrabold xl:text-4x1 text-accent">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-[1px] leading-[1.5] 
                max-w-[100px]"
                >
                  Anos de experiêcia
                </div>
              </div>
              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
          after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="mb-2 text-2xl font-extrabold xl:text-4x1 text-accent">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-[1px] leading-[1.5] 
                max-w-[100px]"
                >
                  Clientes satisfeitos
                </div>
              </div>
              {/* projetos */}
              <div className="relative flex-1">
                <div className="mb-2 text-2xl font-extrabold xl:text-4x1 text-accent">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-[1px] leading-[1.5] 
                max-w-[100px]"
                >
                  Projetos Finalizados
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-red-700 after:transition-all after:duration-300"
                  }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col items-center flex-1 md:flex-row max-w-max gap-x-2 text-white/60"
                >
                  {/*title*/}
                  <div className="mb-2 font-light md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/*icons*/}
                    {item.icons?.map((iconItem, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {iconItem.component}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
