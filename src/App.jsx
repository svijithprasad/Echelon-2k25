import AnimatedCityBg from "./components/AnimatedCityBg";
import Logo from "./assets/thicklogo.png";
import Sidebars from "./components/Sidebars";
import GlassTimer from "./components/GlassTimer";
import Navbar from "./components/Navbar";
import EventsSection from "./pages/EventSection";
import GlimpseSection from "./pages/GlimpseSection";
import AboutSection from "./pages/AboutSection";

function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <AnimatedCityBg />
        <Sidebars />
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center text-white space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-[260px] md:w-[380px] rounded-full drop-shadow-2xl"
            />
          </div>

          {/* Buttons Section */}
          <div className="flex items-center gap-3 md:gap-5 mt-4">
            {/* REGISTER BUTTON (neon, responsive, same height as offer) */}
            <button
              className="
              group
              relative overflow-hidden
              px-6 md:px-8 
              h-[60px] md:h-[70px]
              flex items-center justify-center
              rounded-xl 
              text-base md:text-xl font-extrabold tracking-wide uppercase
              text-white

              /* Red neon gradient */
              bg-gradient-to-r from-red-600 via-red-500 to-red-700

              /* Outer neon glow */
              shadow-[0_0_15px_rgba(255,60,60,0.7),0_0_30px_rgba(255,40,40,0.6)]

              /* 3D depth */
              border border-red-300/40
              backdrop-blur-xl
              transition-all duration-300 

              /* Hover pop & brighter glow */
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(255,80,80,0.9),0_0_45px_rgba(255,50,50,0.8)]
  "
            >
              {/* Shine sweep */}
              <span
                className="
              absolute inset-0 opacity-20 
              bg-gradient-to-br from-white/10 to-transparent
  "
              ></span>

              {/* Moving shimmer */}
              <span
                className="
                absolute inset-0 bg-gradient-to-r 
                from-transparent via-white/25 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%]
                transition-all duration-700
    "
              />

              {/* Text */}
              <span
                className="
                relative z-10
                drop-shadow-[0_0_6px_rgba(255,80,80,0.9)]
    "
              >
                ⚡ Register Now
              </span>
            </button>

            {/* EARLY BIRD OFFER – same height as button */}
            <div
              className="
    h-[60px] md:h-[70px]
    px-4 md:px-5 
    py-2
    flex flex-col justify-center
    rounded-xl 
    bg-gradient-to-br from-[#d4af37] via-[#b88a2c] to-[#e1c16e]
    backdrop-blur-xl
    border border-yellow-300/40
    shadow-[0_0_15px_rgba(255,215,0,0.5),0_0_30px_rgba(255,200,50,0.4),inset_0_0_12px_rgba(255,255,255,0.3)]
    relative overflow-hidden
    min-w-[180px] md:min-w-[200px]
  "
            >
              {/* Shine sweep */}
              <span
                className="
      absolute inset-0 
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      translate-x-[-150%]
      animate-[shine_2.5s_linear_infinite]
    "
              />

              <style>
                {`
      @keyframes shine {
        0% { transform: translateX(-150%); }
        100% { transform: translateX(150%); }
      }
    `}
              </style>

              <span className="text-[13px] md:text-xl font-extrabold text-white drop-shadow-[0_0_5px_rgba(0,0,0,0.4)] tracking-wide">
                🎉 Early Bird Offer!
              </span>

              <span className="text-[11px] md:text-md text-white/90 font-medium">
                Use code:
                <span className="font-bold text-white ml-1 drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]">
                  ECHELON25
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-50">
        <EventsSection />
        <AboutSection />
        <GlimpseSection />
      </div>
    </>
  );
}

export default App;
