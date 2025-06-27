import React, { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";

import bgImage1 from "../assets/technician1.jpg";
import bgImage2 from "../assets/technician2.jpg";
import bgImage3 from "../assets/technician3.jpg";

const slides = [
  {
    title: "Heating and Air Conditioning Services by Tip Top HVAC",
    description:
      "Tip Top HVAC offering efficient solutions for AC repair, installations, heating system repair and more.",
    bg: bgImage1,
  },
  {
    title: "Trusted Residential & Commercial HVAC Experts",
    description:
      "Serving homes and businesses with reliable air conditioning and heating solutions across the region.",
    bg: bgImage2,
  },
  {
    title: "Energy-Efficient Systems Installed by Professionals",
    description:
      "Upgrade your HVAC system with our certified energy-saving units installed by qualified technicians.",
    bg: bgImage3,
  },
];

const ANIMATION_DURATION = 700; // ms
const SLIDE_DURATION = 4000; // ms

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, ANIMATION_DURATION);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background images stack with opacity fade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat transition-opacity"
          style={{
            backgroundImage: `url(${slide.bg})`,
            opacity: idx === currentIndex ? (animating ? 0 : 1) : 0,
            transition: `opacity ${ANIMATION_DURATION}ms ease-in-out`,
            zIndex: idx === currentIndex ? 0 : -1,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Left side white shade overlay */}
      <div
        className={`pointer-events-none absolute top-0 left-0 h-full w-full transition-opacity ease-in-out md:w-1/2`}
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.8) 50%, rgba(255,255,255,0))",
          opacity: animating ? 0 : 1,
          transitionDuration: `${ANIMATION_DURATION}ms`,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-screen-xl flex-col-reverse items-center justify-between px-6 py-20 md:flex-row">
        {/* Text content on left */}
        <div
          className={`w-full transform transition-all duration-[700ms] ease-in-out md:w-1/2 ${
            animating ? "-translate-y-5 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <h1 className="mb-4 text-3xl leading-tight font-extrabold text-[#1a2b6d] md:text-5xl">
            {slides[currentIndex].title}
          </h1>
          <p className="mb-6 text-lg text-[#1a2b6d]">
            {slides[currentIndex].description}
          </p>
          <a
            href="tel:(323)287-9147"
            className="inline-flex items-center rounded-full bg-[#1a2b6d] px-6 py-3 text-sm font-medium text-white hover:bg-[#2e3e9f]"
          >
            <MdCall className="mr-2 text-lg" /> (323) 287-9147
          </a>
        </div>

        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
};

export default HeroSection;
