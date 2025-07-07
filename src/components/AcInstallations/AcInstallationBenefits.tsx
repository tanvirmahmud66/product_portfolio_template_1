import React from "react";

const AcInstallationBenefits: React.FC = () => {
  return (
    <section className="bg-[#f3f5fc] px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-[#1a2b6d]">
            Types of AC Systems We Install:
          </h2>
          <ul className="list-inside list-disc text-[#1a2b6d]">
            <li>Central Air Conditioning</li>
            <li>Ductless Mini-Split Systems</li>
            <li>Window AC Units</li>
            <li>Smart Thermostat Integration</li>
            <li>Commercial Rooftop Units</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold text-[#1a2b6d]">
            Why Choose Us:
          </h2>
          <ul className="list-inside list-disc text-[#1a2b6d]">
            <li>Energy-efficient installation practices</li>
            <li>Licensed & certified technicians</li>
            <li>Custom recommendations for your space</li>
            <li>Warranty-backed equipment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AcInstallationBenefits;
