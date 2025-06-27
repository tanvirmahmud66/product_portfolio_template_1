import CallToAction from "./components/CallToActions";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HVACServicesBanner from "./components/HVACServicesBanner";
import Navbar from "./components/Navbar";
import Servies from "./components/Servies";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="h-[100vh] w-full">
      <Navbar />
      <HeroSection />
      <CallToAction />
      <WhyChooseUs />
      <HVACServicesBanner />
      <Servies />
      <Footer />
    </div>
  );
}
