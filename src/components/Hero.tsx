import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const fullText = "Engenheiro de Software | Analista de dados\nFull Stack Developer com experiência em LLMs";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
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
          {/* Greeting - com mais espaçamento do topo */}
          <motion.p 
            className="text-cyan-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 pt-8 md:pt-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Olá, me chamo
          </motion.p>

          {/* Main Name - com espaçamento reduzido */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="silver-title">Alvaro Assunção</span>
          </motion.h1>
          
          {/* Professional Description com typewriter effect contínuo */}
          <motion.div 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide text-gray-300 mb-8 sm:mb-12 leading-tight whitespace-pre-line"
            style={{ 
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace",
              fontWeight: 300,
              letterSpacing: '0.05em',
              lineHeight: '1.4'
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TypewriterEffect 
              text={fullText}
              speed={40} 
              delay={1500}
            />
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Especialista em soluções inteligentes com IA e análise de dados, transformando 
            processos complexos em automações eficientes. Com 3+ anos de experiência no setor 
            de O&G, criei sistemas que impactaram +500 usuários e reduziram custos operacionais significativamente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center mb-20 sm:mb-28 md:mb-36"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 sm:py-5 px-8 sm:px-10 text-base sm:text-lg md:text-xl w-full sm:w-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-4 sm:py-5 px-8 sm:px-10 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 bg-transparent w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm sm:text-base mb-3">Rolar para baixo</span>
          <ArrowDown size={20} className="sm:w-6 sm:h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
