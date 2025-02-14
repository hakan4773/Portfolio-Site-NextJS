"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import proje1 from "../../public/portfolio.png"
import proje2 from "../../public/recipe-site.png"
import proje3 from "../../public/ecommerce.png"

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
          className=" lg:px-8 px-10 pt-16 flex lg:flex-row flex-col gap-6"
        >
          <div className="w-[300px]  text-gray-200  flex flex-col rounded-md shadow-xl
          bg-gray-800">
         
           <div><Image src={proje1} alt="project image" className="w-full rounded-md h-56"  /></div>
            <div className="flex flex-col p-2">
            <p className="text-xl flex justify-center items-center ">Portfölyo Sitesi</p>
          Teknolojiler:  Next js, HTML, Tailwind CSS
            </div>
          </div>

          <div className="w-[300px] text-gray-200  flex flex-col rounded-md shadow-xl
          bg-gray-800
          ">
         
           <div>
            <Image src={proje2} alt="project image" className="w-full rounded-md h-56"  /></div>
            <div className="flex flex-col p-2">
            <p className="text-xl flex justify-center items-center ">Yemek Tarifi Sitesi</p>
          Teknolojiler:  Next js, HTML, Tailwind CSS
            </div>
          </div>

          <div className="w-[300px] text-gray-200  flex flex-col rounded-md shadow-xl
          bg-gray-800
          "><div>
            <Image src={proje3} alt="project image" className="w-full rounded-md h-56"  />
            </div>
            <div className="flex flex-col p-2">
            <p className="text-xl flex justify-center items-center ">E-Ticaret Sitesi</p>
          Teknolojiler:  React, HTML, Tailwind CSS
            </div>
            </div>

        </motion.div>
      </motion.div>
    </main>
  );
}
