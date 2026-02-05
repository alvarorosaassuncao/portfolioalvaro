
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "BUS2 PLANEJAMENTO E OPERAÇÃO NA MOBILIDADE",
      position: "Analista de Dados",
      period: "Set/2024 - Atual",
      location: "Remoto",
      description: "Responsável pela análise e tratamento de grandes volumes de dados em projetos estratégicos do setor de transporte público. Desenvolvimento de pipelines ETL robustos utilizando Python (Pandas, NumPy, DuckDB). Orquestração de workflows com Apache Airflow. Consultas avançadas em Oracle SQL, containerização com Docker, e automação com KNIME. Modelagem de dados para suporte à tomada de decisão estratégica.",
      icon: "🚌"
    },
    {
      company: "TATA CONSULTANCY SERVICE",
      position: "Analista de Dados Pleno", 
      period: "Mar/2022 - Nov/2024",
      location: "Remoto - Cliente: Petrobras",
      description: "Desenvolvi +15 dashboards no Power BI, reduzindo 40% do tempo de análise gerencial. Criei sistemas web com LLMs (OpenAI/Claude) para automação inteligente de processos e análise de dados. Automatizei 80% das rotinas manuais com soluções Python/Streamlit. Liderei a migração de dados para SharePoint, impactando +500 usuários com 99.9% de integridade. Desenvolvi um aplicativo avançado no Power Apps, aumentando a produtividade em 35%.",
      icon: "💼"
    },
    {
      company: "TECNOVOLT ENGENHARIA",
      position: "Planejador Mecatrônico",
      period: "Nov/2021 - Fev/2022", 
      location: "Macaé, RJ - Cliente: Petrobras UN-BC",
      description: "Automação industrial com programação Ladder. Monitoramento ZABBIX para alta disponibilidade de sistemas. ERP SAP PM para gestão eficiente de manutenção.",
      icon: "📊"
    },
    {
      company: "COPAPA CIA PADUANA DE PAPÉIS",
      position: "Técnico Eletricista de Manutenção",
      period: "Nov/2018 - Nov/2021",
      location: "Santo Antônio de Pádua, RJ",
      description: "Manutenção preventiva/corretiva de sistemas elétricos industriais. Diagnóstico avançado de falhas para redução de downtime operacional.",
      icon: "🏭"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Minha <span className="text-blue-400">Experiência</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Minha trajetória profissional, trabalhando em projetos desafiadores e impactantes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline indicator - centered */}
              <div className="flex justify-center mb-8">
                <motion.div 
                  className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar size={24} />
                </motion.div>
              </div>
              
              {/* Period and location - centered */}
              <div className="text-center mb-8">
                <div className="text-blue-400 font-bold text-xl mb-3">{exp.period}</div>
                <div className="text-gray-400 text-base">{exp.location}</div>
              </div>

              {/* Content Card */}
              <Card className="bg-gray-900/80 border border-gray-700 rounded-2xl sm:rounded-3xl p-8 sm:p-10 mx-auto max-w-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{exp.position}</h3>
                  <h4 className="text-lg sm:text-xl text-gray-300 mb-6">{exp.company}</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg text-center">{exp.description}</p>
              </Card>

              {/* Vertical line connecting experiences */}
              {index !== experiences.length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="w-0.5 h-20 bg-blue-500/30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
