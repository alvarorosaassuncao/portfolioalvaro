
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('IA & Automação');
  
  const filters = ['IA & Automação', 'Dashboards & BI', 'Análise Preditiva', 'Web Scraping'];
  
  const projects = [
    // IA & Automação Projects
    {
      title: "PLATAFORMA WEB COM IA INTEGRADA",
      subtitle: "INTELIGÊNCIA ARTIFICIAL",
      description: "Sistema web com LLMs (OpenAI/Claude) para análise automatizada de documentos técnicos, processamento de linguagem natural e automação inteligente de processos.",
      category: "IA & Automação",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "OpenAI", "Claude", "Streamlit"],
      githubUrl: "https://github.com/alvaroassuncao",
      featured: true
    },
    {
      title: "AUTOMAÇÃO DE PROCESSOS - PETROBRAS",
      subtitle: "AUTOMAÇÃO INTELIGENTE",
      description: "Automatização de 80% das rotinas manuais usando Python e Streamlit, com integração SharePoint impactando +500 usuários.",
      category: "IA & Automação", 
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Streamlit", "SharePoint", "Power Automate"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "APLICATIVO POWER APPS AVANÇADO",
      subtitle: "DESENVOLVIMENTO LOW-CODE",
      description: "Desenvolvimento de aplicativo no Power Apps que aumentou a produtividade em 35%, com integração completa ao ecossistema Microsoft.",
      category: "IA & Automação",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Power Apps", "Power Automate", "SharePoint", "SQL"],
      githubUrl: "https://github.com/alvaroassuncao"
    },

    // Dashboards & BI Projects
    {
      title: "DASHBOARD EXECUTIVO - PETROBRAS",
      subtitle: "BUSINESS INTELLIGENCE",
      description: "Dashboard executivo que reduziu 30% no tempo de tomada de decisão, com análise em tempo real de KPIs e métricas estratégicas.",
      category: "Dashboards & BI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      technologies: ["Power BI", "SQL Server", "DAX", "Python"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "SUITE DE DASHBOARDS GERENCIAIS",
      subtitle: "BUSINESS INTELLIGENCE",
      description: "Desenvolvimento de +15 dashboards no Power BI, reduzindo 40% do tempo de análise gerencial com visualizações interativas e insights automatizados.",
      category: "Dashboards & BI",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=center",
      technologies: ["Power BI", "SQL Server", "DAX", "Excel"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "MIGRAÇÃO DE DADOS SHAREPOINT",
      subtitle: "INTEGRAÇÃO DE DADOS",
      description: "Liderança na migração de dados para SharePoint com 99.9% de integridade, impactando +500 usuários e modernizando a infraestrutura de dados.",
      category: "Dashboards & BI",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop&crop=center",
      technologies: ["SharePoint", "SQL Server", "Power Automate", "Python"],
      githubUrl: "https://github.com/alvaroassuncao"
    },

    // Análise Preditiva Projects
    {
      title: "APLICAÇÃO STREAMLIT PARA ANÁLISE PREDITIVA",
      subtitle: "MACHINE LEARNING",
      description: "Modelos de Machine Learning para predição de falhas industriais, com interface Streamlit e algoritmos avançados de classificação.",
      category: "Análise Preditiva",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "MODELO PREDITIVO DE MANUTENÇÃO",
      subtitle: "MACHINE LEARNING",
      description: "Sistema de predição de falhas em equipamentos industriais usando algoritmos de ML, reduzindo downtime e otimizando manutenção preventiva.",
      category: "Análise Preditiva",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Random Forest", "XGBoost", "Apache Spark"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "ANÁLISE DE PERFORMANCE OPERACIONAL",
      subtitle: "DATA SCIENCE",
      description: "Análise avançada de performance operacional com modelos estatísticos e visualizações interativas para otimização de processos industriais.",
      category: "Análise Preditiva",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/alvaroassuncao"
    },

    // Web Scraping Projects
    {
      title: "SISTEMA DE WEB SCRAPING AUTOMATIZADO",
      subtitle: "AUTOMAÇÃO DE DADOS",
      description: "Pipeline automatizado de extração de dados para Power BI com selenium e python, processando milhares de registros diariamente.",
      category: "Web Scraping",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Power BI"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "EXTRAÇÃO DE DADOS REGULATÓRIOS",
      subtitle: "WEB SCRAPING",
      description: "Sistema automatizado para extração de dados de órgãos reguladores, com processamento em tempo real e integração com dashboards.",
      category: "Web Scraping",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Selenium", "Pandas", "SQL Server"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "MONITORAMENTO DE DADOS EXTERNOS",
      subtitle: "AUTOMAÇÃO & INTEGRAÇÃO",
      description: "Sistema de monitoramento contínuo de fontes de dados externas com alertas automáticos e integração com sistemas internos.",
      category: "Web Scraping",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Requests", "MongoDB", "Docker"],
      githubUrl: "https://github.com/alvaroassuncao"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = project.category === activeFilter;
    return matchesFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-title">
            Projetos Destacados
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos projetos mais impactantes que desenvolvi, demonstrando expertise em 
            IA, automação, análise de dados e desenvolvimento de soluções inovadoras.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 border ${
                activeFilter === filter
                  ? 'modern-button text-white border-blue-500'
                  : 'sophisticated-card text-gray-300 border-gray-600 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="sophisticated-card h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                </div>

                {/* Project Image */}
                <div className="relative z-10 mb-6 h-48 rounded-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium silver-title">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-800/70 text-gray-300 border border-gray-600/50 hover:border-gray-500 transition-colors text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-button w-full text-white font-semibold py-3 px-6 text-center block hover:no-underline"
                  >
                    Ver Detalhes
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
