import AnimatedCityBg from "./components/AnimatedCityBg";
import Logo from "./assets/thicklogo.png";
import Sidebars from "./components/Sidebars";
import GlassTimer from "./components/GlassTimer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative w-full h-screen">
      <Navbar />

      <AnimatedCityBg />
      <Sidebars />
      <div className="absolute inset-0 z-50 flex items-center justify-center text-white">
        <div className="flex items-center justify-center flex-col">
          <img
            src={Logo}
            alt="Logo"
            className="backdrop-blur-[2px] w-[400px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
