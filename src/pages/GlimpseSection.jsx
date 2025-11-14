import React from "react";
import CircularGallery from "@/components/CircularGallery";

const GlimpseSection = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 0.05, x: 0, transition: { duration: 1 } },
  };

  const centerVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 0.05, y: 0, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 0.05, x: 0, transition: { duration: 1 } },
  };
  const items = [
    {
      image: "Glimpse1.JPG",
    },
    {
      image: "Glimpse2.JPG",
    },
    {
      image: "Glimpse3.JPG",
    },
    {
      image: "Glimpse4.JPG",
    },
    {
      image: "Glimpse5.JPG",
    },
    {
      image: "Glimpse6.JPG",
    },
    {
      image: "Glimpse7.JPG",
    },
    {
      image: "Glimpse8.jpg",
    },
    {
      image: "Glimpse9.JPG",
    },
    {
      image: "Glimpse10.JPG",
    },
    {
      image: "Glimpse11.JPG",
    },
  ];

  return (
    <div
      id="glimpse"
      className="relative h-screen bg-black/80 backdrop-blur-xl border-t border-white/10 flex flex-col items-center justify-center pt-60 md:py-24"
      style={{
        zIndex: 50,
      }}
    >
      <h1
        className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold font-mono text-white text-center
        tracking-wide
        drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]
        px-8 py-4 rounded-2xl
        bg-[rgba(255,255,255,0.08)]
        backdrop-blur-xl
        border border-[rgba(255,255,255,0.15)]
        shadow-[0_0_25px_rgba(0,255,255,0.3)]"
      >
        Glimpse of MBA Department
      </h1>

      {/* Circular Gallery */}
      <div className="w-full h-full flex justify-center z-50">
        <CircularGallery
          items={items}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          scrollSpeed={5}
        />
      </div>
    </div>
  );
};

export default GlimpseSection;
