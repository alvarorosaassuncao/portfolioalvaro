
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import sharepointMigracaoImg from '@/assets/projects/sharepoint-migracao-powerbi.jpg';

const Projects = () => {
  const projects = [
    // AI & Automation Projects
    {
      title: "AI-INTEGRATED WEB PLATFORM",
      subtitle: "ARTIFICIAL INTELLIGENCE",
      description: "Web system with LLMs (OpenAI/Claude) for automated analysis of technical documents, natural language processing and intelligent process automation.",
      category: "AI & Automation",
      image: "/lovable-uploads/d9c12a51-6a68-41e4-aa38-38c6370ed0b9.png",
      technologies: ["Python", "OpenAI", "Claude", "Streamlit"],
      githubUrl: "https://github.com/alvarorosaassuncao",
      featured: true
    },
    {
      title: "PROCESS AUTOMATION - PETROBRAS",
      subtitle: "INTELLIGENT AUTOMATION",
      description: "Automated 80% of manual routines using Python and Streamlit, with SharePoint integration impacting 500+ users.",
      category: "AI & Automation", 
      image: "/lovable-uploads/d9c12a51-6a68-41e4-aa38-38c6370ed0b9.png",
      technologies: ["Python", "Streamlit", "SharePoint", "Power Automate"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },
    {
      title: "ADVANCED POWER APPS APPLICATION",
      subtitle: "LOW-CODE DEVELOPMENT",
      description: "Built a Power Apps application that increased productivity by 35%, fully integrated with the Microsoft ecosystem.",
      category: "AI & Automation",
      image: "/lovable-uploads/d9c12a51-6a68-41e4-aa38-38c6370ed0b9.png",
      technologies: ["Power Apps", "Power Automate", "SharePoint", "SQL"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },

    // Dashboards & BI Projects
    {
      title: "DB-RH EMPRESA AI TI",
      subtitle: "DATABASE",
      description: "DB-RH – a database for information technology companies. Manage employees, projects, clients, contracts and tasks efficiently with an organized structure optimized for data analysis.",
      category: "Dashboards & BI",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop&crop=center",
      technologies: ["SQL Server", "Database Design", "Data Modeling", "Analytics"],
      githubUrl: "https://github.com/alvarorosaassuncao/DB-RH/tree/main"
    },
    {
      title: "GASOLINE PRICE EVOLUTION DASHBOARD - BRAZIL",
      subtitle: "BUSINESS INTELLIGENCE",
      description: "Interactive Power BI dashboard analyzing the evolution of gasoline prices in Brazil, with advanced visualizations and insights on market trends.",
      category: "Dashboards & BI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Power BI", "SQL Server", "DAX", "Excel"],
      githubUrl: "https://app.powerbi.com/view?r=eyJrIjoiYTc1ZDY2MGUtMmI5ZC00NzM0LWIzNGUtNGFmYjI1NzdmMjE1IiwidCI6IjA0NjU4YmI3LWJjYjAtNGY3My04Y2QwLTk5NzNmNDg3MWQwYiJ9"
    },
    {
      title: "Sales Analysis Dashboard",
      subtitle: "DATA INTEGRATION",
      description: "Power BI dashboard to monitor SharePoint data migration with KPIs for migrated volume, integrity (99.9%), status per site and real-time alerts.",
      category: "Dashboards & BI",
      image: sharepointMigracaoImg,
      technologies: ["SharePoint", "SQL Server", "Power Automate", "Python"],
      githubUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjNkNjM5MzMtODQxMS00MjA1LThjNTgtMTMzYmRiNTJjMGI2IiwidCI6IjA0NjU4YmI3LWJjYjAtNGY3My04Y2QwLTk5NzNmNDg3MWQwYiJ9" 
    },

    // Web Development Projects
    {
      title: "DETALIE - GOURMET BASKET E-COMMERCE",
      subtitle: "WEB DEVELOPMENT",
      description: "E-commerce platform built to sell handcrafted breakfast baskets, with an online ordering system, interactive catalog and a modern interface that delivers a premium customer experience.",
      category: "Web Development",
      image: "/lovable-uploads/40a7b098-4225-4d5f-85e0-a413e1455339.png",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      githubUrl: "https://detalie.netlify.app"
    },
    {
      title: "REPORTA PIRAPETINGA - CITIZEN SERVICES",
      subtitle: "GOVERNMENT WEB SYSTEM",
      description: "Web system built to manage citizen reports and requests, allowing residents to report urban issues and follow the progress of solutions delivered by the city hall.",
      category: "Web Development",
      image: "/lovable-uploads/7ebd36d5-fcc8-4c92-9f21-3ee206ef201c.png",
      technologies: ["React", "Node.js", "CSS3", "JavaScript"],
      githubUrl: "https://reporta-pirapetinga.netlify.app"
    },
    {
      title: "AUTOMUSEU - CORPORATE LANDING PAGE",
      subtitle: "CONVERSION LANDING PAGE",
      description: "Conversion-optimized landing page built to promote automotive services, with a modern design and strategic calls-to-action.",
      category: "Web Development",
      image: "/lovable-uploads/5ae50db1-566f-4d9c-9aaa-ed2323476f21.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://landingpage-automuseu.netlify.app/"
    },

    // Web Scraping Projects
    {
      title: "AUTOMATED WEB SCRAPING SYSTEM",
      subtitle: "DATA AUTOMATION",
      description: "Automated data extraction pipeline feeding Power BI, built with Selenium and Python, processing thousands of records daily.",
      category: "Web Scraping",
      image: "/lovable-uploads/dcd9e40e-69a2-4b4c-a648-9216c332d496.png",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Power BI"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },
    {
      title: "REGULATORY DATA EXTRACTION",
      subtitle: "WEB SCRAPING",
      description: "Automated system to extract data from regulatory agencies, with real-time processing and dashboard integration.",
      category: "Web Scraping",
      image: "/lovable-uploads/dcd9e40e-69a2-4b4c-a648-9216c332d496.png",
      technologies: ["Python", "Selenium", "Pandas", "SQL Server"],
      githubUrl: "https://github.com/alvarorosaassuncao"
    },
    {
      title: "EXTERNAL DATA MONITORING",
      subtitle: "AUTOMATION & INTEGRATION",
      description: "Continuous monitoring system for external data sources with automatic alerts and integration with internal systems.",
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
    return projects.filter(project => project.category === 'Web Development');
  };

  // "Under Development" placeholder card
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
          Under Development
        </h3>
        <p className="text-gray-400 mt-2">
          New AI & Automation projects coming soon
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
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Some of the most impactful projects I have built, showing experience in 
            AI, automation, data analysis and the development of innovative solutions.
          </p>
          <div className="mt-6">
            <a 
              href="https://github.com/alvarorosaassuncao"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button text-white font-semibold py-3 px-8 inline-block hover:no-underline"
            >
              View All on GitHub
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
            <TabsList className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-blue-500/30 p-2 rounded-2xl shadow-2xl shadow-blue-500/20">
              <TabsTrigger 
                value="development" 
                className="relative overflow-hidden data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/50 text-gray-300 hover:text-white transition-all duration-500 px-8 py-3 rounded-xl font-semibold tracking-wide hover:bg-blue-600/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] data-[state=active]:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                🚀 Development
              </TabsTrigger>
              <TabsTrigger 
                value="data-analysis" 
                className="relative overflow-hidden data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/50 text-gray-300 hover:text-white transition-all duration-500 px-8 py-3 rounded-xl font-semibold tracking-wide hover:bg-purple-600/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] data-[state=active]:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                📊 Data Analysis
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
                        View Site
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
                        View Details
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
