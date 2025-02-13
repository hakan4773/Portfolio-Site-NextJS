'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Hakkımda</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-gray-300 space-y-4">
              <p>
                Merhaba! Ben <b className='text-white'>Hakan Bulduk</b>, tutkulu bir full stack geliştirici ve Next js geliştiriciyim.
                Mardin'de yaşıyorum.Yeni mezun bilgisayar mühendisiyim ve web teknolojileri konusunda kendimi geliştiriyorum.
              </p>
              <p>
                Modern web teknolojileri ve en iyi uygulamalar konusunda sürekli kendimi geliştiriyorum.
                React, Next.js, Node.js ve JavaScript gibi teknolojilerle çalışmaktan keyif alıyorum.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Yeteneklerim</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-blue-500 font-semibold">Frontend</h3>
                  <ul className="text-gray-300 mt-2">
                    <li>React / Next.js</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>Material UI</li>

                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-blue-500 font-semibold">Backend</h3>
                  <ul className="text-gray-300 mt-2">
                    <li>Node.js</li>
                    <li>Express</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-blue-500 font-semibold">DataBase</h3>
                  <ul className="text-gray-300 mt-2">
                  <li>SQL</li>
                  <li>MongoDB</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 