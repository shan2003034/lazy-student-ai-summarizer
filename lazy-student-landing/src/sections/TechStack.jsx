import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built for the Future</h2>
          <p className="text-gray-400">Powered by modern web technologies and open-source AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_STACK.map((stack, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-400/30 transition-all"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6 border-b border-gray-800 pb-3">
                {stack.category}
              </h3>
              <ul className="space-y-3">
                {stack.technologies.map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}