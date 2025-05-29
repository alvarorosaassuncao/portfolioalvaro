
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Greeting */}
          <motion.p 
            className="text-cyan-400 text-lg mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Olá, me chamo
          </motion.p>

          {/* Main Name with Typewriter Effect */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="silver-title">
              <TypewriterEffect 
                text="Alvaro " 
                speed={150}
                delay={800}
                onComplete={() => setShowSubtitle(true)}
              />
              {showSubtitle && (
                <span className="text-blue-400">
                  <TypewriterEffect 
                    text="Assunção"
                    speed={150}
                    onComplete={() => setShowDescription(true)}
                  />
                </span>
              )}
            </span>
          </motion.h1>
          
          {/* Subtitle with Typewriter Effect */}
          {showDescription && (
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 silver-title"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <TypewriterEffect 
                text="Transformando dados em insights valiosos"
                speed={80}
                onComplete={() => setShowButtons(true)}
              />
            </motion.h2>
          )}
          
          {/* Description */}
          {showButtons && (
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <TypewriterEffect 
                text="Sou um analista de dados apaixonado por encontrar padrões e histórias escondidas em conjuntos de dados complexos. Especializado em visualização de dados, engenharia de dados e business intelligence."
                speed={50}
              />
            </motion.p>
          )}

          {/* CTA Buttons */}
          {showButtons && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <Button 
                className="modern-button text-white font-semibold py-4 px-8 text-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contato
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Rolar para baixo</span>
            <ArrowDown size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
