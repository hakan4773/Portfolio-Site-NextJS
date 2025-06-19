"use client";
import { motion, animate } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Photo from "../public/1.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState(0);
  const [certificate, setCertificate] = useState([]);
  const [certificateCount, setCertificateCount] = useState(0);
  const [animatedProjectCount, setAnimatedProjectCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsRes, certificateRes] = await Promise.all([
          fetch("/api/portfolyo", { cache: "no-store" }),
          fetch("/api/certificate", { cache: "no-store" }),
        ])

        if (!projectsRes.ok || !certificateRes.ok) {
          throw new Error("Failed to fetch data");
        }
        const projectsData = await projectsRes.json();
        const certificateData = await certificateRes.json();
        setProjects(projectsData.project || []);
        setCertificate(certificateData.certificate || []);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    animate(0,projects.length, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setAnimatedProjectCount(Math.round(latest)),
    });
    animate(0, 0, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setBlogs(Math.round(latest)),
    });
    animate(0 , certificate.length , {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setCertificateCount(Math.round(latest)),
    });
  }, [projects, certificate]);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Merhaba, Ben{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Hakan Bulduk
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Frontend  Developer
          </p>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-xl">
              <Image
                src={Photo}
                alt="Hakan Bulduk"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mb-16">
            <Link href="/projects">
              <motion.button
                whileHover={{scale: 1.05,boxShadow: "0 8px 32px rgba(59, 130, 246, 0.5)",}}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Projelerimi Gör
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button  whileHover={{  scale: 1.05, boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)"}}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-500 text-blue-400 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-blue-500/10 transition"
              >
                İletişime Geç
              </motion.button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: animatedProjectCount, label: "Projeler" },
              { value: blogs, label: "Bloglar" },
              { value: certificateCount, label: "Sertifikalar" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-blue-400">
                  {item.value}+
                </div>
                <div className="text-lg text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}