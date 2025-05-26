import React, { useState } from "react";

// Simulando os ícones já que não temos acesso às bibliotecas react-icons
const FaHtml5 = () => <span>🌐</span>;
const FaCss3 = () => <span>🎨</span>;
const FaJs = () => <span>⚡</span>;
const FaReact = () => <span>⚛️</span>;
const FaFigma = () => <span>🎯</span>;
const SiNextdotjs = () => <span>▲</span>;
const SiFramer = () => <span>🎬</span>;
const SiAdobexd = () => <span>🎨</span>;
const SiAdobephotoshop = () => <span>📷</span>;

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

// Componentes simulados
const Avatar = () => (
  <div className="w-full h-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-full opacity-20"></div>
);

const Circles = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full"></div>
    <div className="absolute bottom-40 left-20 w-48 h-48 border border-white/5 rounded-full"></div>
  </div>
);

// Animações simuladas
const fadeIn = (direction, delay) => ({
  hidden: {
    opacity: 0,
    x: direction === "right" ? -50 : direction === "left" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: "easeOut",
    },
  },
});

// Counter simulado
const CountUp = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  React.useEffect(() => {
    const increment = (end - start) / (duration * 10);
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= end) {
          clearInterval(timer);
          return end;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return Math.floor(count);
};

// Componente de Motion simulado
const Motion = ({ children, variants, initial, animate, exit, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translateX(0) translateY(0)"
      : "translateX(-20px) translateY(-20px)",
    transition: "all 0.8s ease-out",
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen py-16 md:py-32 text-center bg-slate-900 text-white xl:text-left relative overflow-hidden">
      <Circles />

      {/* avatar img*/}
      <Motion
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-20 w-80 h-full max-h-[750px]"
      >
        <Avatar />
      </Motion>

      <div className="container mx-auto px-4 flex flex-col items-center h-full xl:flex-row xl:gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center xl:max-w-xl">
          <Motion
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Trajetória <span className="text-blue-400">História</span>{" "}
              Desenvolvedor Designer.
            </h2>
          </Motion>

          <Motion
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 text-gray-300"
          >
            <p>
              Há 3 anos, comecei a trabalhar como freelancer como desenvolvedor.
              Desde então, eu fiz trabalho remoto para agências, dei consultoria
              para startups e colaborei em produtos digitais para uso comercial
              e de consumidor.
            </p>
          </Motion>

          {/* counters */}
          <Motion
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex mx-auto mb-8 xl:mx-0 max-w-xl xl:max-w-none"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 pr-6">
                <div className="mb-2 text-2xl xl:text-4xl font-extrabold text-blue-400">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs font-bold uppercase tracking-[1px] leading-[1.5] max-w-[100px] text-gray-400">
                  Anos de experiência
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 px-6">
                <div className="mb-2 text-2xl xl:text-4xl font-extrabold text-blue-400">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs font-bold uppercase tracking-[1px] leading-[1.5] max-w-[100px] text-gray-400">
                  Clientes satisfeitos
                </div>
              </div>

              {/* projetos */}
              <div className="relative flex-1 pl-6">
                <div className="mb-2 text-2xl xl:text-4xl font-extrabold text-blue-400">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs font-bold uppercase tracking-[1px] leading-[1.5] max-w-[100px] text-gray-400">
                  Projetos Finalizados
                </div>
              </div>
            </div>
          </Motion>
        </div>

        {/* info */}
        <Motion
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] mt-8 xl:mt-0"
        >
          <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex
                      ? "text-blue-400 after:w-full after:bg-blue-400"
                      : "text-white/70 after:w-8 after:bg-white/30"
                  } cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="bg-white/5 rounded-lg p-6 min-h-[300px]">
            <div className="flex flex-col items-center xl:items-start gap-y-4">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex flex-col md:flex-row items-center md:items-start w-full gap-x-4 text-white/80 p-3 bg-white/5 rounded-lg"
                  >
                    {/*title*/}
                    <div className="font-semibold text-white mb-2 md:mb-0 min-w-fit">
                      {item.title}
                    </div>
                    {item.stage && (
                      <>
                        <div className="hidden md:flex text-white/40">-</div>
                        <div className="text-blue-300 text-sm">
                          {item.stage}
                        </div>
                      </>
                    )}
                    {item.icons && (
                      <div className="flex gap-x-3 mt-2 md:mt-0 md:ml-auto">
                        {item.icons.map((iconItem, iconIndex) => {
                          return (
                            <div
                              key={iconIndex}
                              className="text-2xl text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                              title={iconItem.id}
                            >
                              {iconItem.component}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default About;
