import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logoPerfil from "../../../logoPerfil.webp";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const resourcesItems =
    t("footer.resources_items", { returnObjects: true }) || [];
  const developmentItems =
    t("footer.development_items", { returnObjects: true }) || [];
  return (
    <section className="w-full py-20 border-b-[1px] border-b-black grid h-auto lgl:grid-cols-4 gap-8 grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full flex-col flex gap-6">
        <div className="flex items-center gap-2">
          <img
            className="w-14 h-14 rounded-full"
            src={logoPerfil}
            alt="logoPerfil"
          />
          <h3 className="uppercase text-designColor tracking-wider font-medium text-xl">
            jesus gomez
          </h3>
        </div>
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
      <div className="w-full h-full">
        <h3 className="uppercase text-designColor text-xl tracking-wider">
          {t("footer.quickLinks") || "enlaces rapidos"}
        </h3>
        <ul className="flex flex-col font-medium gap-4 font-titleFont py-6 capitalize overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {t("footer.links.about")}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {t("footer.links.portfolio")}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {t("footer.links.services")}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {t("footer.links.blog")}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {t("footer.links.contact")}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="uppercase text-designColor text-xl tracking-wider">
          {t("footer.resources") || "recursos"}
        </h3>
        <ul className="flex flex-col font-medium gap-4 font-titleFont py-6 capitalize overflow-hidden">
          {resourcesItems.map((item, idx) => (
            <li key={idx}>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                {item}
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="uppercase text-designColor text-xl tracking-wider">
          {t("footer.development") || "desarrollo"}
        </h3>
        <ul className="flex flex-col font-medium gap-4 font-titleFont py-6 capitalize overflow-hidden">
          {developmentItems.map((item, idx) => (
            <li key={idx}>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                {item}
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
