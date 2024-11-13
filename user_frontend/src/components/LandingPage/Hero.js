import React from "react";
import headerImage from "../../assets/header.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="md:text-6xl font-bold text-white">
        Experience Seamless Elegance in Event Spaces.
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-white">Book a Venue</p>
        <div className="mt-4 flex space-x-4">
          <Link to="/list" className="p-3 bg-[#F58F29] text-white rounded">
            List Product
          </Link>
          <Link to="/payment" className="p-3 bg-[#F58F29] text-white rounded">
            Form Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
