"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

const projects = [
  {
    src: "/path/to/image1.jpg",
    alt: "Project 1",
    title: "Project 1",
    description: "A short description for Project 1.",
    moreInfo:
      "More detailed information about Project 1 including technologies, challenges, and outcomes.",
  },
  {
    src: "/path/to/image2.jpg",
    alt: "Project 2",
    title: "Project 2",
    description: "A short description for Project 2.",
    moreInfo:
      "More detailed information about Project 2 including technologies, challenges, and outcomes.",
  },
  {
    src: "/path/to/image3.jpg",
    alt: "Project 3",
    title: "Project 3",
    description: "A short description for Project 3.",
    moreInfo:
      "More detailed information about Project 3 including technologies, challenges, and outcomes.",
  },
  {
    src: "/path/to/image4.jpg",
    alt: "Project 4",
    title: "Project 4",
    description: "A short description for Project 4.",
    moreInfo:
      "More detailed information about Project 4 including technologies, challenges, and outcomes.",
  },
];

function ProjectCard({ project, isExpanded, onToggleExpand }) {
  // Local state for ripple effect(s)
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    // Get click coordinates relative to the card element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    // Remove the ripple after the animation (600ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    // Toggle expansion for background/text color and extra info
    onToggleExpand();
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      // Animate background and text color based on isExpanded.
      // When expanded, the card's background becomes white and text black.
      animate={{
        backgroundColor: isExpanded ? "#fff" : "rgba(0, 0, 0, 0.2)",
        color: isExpanded ? "#000" : "#fff",
      }}
      transition={{ duration: 0.3 }}
      className="self-start relative p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black transition-colors duration-300 overflow-hidden"
    >
      {/* Ripple Effect */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute rounded-full bg-white"
          style={{
            width: 20,
            height: 20,
            left: ripple.x - 10,
            top: ripple.y - 10,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Use text-current so children inherit the animated color */}
      <h2 className="text-xl font-semibold mb-4 text-current">
        {project.title}
      </h2>
      <p className="text-current">{project.description}</p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <p className="text-current">{project.moreInfo}</p>
            {/* If you want to include an image, uncomment below */}
            {/* <Image src={project.src} alt={project.alt} width={500} height={300} /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  // Maintain expanded state for each card by index
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    // items-start prevents grid items from stretching to match the tallest item
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          isExpanded={!!expandedProjects[index]}
          onToggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
}
