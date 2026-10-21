import { motion } from 'framer-motion';
import { FaFilePdf, FaBrain, FaShieldAlt } from 'react-icons/fa';
import { FEATURES } from '../constants';


const getIcon = (id) => {
  switch (id) {
    case 1: return <FaFilePdf className="text-4xl text-green-400" />;
    case 2: return <FaBrain className="text-4xl text-green-400" />;
    case 3: return <FaShieldAlt className="text-4xl text-green-400" />;
    default: return null;
  }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Lazy Student AI?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to crush your exams without spending hours reading transcripts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-400/50 transition-colors shadow-lg"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-6 border border-gray-700">
                {getIcon(feature.id)}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}