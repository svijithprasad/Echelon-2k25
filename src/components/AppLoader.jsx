import { useEffect } from "react";

export default function AppLoader({ onFinish }) {
  useEffect(() => {
    const fallback = setTimeout(onFinish, 4000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className="fixed inset-0 z-999999 w-full h-screen bg-black flex items-center justify-center">
      <video
        src="/ENTRY.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        className="object-cover w-[400px] md:w-[600px]"
      />
    </div>
  );
}
