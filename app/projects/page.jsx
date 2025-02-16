"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default  function Projects() {
  const [projects,setProjects]=useState([]);
  const [searchTerm,setSearchTerm]=useState("")

const filteredProjects=projects.filter(project=>project.description.toLowerCase().includes(searchTerm.toLowerCase()))

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
const updateProjects=data.project.map((project)=>({
  ...project,
  liked:false,
  likecount:20,

}))
       setProjects(updateProjects)
  
      }
  
      catch (error) {
        console.error("Error fetching data:", error);
  
     }
    }
    fetchData();
  
  },[])

const HandleLike=(index)=>{

setProjects(projects.map((project,id)=>
   id===index ? {
    ...project,liked:!project.liked , 
    likecount:project.liked ? project.likecount - 1 : project.likecount +1 }:project
  ))
}

  return (
    <main className="min-h-screen from-gray-900 bg-gradient-to-b to-gray-800 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>

        <div className="w-44 ">
          <h1 className="text-gray-200 text-3xl pl-16">Project</h1>
         
        </div>
         <div className="grid  lg:justify-items-end justify-items-start  lg:px-36 px-12  lg:mb-4 mt-6 text-white ">
             <input type="text"
              placeholder="Ara..."
              value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
              className="relative rounded-lg bg-gray-900 p-1 border lg:px-6 px-12 ">
            </input>
            
            <CiSearch className="absolute px-2" size={35}/>
          </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className=" lg:px-8 px-10 pt-16 grid lg:flex-row flex-col gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

          {filteredProjects?.map((project,index)=>(
          <div key={index} className="w-[350px]  text-gray-200  flex flex-col rounded-md shadow-xl
          bg-gray-800 hover:scale-105 ">

          <div>

          <Image   src={project.imageUrl}
           
            alt="project image" className="w-full rounded-md h-56" width={200}  height={100}/></div>
            <div className="flex flex-col p-2">
            <p className="text-xl flex justify-center items-center ">{project.title}</p>
         {project.description}
            </div>

            <div className="flex flex-row space-x-6" >
            <div className="p-2 flex gap-2  ">
              <button onClick={()=>HandleLike(index)}> 
                { 
                project.liked ?  (<AiFillLike size={24}/>  ) : (<AiOutlineLike size={24} />)
                }</button>
                <div className="pt-2">{project.likecount}</div>

               
              </div>

              <div className="flex pt-3 gap-2"><FaRegEye size={24} />
                <div className="">{project.likecount}</div>
                </div>

</div>
          </div>))}

      
        </motion.div>
      </motion.div>
    </main>
  );
}
