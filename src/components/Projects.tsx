
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Plataforma Web com IA Integrada",
      description: "Desenvolvimento de sistema web completo (Django + LLMs) que utiliza inteligência artificial para análise automatizada de documentos e geração de relatórios inteligentes.",
      technologies: ["Django", "Python", "OpenAI API", "LangChain", "PostgreSQL", "React"],
      icon: "🤖"
    },
    {
      title: "Sistema de Web Scraping Automatizado",
      description: "Desenvolvimento de pipeline Python que extrai dados de múltiplas fontes web, processa via Pandas e alimenta dashboards Power BI em tempo real.",
      technologies: ["Python", "Beautiful Soup", "Selenium", "Pandas", "Power BI", "MySQL"],
      icon: "🕷️"
    },
    {
      title: "Dashboard Executivo - Petrobras",
      description: "Criação de painel estratégico consolidando dados operacionais de múltiplas plataformas, resultando em 30% de redução no tempo de tomada de decisão.",
      technologies: ["Power BI", "SQL Server", "ETL", "DAX", "Power Query"],
      icon: "📊"
    },
    {
      title: "Aplicação Streamlit para Análise Preditiva",
      description: "Sistema web interativo para análise de tendências operacionais com integração a modelos de ML.",
      technologies: ["Streamlit", "Python", "Scikit-learn", "Pandas", "Plotly"],
      icon: "📈"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projetos Relevantes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções inovadoras desenvolvidas com foco em AI e análise de dados
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-gray-800/50 border-gray-700 p-8 hover:border-primary/50 transition-all duration-300 group h-full hover-lift">
                <div className="mb-6">
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-gray-700 text-gray-300 hover:bg-primary hover:text-black transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.button 
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="text-sm">Código</span>
                    </motion.button>
                    <motion.button 
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Ver Projeto</span>
                    </motion.button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl md:text-2xl italic text-gray-300 max-w-4xl mx-auto">
            "Transformo dados em decisões estratégicas e crio soluções web inteligentes através da integração de IA e tecnologias inovadoras."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
