import React from "react";
import CircularGallery from "@/components/CircularGallery";
import GradientText from "@/components/GradientText";
import { motion } from "framer-motion";

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
      <div className="absolute inset-0 z-0 flex flex-col items-center pt-10 pointer-events-none select-none">
        <motion.h1
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="text-white/90 font-extrabold 
          text-[90px] md:text-[200px] leading-none tracking-widest"
        >
          GLIMPSE
        </motion.h1>
        <motion.h1
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="text-white/90 md:hidden flex font-extrabold 
          text-[90px] md:text-[200px] leading-none tracking-widest"
        >
          GLIMPSE
        </motion.h1>
        <motion.h1
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="text-white/90 md:hidden flex font-extrabold 
          text-[90px] md:text-[200px] leading-none tracking-widest"
        >
          GLIMPSE
        </motion.h1>

        <motion.h1
          variants={centerVariants}
          initial="hidden"
          animate="visible"
          className="text-white/90  font-extrabold 
          text-[90px] md:text-[200px] leading-none tracking-widest"
        >
          GLIMPSE
        </motion.h1>

        <motion.h1
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          className="text-white/90  font-extrabold 
          text-[90px] md:text-[200px] leading-none tracking-widest"
        >
          GLIMPSE
        </motion.h1>
      </div>
      <div className="mb-12 md:mb-20 z-10 text-center px-4 bg-transparent">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="
      text-3xl md:text-5xl font-bold 
      leading-tight
      block
      bg-transparent
    "
        >
          <span className="block md:hidden">
            Glimpse of MBA <br /> Department
          </span>

          <span className="hidden md:block">Glimpse of MBA Department</span>
        </GradientText>
      </div>

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
