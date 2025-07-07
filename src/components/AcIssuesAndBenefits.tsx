import React from "react";

const AcIssuesAndBenefits: React.FC = () => {
  return (
    <section className="mx-auto max-w-screen-xl bg-[#f3f5fc] px-4 py-12 md:px-8 lg:px-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-[#1a2b6d]">
            Common AC Issues We Fix:
          </h2>
          <ul className="list-inside list-disc text-[#1a2b6d]">
            <li>AC not cooling properly</li>
            <li>Unusual noises or smells</li>
            <li>Frozen coils</li>
            <li>Thermostat problems</li>
            <li>Low refrigerant</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold text-[#1a2b6d]">
            Why Choose Us:
          </h2>
          <ul className="list-inside list-disc text-[#1a2b6d]">
            <li>Certified & experienced technicians</li>
            <li>Same-day service available</li>
            <li>Transparent pricing</li>
            <li>24/7 emergency support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AcIssuesAndBenefits;
