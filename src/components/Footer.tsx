import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2b6d] text-white">
      <div className="mx-auto grid max-w-screen-xl gap-10 px-6 py-14 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Tip Top HVAC</h3>
          <p className="text-sm text-gray-300">
            Delivering efficient AC repair, installation, and maintenance
            solutions with over 20 years of experience in both residential and
            commercial services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                AC Repair
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AC Installation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Heating System Repair
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Maintenance Plans
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              1234 HVAC Street, Los Angeles, CA
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> (323) 287-9147
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@tiptophvac.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900 bg-[#0e1a49]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-6 py-6 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Tip Top HVAC. All rights reserved.
            Developed by{" "}
            <span className="font-medium text-white">Tanvir Mahmud</span>.
          </p>
          <div className="mt-4 flex items-center gap-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/tanvirmahmud77"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.tanvirmahmud.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGlobe />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
