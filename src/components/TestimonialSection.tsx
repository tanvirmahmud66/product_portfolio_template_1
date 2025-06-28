import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "D. GEORGE",
    image: "/assets/testimonial1.jpg",
    text: `Tip Top HVAC are probably the most honest HVAC Contractors out there. I have hired other contractors before and have seen the upselling that they do. But these guys tell you exactly what you need.`,
  },
  {
    name: "AUDREY RUSSELL",
    image: "/assets/testimonial2.jpg",
    text: `I have been facing issues with my AC system for quite some time. I have spent thousands of dollars on repairs over the years. Still the problem remained. When I hired Tip Top HVAC for the job, they just fixed it right the first time. It has been two years since my AC system needed any kind of repairs. Thanks Tip Top.`,
  },
  {
    name: "AUDREY RUSSELL",
    image: "/assets/testimonial2.jpg",
    text: `I have been facing issues with my AC system for quite some time. I have spent thousands of dollars on repairs over the years. Still the problem remained. When I hired Tip Top HVAC for the job, they just fixed it right the first time. It has been two years since my AC system needed any kind of repairs. Thanks Tip Top.`,
  },
  {
    name: "AUDREY RUSSELL",
    image: "/assets/testimonial2.jpg",
    text: `I have been facing issues with my AC system for quite some time. I have spent thousands of dollars on repairs over the years. Still the problem remained. When I hired Tip Top HVAC for the job, they just fixed it right the first time. It has been two years since my AC system needed any kind of repairs. Thanks Tip Top.`,
  },
  {
    name: "AUDREY RUSSELL",
    image: "/assets/testimonial2.jpg",
    text: `I have been facing issues with my AC system for quite some time. I have spent thousands of dollars on repairs over the years. Still the problem remained. When I hired Tip Top HVAC for the job, they just fixed it right the first time. It has been two years since my AC system needed any kind of repairs. Thanks Tip Top.`,
  },
  // Add more testimonials if needed
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold text-[#1a2b6d] md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Tip Top HVAC, we strive to offer our clients the complete
          satisfaction. This has helped us earn their trust. Here's what some of
          our customers have to say:
        </motion.p>

        {/* Drag slider container */}
        <motion.div
          className="flex cursor-grab gap-6 active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -400, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="max-w-sm min-w-[300px] flex-shrink-0 rounded-lg border bg-white p-6 text-left shadow-md"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-4xl leading-none text-[#1a2b6d]">“</div>
              <p className="mb-4 text-gray-700">{t.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border object-cover"
                />
                <span className="font-semibold text-[#1a2b6d]">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
