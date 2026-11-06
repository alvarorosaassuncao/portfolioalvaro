
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  icon: string;
  highlights?: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "ATLAS PROFESSIONALS | SBM OFFSHORE",
      position: "Reliability Process & Systems Engineer",
      period: "Jan 2026 - Present",
      location: "Santos, SP - Global Reliability Team",
      description: "Supporting SBM Offshore's global Reliability Engineering and Asset Management teams, focused on maintenance data quality, process improvement and digital transformation across offshore assets. I built the company's internal RCM (Reliability Centered Maintenance) system from the ground up, standardizing how reliability analyses are created, reviewed and tracked. I also developed digital tools that remove manual work for engineers around the world: E3 PM Action, which validates preventive maintenance actions automatically; Work Order Cancellation, which streamlined the cancellation workflow and sped up delivery for global engineers; and Failure Mode Tree, a structured tool for building and validating failure mode hierarchies. In addition, I deliver FCA load quality checks and Performance Standards review support tools, reconciling data between load files, IFS, EMS and corporate references.",
      icon: "⚙️",
      highlights: [
        "Internal RCM System",
        "E3 PM Action",
        "Work Order Cancellation",
        "Failure Mode Tree",
        "FCA Load Quality Check",
        "Performance Standards Review Tool"
      ]
    },
    {
      company: "BUS2 PLANEJAMENTO E OPERAÇÃO NA MOBILIDADE",
      position: "Data Analyst",
      period: "Sep 2024 - Feb 2026",
      location: "Remote",
      description: "Responsible for analyzing and processing large data volumes in strategic public transport projects. Built robust ETL pipelines with Python (Pandas, NumPy, DuckDB), orchestrated workflows with Apache Airflow, wrote advanced Oracle SQL queries, containerized databases with Docker and automated flows with KNIME. Data modeling to support strategic decision making.",
      icon: "🚌"
    },
    {
      company: "TATA CONSULTANCY SERVICE",
      position: "Mid-level Data Analyst",
      period: "Mar 2022 - Nov 2024",
      location: "Remote - Client: Petrobras",
      description: "I built 15+ Power BI dashboards, cutting managerial analysis time by 40%. Created web systems with LLMs (OpenAI/Claude) for intelligent process automation and data analysis. Automated 80% of manual routines with Python/Streamlit solutions. Led the SharePoint data migration, impacting 500+ users with 99.9% data integrity. Developed an advanced Power Apps application that increased productivity by 35%.",
      icon: "💼"
    },
    {
      company: "TECNOVOLT ENGENHARIA",
      position: "Mechatronics Planner",
      period: "Nov 2021 - Feb 2022",
      location: "Macaé, RJ - Client: Petrobras UN-BC",
      description: "Industrial automation with Ladder programming. ZABBIX monitoring for high system availability. SAP PM ERP for efficient maintenance management.",
      icon: "📊"
    },
    {
      company: "COPAPA CIA PADUANA DE PAPÉIS",
      position: "Maintenance Electrical Technician",
      period: "Nov 2018 - Nov 2021",
      location: "Santo Antônio de Pádua, RJ",
      description: "Preventive and corrective maintenance of industrial electrical systems. Advanced failure diagnosis to reduce operational downtime.",
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
            My <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            My professional journey, working on challenging and impactful projects.
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

                {exp.highlights && (
                  <div className="flex flex-wrap gap-2 justify-center mt-8">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-3 py-1"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
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
