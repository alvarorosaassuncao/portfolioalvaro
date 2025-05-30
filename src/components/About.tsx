
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "3+", label: "Anos de Experiência" },
    { number: "40+", label: "Projetos" },
    { number: "15+", label: "Clientes" },
    { number: "8+", label: "Ferramentas" }
  ];

  const skills = [
    "Análise Exploratória",
    "Visualização de Dados", 
    "Machine Learning",
    "Business Intelligence",
    "Processo de ETL",
    "Estatística Avançada"
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background similar to the uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/90 to-gray-800/80"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute top-20 left-1/3 w-1 h-1 bg-gray-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-purple-400">Mim</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <span className="text-blue-400 font-semibold">Engenheiro de Software e Full Stack Developer</span> especializado em soluções AI com foco em Análise de
                Dados, Desenvolvimento Web e Automação de Processos com <span className="text-cyan-400 font-semibold">3+ anos de experiência no setor de
                O&G (Petrobras)</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Expert em desenvolvimento <span className="text-purple-400 font-semibold">Python, Django, ETL/ELT, Power BI e Web Scraping</span>.
                Pioneiro na implementação de <span className="text-blue-400 font-semibold">LLMs e IA para desenvolvimento de sistemas e sites inteligentes</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Histórico comprovado de transformar dados brutos em insights estratégicos que impulsionam decisões
                de negócio, resultando em <span className="text-green-400 font-semibold">otimização de processos e redução de custos operacionais</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Diferenciais:</span> Desenvolvimento web AI-powered, vivência em ambiente crítico (plataformas petrolíferas),
                metodologias ágeis e capacidade de liderar projetos de migração de dados complexos. 
                <span className="text-purple-400 font-semibold"> Especialista em projetos utilizando IA LLM para desenvolvimento de sistemas e aplicações inteligentes</span>.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/40 border-gray-700/50 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-center mb-8">
                <motion.div 
                  className="text-6xl font-bold mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white">
                    3+
                  </span>
                </motion.div>
                <p className="text-cyan-400 text-xl font-semibold">Anos de Experiência</p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                {stats.slice(1).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
