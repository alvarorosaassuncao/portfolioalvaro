
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const filters = ['Todos', 'Machine Learning', 'Business Intelligence', 'Análise Estatística', 'NLP'];
  
  const projects = [
    {
      title: "PEDAL PRIME",
      description: "Análise de dados de vendas e performance de produtos para otimização de estoque e estratégias de marketing.",
      category: "Business Intelligence",
      image: "📊",
      technologies: ["Python", "Power BI", "SQL"],
      featured: true
    },
    {
      title: "Análise de Sentimentos",
      description: "Modelo de machine learning para análise de sentimentos em redes sociais e feedback de clientes.",
      category: "NLP", 
      image: "🧠",
      technologies: ["Python", "NLTK", "Scikit-learn"]
    },
    {
      title: "Dashboard Executivo",
      description: "Dashboard interativo para acompanhamento de KPIs e métricas de negócio em tempo real.",
      category: "Business Intelligence",
      image: "📈", 
      technologies: ["Power BI", "DAX", "SQL Server"]
    },
    {
      title: "Previsão de Demanda",
      description: "Modelo preditivo para forecasting de vendas utilizando séries temporais e machine learning.",
      category: "Machine Learning",
      image: "🔮",
      technologies: ["Python", "Prophet", "Pandas"]
    }
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            Meus <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos projetos de análise de dados mais impactantes que desenvolvi,
            demonstrando diferentes habilidades e tecnologias.
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
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar projetos..."
              className="w-full bg-gray-800 border border-gray-600 rounded-full px-6 py-3 text-gray-300 focus:border-purple-500 focus:outline-none"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">🔍</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className={`bg-gray-800/50 border-gray-700 p-6 hover:border-purple-500/50 transition-all duration-300 h-full ${
                project.featured ? 'border-purple-500/30' : ''
              }`}>
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="bg-gray-700 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    Ver Projeto
                  </button>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    GitHub
                  </button>
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
