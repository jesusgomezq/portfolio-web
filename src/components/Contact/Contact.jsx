import React from "react";
import Title from "../layouts/Title";
import { useTranslation } from "react-i18next";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title={t("contact.title")} des={t("contact.des")} />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between flex-col lgl:flex-row gap-5">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contact;
