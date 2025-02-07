"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skills = [
  { src: "/react.png", alt: "React" },
  { src: "/node.png", alt: "Node.js" },
  { src: "/php.png", alt: "PHP" },
  { src: "/python.png", alt: "Python" },
  { src: "/java.png", alt: "Java" },
];

export default function SkillCarousel() {
  const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % skills.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + skills.length) % skills.length);

  return (
    <div className="relative w-full flex flex-col items-center mt-10">
        skills
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
              >
                 <button onClick={prevSlide} > <Image src={skill.src} width={100} height={100} alt={skill.alt} className="rounded-lg" /></button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Buttons for Scrolling */}
      <div className="flex gap-4 mt-6">
        {/* <button onClick={prevSlide} className="px-4 py-2 bg-gray-800 text-white rounded-full">⬅️</button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-800 text-white rounded-full">➡️</button> */}
      </div>
    </div>
  );
}
