import React from "react";
import { motion } from "framer-motion";

const Experiencia = () => {
  return (
    <motion.section
    className="w-full py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}>
      <div>
      <div className="py-12 font-titleFont flex justify-center items-center">
          <h2 className="capitalize font-bold text-4xl">experiencia</h2>
        </div>
      </div>
    </motion.section>
  );
};

export default Experiencia;
