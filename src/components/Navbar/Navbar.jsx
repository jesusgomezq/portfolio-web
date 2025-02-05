import React, { useState } from "react";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import logoPerfil from "../../../logoPerfil.webp";
import { CgMenuGridO } from "react-icons/cg";
import { GoArrowLeft } from "react-icons/go";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section
      className="w-full h-24 mx-auto flex justify-between items-center 
    font-titleFont border-b-[1px] border-b-gray-600 sticky top-0 bg-bodyColors z-50">
      <div className="flex gap-2 justify-center items-center">
        <img
          className="w-14 h-14 rounded-full"
          src={logoPerfil}
          alt=" logo perfil"
        />
        <h3 className="text-designColor uppercase tracking-wide">
          jesus gomez
        </h3>
      </div>
      <div>
        <ul className="mdl:inline-flex items-center lg:gap-10 hidden gap-6">
          {navLinksdata.map(({ id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide 
            cursor-pointer hover:text-designColor duration-300 capitalize"
              key={id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setMenu(!menu)}
          className="text-3xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
        justify-center rounded-full text-designColor cursor-pointer">
          <CgMenuGridO />
        </span>
        {menu && (
          <div
            className="w-[80%] h-screen overflow-scroll absolute top-0 left-0
            bg-gray-800 p-4 scrollbar-hide">
            <div className="flex items-center flex-col gap-4 py-2 relative">
              <img
                className="w-14 h-14 rounded-full"
                src={logoPerfil}
                alt="logoPerfil"
              />
              <h3 className="text-designColor uppercase tracking-wide">
                jesús gómez
              </h3>
              <div>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                  Crecí y viví toda la mayor parte de mi vida en la isla de
                  margarita, Venezuela, por ser de ahí trabajé durante muchos
                  años en la industria del turismo. El servicio al cliente y
                  conectar con personas de distintas partes del mundo definió mi
                  carrera. Con el tiempo fui descubriendo un interés por la
                  tecnología, específicamente por la programación, tenía deseos
                  de aprender y crecer, siendo autodidacta empecé a estudiar
                  encontrando motivación en este camino el cual quiero continuar
                </p>
              </div>
              <ul className="flex flex-col gap-4 mb-9">
                {navLinksdata.map((item) => (
                  <li
                    key={item.id}
                    className="text-base font-normal text-gray-400 tracking-wide 
                    cursor-pointer hover:text-designColor duration-300 capitalize">
                    <Link
                      onClick={() => setMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 items-center py-5">
                <h2 className="uppercase text-base font-titleFont mb-4">
                  encuentrame
                </h2>
                <div className="flex gap-5">
                  <a href="">
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </a>
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
              <span
                onClick={() => setMenu(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-designColor
              duration-300 text-3xl cursor-pointer">
                <GoArrowLeft />
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
