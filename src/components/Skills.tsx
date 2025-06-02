
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillBars = [
    { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
    { name: "Power BI", level: 98, color: "from-purple-500 to-purple-600" },
    { name: "SQL Server", level: 90, color: "from-cyan-500 to-cyan-600" },
    { name: "Machine Learning", level: 85, color: "from-purple-500 to-purple-600" },
    { name: "Django/Flask", level: 88, color: "from-blue-500 to-blue-600" },
    { name: "LLMs (OpenAI/Claude)", level: 90, color: "from-cyan-500 to-cyan-600" },
    { name: "Streamlit", level: 95, color: "from-purple-500 to-purple-600" },
    { name: "Power Apps", level: 85, color: "from-cyan-500 to-cyan-600" },
    { name: "SharePoint", level: 80, color: "from-blue-500 to-blue-600" },
    { name: "Apache Spark", level: 70, color: "from-purple-500 to-purple-600" }
  ];

  const techIcons = [
    { name: "Python", icon: "🐍" },
    { name: "Power BI", icon: "📈" },
    { name: "SQL Server", icon: "🗃️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Streamlit", icon: "⚡" },
    { name: "Django", icon: "🎯" },
    { name: "Flask", icon: "🔥" },
    { name: "Git/GitHub", icon: "📝" },
    { name: "Docker", icon: "🐳" },
    { name: "Apache Spark", icon: "✨" },
    { name: "Power Apps", icon: "📱" }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 silver-title">
            Minhas Habilidades
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combinação de habilidades técnicas em IA, análise de dados e desenvolvimento que me permitem criar 
            soluções inteligentes e inovadoras para processos complexos.
          </p>
        </motion.div>

        {/* Skills Progress Bars */}
        <div className="mb-20">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-8 text-center silver-title">
                — Níveis de Proficiência —
              </h3>
              {skillBars.slice(0, 5).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="mb-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg h-3">
                    <motion.div
                      className="skill-bar-fill h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8 text-center silver-title">
                — Níveis de Proficiência —
              </h3>
              {skillBars.slice(5).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="mb-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg h-3">
                    <motion.div
                      className="skill-bar-fill h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold silver-title">
              — Ferramentas & Tecnologias —
            </h3>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-icon-container p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="text-sm text-gray-300 font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
