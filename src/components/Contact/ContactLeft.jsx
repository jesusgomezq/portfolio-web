import React from "react";
import { contactImage } from "../../assets";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactLeft = () => {
  const { t } = useTranslation();
  return (
    <section
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]
              lgl:p-8 p-4 rounded-lg shadow-shadowAll flex flex-col justify-center gap-6">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImage}
        alt="contactImage"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold text-white capitalize">
          {t("banner.name")}
        </h3>
        <p className="text-lg font-normal text-gray-400">
          {t("contact.role") || "front end"}{" "}
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          {t("contact.left.description") ||
            "Si quieres una página web competitiva y de calidad, ponte en contacto conmigo."}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-1">
          {t("contact.left.phoneLabel") || "Teléfono:"}{" "}
          <span className="text-lightText">+54-9-1165751356</span>
        </p>
        <p className="flex text-gray-400 items-center text-base gap-1">
          {t("contact.left.emailLabel") || "Email:"}{" "}
          <span className="text-lightText">jgomez4543@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="uppercase text-base font-titleFont mb-4">
          {t("footer.findme")}
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
    </section>
  );
};

export default ContactLeft;
