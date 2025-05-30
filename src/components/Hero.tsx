
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-blue-900/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p 
            className="text-cyan-400 text-sm sm:text-base md:text-lg mb-3 sm:mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Olá, me chamo
          </motion.p>

          {/* Main Name - Reformatted */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="silver-title">Alvaro</span>
            <span className="text-blue-400 ml-2 font-light">Assunção</span>
          </motion.h1>
          
          {/* Professional Description */}
          <motion.div 
            className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide text-gray-300 mb-6 sm:mb-8 space-y-1 sm:space-y-2"
            style={{ 
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace",
              fontWeight: 300,
              letterSpacing: '0.05em'
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div>Engenheiro de Software</div>
            <div>Full Stack Developer especializado em soluções AI</div>
            <div>Analista de Dados</div>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Transformando dados em insights valiosos
          </motion.p>

          {/* CTA Buttons - Enhanced for mobile */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-16 sm:mb-24 md:mb-32"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base md:text-lg w-full sm:w-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 bg-transparent w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs sm:text-sm mb-2">Rolar para baixo</span>
            <ArrowDown size={16} className="sm:w-5 sm:h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
