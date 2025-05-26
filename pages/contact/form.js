// Components
import Circles from "../../components/Circles";
// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";
import { useState } from "react";

// Email
import React, { useRef } from "react";
import Emailjs from "@emailjs/browser";

//variants
import { fadeIn } from "../../variants";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    Emailjs.sendForm("service_h2y0kne", "template_uw6jx67", form.current, {
      publicKey: "rT_usQO--B_eycSGh",
    }).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full"
      >
        {/* text & form*/}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let´s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <label>Name</label>
              <input className="input" type="text" name="from_name" />
              <label>Email</label>
              <input className="input" type="text" name="email" />
            </div>
            <label>Subject</label>
            <input className="input" type="text" name="subject" />
            <label>Message</label>
            <textarea name="message" className="textarea" />

            <button
              className="btn rounded-full border border-white/50 max-w-[170px]
                px-8 transition-all duration-300 flex items-center
                overflow-hidden hover:border-accent group "
            >
              <input type="submit" value="Send" />

              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0
                  transition-all duration-500"
              >
                Let´s talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
                  group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
                  duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
