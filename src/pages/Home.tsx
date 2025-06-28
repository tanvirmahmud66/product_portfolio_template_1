import React from "react";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToActions";
import WhyChooseUs from "../components/WhyChooseUs";
import HVACServicesBanner from "../components/HVACServicesBanner";
import Servies from "../components/Servies";
import QuoteSection from "../components/QuoteSection";
import TestimonialSection from "../components/TestimonialSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CallToAction />
      <WhyChooseUs />
      <HVACServicesBanner />
      <Servies />
      <QuoteSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
