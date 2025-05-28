// components
import ServicesSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';  
import {fadeIn} from '../../variants';  
import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
  return (
    <div className=' h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-[50px]'>
        <div className='flex flex-col xl:flex-row gap-x-8 '>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
          xl:mb-0 '>
            <motion.h2 
            variants={fadeIn('up',0.2 )} 
            initial='hidden' 
            animate='show'
            exit='hidden' 
            className='h2 xl:mt-8 '
            >
              Meus Serviços <span className='text-accent'>.</span>
            </motion.h2>
            
            <motion.p 
            variants={fadeIn('right',0.5 )} 
            initial='hidden' 
            animate='show'
            exit='hidden'  
            className='mb-4 min-w-[400px]  lg:mx-0 font-semibold'
            >
            
              Resumo dos Meus Serviços como Programador Front-end

Sou um desenvolvedor front-end especializado em criar interfaces modernas, responsivas e de alta performance. Utilizo tecnologias como HTML5, CSS3, Tailwindcss, JavaScript, React(vite) e frameworks como React, Next.js ou Angular para desenvolver soluções web intuitivas e alinhadas com as melhores práticas de UX/UI.



              </motion.p>
          </div>

          {/* slider */}
          <motion.div
          variants={fadeIn('down',0.9 )} 
          initial='hidden' 
          animate='show'
          exit='hidden'  
          className='w-full xl:max-w-[100%] '>
          <ServiceSlider />

          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
    
  )

};

export default Services;
