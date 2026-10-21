import { motion } from 'framer-motion';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { GITHUB_LINK, DOWNLOAD_LINK } from '../constants';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-gray-950 text-white">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 max-w-4xl text-center">
        {/* <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-green-400 bg-green-400/10 rounded-full border border-green-400/20"
        >
          🎉 Hacktoberfest 2026 Submission
        </motion.div> */}

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Master your lectures with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Lazy Student AI 🦥
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A 100% offline, privacy-first AI tool that summarizes your PDFs, Audio, and Video lectures into readable bullet points and interactive flashcards.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={DOWNLOAD_LINK} className="flex items-center gap-2 px-8 py-4 font-bold text-gray-900 transition-all bg-green-500 rounded-xl hover:bg-green-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <FaDownload /> Download App
          </a>
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 font-bold text-white transition-all bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 hover:scale-105 active:scale-95">
            <FaGithub /> View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}