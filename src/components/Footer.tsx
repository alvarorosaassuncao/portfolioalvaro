
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">ÁLVARO SILVA ROSA</h3>
            <p className="text-gray-400">Engenheiro de Software & Full Stack Developer</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:asra.devops@gmail.com" 
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Álvaro Silva Rosa Assunção. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
