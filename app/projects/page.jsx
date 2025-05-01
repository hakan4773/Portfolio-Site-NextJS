"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.technologies.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/portfolyo", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const updatedProjects = data.project.map((project) => ({
          ...project,
          liked: false,
          likecount: 1,
        }));
        setProjects(updatedProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleLike = (index) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, id) =>
        id === index
          ? {
              ...project,
              liked: !project.liked,
              likecount: project.liked ? project.likecount - 1 : project.likecount + 1,
            }
          : project
      )
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 lg:px-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Projelerim
        </h1>

        <div className="relative max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Teknoloji ara (örn: React, Next.js)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800/50 backdrop-blur-md text-gray-200 rounded-full py-3 pl-12 pr-4 border border-gray-700 focus:outline-none focus:border-blue-500 transition"
          />
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} project thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold">Teknolojiler:</span> {project.technologies}
                  </p>
                  <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                </div>

                <div className="flex items-center justify-between p-6 border-t border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push("https://app.netlify.com/teams/buldukhakan82/sites")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    Görüntüle
                  </motion.button>
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(index)}
                      aria-label={project.liked ? "Beğeniyi kaldır" : "Beğen"}
                    >
                      {project.liked ? (
                        <AiFillLike size={24} className="text-blue-400" />
                      ) : (
                        <AiOutlineLike size={24} className="text-gray-400" />
                      )}
                    </motion.button>
                    <span className="text-sm text-gray-400">{project.likecount}</span>
                    <div className="flex items-center gap-2">
                      <FaRegEye size={20} className="text-gray-400" />
                      <span className="text-sm text-gray-400">{project.likecount}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">
              Aramanıza uygun proje bulunamadı.
            </div>
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}