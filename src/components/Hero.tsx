
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
        >
          {/* Greeting */}
          <motion.p 
            className="text-cyan-400 text-base sm:text-lg mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Olá, me chamo
          </motion.p>

          {/* Main Name - Reduced size */}
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="silver-title">
              Alvaro{' '}
              <span className="text-blue-400">
                Assunção
              </span>
            </span>
          </motion.h1>
          
          {/* Professional Description with digital/gaming style font */}
          <motion.h2 
            className="text-xs sm:text-sm md:text-base lg:text-lg font-thin tracking-wider text-gray-300 mb-6 sm:mb-8"
            style={{ 
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace",
              fontWeight: 200,
              letterSpacing: '0.1em'
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Engenheiro de Software | Full Stack Developer especializado em soluções AI | Analista de Dados
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto px-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Transformando dados em insights valiosos
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-24 sm:mb-32 px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Button 
              className="modern-button text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 bg-transparent w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - moved further down */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs sm:text-sm mb-2">Rolar para baixo</span>
            <ArrowDown size={20} className="sm:w-6 sm:h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
