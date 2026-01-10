import React from "react";
import ResumeCard from "./ResumeCard";
import { certificado1, certificadoJS, certificadoReact } from "../../assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Cursos = () => {
  const { t } = useTranslation();
  const items = t("resume_items.cursos.items", { returnObjects: true }) || [];
  const imgs = [certificado1, certificadoJS, certificadoReact];

  return (
    <motion.section
      className="w-full py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}>
      <div>
        <div className="py-12 font-titleFont flex justify-center items-center">
          <h2 className="capitalize font-bold text-4xl">
            {t("resume_items.cursos.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-14 gap-6">
          {items.map((it, idx) => (
            <ResumeCard
              key={idx}
              title={it.title}
              subTitle={it.subTitle || it.subTitle}
              des={it.des}
              src={imgs[idx]}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Cursos;
