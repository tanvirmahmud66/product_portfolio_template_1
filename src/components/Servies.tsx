import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineArrowForward, MdCall } from "react-icons/md";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";

const services = [
  {
    title: "Air Conditioning Repair",
    desc: "We offer professional air conditioning repair",
    image: service1,
  },
  {
    title: "AC Installations",
    desc: "We help you install your AC in the most effective way",
    image: service2,
  },
  {
    title: "AC Maintenance",
    desc: "We offer professional AC maintenance services",
    image: service3,
  },
  {
    title: "Heating System Repair",
    desc: "We ensure that your heater system gives you the best performance",
    image: service4,
  },
  {
    title: "Heating System Installations",
    desc: "Our heating system installation gives you unmatched quality",
    image: service5,
  },
];

const Servies: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-screen-xl px-6">
        <h2
          className="mb-4 text-center text-3xl font-bold text-[#1a2b6d]"
          data-aos="fade-up"
        >
          Services
        </h2>
        <p
          className="mx-auto mb-10 max-w-2xl text-center text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We offer the widest range of{" "}
          <span className="font-semibold">HVAC Services</span> to meet all your
          needs. Here are some of the services that we offer.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Contact Card */}
          <div
            className="group flex transform flex-col items-center justify-center rounded-lg bg-[#e5e9f6] p-6 text-center shadow-sm transition duration-500 ease-in-out hover:scale-105 hover:shadow-md"
            data-aos="fade-up"
          >
            <div className="mb-2 text-lg font-semibold text-[#1a2b6d]">
              Contact us today for
              <br />
              <span className="text-xl font-bold">Free Consultation</span>
            </div>
            <div className="my-4 rounded-full bg-white p-4 shadow-md transition-transform duration-500 group-hover:scale-110">
              <MdCall className="text-3xl text-[#1a2b6d]" />
            </div>
            <p className="mb-1 text-sm font-semibold text-[#1a2b6d]">
              CALL US NOW
            </p>
            <a
              href="tel:(323)287-9147"
              className="text-xl font-bold text-[#1a2b6d] transition-colors duration-300 hover:text-[#2e3e9f]"
            >
              (323) 287-9147
            </a>
          </div>

          {/* Service Cards */}
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group transform overflow-hidden rounded-lg border bg-white shadow-sm transition duration-500 ease-in-out hover:scale-105 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 100}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#1a2b6d]">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
                <button className="mt-4 flex items-center justify-center text-sm font-medium text-[#1a2b6d] transition hover:underline">
                  Read More <MdOutlineArrowForward className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servies;
