// import { color } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Image src="./lj2.png" width={96} height={96} alt="Logo" className="rounded-xl" />
      <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-lg">
        Senior IT student</p>
      <div className="text-center">
      <a href="https://www.linkedin.com/in/lamyafj/" target="_blank" rel="noopener noreferrer">
  <button className="text-gray-800 inline-block px-4 py-2 mr-2 bg-white rounded-full font-semibold text-sm">
  Let&apos;s Connect
    <svg className="h-4 w-4 text-black-500 inline ml-1" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="17" y1="7" x2="7" y2="17" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  </button>
</a>
<a href="mailto:lamya.aljaithin@gmail.com">
  <button className="text-white inline-block px-4 py-2 bg-transparent border-2 rounded-full font-semibold text-sm">
    Email Me
    <i className="fas fa-envelope text-white ml-2"></i>
  </button>
</a>

</div>
      <main className="flex flex-col gap-8 items-center sm:items-center">
        <p>Academic Projects</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((project) => (
                <div key={project} className="bg-black/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black transition-colors duration-300">
                  <h2 className="text-xl font-semibold mb-4">Project {project}</h2>
                  <p className="text-white-700">Description of Project {project} goes here. You can provide more details about the project.</p>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                  </div>
                </div>
              ))}
            </div>
      </main>

      <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center">
      <i className="fas fa-heart" style={{ color: "white" }}></i> 
      </footer>
    </div>
  );
}
