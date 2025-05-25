import "./App.css";
import Particles from "../src/Components/Particles";
import Hero from "./Components/Hero";
import Events from "./Components/Events";
import Navbar from "./Components/Navbar";
import SlidingHr from "./Components/SlindingHr";
import FAQ from './Components/FAQ'
import Footer from "./Components/Footer";
function App() {
  return (
    <section className="relative min-h-screen bg-[#05060f] text-white overflow-hidden">
      <Navbar/>
      <Hero/>
      <SlidingHr/>
      <Events />
      <SlidingHr/>
      {/* Faculty Component*/}
      <SlidingHr/>
      {/* NewsLetter Component */}      
      <SlidingHr/>
      {/* FAQS component*/}
      <FAQ/>
      <SlidingHr/>
      {/* Footer*/}
      <Footer/>

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
