import React from "react";
import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiVitest } from "react-icons/si";

const Habilidades = () => {
  return (
    <motion.section
      className="w-full py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}>
      <div className="w-full h-[100%] overflow-hidden rounded-lg">
        <div className="py-12 font-titleFont flex justify-center items-center">
          <h2 className="capitalize font-bold text-4xl">habilidades</h2>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-14 gap-6">
            <span className="habilidadesIcon">
              <FaHtml5 />
            </span>
            <span className="habilidadesIcon">
              <FaCss3 />
            </span>
            <span className="habilidadesIcon">
              <FaSass />
            </span>
            <span className="habilidadesIcon">
              <RiTailwindCssFill />
            </span>
            <span className="habilidadesIcon">
              <IoLogoJavascript />
            </span>
            <span className="habilidadesIcon">
              <FaReact />
            </span>
            <span className="habilidadesIcon">
              <IoLogoFirebase />
            </span>
            <span className="habilidadesIcon">
              <SiVitest />
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Habilidades;
