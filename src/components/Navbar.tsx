import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icon.png";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
  FaYelp,
  FaComments,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";

// Top Bar
const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="bg-[#f3f5fc] px-4 py-3 md:px-6 md:py-4">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-10 md:h-12" />
          <div className="text-lg font-bold text-[#1a2b6d] md:text-xl">
            Summit HVAC Solutions
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-3 text-sm md:space-x-4">
          <FaFacebookF className="text-gray-600 hover:text-blue-600" />
          <FaGooglePlusG className="text-gray-600 hover:text-red-500" />
          <FaPinterestP className="text-gray-600 hover:text-red-600" />
          <FaYoutube className="text-gray-600 hover:text-red-600" />
          <FaYelp className="text-gray-600 hover:text-red-600" />
          <FaComments className="text-gray-600 hover:text-blue-500" />
          <a
            href="tel:(323)287-9147"
            className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 hover:bg-blue-200 md:text-sm"
          >
            <MdCall className="mr-1" /> CALL US NOW - (323) 287-9147
          </a>
        </div>
      </div>
    </div>
  );
};

// Navigation Content
const navItems = [
  { name: "Home", path: "/" },
  { name: "AC Repair", path: "/ac-repair" },
  { name: "AC Installations", path: "/ac-installations" },
  { name: "AC Maintenance", path: "/ac-repair" },
  { name: "Heating System Repair", path: "/ac-installations" },
  { name: "Heating System Installations", path: "/ac-repair" },
  { name: "About Us", path: "/ac-installations" },
  { name: "Contact", path: "/ac-repair" },
];

const NavContent: React.FC<{ mobile?: boolean; onClose?: () => void }> = ({
  mobile = false,
  onClose,
}) => {
  return (
    <ul
      className={`${
        mobile
          ? "flex flex-col items-start space-y-4 p-4"
          : "hidden flex-wrap justify-start space-x-6 text-sm md:flex"
      } font-semibold text-white uppercase`}
    >
      {navItems.map(({ name, path }) => (
        <li key={name}>
          <Link
            to={path}
            onClick={onClose}
            className="transition-colors hover:text-blue-300"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Main Navbar
const Navbar: React.FC = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const topBar = document.getElementById("top-bar");
    const threshold = topBar?.offsetHeight || 80;

    const handleScroll = () => {
      setShowStickyNav(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Nav */}
      <nav className="bg-[#001c56] md:relative">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Logo for mobile */}
          <div className="flex items-center space-x-3 text-lg font-bold text-white md:hidden">
            <img src={Logo} className="inline-block h-8" alt="Logo" />
            <span>Summit HVAC</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden w-full md:block">
            <NavContent />
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl text-white">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-[#001c56] md:hidden">
            <NavContent mobile onClose={closeMobileMenu} />
          </div>
        )}
      </nav>

      {/* Sticky Nav */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full bg-[#001c56] shadow-md transition-transform duration-300 ease-in-out ${
          showStickyNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Sticky Logo */}
          <div className="flex items-center space-x-3 text-lg font-bold text-white">
            <img src={Logo} className="inline-block h-8" alt="Logo" />
            <span>Summit HVAC</span>
          </div>

          {/* Desktop Nav in Sticky */}
          <div className="hidden md:block">
            <NavContent />
          </div>

          {/* Hamburger in Sticky */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl text-white">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Sticky Menu */}
        {mobileMenuOpen && (
          <div className="bg-[#001c56] md:hidden">
            <NavContent mobile onClose={closeMobileMenu} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
