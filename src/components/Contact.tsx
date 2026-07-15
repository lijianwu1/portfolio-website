import { motion } from 'framer-motion';

const contactLinks = [
  {
    name: '邮箱',
    value: 'hello@example.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: 'mailto:hello@example.com',
  },
  {
    name: 'GitHub',
    value: '@username',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.578.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/username',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: '#',
  },
  {
    name: '微信',
    value: 'wechat_id',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.322-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z" />
      </svg>
    ),
    href: '#',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-cyan-400 text-lg">联系我</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            保持联系
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            如果你有任何问题或合作意向，欢迎随时联系我！
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex flex-col items-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span className="text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  {link.icon}
                </span>
                <span className="text-white font-medium mb-1">{link.name}</span>
                <span className="text-gray-500 text-sm">{link.value}</span>
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">期待与你合作</h3>
            <p className="text-gray-300 mb-6">
              我正在寻找新的机会，如果你有项目需要帮助，或者只是想聊聊天，欢迎给我发消息！
            </p>
            <motion.a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              发送邮件
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
