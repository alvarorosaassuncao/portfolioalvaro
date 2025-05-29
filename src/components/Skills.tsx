
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillBars = [
    { name: "Python", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "SQL", level: 98, color: "from-purple-500 to-purple-600" },
    { name: "Django", level: 95, color: "from-cyan-500 to-cyan-600" },
    { name: "Power BI", level: 100, color: "from-purple-500 to-purple-600" },
    { name: "Flask", level: 100, color: "from-purple-500 to-purple-600" },
    { name: "Excel Avançado", level: 93, color: "from-cyan-500 to-cyan-600" },
    { name: "Machine Learning", level: 80, color: "from-purple-500 to-purple-600" },
    { name: "Estatística", level: 95, color: "from-cyan-500 to-cyan-600" },
    { name: "Big Data (Spark)", level: 60, color: "from-cyan-500 to-cyan-600" },
    { name: "JavaScript", level: 65, color: "from-purple-500 to-purple-600" }
  ];

  const techIcons = [
    { name: "Python", icon: "🐍" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "📊" },
    { name: "Scikit-learn", icon: "🤖" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Git", icon: "📝" },
    { name: "SQL", icon: "🗃️" },
    { name: "Power BI", icon: "📈" },
    { name: "Django", icon: "🎯" },
    { name: "Flask", icon: "⚡" },
    { name: "Spark", icon: "✨" },
    { name: "Excel", icon: "📋" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-title">
            Minhas Habilidades
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combinação de habilidades técnicas e analíticas que me permitem transformar dados 
            brutos em insights acionáveis e visualizações impactantes.
          </p>
        </motion.div>

        {/* Skills Progress Bars */}
        <div className="mb-16">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center silver-title">
                — Níveis de Proficiência —
              </h3>
              {skillBars.slice(0, 5).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
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
              <h3 className="text-xl font-semibold mb-6 text-center silver-title">
                — Níveis de Proficiência —
              </h3>
              {skillBars.slice(5).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="mb-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
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
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold silver-title">
              — Ferramentas & Linguagens —
            </h3>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
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
                <div className="text-3xl mb-2">{tech.icon}</div>
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
