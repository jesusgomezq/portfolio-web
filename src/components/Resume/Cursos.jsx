import React from "react";
import ResumeCard from "./ResumeCard";
import { certificado1, certificadoJS, certificadoReact } from "../../assets";
import { motion } from "framer-motion";

const Cursos = () => {
  return (
    <motion.section
    className="w-full py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}>
      <div>
        <div className="py-12 font-titleFont flex justify-center items-center">
          <h2 className="capitalize font-bold text-4xl">cursos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-14 gap-6">
          <ResumeCard
            title="coder house capacitación online"
            subTitle="desarrollo web"
            des="Curso llevado a cabo en 10 semanas, en el cual se aprendió una 
            base sólida de HTML, CSS y SASS, implementados en un proyecto final de 
            maquetado web."
            src={certificado1}
          />
          <ResumeCard
            title="coder house capacitación online"
            subTitle="javaScript"
            des="En este curso aprendimos a implementar las técnicas de desarrollo 
            para apps modernas usando AJAX, así también las utilidades de librería de 
            jQuery, al mismo tiempo petición  a una  API, conociendo también FETCH y 
            AXIOS."
            src={certificadoJS}
          />
          <ResumeCard
            title="coder house capacitación online"
            subTitle="react js"
            des="Este curso fue basado en la realización de ecomerce, usando la 
            biblioteca React de JavaScript, en el mismo absorbimos conocimientos 
            acerca los módulos y las interfaces que ofrece React para una mejor 
            experiencia de usuario"
            src={certificadoReact}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Cursos;
