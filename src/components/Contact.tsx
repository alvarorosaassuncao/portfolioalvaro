
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades e projetos inovadores
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold gradient-text mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">asra.devops@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telefone</h4>
                    <p className="text-gray-400">(32) 99948-2095</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Localização</h4>
                    <p className="text-gray-400">Pirapetinga, MG</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Vamos Trabalhar Juntos?</h3>
              <p className="text-gray-300 leading-relaxed">
                Estou sempre aberto a novas oportunidades e desafios. Se você tem um projeto interessante 
                ou uma posição que combine com meu perfil, não hesite em entrar em contato!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card className="bg-gray-800/50 border-gray-700 p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold gradient-text mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <Input 
                      className="bg-gray-700 border-gray-600 focus:border-primary"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input 
                      type="email"
                      className="bg-gray-700 border-gray-600 focus:border-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
                  <Input 
                    className="bg-gray-700 border-gray-600 focus:border-primary"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <Textarea 
                    className="bg-gray-700 border-gray-600 focus:border-primary min-h-[120px]"
                    placeholder="Sua mensagem..."
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/80 text-black font-semibold py-3 transition-all duration-300 hover:scale-105 glow-effect">
                  <Send size={20} className="mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
