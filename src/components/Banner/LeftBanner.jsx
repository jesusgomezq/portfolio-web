import { FaDownload, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const LeftBanner = () => {
  const { t } = useTranslation();
  const [text] = useTypewriter({
    words: [t("banner.role", { defaultValue: "Desarrollador Front-end." })],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal uppercase">{t("banner.welcome")}</h4>
        <h1 className="text-3xl font-bold text-white capitalize md:text-4xl">
          {t("banner.hi")}{" "}
          <span className="text-designColor capitalize">
            {t("banner.name", { defaultValue: "jesus gomez" })}
          </span>
        </h1>
        <h2 className="text-2xl font-bold text-white md:text-4xl">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FF014F"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {t("banner.bio", {
            defaultValue:
              "Crecí y viví toda la mayor parte de mi vida en la isla de margarita, Venezuela. Con el tiempo descubrí un interés por la tecnología y la programación.",
          })}
        </p>
      </div>
      <div className="flex justify-between flex-col xl:flex-row gap-6 lg:gap-0">
        <div>
          <h2 className="uppercase font-titleFont mb-4 text-base">
            {t("footer.findme") || "encuentrame"}
          </h2>
          <div className="flex gap-4">
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
            <a
              href="https://wa.me/541165751356"
              target="_blank"
              rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaWhatsapp />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="uppercase font-titleFont mb-4 text-base">
            {t("banner.download") || "curriculum"}
          </h2>
          <div className="flex gap-4">
            <span
              className="w-40 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex
        items-center justify-center rounded-md shadow-shadowAll hover:bg-opacity-40
        hover:translate-y-1 transition-all hover:text-designColor cursor-pointer
        duration-300;">
              <a
                href="cv_jesus.pdf"
                download="cv_jesus.pdf"
                target="_blank"
                className="flex">
                <span>
                  <FaDownload />
                </span>
                <p className="px-2 flex">
                  {t("banner.download") || "Download"}
                </p>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
