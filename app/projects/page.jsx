"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";
export default  function Projects() {
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
    async function fetchData() {
     try {
      const res=await fetch("api/portfolyo",{
        cache:"no-store",
      })
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
        const data=await res.json();
        console.log(data)
       setProjects(data.project)
  
      }
  
      catch (error) {
        console.error("Error fetching data:", error);
  
     }
    }
    fetchData();
  
  
  },[])
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
          {projects?.map((project,index)=>(
          <div key={index} className="w-[300px]  text-gray-200  flex flex-col rounded-md shadow-xl
          bg-gray-800">
         
           <div><Image   src={project.imageUrl}
                  alt="project image" className="w-full rounded-md h-56" width={200}  height={100}/></div>
            <div className="flex flex-col p-2">
            <p className="text-xl flex justify-center items-center ">{project.title}</p>
          Teknolojiler:  Next js, HTML, Tailwind CSS
            </div>
          </div>))}

          {/* <div className="w-[300px] text-gray-200  flex flex-col rounded-md shadow-xl
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
            </div> */}

        </motion.div>
      </motion.div>
    </main>
  );
}
