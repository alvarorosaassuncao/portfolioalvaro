
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça minha trajetória profissional e paixão por tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <Card className="bg-gray-800/50 border-gray-700 p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Perfil Profissional</h3>
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
            </Card>
          </div>

          <div className="animate-on-scroll space-y-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-4 text-primary">Diferenciais</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Desenvolvimento web AI-powered</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Vivência em ambiente crítico (plataformas petrolíferas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Metodologias ágeis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Capacidade de liderar projetos de migração de dados complexos</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-4 text-primary">Formação</h4>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h5 className="font-semibold">Bacharelado em Engenharia de Software</h5>
                  <p className="text-sm text-gray-400">Anhanguera Educacional | 2022-2025</p>
                </div>
                <div>
                  <h5 className="font-semibold">Técnico em Eletrotécnica</h5>
                  <p className="text-sm text-gray-400">SENAI MG | 2015-2017</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
