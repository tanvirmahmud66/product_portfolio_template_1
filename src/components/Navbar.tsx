import React, { useEffect, useState } from "react";
import Logo from "../assets/icon.png";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
  FaYelp,
  FaComments,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";

// Top Bar (Always on top initially)
const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="bg-[#f3f5fc] px-6 py-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Tip Top HVAC Logo" className="h-12" />
          <div className="text-xl font-bold text-[#1a2b6d]">
            Summit HVAC Solutions
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaFacebookF className="text-gray-600 hover:text-blue-600" />
          <FaGooglePlusG className="text-gray-600 hover:text-red-500" />
          <FaPinterestP className="text-gray-600 hover:text-red-600" />
          <FaYoutube className="text-gray-600 hover:text-red-600" />
          <FaYelp className="text-gray-600 hover:text-red-600" />
          <FaComments className="text-gray-600 hover:text-blue-500" />
          <a
            href="tel:(323)287-9147"
            className="flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
          >
            <MdCall className="mr-2" /> CALL US NOW - (323) 287-9147
          </a>
        </div>
      </div>
    </div>
  );
};

// The nav bar shared between static and sticky versions
const NavContent: React.FC = () => (
  <div className="mx-auto max-w-screen-xl px-4 py-3">
    <ul className="flex flex-wrap justify-start space-x-8 text-sm font-semibold text-white uppercase">
      <li>
        <a href="/" className="hover:text-blue-300">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-300">
          AC Repair
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-300">
          AC Installations
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-300">
          AC Maintenance
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-300">
          Heating System Repair
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-300">
          Heating System Installations
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-300">
          About Us
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-300">
          Contact
        </a>
      </li>
    </ul>
  </div>
);

const Navbar: React.FC = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const topBar = document.getElementById("top-bar");
    const threshold = topBar?.offsetHeight || 80;

    const handleScroll = () => {
      setShowStickyNav(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Normal TopBar and MainNav in flow */}
      <TopBar />
      <nav className="bg-[#001c56]">
        <NavContent />
      </nav>

      {/* Sticky Nav appears only when scrolled past TopBar */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full bg-[#001c56] shadow-md transition-transform duration-300 ease-in-out ${
          showStickyNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <NavContent />
      </nav>
    </>
  );
};

export default Navbar;
