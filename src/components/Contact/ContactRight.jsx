import React, { useState } from "react";

const ContactRight = () => {
     const [userName, setUserName] = useState('')
      const [telephone, setTelephone] = useState('')
      const [email, setEmail] = useState('')
      const [message, setMessage] = useState('')
      const [errMsg, setErrMsg] = useState('')
      const [msgSended, setMsgSended] = useState('')
    
      // ======= VALIDACION DE CORREO PRINCIPIO ========
      const emailValidation = () => {
        return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
      }
    
      // ========== VALIDACIOND DE CORREO FINAL ==========
      const handleClick =(e)=>{
        e.preventDefault()
        if(userName === ''){
          setErrMsg('Nombre de Usuario OBLIGATORIO!!')
        }else if (telephone === '') {
            setErrMsg('Número de Teléfono OBLIGATORIO!!')
        }else if(email === ''){
          setErrMsg('Por favor Ingrese su Correo!!')
        }else if(!emailValidation(email)){
          setErrMsg('Ingrese un correo Valido!!')
        }else if(message === ''){
          setErrMsg('Debe escribir un MENSAJE!!')
        }else {
          setMsgSended(`Gracias ${userName}, tu Mensaje fue enviado con exito`)
          setErrMsg('')
          setUserName('')
          setTelephone('')
          setEmail('')
          setMessage('')
        }
        
      }

  return (
    <disection
      className="w-full lgl:w-[60%] h-auto py-6 bg-gradient-to-r from-[#1e2024]
              to-[#23272b] flex flex-col gap-6 p-4 lgl:p-8 rounded-lg shadow-shadowAll">
      <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
        {errMsg && (
          <p
            className="py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                    flex flex-col gap-9 rounded-lg shadow-shadowAll text-center text-orange-500
                    text-base tracking-wide animate-bounce">
            {errMsg}
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
              nombre
            </p>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className={`${
                errMsg === "Nombre de Usuario OBLIGATORIO!!" &&
                "outline-designColor"
              } inputForm`}
              type="text"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 tracking-wide uppercase">
              teléfono
            </p>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
              className={`${
                errMsg === "Número de Teléfono OBLIGATORIO!!" &&
                "outline-designColor"
              } inputForm`}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 tracking-wide uppercase">
            correo
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              errMsg === "Por favor Ingrese su Correo!!" &&
              "outline-designColor"
            } inputForm`}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 tracking-wide uppercase">
            mensaje
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errMsg === "Debe escribir un MENSAJE!!" && "outline-designColor"
            } contactArea`}
            cols="30"
            rows="7"></textarea>
        </div>
        <div className="w-full py-4">
          <button
            onClick={handleClick}
            className="w-full bg-[#141518] uppercase h-12 rounded-lg text-base
                    text-gray-400 tracking-wider hover:text-white duration-300">
            enviar mensaje
          </button>
        </div>
      </form>
    </disection>
  );
};

export default ContactRight;
