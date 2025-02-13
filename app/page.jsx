'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Photo from "../public/1.jpg"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
<div className='flex justify-center items-center'>
<Image src={Photo}  className='w-[320px] h-80 rounded-full p-2' alt='photo'></Image>

</div>





        </motion.div>
      </div>






    </main>
  );
} 