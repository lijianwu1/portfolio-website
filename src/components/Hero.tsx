import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-cyan-400 text-lg">你好，我是</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">前端</span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">开发者</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          热爱创造优雅的用户体验，专注于 React、TypeScript 和现代前端技术。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            查看项目
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            联系我
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500"
          >
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
