import React from "react"; // Mengimpor CSS dari komponen About
import About from "../components/About/About";
import Facilities from "../components/LandingPage/Facilities";
import Footer from "../components/Footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <About />
      <Facilities />
      <Footer />
    </div>
  );
};

export default AboutPage; // Mengexport komponen AboutPages
