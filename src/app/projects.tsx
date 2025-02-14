"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

interface Project {
  src: string;
  alt: string;
  title: string;
  tags?: string[];
  description: string;
  moreInfo: string;
}


const projects: Project[] = [
    {
      src: "./react.png",
      alt: "Project 1",
      title: "Graduation Project - Maslak|مسلك",
      description: "Graduation project focuses on school bus transportation system",
      tags: ["Team","IoT","Cluster",'Web','App',"NoSql"],
      moreInfo:
        "Maslak offers a comprehensive automated system that provides various solutions through three platforms serving different user groups, IoT and ML. Maslak aims to serve schools, parents, and drivers by ensuring the safety of children and students of all ages. It also provides innovative solutions that accelerate the registration process, ease bus movements, and organize student rides, reducing potential errors. Maslak places great emphasis on the safety and security of students, starting from the moment they board the bus until they arrive home safely.",
    },
    {
      src: "https://via.placeholder.com/500x300",
      alt: "Project 2",
      title: "IT427 Entrepreneurship and Innovation - Terhal|ترحال",
      tags: ["Team","Case Study"],
      description: "Terhal a Smart Suitcase Start up case study",
      moreInfo:
        "This project serves as a study in market analysis, customer engagement, and open innovation, with a focus on building and managing a growing startup in the travel technology sector, Terhal addresses common travel challenges such as baggage mishandling, security concerns, and excess baggage fees. By integrating advanced technologies like GPS tracking, weight monitoring, and biometric locks, Terhal aims to enhance the travel experience with a smarter, more reliable luggage management solution.",
    },
    {
      src: "https://via.placeholder.com/500x300",
      alt: "Project 3",
      title: "IT320 Software Engineering -  License Leap",
      tags: ["Team","App","NoSql"],
      description: "Android application  streamline individual's license acquisition process",
      moreInfo:
        "a mobile application developed in flutter flow aimed at streamline  individual's license acquisition process. The application allows users to easily schedule driving lessons, exams, and simulations, manage appointments, and track their progress toward obtaining a driver's license. It incorporates features such as payment options, reservation management, notifications, and educational resources",
    },
    {
      src: "https://via.placeholder.com/500x300",
      alt: "Project 4",
      title: "IT312  Web Applications Engineering - Interior design",
      tags: ["Team","Web","SQL"],
      description: "A dynamic web platform focused on online interior design consultation",
      moreInfo:
        " developed using HTML, jQuery, and PHP. It features two types of users: clients and designers. The system includes authentication for both user types, allowing clients to request consultations and designers to manage and respond to these requests. It encompasses both front-end and back-end development for a seamless user experience.",
    },
    {
      src: "https://via.placeholder.com/500x300",
      alt: "Project 4",
      title: "IT424   Introduction to Project Management - Morshed|مرشد",
      tags: ["Team","Case Study"],
      description: "Morshed a case study for Project Management.",
      moreInfo:
        "Morshed is a case study for this course, focusing on the project management aspects of creating a web platform that connects travelers with tour guides in Saudi Arabia. It covers key elements like planning, scheduling, budgeting, and resource allocation, using tools such as work breakdown structures (WBS) and Gantt charts",
    },
    {
        src: "https://via.placeholder.com/500x300",
        alt: "Project 4",
        title: "IT222   Database Principles - Four Season",
        tags: ["Team","Case Study","SQL"],
        description: "database SQL design  for The Four Seasons hotel",
        moreInfo:
          "This project is part of a course focused on database design and SQL, where the goal is to create a database system for The Four Seasons hotel. The database will manage guest reservations, room details, and branch information. It includes designing a relational schema, defining entities like guests and rooms, and writing SQL queries for various transactions such as booking, updating, and querying reservations. The project covers the logical and physical phases of database creation, applying key concepts from the course like data models, relational algebra, and SQL.",
      },
      {
        src: "https://via.placeholder.com/500x300",
        alt: "Project 4",
        title: "IT326 Data Mining - will student attend college or not",
        tags: ["Team",'Cluster',"ML"],
        description: "finding if student will attend college or not bases pattern discovery and cluster analysis",
        moreInfo:
          " data mining project focused on classifying whether a student will attend college or not, using attributes like grades, parental salary, and other factors. The analysis includes data preprocessing steps such as encoding, normalization, discretization, and outlier detection building Classification and Clustering  models",
      },
      {
        src: "https://via.placeholder.com/500x300",
        alt: "Project 4",
        title: "CSC227 Operating Systems - Casse tête",
        tags: ["Team", "Java"],
        description: "building a Casse tête puzzle with Java and the use of synchronization mechanisms and multi-threading",
        moreInfo:
          "the objective of the puzzle is to remove a certain number of tokens from the grid such that each row and each column of the grid contains an even number of tokens. The puzzle involves solving for a valid configuration where this condition is met.",
      },
      {
        src: "https://via.placeholder.com/500x300",
        alt: "Project 4",
        title: "CSC212 Data Structures - maze puzzle",
        tags: ["Team", "Java"],
        description: "building a Maze puzzle through data structure binary tree",
        moreInfo:
          "used Java to implement a binary tree that represents a maze. The maze consists of nodes with directions ('S' for straight, 'T' for turn, 'X' for exit, and 'B' for start). The goal is to navigate from the start node to an exit, ensuring the path is valid, and find the shortest route using preorder traversal.",
      },
  ];
  
  

// Define tag colors explicitly (since Tailwind requires static class names)
const tagColors: { [key: string]: string } = {
  IoT: "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Team: "bg-pink-100 text-red-800 dark:bg-pink-900 dark:text-pink-300",
  "Case Study": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Cluster: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Web:"bg-yellow-100 text-yellow-800 dark:bg-yellow-500 dark:text-yellow-900",
  SQL:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  NoSql:"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  Java:"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-400",
};

// Ripple effect type
interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple: Ripple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onToggleExpand();
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      animate={{
        backgroundColor: isExpanded ? "#fff" : "rgba(0, 0, 0, 0.2)",
        color: isExpanded ? "#000" : "#fff",
      }}
      transition={{ duration: 0.3 }}
      className="relative gradient-border p-6 rounded-md shadow-sm cursor-pointer border-gray-50 hover:border-black transition-colors duration-300 overflow-hidden"
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
      <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
      
      <p>{project.description}</p>

      {/* Dynamically Render Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
              tagColors[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p>{project.moreInfo}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedProjects((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
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
