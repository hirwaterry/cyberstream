import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Founders from "../components/Founders";
import AboutUs from "../components/AboutUs";
import TriviaGame from "../components/TriviaGame";
// import Stats from "../components/stats";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        {/* <Stats /> */}
        <Workflow />
        <Testimonials />
        <TriviaGame />
        <Footer />
      </div>
    </>
  );
};

export default App;
