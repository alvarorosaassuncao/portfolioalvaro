
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Name */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="gradient-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                ÁLVARO
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <span className="text-white">SILVA ROSA</span>
            </motion.h1>
          </motion.div>
          
          {/* Professional Titles */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2 font-light"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Engenheiro de Software | Full Stack Developer
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Especializado em soluções AI | Analista de Dados
            </motion.p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2 text-gray-300 bg-gray-800/30 px-4 py-2 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 53, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <Mail size={16} className="text-primary" />
              <span>asra.devops@gmail.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-gray-300 bg-gray-800/30 px-4 py-2 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 53, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <Phone size={16} className="text-primary" />
              <span>(32) 99948-2095</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-gray-300 bg-gray-800/30 px-4 py-2 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 53, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <MapPin size={16} className="text-primary" />
              <span>Pirapetinga, MG</span>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            <motion.a 
              href="#" 
              className="p-4 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700 hover:border-primary transition-all duration-300"
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                boxShadow: "0 0 25px rgba(255, 107, 53, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} className="text-primary" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-4 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700 hover:border-primary transition-all duration-300"
              whileHover={{ 
                scale: 1.2,
                rotate: -360,
                boxShadow: "0 0 25px rgba(255, 107, 53, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} className="text-primary" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 107, 53, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-black py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="p-2 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700"
          >
            <ArrowDown size={24} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
