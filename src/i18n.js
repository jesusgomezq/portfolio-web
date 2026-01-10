import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        resume: "Resumen",
        contact: "Contacto",
      },
      banner: {
        welcome: "bienvenidos a mi mundo",
        hi: "hola, soy",
        name: "jesus gomez",
        role: "Desarrollador Front-end.",
        bio: "Orientado a crear interfaces claras, funcionales y centradas en el usuario.Trabajo con arquitecturas basadas en componentes, consumo de APIs y buenas prácticas de frontend para construir aplicaciones web mantenibles.Vengo de un entorno de servicio al cliente, lo que me aportó habilidades sólidas de comunicación, trabajo en equipo y resolución de problemas.Disfruto enfrentar nuevos desafíos técnicos y mejorar continuamente mis habilidades como desarrollador.",
        download: "Descargar",
      },
      projects: { title: "visita mi portfolio", des: "mis proyectos" },
      projects_items: {
        ecommerce: {
          title: "ecommerce",
          des: "Un sitio web, creado para la compra de armas neumáticas, este proyecto fue realizado para la entrega final del curso de CODERHOUSE.",
        },
        weather: {
          title: "weather app",
          des: "En esta web nos centramos en trabajar con los formatos DD/MM/YY para práctica personal usando la API de OpenWeather.",
        },
        movies: {
          title: "movie app",
          des: "Con esta web buscaba aprender y practicar el uso de la API de TMDB(The movie Database) así como en la app del tiempo.",
        },
      },
      resume: {
        title: "Experiencia",
        des: "Mi Resumen",
        tabs: {
          cursos: "cursos",
          habilidades: "habilidades",
          experiencia: "experiencia",
        },
      },
      resume_items: {
        cursos: {
          title: "cursos",
          items: [
            {
              title: "coder house capacitación online",
              subTitle: "desarrollo web",
              des: "Curso llevado a cabo en 10 semanas, en el cual se aprendió una base sólida de HTML, CSS y SASS, implementados en un proyecto final de maquetado web.",
            },
            {
              title: "coder house capacitación online",
              subTitle: "javaScript",
              des: "En este curso aprendimos a implementar las técnicas de desarrollo para apps modernas usando AJAX, así también las utilidades de librería de jQuery, al mismo tiempo petición a una API, conociendo también FETCH y AXIOS.",
            },
            {
              title: "coder house capacitación online",
              subTitle: "react js",
              des: "Este curso fue basado en la realización de ecomerce, usando la biblioteca React de JavaScript, en el mismo absorbimos conocimientos acerca los módulos y las interfaces que ofrece React para una mejor experiencia de usuario",
            },
          ],
        },
      },
      contact: {
        title: "contacto",
        des: "contáctame",
        form: {
          name: "nombre",
          phone: "teléfono",
          email: "correo",
          message: "mensaje",
          send: "enviar mensaje",
        },
        role: "Front-end Developer",
        left: {
          description:
            "Si quieres una página web competitiva y de calidad, ponte en contacto conmigo.",
          phoneLabel: "Teléfono:",
          emailLabel: "Email:",
        },
        messages: {
          nameReq: "Nombre es obligatorio",
          phoneReq: "Teléfono es obligatorio",
          emailReq: "Ingrese su correo",
          emailInvalid: "Correo inválido",
          msgReq: "Debe escribir un mensaje",
          sent: "Gracias {{name}}, tu mensaje fue enviado",
        },
      },
      footer: {
        findme: "encuéntrame",
        quickLinks: "enlaces rápidos",
        resources: "recursos",
        resources_items: [
          "autenticaciones",
          "estados de sistemas",
          "términos de servicio",
          "precios",
          "sobre los derechos",
        ],
        development: "desarrollo",
        development_items: [
          "documentación",
          "autenticación",
          "referencias de api",
          "soporte",
          "código abierto",
        ],
        links: {
          about: "acerca de mí",
          portfolio: "portfolio",
          services: "servicios",
          blog: "blog",
          contact: "contacto",
        },
      },
      languageNames: { es: "Español", en: "English", pt: "Português" },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Projects",
        resume: "Resume",
        contact: "Contact",
      },
      banner: {
        welcome: "welcome to my world",
        hi: "hi, i am",
        name: "jesus gomez",
        role: "Front-end Developer.",
        bio: "Focused on creating clear, functional and user-centered interfaces. I work with component-based architectures, API consumption and frontend best practices to build maintainable web applications. I come from a customer service background, which gave me strong communication, teamwork and problem-solving skills. I enjoy facing new technical challenges and continuously improving my skills as a developer.",
        download: "Download",
      },
      projects: { title: "visit my portfolio", des: "my projects" },
      projects_items: {
        ecommerce: {
          title: "ecommerce",
          des: "A website created for the purchase of pneumatic weapons, this project was completed as the final delivery of the CODERHOUSE course.",
        },
        weather: {
          title: "weather app",
          des: "In this web application we focused on working with DD/MM/YY formats for personal practice using the OpenWeather API.",
        },
        movies: {
          title: "movie app",
          des: "With this web application I sought to learn and practice the use of the TMDB API (The Movie Database) as well as in the weather app.",
        },
      },
      resume: {
        title: "My Resume",
        des: "Brief summary",
        tabs: {
          cursos: "courses",
          habilidades: "skills",
          experiencia: "experience",
        },
      },
      resume_items: {
        cursos: {
          title: "courses",
          items: [
            {
              title: "coder house online training",
              subTitle: "web development",
              des: "10-week course where we learned a solid foundation of HTML, CSS and SASS, implemented in a final web layout project.",
            },
            {
              title: "coder house online training",
              subTitle: "javaScript",
              des: "In this course we learned to implement development techniques for modern apps using AJAX, as well as jQuery library utilities, API requests, learning FETCH and AXIOS.",
            },
            {
              title: "coder house online training",
              subTitle: "react js",
              des: "This course was based on creating an ecommerce using the React library of JavaScript, where we absorbed knowledge about the modules and interfaces that React offers for a better user experience.",
            },
          ],
        },
      },
      contact: {
        title: "contact",
        des: "get in touch",
        form: {
          name: "name",
          phone: "phone",
          email: "email",
          message: "message",
          send: "send message",
        },
        role: "Front-end Developer",
        left: {
          description:
            "If you want a competitive, high-quality website, get in touch.",
          phoneLabel: "Phone:",
          emailLabel: "Email:",
        },
        messages: {
          nameReq: "Name is required",
          phoneReq: "Phone is required",
          emailReq: "Please provide your email",
          emailInvalid: "Invalid email",
          msgReq: "You must write a message",
          sent: "Thanks {{name}}, your message was sent",
        },
      },
      footer: {
        findme: "find me",
        quickLinks: "quick links",
        resources: "resources",
        resources_items: [
          "authentications",
          "system statuses",
          "terms of service",
          "pricing",
          "about rights",
        ],
        development: "development",
        development_items: [
          "documentation",
          "authentication",
          "api references",
          "support",
          "open source",
        ],
        links: {
          about: "about me",
          portfolio: "portfolio",
          services: "services",
          blog: "blog",
          contact: "contact",
        },
      },
      languageNames: { es: "Español", en: "English", pt: "Português" },
    },
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        projects: "Projetos",
        resume: "Resumo",
        contact: "Contato",
      },
      banner: {
        welcome: "bem-vindo ao meu mundo",
        hi: "oi, eu sou",
        name: "jesus gomez",
        role: "Desenvolvedor Front-end.",
        bio: "Orientado a crear interfaces claras, funcionais e centradas no usuário. Trabalho com arquiteturas baseadas en componentes, consumo de APIs y buenas práticas de frontend para construir aplicaciones web mantenibles. Venho de um ambiente de serviço ao cliente, o que me proporcionou habilidades sólidas de comunicação, trabalho em equipe e resolução de problemas. Gosto de enfrentar novos desafios técnicos e aprimorar constantemente minhas habilidades como desenvolvedor.",
        download: "Baixar",
      },
      projects: { title: "visite meu portfólio", des: "meus projetos" },
      projects_items: {
        ecommerce: {
          title: "ecommerce",
          des: "Um site criado para a compra de armas pneumáticas, este projeto foi realizado como a entrega final do curso de CODERHOUSE.",
        },
        weather: {
          title: "weather app",
          des: "Nesta aplicação web nos concentramos em trabalhar com formatos DD/MM/YY para prática pessoal usando a API do OpenWeather.",
        },
        movies: {
          title: "movie app",
          des: "Com esta aplicação web busquei aprender e praticar o uso da API do TMDB (The Movie Database) bem como no app do tempo.",
        },
      },
      resume: {
        title: "Meu Resumo",
        des: "Mi Resumen",
        tabs: {
          cursos: "cursos",
          habilidades: "habilidades",
          experiencia: "experiência",
        },
      },
      resume_items: {
        cursos: {
          title: "cursos",
          items: [
            {
              title: "coder house treinamento online",
              subTitle: "desenvolvimento web",
              des: "Curso realizado em 10 semanas, no qual aprendemos uma base sólida de HTML, CSS e SASS, implementados em um projeto final de layout web.",
            },
            {
              title: "coder house treinamento online",
              subTitle: "javaScript",
              des: "Neste curso aprendemos a implementar técnicas de desenvolvimento para aplicativos modernos usando AJAX, bem como utilitários da biblioteca jQuery, requisições de API, aprendendo FETCH e AXIOS.",
            },
            {
              title: "coder house treinamento online",
              subTitle: "react js",
              des: "Este curso foi baseado na criação de um ecommerce usando a biblioteca React do JavaScript, onde absorvemos conhecimentos sobre os módulos y interfaces que o React oferece para uma mejor experiencia...",
            },
          ],
        },
      },
      contact: {
        title: "contato",
        des: "entre em contato",
        form: {
          name: "nome",
          phone: "telefone",
          email: "email",
          message: "mensagem",
          send: "enviar mensagem",
        },
        role: "Front-end Developer",
        left: {
          description:
            "Se você quer um site competitivo e de qualidade, entre em contato.",
          phoneLabel: "Telefone:",
          emailLabel: "Email:",
        },
        messages: {
          nameReq: "Nome é obrigatório",
          phoneReq: "Telefone é obrigatório",
          emailReq: "Insira seu email",
          emailInvalid: "Email inválido",
          msgReq: "Você deve escrever uma mensagem",
          sent: "Obrigado {{name}}, sua mensagem foi enviada",
        },
      },
      footer: {
        findme: "me encontre",
        quickLinks: "links rápidos",
        resources: "recursos",
        resources_items: [
          "autenticações",
          "status do sistema",
          "termos de serviço",
          "preços",
          "sobre os direitos",
        ],
        development: "desenvolvimento",
        development_items: [
          "documentação",
          "autenticação",
          "referências de api",
          "suporte",
          "código aberto",
        ],
        links: {
          about: "sobre mim",
          portfolio: "portfólio",
          services: "serviços",
          blog: "blog",
          contact: "contato",
        },
      },
      languageNames: { es: "Español", en: "English", pt: "Português" },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
