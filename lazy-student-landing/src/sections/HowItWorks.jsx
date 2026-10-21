import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../constants';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From hours of boring lectures to interactive study materials in just three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-800 via-green-500/50 to-gray-800 -z-10"></div>

          {HOW_IT_WORKS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mb-8 border-4 border-gray-800 shadow-[0_0_15px_rgba(34,197,94,0.1)] relative z-10 text-3xl font-extrabold text-green-400">
                {step.id}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}