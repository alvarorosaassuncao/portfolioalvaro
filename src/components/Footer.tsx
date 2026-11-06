
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main content */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="silver-metallic-title">Alvaro Assunção</span>
          </h3>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Turning complex data into valuable insights and impactful business solutions.
          </p>
          
          {/* Download CV Buttons */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/cv/Alvaro_Assuncao_Reliability_Engineer.pdf" 
              download="Alvaro_Assuncao_Reliability_Engineer.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </a>
            <a 
              href="/lovable-uploads/2d5c7482-f2b7-4dcd-8b7d-c83de1d75908.png" 
              download="Alvaro_Assuncao_Projetos.png"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Projects
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/alvaroassuncao"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/alvarorosaassuncao"
              target="_blank"
              rel="noopener noreferrer"
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
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Data Visualization</span></li>
              <li><span className="text-gray-400 text-sm">Business Intelligence</span></li>
              <li><span className="text-gray-400 text-sm">Machine Learning</span></li>
              <li><span className="text-gray-400 text-sm">Consulting</span></li>
              <li><span className="text-gray-400 text-sm">Statistical Analysis</span></li>
            </ul>
          </div>

          {/* Information - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Information</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Blog</span></li>
              <li><span className="text-gray-400 text-sm">FAQ</span></li>
              <li><span className="text-gray-400 text-sm">Terms</span></li>
              <li><span className="text-gray-400 text-sm">Privacy</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Alvaro Assunção - Data & Reliability Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
