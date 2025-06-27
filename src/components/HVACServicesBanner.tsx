import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdCall } from "react-icons/md";
import bgImage from "../assets/hvac-banner.jpg"; // Replace with actual banner image

const HVACServicesBanner: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a2b6d]/90"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-20 text-center">
        <h4
          className="mb-2 text-sm font-semibold tracking-widest text-blue-200 uppercase"
          data-aos="fade-up"
        >
          Residential and Commercial
        </h4>
        <h2
          className="mb-6 text-3xl leading-tight font-extrabold md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          AC Repair and Maintenance Services in Proper HVAC
        </h2>

        <div
          className="mt-6 flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="tel:(323)287-9147"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1a2b6d] hover:bg-gray-100"
          >
            <MdCall className="mr-2 text-lg" /> (323) 287-9147
          </a>
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1a2b6d] hover:bg-gray-100"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HVACServicesBanner;
