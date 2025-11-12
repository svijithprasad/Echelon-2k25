import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";
import far from "../assets/buildings_far.png";
import near from "../assets/buildings_near.png";
import shadow from "../assets/shadow.png";
import scooter from "../assets/scooter.png";

const AnimatedCityBg = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    </div>
  );
};

export default AnimatedCityBg;
