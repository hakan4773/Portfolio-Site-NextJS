'use client';
import { motion } from 'framer-motion';
export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto">

          <h1 className="text-4xl font-bold text-white mb-8">İletişim</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                İsim
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="İsminizi girin"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="E-posta adresinizi girin"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mesajınızı yazın"
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
              type="submit"
            >
              Gönder
            </motion.button>
          </form>

          <div className="mt-12 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Diğer İletişim Kanalları</h2>
            <div className="flex justify-center space-x-6">
              <a href="mailto:your@email.com" className="text-gray-300 hover:text-blue-500">
                buldukhakan82@gmail.com
              </a>
              <a href="https://linkedin.com/in/hakan-bulduk-b3a084317" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
              </a>
              <a href="https://github.com/hakan4773" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                GitHub
              </a>
              
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 