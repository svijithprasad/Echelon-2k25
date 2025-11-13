import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// EVENTS DATA
const events = [
  {
    title: "FINZO (FINANCE)",
    subtitle: "Quick trades, Big gains",
    participants: "Participants: 2 make a team.",
    img: "/finzo.jpg",
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
    img: "/hirekart.jpg",
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
    img: "/markit.jpg",
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
    img: "/rapidops.jpg",
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
    img: "/zepboss.jpg",
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
    img: "/bizzbasket.jpg",
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
    img: "/instapitch.jpg",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Shahil Shetty – 7619631140", "Navya Alva – 9740944317"],
  },
];

// --------------------------------------------
// EVENT SECTION
// --------------------------------------------

export default function EventSection() {
  const [selected, setSelected] = useState(null);

  return (
    <div
      id="events"
      className="w-full py-24 flex flex-col items-center bg-linear-to-b from-[#0A0B1D] via-[#1A1030] to-[#3A134A]"
    >
      {/* TITLE */}
      <h1 className="text-white text-4xl font-bold mb-16 tracking-wide">
        Events
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-y-20 w-full max-w-5xl">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center gap-20">
          {events.slice(0, 3).map((ev, i) => (
            <EventCircle
              key={i}
              ev={ev}
              index={i}
              onClick={() => setSelected(ev)}
            />
          ))}
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center mt-20">
          <EventCircle
            ev={events[3]}
            index={3}
            onClick={() => setSelected(events[3])}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center gap-20">
          {events.slice(4).map((ev, i) => (
            <EventCircle
              key={i + 4}
              ev={ev}
              index={i + 4}
              onClick={() => setSelected(ev)}
            />
          ))}
        </div>
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

// --------------------------------------------
// 1. EVENT CIRCLE (with stagger animation)
// --------------------------------------------

function EventCircle({ ev, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
          delay: index * 0.15,
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="
        w-40 h-40 md:w-48 md:h-48 
        rounded-full border-4 border-red-500 cursor-pointer 
        overflow-hidden shadow-[0_0_18px_rgba(255,80,80,0.4)]
      "
    >
      <img
        src={ev.img}
        alt={ev.title}
        className="w-full h-full object-cover rounded-full"
      />
    </motion.div>
  );
}

// --------------------------------------------
// 2. EVENT DETAILS MODAL
// --------------------------------------------

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
        className="
          bg-white/10 border border-white/20 
          rounded-3xl p-8 max-w-xl text-white shadow-2xl
        "
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
