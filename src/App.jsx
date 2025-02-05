import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterFinal from "./components/FooterFinal/FooterFinal";

const App = () => {
  return (
    <section className="w-full h-auto bg-bodyColors text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterFinal />
      </div>
    </section>
  );
};

export default App;
