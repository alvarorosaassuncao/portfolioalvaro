
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça minha trajetória profissional e paixão por tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700 p-8 hover:border-primary/50 transition-all duration-300 hover-lift">
              <motion.h3 
                className="text-2xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Perfil Profissional
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, staggerChildren: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 leading-relaxed mb-6">
                  Engenheiro de Software e Full Stack Developer especializado em soluções AI com foco em Análise de 
                  Dados, Desenvolvimento Web e Automação de Processos com 3+ anos de experiência no setor de 
                  O&G (Petrobras).
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Expert em desenvolvimento Python, Django, ETL/ELT, Power BI e Web Scraping. 
                  Pioneiro na implementação de LLMs e IA para desenvolvimento de sistemas e sites inteligentes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Histórico comprovado de transformar dados brutos em insights estratégicos que impulsionam decisões 
                  de negócio, resultando em otimização de processos e redução de custos operacionais.
                </p>
              </motion.div>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300 hover-lift">
                <h4 className="text-xl font-semibold mb-4 text-primary">Diferenciais</h4>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Desenvolvimento web AI-powered",
                    "Vivência em ambiente crítico (plataformas petrolíferas)",
                    "Metodologias ágeis",
                    "Capacidade de liderar projetos de migração de dados complexos"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300 hover-lift">
                <h4 className="text-xl font-semibold mb-4 text-primary">Formação</h4>
                <div className="space-y-4 text-gray-300">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="font-semibold">Bacharelado em Engenharia de Software</h5>
                    <p className="text-sm text-gray-400">Anhanguera Educacional | 2022-2025</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="font-semibold">Técnico em Eletrotécnica</h5>
                    <p className="text-sm text-gray-400">SENAI MG | 2015-2017</p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
