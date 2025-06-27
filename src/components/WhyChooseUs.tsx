import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMedal,
  FaLightbulb,
  FaUsersCog,
  FaMoneyBillWave,
  FaBolt,
  FaUserShield,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMedal className="text-[#1a2b6d]" size={32} />,
    title: "Fully Qualified and Insured",
    desc: "We are driven by a team of highly qualified experts. We are fully insured to guarantee complete peace of mind.",
  },
  {
    icon: <FaLightbulb className="text-[#1a2b6d]" size={32} />,
    title: "Free Advice and Quotations",
    desc: "We offer free advice and quotations that make it easier to decide and get the service you actually need.",
  },
  {
    icon: <FaUsersCog className="text-[#1a2b6d]" size={32} />,
    title: "All of Our Engineers are in-House",
    desc: "We don't rely on anyone else. Our dedicated team is highly trained and experienced in HVAC services.",
  },
  {
    icon: <FaMoneyBillWave className="text-[#1a2b6d]" size={32} />,
    title: "On Budget and On Time",
    desc: "We like to keep our word! We'll always give you an accurate estimate and deliver on time.",
  },
  {
    icon: <FaBolt className="text-[#1a2b6d]" size={32} />,
    title: "Energy A+++Rated Equipment",
    desc: "We offer energy-efficient equipment that delivers effective solutions without hassle.",
  },
  {
    icon: <FaUserShield className="text-[#1a2b6d]" size={32} />,
    title: "Over 20 Years of Experience",
    desc: "With 20+ years in HVAC Installation, Repair and Maintenance—you can trust us.",
  },
];

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-6">
        <h2
          className="mb-10 text-center text-3xl font-bold text-[#1a2b6d]"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-lg border p-6 text-left shadow-sm transition hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-3 flex items-center space-x-3">
                {feature.icon}
                <h3 className="text-lg font-semibold text-[#1a2b6d]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
