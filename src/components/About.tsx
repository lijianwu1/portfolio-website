import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-lg">关于我</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            个人简介
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 overflow-hidden">
                  <img
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20portrait%20avatar%20with%20modern%20style%20dark%20background&image_size=square"
                    alt="头像"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">我是一名充满热情的前端开发者</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              拥有多年的前端开发经验，专注于构建高性能、用户友好的 Web 应用。
              我热爱学习新技术，并且善于将复杂的问题转化为简洁优雅的解决方案。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              在工作中，我注重代码质量和团队协作，致力于创建可维护、可扩展的代码库。
              我相信好的设计应该是简单而有力的，能够为用户带来真正的价值。
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Vue', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">技能栈</h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                <span className="block text-gray-500 text-xs mt-1">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
