import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const WORDS = ["Effortless", "Secure", "Reliable"];
const CYCLE_MS = 2500;

const HeroLeft = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex-1 max-w-2xl">
      {/* Animated headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900">
        {/* Rotating word block */}
        <span className="block h-[1.2em] relative overflow-hidden mb-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 text-green-600"
            >
              {WORDS[index]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="block">enterprise password management</span>
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">
        Thousands of businesses worldwide have put enterprise password
        management on autopilot with Password Manager.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="#get-started"
          className="inline-flex items-center justify-center
                     bg-red-600 text-white font-semibold
                     px-6 py-3 rounded-md
                     hover:bg-red-700
                     transition-colors duration-200"
        >
          Get Started
        </a>
        <a
          href="#download"
          className="inline-flex items-center justify-center gap-2
                     border-2 border-gray-900 text-gray-900
                     font-semibold px-6 py-3 rounded-md
                     hover:bg-gray-900 hover:text-white
                     transition-colors duration-200"
        >
          <FiDownload className="w-4 h-4" />
          <span>Download App</span>
        </a>
      </div>
    </div>
  );
};

export default HeroLeft;