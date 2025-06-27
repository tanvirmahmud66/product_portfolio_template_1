import React, { useEffect, useState } from "react";

const CallToAction: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // slight delay for smoother feel
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-[#1a2b6d] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between md:flex-row">
        {/* Left Text */}
        <div
          className={`mb-6 w-full transform transition-all duration-700 ease-in-out md:mb-0 md:w-2/3 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <h2 className="text-xl font-extrabold md:text-2xl">
            Expert heating and cooling solutions in Proper HVAC
          </h2>
          <p className="mt-2 text-sm md:text-base">
            Contact us today and get complete AC installation and repair as well
            as{" "}
            <span className="font-semibold">
              heater installation and repair
            </span>{" "}
            from the most experienced{" "}
            <span className="font-bold">HVAC Contractor</span>.
          </p>
        </div>

        {/* Button */}
        <div
          className={`transform transition-all delay-200 duration-700 ease-in-out ${
            animate ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-6 py-3 font-medium text-[#1a2b6d] hover:bg-gray-100"
          >
            CONTACT US NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
