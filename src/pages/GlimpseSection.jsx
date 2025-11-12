import React from "react";
import CircularGallery from "@/components/CircularGallery";

const GlimpseSection = () => {
  // 👇 Custom images & captions
  const items = [
    {
      image: "Glimpse1.JPG",
      text: "Inauguration",
    },
    {
      image: "Glimpse2.JPG",
      text: "Teamwork",
    },
    {
      image: "Glimpse3.JPG",
      text: "Moments",
    },
    {
      image: "Glimpse4.JPG",
      text: "Leadership",
    },
    {
      image: "Glimpse5.JPG",
      text: "Creativity",
    },
    {
      image: "Glimpse6.JPG",
      text: "Winners",
    },
    {
      image: "Glimpse7.JPG",
      text: "Teamwork",
    },
    {
      image: "Glimpse8.jpg",
      text: "Moments",
    },
    {
      image: "Glimpse9.JPG",
      text: "Leadership",
    },
    {
      image: "Glimpse10.JPG",
      text: "Creativity",
    },
    {
      image: "Glimpse11.JPG",
      text: "Winners",
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center py-16 md:py-24"
      style={{
        height: "700px",
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
        Glimpse of Echelon
      </h1>

      {/* Circular Gallery */}
      <div className="w-full h-full flex justify-center">
        <CircularGallery
          items={items} // ✅ Pass your custom images here
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
};

export default GlimpseSection;
