"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

const eventsData = [
  {
    id: 1,
    title: "FINZO (Finance)",
    tagline: "Quick trades, Big gains",
    team: "Participants: 2 make a team",
    description:
      "A finance-based event that challenges your decision-making and market strategy skills.",
    image: "BM.JPG",
    details: `
    Open to UG & PG students.
    ₹180 per person! Use code ECHELON25 for Early Bird Offer.
    Participants must have a laptop, calculator, and Wi-Fi.
    Coordinators: Sadhvi - 8296614411, Gaurav Kotian - 8050798759
    `,
  },
  {
    id: 2,
    title: "HIREKART (HR)",
    tagline: "Enrich, Engage, Empower",
    team: "Participants: 2 make a team",
    description:
      "Test your HR expertise through strategic people management challenges.",
    image: "Hrlogo.JPG",
    details: `
    Open to UG & PG students.
    ₹180 per person! Use code ECHELON25 for Early Bird Offer.
    Participants must have a laptop and Wi-Fi.
    Coordinators: Bhimambika - 9606661682, Prajna K P - 9611020196
    `,
  },
  {
    id: 3,
    title: "MARK-IT (Marketing Event)",
    tagline: "Where speed meets success",
    team: "Participants: 2 make a team",
    description:
      "A marketing challenge to test creativity, strategy, and quick thinking.",
    image: "Marketing.PNG",
    details: `
    Open to UG & PG students.
    ₹180 per person! Use code ECHELON25 for Early Bird Offer.
    Participants must have a laptop and Wi-Fi.
    Coordinators: John Sebastian Miranda - 9380675622, Shalmali - 9880364735
    `,
  },
  {
    id: 4,
    title: "ZEPBOSS (Best Manager)",
    tagline: "One blink, One bold decision",
    team: "Individual event",
    description:
      "A flagship managerial challenge testing leadership, strategy, and decision-making.",
    image: "BMT.JPG",
    details: `
    Open to UG & PG students.
    ₹180 per person! Use code ECHELON25 for Early Bird Offer.
    Coordinators: Shiny S Devadiga - 9901442039, Deevika B R - 7019347069
    `,
  },
  {
    id: 5,
    title: "InstaPitch (Spark Tank)",
    tagline: "Think. Pitch. Win.",
    team: "Participants: 2 make a team",
    description:
      "Pitch your startup ideas and win big in this entrepreneurial challenge.",
    image: "Spark Tank.JPG",
    details: `
    Open to UG & PG students.
    ₹180 per person! Use code ECHELON25 for Early Bird Offer.
    Coordinators: Shahil Shetty - 7619631140, Navya Alva - 9740944317
    `,
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const baseVelocity = -0.5; // Negative for left scroll
  const x = useMotionValue(0);

  // Create multiple copies for seamless infinite scroll
  const repeatedEvents = [
    ...eventsData,
    ...eventsData,
    ...eventsData,
    ...eventsData,
  ];
  const cardWidth = 316; // 300px + 16px gap
  const totalWidth = repeatedEvents.length * cardWidth;

  useAnimationFrame((t, delta) => {
    if (!isDragging && !isPaused) {
      let moveBy = baseVelocity * (delta / 16);
      x.set(x.get() + moveBy);

      // Reset position for infinite loop
      if (x.get() <= -totalWidth / 2) {
        x.set(x.get() + totalWidth / 2);
      }
      if (x.get() >= 0) {
        x.set(x.get() - totalWidth / 2);
      }
    }
  });

  const handleCardClick = (event) => {
    if (!isDragging) {
      setSelectedEvent(event);
    }
  };

  return (
    <section
      id="events"
      className="relative py-16 md:py-24 bg-transparent text-white overflow-hidden z-[999] select-none"
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {/* Header */}
      <div className="flex justify-center mb-12">
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
          shadow-[0_0_25px_rgba(0,255,255,0.3)]
          glass-animate
        "
        >
          Events
        </h1>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div
        className="overflow-hidden relative cursor-grab active:cursor-grabbing"
        style={{
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex space-x-4 px-6"
          style={{ x }}
          drag="x"
          dragElastic={0.05}
          dragConstraints={{ left: -totalWidth / 2, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => {
            setTimeout(() => setIsDragging(false), 100);
          }}
          dragTransition={{
            power: 0.3,
            timeConstant: 200,
          }}
        >
          {repeatedEvents.map((event, i) => (
            <motion.div
              key={`${event.id}-${i}`}
              className="
                bg-[rgba(15,15,25,0.85)]
                backdrop-blur-lg
                rounded-2xl overflow-hidden
                border border-[rgba(255,255,255,0.15)]
                shadow-[0_0_20px_rgba(0,255,255,0.15)]
                hover:shadow-[0_0_35px_rgba(0,255,255,0.5)]
                transform transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.05]
                flex flex-col
                w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0
              "
              onClick={() => handleCardClick(event)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={event.image}
                alt={event.title}
                className="h-44 w-full object-cover opacity-90 pointer-events-none"
                style={{
                  userSelect: "none",
                  WebkitUserDrag: "none",
                  pointerEvents: "none",
                }}
                draggable="false"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-cyan-400">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-1 italic">
                    {event.tagline}
                  </p>
                  <p className="text-xs text-gray-400">{event.team}</p>
                </div>
                <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Overlay Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="
              bg-[rgba(15,15,25,0.95)]
              backdrop-blur-xl rounded-2xl
              max-w-lg w-full p-6 relative border border-[rgba(255,255,255,0.2)]
              shadow-[0_0_40px_rgba(0,255,255,0.4)]
              select-none
            "
              style={{
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-cyan-400 transition"
                onClick={() => setSelectedEvent(null)}
              >
                ×
              </button>

              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-52 object-cover rounded-lg mb-4 opacity-95 pointer-events-none"
                draggable="false"
                style={{
                  WebkitUserDrag: "none",
                  userSelect: "none",
                }}
              />
              <h2 className="text-2xl font-bold mb-2 text-cyan-400">
                {selectedEvent.title}
              </h2>
              <p className="text-cyan-300 mb-2 italic">
                {selectedEvent.tagline}
              </p>
              <p className="text-gray-300 mb-3 text-sm">{selectedEvent.team}</p>
              <p className="whitespace-pre-line text-gray-400 text-sm leading-relaxed">
                {selectedEvent.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
