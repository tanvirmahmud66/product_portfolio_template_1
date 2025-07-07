import React from "react";
import { MdCall } from "react-icons/md";

const AcInstallationCallToAction: React.FC = () => {
  return (
    <section className="bg-[#001c56] px-4 py-12 text-center text-white md:px-8">
      <h2 className="mb-4 text-2xl font-bold md:text-4xl">
        Book Your AC Installation Today
      </h2>
      <p className="mb-6 text-sm md:text-lg">
        We're here to help you choose and install the right cooling solution.
      </p>
      <a
        href="tel:(323)287-9147"
        className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#001c56] hover:bg-blue-100"
      >
        <MdCall className="mr-2 text-lg" /> Call Now: (323) 287-9147
      </a>
    </section>
  );
};

export default AcInstallationCallToAction;
