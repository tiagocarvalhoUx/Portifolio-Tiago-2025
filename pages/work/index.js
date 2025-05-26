// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';  
import {fadeIn} from '../../variants';  

const Work = () => {
  return (
    <div className=' h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8 '>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
          xl:mb-0 '>
            <motion.h2 
            variants={fadeIn('up',0.2 )} 
            initial='hidden' 
            animate='show'
            exit='hidden' 
            className='h2 xl:mt-0'
            >
              My works <span className='text-accent'>.</span>
            </motion.h2>
            
            <motion.p 
            variants={fadeIn('right',0.5 )} 
            initial='hidden' 
            animate='show'
            exit='hidden'  
            className='mb-4 max-w-[400px] mx-auto lg:mx-0 font-semibold text-ms '
            >
            
              Especializado em criar interfaces modernas, responsivas e de alta performance utilizando tecnologias avançadas como:

React.js (Vite): Desenvolvimento ágil e otimizado de aplicações web com React, aproveitando a velocidade do Vite para um build eficiente.


UI/UX Design: Foco em experiências intuitivas, seguindo princípios de design responsivo e acessibilidade.
              </motion.p>
          </div>

          {/* slider */}
          <motion.div
          variants={fadeIn('down',0.9 )} 
          initial='hidden' 
          animate='show'
          exit='hidden'  
          className='w-full xl:max-w-[65%]'>
          <WorkSlider />

          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
    
  )

};

export default Work;
