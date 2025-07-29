
import { ArrowDown, Database, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const fullText = "Engenheiro de Software | Analista de dados | Analista de Sistemas\nDeveloper IA";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Geometric shapes for modern data theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-emerald-400/30 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-cyan-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.p 
              className="text-emerald-400 text-lg font-medium mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Olá, me chamo
            </motion.p>

            {/* Main Name */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="silver-title">Alvaro Assunção</span>
            </motion.h1>
            
            {/* Professional Description */}
            <motion.div 
              className="text-xl md:text-2xl font-light text-gray-300 mb-6 text-left"
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
              className="text-lg text-gray-400 mb-8 leading-relaxed text-left max-w-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Soluções inteligentes com IA e análise de dados, transformando 
              processos complexos em automações eficientes. 3+ anos de experiência 
              no setor de O&G.
            </motion.p>

            {/* Technologies Highlight */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-2 hover:bg-emerald-400/20 transition-all duration-300 cursor-pointer">
                    <span className="text-2xl">🐍</span>
                    <span className="text-emerald-400 font-medium">Python</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Python: linguagem versátil para automações e análise de dados</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-xl px-4 py-2 hover:bg-cyan-400/20 transition-all duration-300 cursor-pointer">
                    <BarChart3 className="text-cyan-400" size={20} />
                    <span className="text-cyan-400 font-medium">Power BI</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Power BI: criação de dashboards e visualizações interativas</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 bg-blue-400/10 border border-blue-400/20 rounded-xl px-4 py-2 hover:bg-blue-400/20 transition-all duration-300 cursor-pointer">
                    <Database className="text-blue-400" size={20} />
                    <span className="text-blue-400 font-medium">SQL</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>SQL: manipulação e análise avançada de bancos de dados</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4 text-left"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <Button 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-6 text-lg rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 py-3 px-6 rounded-xl text-lg font-semibold transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contato
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Clean image display */}
            <div className="relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-emerald-400/10 shadow-2xl">
              <img 
                src="/lovable-uploads/d3dea75f-785f-4f53-8049-33b4ee0aa0e7.png" 
                alt="Alvaro Assunção - Perfil Profissional" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-3">Rolar para baixo</span>
          <ArrowDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
