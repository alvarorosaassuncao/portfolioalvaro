
import { Github, Linkedin, Mail } from 'lucide-react';

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

        {/* Navigation sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
          {/* Links Rápidos */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Habilidades</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experiência</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Serviços</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Visualização de Dados</span></li>
              <li><span className="text-gray-400">Business Intelligence</span></li>
              <li><span className="text-gray-400">Machine Learning</span></li>
              <li><span className="text-gray-400">Consultoria</span></li>
              <li><span className="text-gray-400">Análise Estatística</span></li>
            </ul>
          </div>

          {/* Informações */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Informações</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Blog</span></li>
              <li><span className="text-gray-400">FAQ</span></li>
              <li><span className="text-gray-400">Condições</span></li>
              <li><span className="text-gray-400">Privacidade</span></li>
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
