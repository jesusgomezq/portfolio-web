import React, { useState } from "react";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import logoPerfil from "../../assets/images/logoPerfil.webp";
import { CgMenuGridO } from "react-icons/cg";
import { GoArrowLeft } from "react-icons/go";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n?.language?.slice?.(0, 2) || "es";
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
          <li className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 px-3 py-1 border border-gray-600 rounded">
              <FaGlobe />
              <span className="capitalize text-sm">
                {t(`languageNames.${currentLang}`) || currentLang}
              </span>
            </button>
            <div
              className={`absolute left-0 mt-2 w-44 bg-bodyColors border border-gray-700 rounded z-50 transform origin-top-left transition-all duration-150 ${
                langOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              }`}>
              {["es", "en", "pt"].map((code) => (
                <button
                  key={code}
                  onClick={() => {
                    i18n.changeLanguage(code);
                    setLangOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-gray-200 hover:bg-gray-700">
                  {t(`languageNames.${code}`) || code}
                </button>
              ))}
            </div>
          </li>
          {navLinksdata.map(({ id, link }) => (
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
                {t(`nav.${link}`)}
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
                      {t(`nav.${item.link}`)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 items-center py-5">
                <h2 className="uppercase text-base font-titleFont mb-4">
                  encuentrame
                </h2>
                <div className="flex gap-5">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jesus-gomez-02b975168/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </div>
              </div>
              <div className="mt-6 w-full">
                <div className="text-sm text-gray-300 mb-2">
                  {t(`languageNames.${i18n?.language?.slice?.(0, 2) || "es"}`)}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  {["es", "en", "pt"].map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        i18n.changeLanguage(code);
                        setMenu(false);
                      }}
                      className="w-full text-left px-3 py-2 text-gray-200 hover:bg-gray-700 rounded">
                      {t(`languageNames.${code}`) || code}
                    </button>
                  ))}
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
