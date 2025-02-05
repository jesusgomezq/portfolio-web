import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logoPerfil from "../../../logoPerfil.webp";

const Footer = () => {
  return (
    <sectioon
      className="w-full py-20 border-b-[1px] border-b-black grid h-auto
    lgl:grid-cols-4 gap-8 grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full flex-col flex gap-6">
        <div className="flex items-center gap-2">
          <img
            className="w-14 h-14 rounded-full"
            src={logoPerfil}
            alt="logoPerfil"
          />
          <h3 className="uppercase text-designColor tracking-wider font-mediumt text-xl">
            jesus gomez
          </h3>
        </div>
        <div className="flex gap-5">
          <a href="https://github.com/" target="blank">
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
      <div className="w-full h-full">
        <h3 className="uppercase text-designColor text-xl tracking-wider">
          enlaces rapipidos
        </h3>
        <ul className="flex flex-col font-medium gap-4 font-titleFont py-6 capitalize overflow-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              acerca de mí
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              portfolio
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              servicios
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              blog
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              contacto
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="uppercase text-designColor text-xl tracking-wider">
          recursos
        </h3>
        <ul className="flex flex-col font-medium gap-4 font-titleFont py-6 capitalize overflow-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              autenticaciones
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              estados de sistemas
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              términos de servicos
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              precios
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              sobre los derechos
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="uppercase text-designColor text-xl tracking-wider">
          desarrollo
        </h3>
        <ul className="flex flex-col font-medium gap-4 font-titleFont py-6 capitalize overflow-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              documentación
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              autenticación
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              referencias de api
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              soporte
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300
                cursor-pointer relative group">
              código abierto
              <span
                className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-1 left-0 -translate-x-[100%]
                    group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </sectioon>
  );
};

export default Footer;
