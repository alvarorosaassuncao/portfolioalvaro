
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

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
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Minha <span className="text-blue-400">Experiência</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Minha trajetória profissional, trabalhando em projetos desafiadores e impactantes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
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
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
              </div>
              
              {/* Period and location - centered */}
              <div className="text-center mb-6">
                <div className="text-blue-400 font-bold text-lg sm:text-xl mb-2">{exp.period}</div>
                <div className="text-gray-400 text-sm sm:text-base">{exp.location}</div>
              </div>

              {/* Content Card */}
              <Card className="bg-gray-900/80 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mx-auto max-w-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <h4 className="text-base sm:text-lg text-gray-300 mb-4">{exp.company}</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center">{exp.description}</p>
              </Card>

              {/* Vertical line connecting experiences */}
              {index !== experiences.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-0.5 h-16 bg-blue-500/30"></div>
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
