import { motion } from 'framer-motion';
import { FaTerminal, FaWindows, FaPython } from 'react-icons/fa';
import { INSTALLATION_STEPS } from '../constants';


const getStepIcon = (id) => {
  switch (id) {
    case 1: return <FaWindows className="text-3xl text-blue-400" />;
    case 2: return <FaTerminal className="text-3xl text-green-400" />;
    case 3: return <FaPython className="text-3xl text-yellow-400" />;
    default: return null;
  }
};

export default function Installation() {
  return (
    <section id="installation" className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Installation Guide</h2>
          <p className="text-gray-400">
            Set up your local AI environment in just three steps. No cloud, no subscriptions.
          </p>
        </div>

        <div className="space-y-12">
          {INSTALLATION_STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg relative overflow-hidden"
            >
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 shrink-0 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-700">
                  {getStepIcon(step.id)}
                </div>
                
                <div className="flex-1 w-full">
                  <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  
                  {step.code && (
                    <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm border border-gray-800 shadow-inner overflow-x-auto">
                      <div className="flex items-center gap-2 mb-3 border-b border-gray-800 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-500 text-xs ml-2">Terminal (Admin)</span>
                      </div>
                      <pre className="text-green-400 whitespace-pre-wrap">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}