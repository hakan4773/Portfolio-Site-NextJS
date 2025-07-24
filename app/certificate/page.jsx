"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [certificates, setCertificates] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/certificate", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCertificates(data.certificate || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 lg:px-8"
      >


        {/* Sertifika Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
        >
          {certificates.length > 0 ? (
            certificates.map((certificate, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
                  borderColor: "#3b82f6",
                }}
                className="relative group bg-gradient-to-br from-gray-800/80 to-blue-900/60 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={certificate.imageUrl || "/default-certificate.jpg"}
                    alt={certificate.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* İkon veya logo */}
                  {certificate.icon && (
                    <span className="absolute top-3 left-3 text-3xl drop-shadow-lg">{certificate.icon}</span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-400 mb-1">{certificate.title}</h2>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-2">{certificate.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-blue-300">
                    {certificate.org && <span>{certificate.org}</span>}
                    {certificate.date && <span>{certificate.date}</span>}
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border-t border-gray-700">
                  <Link
                    href={certificate.link?.startsWith("http") ? certificate.link : `https://${certificate.link}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                    target="_blank"
                  >
                    Görüntüle
                  </Link>
                  <button
                    onClick={() => setSelected(certificate)}
                    className="text-blue-400 hover:underline text-xs"
                  >
                    Detay
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">
              Sertifika bulunamadı.
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Modal Detay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{selected.title}</h2>
              <p className="text-gray-300 mb-4">{selected.description}</p>
              <div className="flex flex-col gap-1 text-sm text-blue-200">
                {selected.org && <span>Kurum: {selected.org}</span>}
                {selected.date && <span>Tarih: {selected.date}</span>}
                {selected.id && <span>Sertifika No: {selected.id}</span>}
                {selected.skills && <span>Yetenekler: {selected.skills}</span>}
              </div>
              <div className="mt-4">
                <Link
                  href={selected.link?.startsWith("http") ? selected.link : `https://${selected.link}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                  target="_blank"
                >
                  Sertifikayı Görüntüle
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}