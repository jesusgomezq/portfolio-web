import Title from "../layouts/Title";
import { useTranslation } from "react-i18next";
import ProjectsCard from "./ProjectsCard";
import { ecomerceWeb, imageTiempo, pelisApp } from "../../assets";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title={t("projects.title")} des={t("projects.des")} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-14 gap-6">
        <ProjectsCard
          title={t("projects_items.ecommerce.title")}
          des={t("projects_items.ecommerce.des")}
          src={ecomerceWeb}
          link={
            <a
              href="https://combatairsoft.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              <span
                className="text-lg w-10 h-10 bg-black inline-flex justify-center 
            items-center text-gray-400 hover:text-designColor rounded-full 
            cursor-pointer duration-300">
                <FaGlobe />
              </span>
            </a>
          }
        />
        <ProjectsCard
          title={t("projects_items.weather.title")}
          des={t("projects_items.weather.des")}
          src={imageTiempo}
          link={
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span
                className="text-lg w-10 h-10 bg-black inline-flex justify-center 
            items-center text-gray-400 hover:text-designColor rounded-full 
            cursor-pointer duration-300">
                <FaGlobe />
              </span>
            </a>
          }
        />
        <ProjectsCard
          title={t("projects_items.movies.title")}
          des={t("projects_items.movies.des")}
          src={pelisApp}
          link={
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span
                className="text-lg w-10 h-10 bg-black inline-flex justify-center 
            items-center text-gray-400 hover:text-designColor rounded-full 
            cursor-pointer duration-300">
                <FaGlobe />
              </span>
            </a>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
