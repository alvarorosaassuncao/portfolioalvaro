
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      icon: "💻",
      skills: [
        "Python (Django, Flask, Pandas, Beautiful Soup, Selenium, Streamlit)",
        "JavaScript (ES6+)",
        "HTML5/CSS3",
        "SQL (MySQL, SQL Server, Oracle)",
        "Node.js (Básico)"
      ]
    },
    {
      title: "Desenvolvimento Web & IA",
      icon: "🤖",
      skills: [
        "Django",
        "Flask",
        "Streamlit",
        "LangChain",
        "OpenAI API",
        "Claude API",
        "Desenvolvimento Frontend/Backend",
        "APIs RESTful"
      ]
    },
    {
      title: "Dados & Analytics",
      icon: "📊",
      skills: [
        "Power BI",
        "Pentaho",
        "Looker Studio",
        "ETL/ELT",
        "Data Warehousing",
        "Modelagem Dimensional (Star Schema)",
        "MongoDB"
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: "☁️",
      skills: [
        "Databricks (Conceitos)",
        "Apache Spark (Fundamentos)",
        "SharePoint Integration",
        "Power Apps",
        "Power Automate"
      ]
    },
    {
      title: "DevOps & Ferramentas",
      icon: "🛠️",
      skills: [
        "Git",
        "ZABBIX (Monitoramento)",
        "SAP PM",
        "LangChain",
        "OpenAI API"
      ]
    },
    {
      title: "Metodologias",
      icon: "📋",
      skills: [
        "Scrum",
        "Análise de Requisitos",
        "Arquitetura de Dados"
      ]
    }
  ];

  const certifications = [
    {
      category: "Data Science & AI",
      items: [
        "Python Avançado para Dados (Pandas, NumPy, Beautiful Soup, Selenium)",
        "LangChain & OpenAI API Integration",
        "Claude API & LLMs para Desenvolvimento Web",
        "ETL/ELT com Power BI Dataflow & Pentaho"
      ]
    },
    {
      category: "Cloud & Big Data",
      items: [
        "Databricks & Apache Spark (Intermediário)",
        "Power Platform (Power BI, Power Apps, Power Automate)"
      ]
    },
    {
      category: "DevOps & Metodologias",
      items: [
        "Git/GitHub para Versionamento",
        "Scrum Foundation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Competências Técnicas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções inovadoras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-on-scroll">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Certificações & Especializações</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300">
                <h4 className="text-lg font-bold text-primary mb-4">{cert.category}</h4>
                <ul className="space-y-3">
                  {cert.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
