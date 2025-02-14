"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import proje1 from "../../public/image.png"
import proje2 from "../../public/recipe-site.png"

export default function Projects() {
  return (
    <main className="min-h-screen from-gray-900 bg-gradient-to-b to-gray-800 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className="text-gray-200 text-3xl pl-16">Project</h1>
        </div>
        <div></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-[300px] lg:px-8 px-20 pt-16 flex flex-col gap-6"
        >
          <div className="w-[300px] text-gray-200  flex flex-col rounded-md shadow-xl
          bg-gray-800
          ">
         
           <div><Image src={proje1} alt="project image" className="w-full object-cover rounded-md "  /></div>
            <div className="flex flex-col p-2">
            <p className="text-xl flex justify-center items-center ">Portfölyo Sitesi</p>
          Teknolojiler:  Next js, HTML, Tailwind CSS
            </div>
          </div>

          <div className="w-[300px] text-gray-200  flex flex-col rounded-md shadow-xl
          bg-gray-800
          ">
         
           <div>
            <Image src={proje2} alt="project image" className="w-full object-cover rounded-md "  /></div>
            <div className="flex flex-col p-2">
            <p className="text-xl flex justify-center items-center ">Portfölyo Sitesi</p>
          Teknolojiler:  Next js, HTML, Tailwind CSS
            </div>
          </div>

        </motion.div>
      </motion.div>
    </main>
  );
}
