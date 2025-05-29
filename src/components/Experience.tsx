
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TATA CONSULTANCY SERVICE",
      position: "Analista de Dados Sênior", 
      period: "2023 - Atualmente",
      location: "Free Lancer",
      description: "Desenvolvi análises estatísticas e relatórios para departamentos internos e empresas de diversos setores. Construção e implementação de uma nova solução de data warehouse, data lake. Migração de banco de dados para Nuvem. Otimização de consultas SQL que melhoraram o tempo de processamento em mais de 40%. Desenvolvimento de modelos preditivos para previsão de vendas com 92% de precisão, economizando até R$100 mil em estoque.",
      icon: "💼"
    },
    {
      company: "TECNVOLT ENGENHARIA",
      position: "Analista Financeiro",
      period: "2017 - Atualmente", 
      location: "Free Lancer",
      description: "Construção de robôs para automação de análise no mercado financeiro, ministro um curso para análise avançada de preço e volume de mercado.",
      icon: "📊"
    },
    {
      company: "Colégio Valdemar Alcântara",
      position: "Analista de Sistemas",
      period: "2019 - 2020",
      location: "Colégio Valdemar Alcântara",
      description: "Liderei uma equipe de T.I. Desenvolvi soluções para Backup, agilidade do sistema, monitoramento de sistema CFTV, resolução de problemas de rede, criação de estrutura de rede complexa, manutenção de computadores.",
      icon: "🏫"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minha <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experiência</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minha trajetória profissional, trabalhando em projetos desafiadores e impactantes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Icon */}
              <div className="flex flex-col items-center mr-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {exp.icon}
                </motion.div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                )}
                <div className="text-center mt-2">
                  <div className="text-cyan-400 font-semibold text-sm">{exp.period}</div>
                  <div className="text-gray-400 text-xs mt-1">{exp.location}</div>
                </div>
              </div>

              {/* Content Card */}
              <Card className="flex-1 bg-gray-800/50 border-gray-700 p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {exp.position}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-gray-800/50 border border-gray-600 text-gray-300 px-8 py-3 rounded-full hover:border-purple-500/50 transition-all duration-300">
            Ver currículo completo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
