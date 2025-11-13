import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import GradientText from "@/components/GradientText";

// EVENTS DATA
const events = [
  {
    title: "FINZO (FINANCE)",
    subtitle: "Quick trades, Big gains",
    participants: "Participants: 2 make a team.",
    img: "/Finance .JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop, calculator and a stable Wi-Fi connection.",
    ],
    coordinators: ["Sadhvi – 8296614411", "Gaurav Kotian – 8050798759"],
  },
  {
    title: "HIREKART (HR)",
    subtitle: "Enrich, Engage, Empower",
    participants: "Participants: 2 make a team.",
    img: "/Hrlogo.JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Bhimambika – 9606661682", "Prajna K P – 9611020196"],
  },
  {
    title: "MARK-IT (MARKETING EVENT)",
    subtitle: "Where speed meets success",
    participants: "Participants: 2 make a team.",
    img: "/Marketing.PNG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: [
      "John Sebastian Miranda – 9380675622",
      "Shalmali – 9880364735",
    ],
  },
  {
    title: "RapidOPS (BMT)",
    subtitle: "Optimize, Organise, Outstand",
    participants: "Participants: 3 make a team.",
    img: "/BMT.JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Dhananjay – 8722802212", "Nishana – 9353264949"],
  },
  {
    title: "ZEPBOSS (BEST MANAGER)",
    subtitle: "One blink, One bold decision",
    participants: "Participants: Individual event",
    img: "/BM.JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Shiny S Devadiga – 9901442039", "Deevika B R – 7019347069"],
  },
  {
    title: "BizzBasket (BUSINESS QUIZ)",
    subtitle: "Strategy in every pick",
    participants: "Participants: 2 make a team.",
    img: "/BQ.png",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Awab Shaikh – 7022173912", "Fathima Nawal – 7022024815"],
  },
  {
    title: "InstaPitch (SPARK TANK)",
    subtitle: "Think. Pitch. Win.",
    participants: "Participants: 2 make a team.",
    img: "/Spark Tank.JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Shahil Shetty – 7619631140", "Navya Alva – 9740944317"],
  },
];

// ANIMATION VARIANTS
const leftVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const centerVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const rightVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scooterVariants = {
  hidden: { opacity: 0, x: "-200%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

// MAIN COMPONENT
export default function EventSection() {
  const [selected, setSelected] = useState(null);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-10%", once: false });

  const leftAnim = useAnimation();
  const centerAnim = useAnimation();
  const rightAnim = useAnimation();
  const scooterAnim = useAnimation();

  // Trigger animations manually when section enters view
  useEffect(() => {
    if (inView) {
      leftAnim.start("visible");
      centerAnim.start("visible");
      rightAnim.start("visible");
      scooterAnim.start("visible");
    } else {
      leftAnim.start("hidden");
      centerAnim.start("hidden");
      rightAnim.start("hidden");
      scooterAnim.start("hidden");
    }
  }, [inView]);

  return (
    <div
      ref={sectionRef}
      id="events"
      className="w-full py-20 md:py-28 flex flex-col items-center relative overflow-hidden
      bg-transparent [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    >
      {/* BACKGROUND TITLE */}
      <h1
        className="absolute top-20 left-1/2 -translate-x-1/2 
        text-[60px] md:text-[180px] lg:text-[240px] 
        font-extrabold text-white/5 uppercase pointer-events-none select-none"
      >
        EVENTS
      </h1>

      {/* TITLE */}
      <div className="mb-12 md:mb-20 z-10">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="text-3xl md:text-5xl font-bold"
        >
          Management Events
        </GradientText>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-y-5 md:gap-y-20 w-full max-w-5xl z-10">
        {/* LEFT COLUMN */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={leftAnim}
          className="flex flex-col items-center gap-10 md:gap-20"
        >
          {events.slice(0, 3).map((ev, i) => (
            <EventCircle key={i} ev={ev} onClick={() => setSelected(ev)} />
          ))}
        </motion.div>

        {/* CENTER COLUMN */}
        <motion.div
          variants={centerVariants}
          initial="hidden"
          animate={centerAnim}
          className="flex flex-col items-center mt-6 md:mt-20"
        >
          <motion.img
            src="/scooter.png"
            variants={scooterVariants}
            initial="hidden"
            animate={scooterAnim}
            className="w-28 md:w-56 mb-12 drop-shadow-[0_0_20px_rgba(255,60,60,0.6)]"
          />

          <EventCircle ev={events[3]} onClick={() => setSelected(events[3])} />
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={rightAnim}
          className="flex flex-col items-center gap-10 md:gap-20"
        >
          {events.slice(4).map((ev, i) => (
            <EventCircle key={i} ev={ev} onClick={() => setSelected(ev)} />
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <EventModal event={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

// EVENT CIRCLE
function EventCircle({ ev, onClick }) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="w-24 h-24 md:w-44 md:h-44 rounded-full border-4 border-red-500
        shadow-[0_0_18px_rgba(255,80,80,0.4)] overflow-hidden cursor-pointer"
      >
        <img
          src={ev.img}
          alt={ev.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <p className="text-white mt-2 md:mt-3 text-xs md:text-lg font-semibold w-28 md:w-44 leading-tight">
        {ev.title}
      </p>
    </div>
  );
}

// EVENT MODAL
function EventModal({ event, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        className="bg-white/10 border border-white/20 rounded-3xl p-8 max-w-xl text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold">{event.title}</h2>
        <p className="text-purple-300 italic">{event.subtitle}</p>

        <p className="mt-3">{event.participants}</p>

        <h3 className="mt-4 font-semibold">Guidelines:</h3>
        {event.guidelines.map((g, i) => (
          <p key={i}>• {g}</p>
        ))}

        <h3 className="mt-4 font-semibold">Coordinators:</h3>
        {event.coordinators.map((c, i) => (
          <p key={i}>{c}</p>
        ))}

        <button className="mt-6 px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-bold tracking-wide">
          Register
        </button>
      </motion.div>
    </motion.div>
  );
}
