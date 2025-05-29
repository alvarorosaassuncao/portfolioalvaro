
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TATA CONSULTANCY SERVICE",
      position: "Analista de Dados Sênior",
      period: "Mar/2022 - Presente",
      location: "Remoto - Cliente: Petrobras",
      achievements: [
        "Dashboards Estratégicos: Desenvolvi +15 dashboards no Power BI que reduziram em 40% o tempo de análise gerencial",
        "Desenvolvimento Web com IA: Criei sistemas web integrados com LLMs (OpenAI/Claude) para automação inteligente de processos e análise de dados",
        "Automação de Processos: Implementei soluções Python/Streamlit que automatizaram 80% das rotinas manuais de coleta de dados",
        "Power Apps Enterprise: Desenvolvi aplicativo avançado no Power Apps para gestão de demandas dos planejadores, otimizando fluxo de trabalho e aumentando produtividade em 35%",
        "Migração de Dados: Liderei projeto de migração para SharePoint com 99.9% de integridade, impactando +500 usuários",
        "Web Scraping: Criei sistemas automatizados de extração que enriqueceram bases de dados em 60%"
      ],
      responsibilities: [
        "Desenvolvimento de aplicações web completas (Full Stack) com Django/Flask e integração de IA",
        "Criação de sites e sistemas inteligentes utilizando LLMs para automação e análise",
        "Desenvolvimento de aplicações escaláveis em Django com foco em performance",
        "Modelagem de dados (Fato/Dimensão) para otimização de consultas analíticas",
        "Integração de múltiplas fontes de dados (MySQL, MongoDB, SQL Server, Oracle)",
        "Criação de relatórios dinâmicos no Looker Studio para tomada de decisão executiva"
      ]
    },
    {
      company: "TECNVOLT ENGENHARIA",
      position: "Planejador Mecatrônico",
      period: "Nov/2021 - Fev/2022",
      location: "Macaé, RJ - Cliente: Petrobras UN-BC",
      achievements: [
        "Automação Industrial: Programação Ladder em plataformas petrolíferas com foco em segurança operacional",
        "Gestão de Infraestrutura: Manutenção de estações de comunicação e gerenciamento de dados críticos",
        "Analytics Operacional: Análises avançadas em Excel/Power BI para otimização de processos industriais",
        "Monitoramento: Implementação de soluções ZABBIX para alta disponibilidade de sistemas",
        "ERP: Gestão eficiente no SAP PM para maximização de recursos de manutenção"
      ]
    },
    {
      company: "COPAPA CIA PADUANA DE PAPÉIS",
      position: "Técnico Eletricista de Manutenção",
      period: "Nov/2018 - Jan/2022",
      location: "Santo Antônio de Pádua, RJ",
      achievements: [
        "Manutenção preventiva/corretiva de sistemas elétricos industriais de alta complexidade",
        "Diagnóstico avançado de falhas com foco em redução de downtime operacional",
        "Calibração de inversores Siemens para otimização energética e performance",
        "Compliance com normas de segurança industrial NR-10/NR-12"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experiência Profissional</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minha trajetória profissional em desenvolvimento e análise de dados
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">{exp.company}</h3>
                  <h4 className="text-xl font-semibold text-white mb-4">{exp.position}</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-4">Principais Conquistas:</h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.responsibilities && (
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-4">Responsabilidades Técnicas:</h5>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
