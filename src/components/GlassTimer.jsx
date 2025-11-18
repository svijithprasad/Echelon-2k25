import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlassTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeData = [
    { label: "DAYS", value: timeLeft.days, glow: "rgba(167,139,250,0.6)" },
    { label: "HOURS", value: timeLeft.hours, glow: "rgba(96,165,250,0.6)" },
    { label: "MINUTES", value: timeLeft.minutes, glow: "rgba(74,222,128,0.6)" },
    { label: "SECONDS", value: timeLeft.seconds, glow: "rgba(244,114,182,0.6)" },
  ];

  return (
    <div
      className="flex items-center justify-center 
      gap-1.5 md:gap-3 px-2 md:px-3 py-1.5 md:py-2 
      rounded-xl md:rounded-2xl 
      border border-[rgba(255,255,255,0.15)]
      shadow-[0_0_15px_rgba(255,255,255,0.05),inset_0_0_10px_rgba(255,255,255,0.05)] 
      text-white bg-[rgba(15,15,25,0.5)] backdrop-blur-2xl"
    >
      {timeData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative flex flex-col items-center justify-center 
          w-[35px] h-[45px] md:w-[50px] md:h-[60px]
          rounded-md md:rounded-lg 
          border border-[rgba(255,255,255,0.15)]
          bg-[rgba(15,15,25,0.7)] backdrop-blur-2xl 
          shadow-[inset_0_0_6px_rgba(255,255,255,0.05)]"
          style={{
            boxShadow: `inset 0 0 6px rgba(255,255,255,0.05),
                        0 0 8px ${item.glow}`,
          }}
        >
          <motion.span
            key={item.value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] md:text-lg font-bold tracking-wide leading-none"
            style={{ color: item.glow }}
          >
            {item.value}
          </motion.span>
          <span className="text-[6px] md:text-[8px] mt-0.5 tracking-widest text-gray-300 font-semibold uppercase">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default GlassTimer;
