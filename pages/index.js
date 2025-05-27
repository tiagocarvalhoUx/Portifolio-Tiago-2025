// next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

 const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      {/*text*/}
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 text-[18px] font-bold "
      >
        <div
          className="container flex flex-col justify-center h-full mx-auto text-center sm:pt-40 xl:text-left"
        >
          {/*title*/}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-[35px] mt-[85px]"
          >
            Transformando Ideias
            <br /> Em {""}
            <span className="text-accent">Realidade Digital</span>
          </motion.h1>
          {/*subtitle*/}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16"
          >
            Sou Web Designer especializado em criação e desenvolvimento de sites
            responsivos, com sólida experiência em design de interfaces
            e experiência do usuário (UX/UI). 
            Expertise na criação de banners e peças publicitárias, focando em soluções visuais personalizadas e eficazes. Meu objetivo é fortalecer a presença digital dos clientes através de um design impactante,
            funcional e otimizado para SEO.

          </motion.p>

          {/*btn*/}
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/*image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/*bg img*/}
        <div
          className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge transale-z-0"
        ></div>
        {/*particles*/}
        <ParticlesContainer />
        {/*avatar img*/}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
        lg:bottom-0 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
