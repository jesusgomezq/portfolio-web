import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactRight = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errCode, setErrCode] = useState("");
  const [msgSended, setMsgSended] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ======= VALIDACION DE CORREO ========
  const emailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // ======= VALIDACION DE TELEFONO ========
  const phoneValidation = () => {
    return telephone.length >= 10;
  };

  // ========== MANEJO DEL ENVIO DEL FORMULARIO ==========
  const handleClick = (e) => {
    e.preventDefault();
    setErrCode("");
    setMsgSended("");

    // Validaciones
    if (userName.trim() === "") {
      setErrCode("nameReq");
      setTimeout(() => setErrCode(""), 5000);
      return;
    }
    if (telephone.trim() === "") {
      setErrCode("phoneReq");
      setTimeout(() => setErrCode(""), 5000);
      return;
    }
    if (telephone.length < 10) {
      setErrCode("phoneReq");
      setTimeout(() => setErrCode(""), 5000);
      return;
    }
    if (email.trim() === "") {
      setErrCode("emailReq");
      setTimeout(() => setErrCode(""), 5000);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrCode("emailInvalid");
      setTimeout(() => setErrCode(""), 5000);
      return;
    }
    if (message.trim() === "") {
      setErrCode("msgReq");
      setTimeout(() => setErrCode(""), 5000);
      return;
    }

    setIsLoading(true);

    // Enviar correo via FormSubmit
    const formData = new FormData();
    formData.append("name", userName.trim());
    formData.append("email", email.trim());
    formData.append("phone", telephone.trim());
    formData.append("message", message.trim());

    fetch("https://formsubmit.co/jgomez4543@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          setMsgSended(t("contact.messages.sent", { name: userName }));
          setErrCode("");
          setUserName("");
          setTelephone("");
          setEmail("");
          setMessage("");
          setTimeout(() => setMsgSended(""), 5000);
        } else {
          throw new Error("Error al enviar");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
        alert("Error al enviar correo. Por favor, intenta de nuevo.");
      });
  };

  return (
    <section
      className="w-full lgl:w-[60%] h-auto py-6 bg-gradient-to-r from-[#1e2024]
              to-[#23272b] flex flex-col gap-6 p-4 lgl:p-8 rounded-lg shadow-shadowAll">
      <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
        {errCode && (
          <p
            className="py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    flex flex-col gap-9 rounded-lg shadow-shadowAll text-center text-orange-500
                    text-base tracking-wide animate-bounce">
            {t(`contact.messages.${errCode}`)}
          </p>
        )}

        {msgSended && (
          <p
            className="py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    flex flex-col gap-9 rounded-lg shadow-shadowAll text-center text-green-500
                    text-base tracking-wide animate-bounce">
            {msgSended}
          </p>
        )}
        <div className="w-full flex gap-8 flex-col lgl:flex-row">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 tracking-wide uppercase">
              {t("contact.form.name")}
            </p>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className={`${
                errCode === "nameReq" && "outline-designColor"
              } inputForm`}
              type="text"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 tracking-wide uppercase">
              {t("contact.form.phone")}
            </p>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
              className={`${
                errCode === "phoneReq" && "outline-designColor"
              } inputForm`}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 tracking-wide uppercase">
            {t("contact.form.email")}
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              errCode === "emailReq" && "outline-designColor"
            } inputForm`}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 tracking-wide uppercase">
            {t("contact.form.message")}
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errCode === "msgReq" && "outline-designColor"
            } contactArea`}
            cols="30"
            rows="7"></textarea>
        </div>
        <div className="w-full py-4">
          <button
            onClick={handleClick}
            disabled={isLoading}
            className="w-full bg-[#141518] uppercase h-12 rounded-lg text-base
                    text-gray-400 tracking-wider hover:text-white hover:bg-opacity-50 duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            {isLoading ? "Enviando..." : t("contact.form.send")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactRight;
