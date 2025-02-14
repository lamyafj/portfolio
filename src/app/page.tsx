// import { color } from "framer-motion";
import Image from "next/image";
import SkillCarousel from "./skillCarousel";
import Projects from "./projects";

// const skill=['./react.png','./node.png','./php.png','./python.png','./java.png']



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src="/lj2.png" width={140} height={140} alt="Logo" className="rounded-xl mt-[50px]" />
      <h1 className="text-4xl font-bold">Lamya Aljaithin</h1>
      <p className="mx-auto mt-[10px] mb-[10px] text-[18px] font-light text-[white] text-center max-w-lg">
  Senior IT student at KSU with focus on cybersecurity  <br /> skilled in problem-solving and adapting to new technologies.
</p>
      <div className="text-center">
      <a href="https://www.linkedin.com/in/lamyafj/" target="_blank" rel="noopener noreferrer">
  <button className="text-gray-800 inline-block px-4 py-2 mr-2  border-2 bg-white rounded-full font-semibold text-sm">
  Let&apos;s Connect
    <svg className="h-4 w-4 text-black-500 inline ml-1" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="17" y1="7" x2="7" y2="17" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  </button>
</a>
<a href="mailto:lamya.aljaithin@gmail.com">
  <button className="text-white inline-block px-7 py-2 bg-transparent border-2 rounded-full font-semibold text-sm">
    Email Me
    <i className="fas fa-envelope text-white ml-2"></i>
  </button>
</a>

</div>

<div>
  
</div>
   
      <SkillCarousel />

      <main className="flex flex-col gap-8 items-center sm:items-center">
        <p>Academic Projects</p>

     <Projects/>
      </main>

      <footer className="mt-16  flex flex-col items-center justify-center">
        {/* <i className="fas fa-heart" style={{ color: "white" }}></i> */}
        <p className="mt-[20px] mb-[10px] text-[14px] font-light text-[#C5C5C5] text-center">
          MADE <i className="fas fa-heart text-pink-500"></i>  BY LJ © 2025
        </p>
      </footer>
    </div>
  );
}
