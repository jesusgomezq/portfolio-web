import React, { useState } from "react";
import Title from "../layouts/Title";
import Cursos from "./Cursos";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";

const Resume = () => {
  const [cursos, setCursos] = useState(true);
  const [habilidades, setHabilidades] = useState(false);
  const [experiencia, setExperiencia] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="sin experiencia laboral" des="Mi Resumen" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
          <li
            className={`${cursos ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
            onClick={() =>
              setCursos(true) & setExperiencia(false) & setHabilidades(false)
            }>
            cursos
          </li>
          <li
            className={`${habilidades ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
            onClick={() =>
              setCursos(false) & setHabilidades(true) & setExperiencia(false)
            }>
            habilidades
          </li>
          <li
            className={`${experiencia ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
            onClick={() =>
              setCursos(false) & setExperiencia(true) & setHabilidades(false)
            }>
            experiencia
          </li>
        </ul>
      </div>

      {cursos && <Cursos />}
      {habilidades && <Habilidades />}
      {experiencia && <Experiencia />}
    </section>
  );
};

export default Resume;
