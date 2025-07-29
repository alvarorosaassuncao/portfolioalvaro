
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    // IA & Automação Projects
    {
      title: "PLATAFORMA WEB COM IA INTEGRADA",
      subtitle: "INTELIGÊNCIA ARTIFICIAL",
      description: "Sistema web com LLMs (OpenAI/Claude) para análise automatizada de documentos técnicos, processamento de linguagem natural e automação inteligente de processos.",
      category: "IA & Automação",
      image: "/lovable-uploads/d9c12a51-6a68-41e4-aa38-38c6370ed0b9.png",
      technologies: ["Python", "OpenAI", "Claude", "Streamlit"],
      githubUrl: "https://github.com/alvarorosaassuncao",
      featured: true
    },
    {
      title: "AUTOMAÇÃO DE PROCESSOS - PETROBRAS",
      subtitle: "AUTOMAÇÃO INTELIGENTE",
      description: "Automatização de 80% das rotinas manuais usando Python e Streamlit, com integração SharePoint impactando +500 usuários.",
      category: "IA & Automação", 
      image: "/lovable-uploads/d9c12a51-6a68-41e4-aa38-38c6370ed0b9.png",
      technologies: ["Python", "Streamlit", "SharePoint", "Power Automate"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },
    {
      title: "APLICATIVO POWER APPS AVANÇADO",
      subtitle: "DESENVOLVIMENTO LOW-CODE",
      description: "Desenvolvimento de aplicativo no Power Apps que aumentou a produtividade em 35%, com integração completa ao ecossistema Microsoft.",
      category: "IA & Automação",
      image: "/lovable-uploads/d9c12a51-6a68-41e4-aa38-38c6370ed0b9.png",
      technologies: ["Power Apps", "Power Automate", "SharePoint", "SQL"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },

    // Dashboards & BI Projects
    {
      title: "DB-RH EMPRESA AI TI",
      subtitle: "BANCO DE DADOS",
      description: "DB-RH – Banco de dados para empresas de tecnologia da informação. Gerencie funcionários, projetos, clientes, contratos e tarefas de forma eficiente com uma estrutura organizada e otimizada para análise de dados.",
      category: "Dashboards & BI",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop&crop=center",
      technologies: ["SQL Server", "Database Design", "Data Modeling", "Analytics"],
      githubUrl: "https://github.com/alvarorosaassuncao/DB-RH/tree/main"
    },
    {
      title: "DASHBOARD EVOLUÇÃO DO PREÇO DA GASOLINA NO BRASIL",
      subtitle: "BUSINESS INTELLIGENCE",
      description: "Dashboard interativo desenvolvido no Power BI para análise da evolução dos preços da gasolina no Brasil, com visualizações avançadas e insights sobre tendências de mercado.",
      category: "Dashboards & BI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Power BI", "SQL Server", "DAX", "Excel"],
      githubUrl: "https://app.powerbi.com/view?r=eyJrIjoiYTc1ZDY2MGUtMmI5ZC00NzM0LWIzNGUtNGFmYjI1NzdmMjE1IiwidCI6IjA0NjU4YmI3LWJjYjAtNGY3My04Y2QwLTk5NzNmNDg3MWQwYiJ9"
    },
    {
      title: "MIGRAÇÃO DE DADOS SHAREPOINT",
      subtitle: "INTEGRAÇÃO DE DADOS",
      description: "Liderança na migração de dados para SharePoint com 99.9% de integridade, impactando +500 usuários e modernizando a infraestrutura de dados.",
      category: "Dashboards & BI",
      image: "/lovable-uploads/dcd9e40e-69a2-4b4c-a648-9216c332d496.png",
      technologies: ["SharePoint", "SQL Server", "Power Automate", "Python"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },

    // Desenvolvimento Web Projects
    {
      title: "DETALIE - E-COMMERCE DE CESTAS GOURMET",
      subtitle: "DESENVOLVIMENTO WEB",
      description: "Plataforma e-commerce desenvolvida para venda de cestas de café da manhã artesanais, com sistema de pedidos online, catálogo interativo e interface moderna para proporcionar experiência premium aos clientes.",
      category: "Desenvolvimento Web",
      image: "/lovable-uploads/40a7b098-4225-4d5f-85e0-a413e1455339.png",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      githubUrl: "https://detalie.netlify.app"
    },
    {
      title: "REPORTA PIRAPETINGA - GESTÃO CIDADÃ",
      subtitle: "SISTEMA WEB GOVERNAMENTAL",
      description: "Sistema web desenvolvido para gerenciamento de denúncias e solicitações da população, permitindo que cidadãos reportem problemas urbanos e acompanhem o andamento das soluções pela prefeitura.",
      category: "Desenvolvimento Web",
      image: "/lovable-uploads/7ebd36d5-fcc8-4c92-9f21-3ee206ef201c.png",
      technologies: ["React", "Node.js", "CSS3", "JavaScript"],
      githubUrl: "https://reporta-pirapetinga.netlify.app"
    },
    {
      title: "AUTOMUSEU - LANDING PAGE CORPORATIVA",
      subtitle: "LANDING PAGE EDUCACIONAL",
      description: "Landing page otimizada para conversão, desenvolvida para promover serviços automotivos com design moderno e call-to-actions estratégicos.",
      category: "Desenvolvimento Web",
      image: "/lovable-uploads/5ae50db1-566f-4d9c-9aaa-ed2323476f21.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://landingpage-automuseu.netlify.app/"
    },

    // Web Scraping Projects
    {
      title: "SISTEMA DE WEB SCRAPING AUTOMATIZADO",
      subtitle: "AUTOMAÇÃO DE DADOS",
      description: "Pipeline automatizado de extração de dados para Power BI com selenium e python, processando milhares de registros diariamente.",
      category: "Web Scraping",
      image: "/lovable-uploads/dcd9e40e-69a2-4b4c-a648-9216c332d496.png",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Power BI"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },
    {
      title: "EXTRAÇÃO DE DADOS REGULATÓRIOS",
      subtitle: "WEB SCRAPING",
      description: "Sistema automatizado para extração de dados de órgãos reguladores, com processamento em tempo real e integração com dashboards.",
      category: "Web Scraping",
      image: "/lovable-uploads/dcd9e40e-69a2-4b4c-a648-9216c332d496.png",
      technologies: ["Python", "Selenium", "Pandas", "SQL Server"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },
    {
      title: "MONITORAMENTO DE DADOS EXTERNOS",
      subtitle: "AUTOMAÇÃO & INTEGRAÇÃO",
      description: "Sistema de monitoramento contínuo de fontes de dados externas com alertas automáticos e integração com sistemas internos.",
      category: "Web Scraping",
      image: "/lovable-uploads/dcd9e40e-69a2-4b4c-a648-9216c332d496.png",
      technologies: ["Python", "Requests", "MongoDB", "Docker"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    }
  ];

  const getProjectsByTab = (tab: string) => {
    if (tab === 'data-analysis') {
      return projects.filter(project => 
        project.category === 'Dashboards & BI' || project.category === 'Web Scraping'
      );
    }
    return projects.filter(project => project.category === 'Desenvolvimento Web');
  };

  // Componente para "Em Desenvolvimento"
  const DevelopmentCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="col-span-full flex justify-center items-center h-64"
    >
      <div className="bg-black border border-gray-600 rounded-2xl p-8 text-center">
        <h3 className="text-3xl font-bold silver-title">
          Em Desenvolvimento
        </h3>
        <p className="text-gray-400 mt-2">
          Novos projetos de IA & Automação em breve
        </p>
      </div>
    </motion.div>
  );

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
            Alguns dos projetos mais impactantes que desenvolvi, demonstrando experiência em 
            IA, automação, análise de dados e desenvolvimento de soluções inovadoras.
          </p>
          <div className="mt-6">
            <a 
              href="https://github.com/alvarorosaassuncao"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button text-white font-semibold py-3 px-8 inline-block hover:no-underline"
            >
              Ver Todos no GitHub
            </a>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="development" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <TabsList className="bg-black/40 border border-gray-600 p-1">
              <TabsTrigger 
                value="development" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all"
              >
                Desenvolvimento
              </TabsTrigger>
              <TabsTrigger 
                value="data-analysis" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all"
              >
                Análise de Dados
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Development Projects */}
          <TabsContent value="development">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {getProjectsByTab('development').map((project, index) => (
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
                        Ver Site
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Data Analysis Projects */}
          <TabsContent value="data-analysis">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {getProjectsByTab('data-analysis').map((project, index) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
