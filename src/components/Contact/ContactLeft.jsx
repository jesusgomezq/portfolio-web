import React from "react";
import { contactImage } from "../../assets";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
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
          jesus gomez
        </h3>
        <p className="text-lg font-normal text-gray-400">
          front end <span className="uppercase">jr</span>
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Si quieres una página web o ecormece competitivo y que sea de calidad,
          no esperes más y ponte en contacto conmigo, haremos todo eso que
          tienes en mente realidad.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-1">
          Teléfono: <span className="text-lightText">+54 412 7951356</span>
        </p>
        <p className="flex text-gray-400 items-center text-base gap-1">
          Email: {""}
          <span className="text-lightText">cosiiiiita@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="uppercase text-base font-titleFont mb-4">encuentrame</h2>
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
    </section>
  );
};

export default ContactLeft;
