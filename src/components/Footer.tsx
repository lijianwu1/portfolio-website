import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 bg-dark-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 我的作品集. 保留所有权利.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            用 React + TypeScript + Tailwind CSS 构建
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
