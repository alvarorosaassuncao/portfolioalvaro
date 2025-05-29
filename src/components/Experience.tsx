
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
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-title-subtle">
            Minha <span className="text-blue-400">Experiência</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minha trajetória profissional, trabalhando em projetos desafiadores e impactantes.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left side - Date and location */}
              <div className="flex flex-col items-center mr-8 min-w-[200px]">
                <motion.div 
                  className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar size={24} />
                </motion.div>
                
                <div className="text-center">
                  <div className="text-blue-400 font-bold text-lg mb-1">{exp.period}</div>
                  <div className="text-gray-400 text-sm">{exp.location}</div>
                </div>
                
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-32 bg-blue-500 mt-8"></div>
                )}
              </div>

              {/* Right side - Content Card */}
              <Card className="sophisticated-card flex-1 p-8 bg-gray-900/80 border border-gray-700 rounded-3xl">
                <div className="flex items-start mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg rotate-45 mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{exp.description}</p>
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
          <button className="bg-gray-800 hover:bg-gray-700 border border-gray-600 px-8 py-3 rounded-full text-gray-300 hover:text-white transition-all duration-300">
            Ver currículo completo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
