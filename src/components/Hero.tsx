
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl floating"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 8,
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
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text text-reveal">
                <span style={{ animationDelay: '0.1s' }}>Á</span>
                <span style={{ animationDelay: '0.2s' }}>L</span>
                <span style={{ animationDelay: '0.3s' }}>V</span>
                <span style={{ animationDelay: '0.4s' }}>A</span>
                <span style={{ animationDelay: '0.5s' }}>R</span>
                <span style={{ animationDelay: '0.6s' }}>O</span>
              </span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="text-white text-reveal">
                <span style={{ animationDelay: '0.8s' }}>S</span>
                <span style={{ animationDelay: '0.9s' }}>I</span>
                <span style={{ animationDelay: '1.0s' }}>L</span>
                <span style={{ animationDelay: '1.1s' }}>V</span>
                <span style={{ animationDelay: '1.2s' }}>A</span>
                <span style={{ animationDelay: '1.3s' }}> </span>
                <span style={{ animationDelay: '1.4s' }}>R</span>
                <span style={{ animationDelay: '1.5s' }}>O</span>
                <span style={{ animationDelay: '1.6s' }}>S</span>
                <span style={{ animationDelay: '1.7s' }}>A</span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-4 fade-left"
            variants={itemVariants}
          >
            Engenheiro de Software | Full Stack Developer
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-8 fade-right"
            variants={itemVariants}
          >
            Especializado em soluções AI | Analista de Dados
          </motion.p>

          {/* Contact Info with stagger animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2 text-gray-300 stagger-child hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={16} className="text-primary" />
              <span>asra.devops@gmail.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-gray-300 stagger-child hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={16} className="text-primary" />
              <span>(32) 99948-2095</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-gray-300 stagger-child hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={16} className="text-primary" />
              <span>Pirapetinga, MG</span>
            </motion.div>
          </motion.div>

          {/* Social Links with hover animations */}
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            <motion.a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 pulse-glow ripple"
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 pulse-glow ripple"
              whileHover={{ 
                scale: 1.2,
                rotate: -360,
                transition: { duration: 0.6 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons with advanced animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-primary hover:bg-primary/80 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 glow-effect ripple">
                Ver Projetos
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black py-3 px-8 rounded-full transition-all duration-300 ripple">
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
          >
            <ArrowDown size={24} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
