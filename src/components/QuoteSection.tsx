import React from "react";
import QuoteForm from "../components/QuoteForm";
import { motion } from "framer-motion";

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-[#1a2b6d] py-20 text-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        {/* Left: Quote Form */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Request A Free Quote
          </h2>
          <p className="mb-6">
            Do you have questions?{" "}
            <a
              href="tel:(323)287-9147"
              className="font-semibold text-white underline"
            >
              Call us today!
            </a>{" "}
            We are here to help!
          </p>
          <QuoteForm />
        </motion.div>

        {/* Right: Google Map */}
        <motion.div
          className="h-full w-full overflow-hidden rounded-xl border-4 border-white shadow-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.734410799301!2d-118.24368458478113!3d34.05223438060916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b455f1d0ab%3A0x8c45d2a9f5f674ab!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1614049471746!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
