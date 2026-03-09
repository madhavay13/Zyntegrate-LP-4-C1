import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import bg from '../assets/bg.jpg';



export function Hero() {
  // const heroAnimation = new URL('../assets/your-animation.lottie', import.meta.url).href;
  return (
    <section id='hero' className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-brand-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Connect Everything.
              Automate Anything.
              <span className="block text-brand-500">
                Powered by Intelligent Agents.
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-500 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Zyntegrate unifies fragmented systems and automates complex workflows from legacy databases to cloud platforms and APIs all in one intelligent layer.
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-blue-200/30 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm">
              <img src={bg} alt="Hero Image" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}