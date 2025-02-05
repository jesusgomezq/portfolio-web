import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVitest } from "react-icons/si";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <section
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowAll
    flex flex-col bg-gradient-to-r from-bodyColors to-[#202327] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full overflow-hidden rounded-lg h-[80%]">
        <img
          src={src}
          className="w-full h-72 object-cover lgl:group-hover:scale-110 duration-300"
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="uppercase text-base font-normal text-designColor">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href="https://github.com/" target="blank">
              <span
                className="text-lg w-10 h-10 bg-black inline-flex justify-center 
            items-center text-gray-400 hover:text-designColor rounded-full 
            cursor-pointer duration-300">
                <BsGithub />
              </span>
              </a>
              <span
                className="text-lg w-10 h-10 bg-black inline-flex justify-center 
            items-center text-gray-400 hover:text-designColor rounded-full 
            cursor-pointer duration-300">
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <div className="flex gap-2 mt-3 justify-end items-center">
            <span
              className="w-10 h-6 text-lg bg-black inline-flex items-center 
          justify-center rounded-md">
              <FaReact />
            </span>
            <span
              className="w-10 h-6 text-lg bg-black inline-flex justify-center 
          items-center rounded-md">
              <RiTailwindCssFill />
            </span>
            <span
              className="w-10 h-6 text-lg bg-black inline-flex justify-center
          items-center rounded-md">
              <IoLogoFirebase />
            </span>
            <span
              className="w-10 h-6 text-lg bg-black inline-flex justify-center
          items-center rounded-md">
              <SiVitest />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;
