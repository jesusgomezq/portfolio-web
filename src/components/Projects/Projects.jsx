import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { ecomerceWeb, imageTiempo, pelisApp } from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="visita mi portfolio" des="mis proyectos" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-14 gap-6">
        <ProjectsCard
          title="ecomerce"
          des="Un sito web, creado para la compra de armas neumáticas, este proyecto
         fue realizado para la entrega final del curso de CODERHOUSE."
          src={ecomerceWeb}
        />
        <ProjectsCard
          title="weather app"
          des="En esta web nos centramos en trabajar con los formatos DD/MM/YY
        para práctica personal usando la API de OpenWeather."
          src={imageTiempo}
        />
        <ProjectsCard
          title="movie app"
          des="Con esta web buscaba aprender y practicar el uso de la API de 
        TMDB(The movie Database) así como en la app del tiempo."
          src={pelisApp}
        />
      </div>
    </section>
  );
};

export default Projects;
