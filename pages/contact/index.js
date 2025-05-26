"use client";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowRight } from "react-icons/bs";
import ContactForm from "./form";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 overflow-hidden">
      <div className="container mx-auto py-16 pt-32 md:py-32 px-4">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-8"
        >
          Let&apos;s <span className="text-accent">connect</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center xl:items-start gap-8">
          {/* Left Side - Transparent Box */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full max-w-[450px] h-auto bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 p-6 md:p-8 rounded-lg shadow-lg text-white flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Informações de Contato
            </h3>
            <p className="mb-4">
              <span className="font-semibold">E-mail&#58;</span>{" "}
              tiago_carvalho07&#64;yahoo.com&#46;br
            </p>
            <p className="mb-4">
              <span className="font-semibold">Phone&#58;</span> +55 18-981142927
            </p>
            <p className="mb-4">
              <span className="font-semibold">Address&#58;</span> Av. Paulista, 542&#44;
               Araçatuba-Sp&#44; Brasil
            </p>
            <p className="text-sm hidden lg:block">
            Entre em contato comigo para quaisquer dúvidas ou informações adicionais.
            Estou aqui para ajudar.&#33;
            </p>
          </motion.div>

          {/* Center Content - Form */}
          <div className="flex flex-col w-full max-w-[600px]">
            {/* <ContactForm /> */}
          </div>
        </div>

        {/* Right Side - Decorative Circles */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex mt-8 overflow-hidden"
        >
          <Circles />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
