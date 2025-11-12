import AnimatedCityBg from "./components/AnimatedCityBg";
import Logo from "./assets/thicklogo.png";
import Sidebars from "./components/Sidebars";
import GlassTimer from "./components/GlassTimer";
import Navbar from "./components/Navbar";
import EventsSection from "./pages/EventSection";
import GlimpseSection from "./pages/GlimpseSection";

function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <AnimatedCityBg />
        <Sidebars />
        <div className="absolute inset-0 z-50 flex items-center justify-center text-white">
          <div className="flex z-1 items-center justify-center flex-col">
            <img
              src={Logo}
              alt="Logo"
              className="backdrop-blur-[2px] w-[400px] rounded-full"
            />
          </div>
        </div>
      </div>
      <GlimpseSection />
      <EventsSection />
    </>
  );
}

export default App;
