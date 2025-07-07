import React from "react";

const AcPricing: React.FC = () => {
  const pricing = [
    {
      title: "Basic Diagnosis",
      price: "$49",
      details: "System inspection + basic troubleshooting",
    },
    {
      title: "Standard Repair",
      price: "$129+",
      details: "Includes minor parts & labor",
    },
    {
      title: "Advanced Repair",
      price: "$249+",
      details: "Includes refrigerant recharge & component replacement",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 md:px-8 lg:px-16">
      <h2 className="mb-6 text-2xl font-bold text-[#1a2b6d] md:text-4xl">
        Transparent Pricing
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

export default AcPricing;
