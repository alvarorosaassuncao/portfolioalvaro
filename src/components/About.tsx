
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
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-title">
            Sobre Mim
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
                Como <span className="text-blue-400 font-semibold">Analista de Dados</span>, minha paixão está em transformar conjuntos 
                de dados complexos em insights estratégicos que impulsionam decisões 
                de negócios.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Com experiência em diversos projetos, desenvolvi habilidades 
                avançadas em análise estatística, visualização de dados, construção de 
                modelos preditivos e processo de ETL.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Busco constantemente aprimorar meus conhecimentos em novas 
                tecnologias e metodologias de análise, sempre com o objetivo de 
                entregar resultados de alto valor para as organizações.
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
            <Card className="sophisticated-card p-8">
              <div className="text-center mb-8">
                <motion.div 
                  className="text-6xl font-bold mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                >
                  <span className="silver-title">
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
