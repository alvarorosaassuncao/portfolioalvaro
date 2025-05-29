import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filters = ['Todos', 'Machine Learning', 'Business Intelligence', 'Análise Estatística', 'NLP'];
  
  const projects = [
    {
      title: "ANÁLISE DE DADOS",
      subtitle: "MARKETPLACE DA ADIDAS",
      description: "Análise de dados para identificação de tendências de compra, resultando em 20% mais vendas.",
      category: "Ciência de Dados",
      image: "📊",
      technologies: ["Python", "Power BI", "SQL", "Excel"],
      featured: true,
      logo: "👟"
    },
    {
      title: "PEDAL PRIME",
      subtitle: "DATA ANALYSIS",
      description: "Criação de toda a pipeline de dados, dashboards e relatórios para identificação de tendências de compra, resultando em 20% mais vendas.",
      category: "Ciência de Dados", 
      image: "🚴",
      technologies: ["Python", "SQL", "Excel", "Power BI"],
      logo: "🚲"
    },
    {
      title: "ANÁLISE DO CATÁLOGO",
      subtitle: "DA NETFLIX",
      description: "Análise do catálogo de filmes da Netflix, identificação de segmentos de clientes e recomendação de filmes.",
      category: "Ciência de Dados",
      image: "🎬", 
      technologies: ["Power BI", "Python", "SQL", "Excel"],
      logo: "📺"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'Todos' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
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
            Meus Projetos
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sophisticated-card px-6 py-4 text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              <Card className="sophisticated-card p-8 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                </div>

                {/* Logo/Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 tech-icon-container rounded-3xl flex items-center justify-center text-3xl">
                    {project.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
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

                  <button className="modern-button w-full text-white font-semibold py-3 px-6">
                    Ver Detalhes
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add Project Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="sophisticated-card border-2 border-dashed border-gray-600 hover:border-blue-500 text-gray-400 hover:text-blue-400 font-semibold py-4 px-8 transition-all duration-300">
            + Adicionar Novo Projeto
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
