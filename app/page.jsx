'use client';
import { motion,animate } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Photo from "../public/1.jpg"
import { useEffect, useState } from 'react';


export default function Home() {

const [projects,setProjects]=useState(0);
const [blogs,setBlogs]=useState(0);
const [certificate,setCertificate]=useState(0);




useEffect(() => {
  animate(0, 15, {
    duration:2,
    ease: "circOut",
    onUpdate: (latest) => setProjects(Math.round(latest)),
  });
  animate(0, 5, {
    duration:2,
    ease: "circOut",
    onUpdate: (latest) => setBlogs(Math.round(latest)),
  });
  animate(0, 5, {
    duration:2,
    ease: "circOut",
    onUpdate: (latest) => setCertificate(Math.round(latest)),
  });
}, []);
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onUpdate={(latest)=>console.log(latest.x)}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Merhaba, Ben <span className="text-blue-500">Hakan Bulduk</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Full Stack Geliştirici & Next Js Geliştirici
          </p>
          
          <div className="flex justify-center gap-4">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold"
              >
                Projelerimi Gör
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold"
              >
                İletişime Geç
              </motion.button>
            </Link>
          </div>
<div className='flex justify-center items-center '>
<Image src={Photo}  className='w-[320px] h-80 rounded-full p-2' alt='photo'></Image>
</div>


<div className='flex flex-row justify-center items-center lg:space-x-12 space-x-2 text-4xl  pt-12 text-blue-400   '>
   <div className=' rounded-md  shadow-2xl lg:p-8 p-4  lg:w-44 w-32 bg-gray-700 transition delay-100 ease-in-out duration-300 hover:translate-y-1 hover:scale-100 hover:rotate-[360deg]'>
  {projects}+ <span className='text-xl '>Projeler</span>
   </div>

   <div className='rounded-md shadow-2xl lg:p-8 p-4 lg:w-44 w-32 bg-gray-700  transition delay-100 ease-in-out duration-300 hover:translate-y-1 hover:scale-100 hover:rotate-[360deg]'>
  {blogs}+ <span className='text-xl '><br></br>Bloglar</span>
   </div>

   <div className='rounded-md shadow-2xl lg:p-8 p-4  lg:w-44 w-32 bg-gray-700  transition delay-100 ease-in-out duration-300 hover:translate-y-1 hover:scale-100 hover:rotate-[360deg]'>
  {certificate}+ <span className='text-xl '><br></br>Sertifikalar</span>
   </div>

   
</div>



        </motion.div>
      </div>






    </main>
  );
} 