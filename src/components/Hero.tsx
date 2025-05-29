
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="gradient-text">ÁLVARO</span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-white">SILVA ROSA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            Engenheiro de Software | Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            Especializado em soluções AI | Analista de Dados
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={16} className="text-primary" />
              <span>asra.devops@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={16} className="text-primary" />
              <span>(32) 99948-2095</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={16} className="text-primary" />
              <span>Pirapetinga, MG</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110 glow-effect">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110 glow-effect">
              <Github size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <Button className="bg-primary hover:bg-primary/80 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 glow-effect">
              Ver Projetos
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
