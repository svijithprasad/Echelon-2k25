"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeaturingSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col items-center w-full pt-10 pb-20 relative">
      <h1
        className="
          absolute 
          md:-top-20 
          top-5
          left-1/2 -translate-x-1/2
          text-[50px] md:text-[180px] 
          font-extrabold 
          tracking-widest
          text-white/5 
          select-none 
          pointer-events-none
        "
      >
        FEATURING
      </h1>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-cyan-200 to-blue-400 mb-12"
      >
        Featuring
      </motion.h2>

      {/* CARD WRAPPER */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: false }}
          className="
            relative w-full md:w-[360px]
            bg-[rgba(20,20,35,0.75)]
            backdrop-blur-2xl border border-white/10
            rounded-3xl p-5 
            overflow-hidden
            shadow-[0_0_40px_rgba(255,80,160,0.35)]
            hover:shadow-[0_0_55px_rgba(255,80,160,0.65)]
            transition-all duration-300
          "
        >
          {/* GLOW LAYERS */}
          <div className="absolute inset-0">
            {/* Main radial aura */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,80,160,0.35),transparent_70%)]
                blur-2xl
              "
            />

            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 bg-pink-500 rounded-full opacity-20 blur-[80px]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.img
            src="/thai.jpg"
            className="w-full h-84 object-cover rounded-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="mt-4">
            <p className="text-white/80 text-sm mb-2 flex flex-col justify-center">
              <span className="font-semibold">📅 3rd December, 2025</span>
              <span className="font-semibold">⏰ 6 : 30 PM</span>
            </p>

            <h3 className="text-xl font-bold text-pink-300">
              Thaikkudamn Bridge
            </h3>

            <p className="text-white/80 text-sm mt-2 leading-relaxed">
              An explosive live band concert packed with roaring guitars,
              thunderous drums, and a crowd-shaking performance.
            </p>
          </div>
        </motion.div>


        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: false }}
          className="
            relative w-full md:w-[360px]
            bg-[rgba(20,20,35,0.75)]
            backdrop-blur-2xl border border-white/10
            rounded-3xl p-5 
            overflow-hidden
            shadow-[0_0_40px_rgba(0,200,255,0.35)]
            hover:shadow-[0_0_55px_rgba(0,200,255,0.65)]
            transition-all duration-300
          "
        >
          {/* GLOW LAYERS */}
          <div className="absolute inset-0">
            {/* Radial aura */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.35),transparent_70%)]
                blur-2xl
              "
            />

            {/* Pulsing aura */}
            <motion.div
              className="absolute inset-0 bg-cyan-400 rounded-full opacity-20 blur-[80px]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.img
            src="/sonal.png"
            className="w-full h-84 object-cover rounded-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="mt-4">
            <p className="text-white/80 text-sm mb-2 flex flex-col justify-center">
              <span className="font-semibold">📅 4th December, 2025</span>
              <span className="font-semibold">⏰ 7 : 00 PM</span>
            </p>

            <h3 className="text-xl font-bold text-cyan-300">
              Sonal – DJ Night
            </h3>

            <p className="text-white/80 text-sm mt-2 leading-relaxed">
              A spectacular DJ performance featuring immersive beats,
              stunning visuals and electrifying energy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
