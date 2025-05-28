"use client"
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function page() {
    const router = useRouter();
     const [certificates, setCertificates] = React.useState([]);
useEffect(()=>{
    async function fetchData() {
        try {
        const res = await fetch("/api/certificate", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCertificates(data.certificate || []);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    }
    fetchData();
},[])

  return (
     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 lg:px-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Sertifikalarım
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certificates.length > 0 ? (
            certificates.map((cerfificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={cerfificate.imageUrl}
                    alt={`${cerfificate.title} project thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-400 mb-2">{cerfificate.title}</h2>
                  <p className="text-gray-400 text-sm line-clamp-3">{cerfificate.description}</p>
                </div>

                <div className="flex items-center justify-between p-6 border-t border-gray-700">
                  <Link
                    href={`https://${cerfificate.link}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                    target="_blank"
                 >
                    Görüntüle
                  </Link>
                 
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

  )
}

export default page
