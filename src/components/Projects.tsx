
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Machine Learning');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filters = ['Machine Learning', 'Business Intelligence', 'Análise Estatística', 'NLP'];
  
  const projects = [
    // Machine Learning Projects
    {
      title: "PREDIÇÃO DE VENDAS",
      subtitle: "MACHINE LEARNING",
      description: "Modelo preditivo para prever vendas futuras utilizando algoritmos de regressão e séries temporais.",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
      githubUrl: "https://github.com/alvaroassuncao",
      featured: true
    },
    {
      title: "DETECÇÃO DE FRAUDES",
      subtitle: "MACHINE LEARNING",
      description: "Sistema de detecção de fraudes em tempo real usando algoritmos de classificação e anomaly detection.",
      category: "Machine Learning", 
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Random Forest", "XGBoost", "Pandas"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "SEGMENTAÇÃO DE CLIENTES",
      subtitle: "MACHINE LEARNING",
      description: "Análise de clustering para segmentação de clientes baseada em comportamento de compra.",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "K-Means", "PCA", "Matplotlib"],
      githubUrl: "https://github.com/alvaroassuncao"
    },

    // Business Intelligence Projects
    {
      title: "DASHBOARD EXECUTIVO",
      subtitle: "BUSINESS INTELLIGENCE",
      description: "Dashboard interativo para acompanhamento de KPIs e métricas de negócio em tempo real.",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Power BI", "SQL Server", "DAX", "Excel"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "ANÁLISE DE PERFORMANCE",
      subtitle: "BUSINESS INTELLIGENCE",
      description: "Sistema de BI para análise de performance de vendas e identificação de oportunidades.",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=center",
      technologies: ["Tableau", "PostgreSQL", "Python", "Excel"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "RELATÓRIOS AUTOMATIZADOS",
      subtitle: "BUSINESS INTELLIGENCE",
      description: "Automação de relatórios gerenciais com atualização automática de dados e distribuição.",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop&crop=center",
      technologies: ["Power BI", "Power Automate", "SharePoint", "SQL"],
      githubUrl: "https://github.com/alvaroassuncao"
    },

    // Análise Estatística Projects
    {
      title: "TESTE A/B MARKETING",
      subtitle: "ANÁLISE ESTATÍSTICA",
      description: "Análise estatística de testes A/B para otimização de campanhas de marketing digital.",
      category: "Análise Estatística",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=200&fit=crop&crop=center",
      technologies: ["R", "Python", "Scipy", "Plotly"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "ANÁLISE DE SATISFAÇÃO",
      subtitle: "ANÁLISE ESTATÍSTICA",
      description: "Estudo estatístico sobre satisfação do cliente usando análise de regressão múltipla.",
      category: "Análise Estatística",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop&crop=center",
      technologies: ["SPSS", "R", "Excel", "Survey Monkey"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "PREVISÃO DE DEMANDA",
      subtitle: "ANÁLISE ESTATÍSTICA",
      description: "Modelo estatístico para previsão de demanda usando análise de séries temporais.",
      category: "Análise Estatística",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
      technologies: ["R", "ARIMA", "Prophet", "ggplot2"],
      githubUrl: "https://github.com/alvaroassuncao"
    },

    // NLP Projects
    {
      title: "ANÁLISE DE SENTIMENTOS",
      subtitle: "PROCESSAMENTO DE LINGUAGEM NATURAL",
      description: "Sistema de análise de sentimentos em redes sociais para monitoramento de marca.",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "NLTK", "spaCy", "Transformers"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "CHATBOT INTELIGENTE",
      subtitle: "PROCESSAMENTO DE LINGUAGEM NATURAL",
      description: "Desenvolvimento de chatbot para atendimento ao cliente usando modelos de linguagem.",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Rasa", "BERT", "Flask"],
      githubUrl: "https://github.com/alvaroassuncao"
    },
    {
      title: "CLASSIFICAÇÃO DE TEXTOS",
      subtitle: "PROCESSAMENTO DE LINGUAGEM NATURAL",
      description: "Sistema automático de classificação de documentos e emails usando técnicas de NLP.",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "scikit-learn", "Word2Vec", "TF-IDF"],
      githubUrl: "https://github.com/alvaroassuncao"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = project.category === activeFilter;
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
