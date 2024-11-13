import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#EEEEFA] text-[#4464AD] p-6 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="EventEase Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold"></span>
        </div>
        <div className="hidden md:flex">
          <Link to="/" className="mx-4">
            Home
          </Link>
          <a href="#facilities" className="mx-4">
            Facilities
          </a>
          <a href="#best-offer" className="mx-4">
            Best Offer
          </a>
          <Link to="/about" className="mx-4">
            About
          </Link>
          <a href="#contact" className="mx-4">
            Contact
          </a>
          
          {/* Adding Login and Register Links */}
          <Link to="/login" className="mx-4">
            Login/Register
          </Link>
          
        </div>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
