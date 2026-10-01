import Footer from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header";
import FaqSection from "./sections/FaqSection/FaqSection";
import FeaturesSection from "./sections/FeaturesSection/FeaturesSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import WhyUsSection from "./sections/WhyUsSection/WhyUsSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;