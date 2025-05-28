import "./App.css";
import Particles from "../src/Components/Particles";
import Hero from "./Components/Hero";
import Events from "./Components/Events";
import Navbar from "./Components/Navbar";
import SlidingHr from "./Components/SlindingHr";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import Coordinators from "./Components/Coordinators";
import NewsSection from "./Components/NewsSection";

function App() {
  return (
    <section className="relative min-h-screen bg-[#05060f] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <SlidingHr />

      <div className="hidden md:block text-white bg-green-500 p-4 ">
        Desktop only
      </div>
      <Events />
      <SlidingHr />
      {/* Faculty Component*/}
      <Coordinators />
      <SlidingHr />
      <NewsSection />
      <SlidingHr />
      {/* FAQS component*/}
      <FAQ />
      <SlidingHr />
      {/* Footer*/}
      <Footer />
      <div className="text-white">
        <div className="block md:hidden">Mobile only</div>
        <div className="hidden md:block">Desktop only</div>
      </div>

      {/* Don't alter the below tags*/}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={100}
        color="#ffffff"
        size={0.05}
        refresh
      />
    </section>
  );
}

export default App;


