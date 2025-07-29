
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main content */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="silver-title">Alvaro</span>
            <span className="text-blue-400 ml-2">Assunção</span>
          </h3>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Transformando dados complexos em insights valiosos e soluções impactantes para negócios.
          </p>
          
          {/* Download CV Buttons */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/lovable-uploads/6bc250c4-2cdd-4b3d-a9bb-7e78ab69410f.png" 
              download="Alvaro_Assuncao_CV_Completo.png"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              CV Completo
            </a>
            <a 
              href="/lovable-uploads/2d5c7482-f2b7-4dcd-8b7d-c83de1d75908.png" 
              download="Alvaro_Assuncao_Projetos.png"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Projetos
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:asra.devops@gmail.com" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navigation sections - Optimized for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 max-w-4xl mx-auto">
          {/* Links Rápidos */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Início</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Sobre</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Habilidades</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Experiência</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Projetos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Serviços</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Visualização de Dados</span></li>
              <li><span className="text-gray-400 text-sm">Business Intelligence</span></li>
              <li><span className="text-gray-400 text-sm">Machine Learning</span></li>
              <li><span className="text-gray-400 text-sm">Consultoria</span></li>
              <li><span className="text-gray-400 text-sm">Análise Estatística</span></li>
            </ul>
          </div>

          {/* Informações - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Informações</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Blog</span></li>
              <li><span className="text-gray-400 text-sm">FAQ</span></li>
              <li><span className="text-gray-400 text-sm">Condições</span></li>
              <li><span className="text-gray-400 text-sm">Privacidade</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Portfólio de Análise de Dados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
