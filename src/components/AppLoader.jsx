export default function AppLoader({ progress, status }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* === BACKGROUND (your custom radial noise) === */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.20) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />

      {/* === LOADER CONTENT === */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Event Logo */}
        <img
          src="/thicklogo.png"
          alt="Echelon Logo"
          className="w-32 md:w-40 mb-6 animate-pulse drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
          ECHELON 25
        </h1>

        {/* Loading Status */}
        <p className="text-lg opacity-80 mb-3">{status}</p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Text */}
        <p className="mt-3 text-sm opacity-80">{progress}%</p>
      </div>
    </div>
  );
}
