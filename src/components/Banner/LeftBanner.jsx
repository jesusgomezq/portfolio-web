import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Desarrollador Front-end Jr."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal uppercase">
          bienvenidos a mi mundo
        </h4>
        <h1 className="text-3xl font-bold text-white capitalize md:text-4xl">
          hola, soy{" "}
          <span className="text-designColor capitalize">jesus gomez</span>
        </h1>
        <h2 className="text-2xl font-bold text-white md:text-4xl">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FF014F"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Crecí y viví toda la mayor parte de mi vida en la isla de margarita,
          Venezuela, por ser de ahí trabajé durante muchos años en la industria
          del turismo. El servicio al cliente y conectar con personas de
          distintas partes del mundo definió mi carrera. Con el tiempo fui
          descubriendo un interés por la tecnología, específicamente por la
          programación, tenía deseos de aprender y crecer, siendo autodidacta
          empecé a estudiar encontrando motivación en este camino el cual quiero
          continuar
        </p>
      </div>
      <div className="flex justify-between flex-col xl:flex-row gap-6 lg:gap-0">
        <div>
          <h2 className="uppercase font-titleFont mb-4 text-base">
            encuentrame
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/" target="blnak">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/jesus-gomez-02b975168/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="uppercase font-titleFont mb-4 text-base">
            curriculum
          </h2>
          <div className="flex gap-4">
            <span
              className="w-40 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex
        items-center justify-center rounded-md shadow-shadowAll hover:bg-opacity-40
        hover:translate-y-1 transition-all hover:text-designColor cursor-pointer
        duration-300;">
              <FaDownload />
              <p className="px-2 flex">download</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
