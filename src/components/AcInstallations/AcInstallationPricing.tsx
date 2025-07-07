import React from "react";

const AcInstallationPricing: React.FC = () => {
  const pricing = [
    {
      title: "Standard Window Unit",
      price: "$149+",
      details: "Perfect for single-room installations.",
    },
    {
      title: "Ductless Mini-Split",
      price: "$599+",
      details: "Energy-efficient cooling for multiple zones.",
    },
    {
      title: "Central AC System",
      price: "$1599+",
      details: "Complete home/office system setup included.",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 md:px-8 lg:px-16">
      <h2 className="mb-6 text-2xl font-bold text-[#1a2b6d] md:text-4xl">
        Installation Pricing
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow transition duration-300 hover:shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold text-[#1a2b6d]">
              {item.title}
            </h3>
            <p className="mb-2 text-3xl font-bold text-[#1a2b6d]">
              {item.price}
            </p>
            <p className="text-sm text-gray-700">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcInstallationPricing;
