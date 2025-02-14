"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skills = [
  { src: "/react.png", alt: "React" },
  { src: "/node.png", alt: "Node.js" },
  { src: "/php.png", alt: "PHP" },
  { src: "/python.png", alt: "Python" },
  { src: "/java.png", alt: "Java" },
  { src: "/firebase.png", alt: "firebase" },
  { src: "/nextjs.webp", alt: "firebase" },
];

export default function SkillCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-looping effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);

  // Next & Previous Functions
  const nextSlide = () => setIndex((prev) => (prev + 1) % skills.length);


  return (
    <div className="relative w-full flex flex-col items-center mt-10">
      <h2 className="text-white text-2xl font-bold uppercase tracking-wider">
        Skills
      </h2>

      <div className="relative flex items-center justify-center mt-5 h-80 w-[400px] overflow-hidden">
        <AnimatePresence>
          {skills.map((skill, i) => {
            const distance = (i - index + skills.length) % skills.length;

            let scale = 1;
            let opacity = 0;
            let xOffset = 0;

            if (distance === 0) {
              scale = 1.7;
              opacity = 1;
              xOffset = 0;
            } else if (distance === 1 || distance === -skills.length + 1) {
              scale = 0.5;
              opacity = 0.5;
              xOffset = 120;
            } else if (distance === -1 || distance === skills.length - 1) {
              scale = 0.5;
              opacity = 0.5;
              xOffset = -120;
            }

            return (
              <motion.div
                key={skill.src}
                initial={{ opacity: 0 }}
                animate={{ scale, opacity, x: xOffset }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >        <button
              onClick={nextSlide}
            >
                <Image
                  src={skill.src}
                  width={100}
                  height={100}
                  alt={skill.alt}
                  className="rounded-lg   
                    drop-shadow-[0_0_20px_rgba(0,200,255,0.6)]
                    hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.7)]"
                />   </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}

    </div>
  );
}
