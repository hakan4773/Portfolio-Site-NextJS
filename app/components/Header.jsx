'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-white">Portfolio</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-500 transition">
              Ana Sayfa
            </Link>
            <Link href="/about" className="text-white hover:text-blue-500 transition">
              Hakkımda
            </Link>
            <Link href="/projects" className="text-white hover:text-blue-500 transition">
              Projeler
            </Link>
                <Link href="/certificate" className="text-white hover:text-blue-500 transition">
              Sertifikalar
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-500 transition">
              İletişim
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            <Link href="/" className="block text-white hover:text-blue-500">
              Ana Sayfa
            </Link>
            <Link href="/about" className="block text-white hover:text-blue-500">
              Hakkımda
            </Link>
            <Link href="/projects" className="block text-white hover:text-blue-500">
              Projeler
            </Link>
               <Link href="/certificate" className="text-white hover:text-blue-500 transition">
              Sertifikalar
            </Link>
            <Link href="/contact" className="block text-white hover:text-blue-500">
              İletişim
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
} 