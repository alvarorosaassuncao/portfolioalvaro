
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-title-subtle">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estou disponível para novas oportunidades. Entre em contato comigo para conversar
            sobre análise de dados, projetos ou oportunidades de trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="contact-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="text-xl font-bold text-white">Informações de Contato</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Mail className="text-gray-300" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Email</h4>
                    <p className="text-white font-medium">mattpower.bi@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Phone className="text-gray-300" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Whatsapp</h4>
                    <p className="text-white font-medium">(85) 9 9243-2954</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <MapPin className="text-gray-300" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Localização</h4>
                    <p className="text-white font-medium">Fortaleza, Ceará</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="contact-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="text-lg font-bold text-white">Redes Sociais</h3>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Linkedin className="text-gray-300" size={18} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Github className="text-gray-300" size={18} />
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card className="contact-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="text-xl font-bold text-white">Envie uma Mensagem</h3>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
                    <Input 
                      className="bg-gray-800 border-gray-700 focus:border-primary rounded-xl text-white placeholder:text-gray-500"
                      placeholder="João Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Seu Email</label>
                    <Input 
                      type="email"
                      className="bg-gray-800 border-gray-700 focus:border-primary rounded-xl text-white placeholder:text-gray-500"
                      placeholder="joao@exemplo.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Assunto</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white focus:border-primary focus:outline-none">
                    <option value="">Selecione um assunto</option>
                    <option value="trabalho">Oportunidade de Trabalho</option>
                    <option value="projeto">Projeto</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                  <Textarea 
                    className="bg-gray-800 border-gray-700 focus:border-primary min-h-[120px] rounded-xl text-white placeholder:text-gray-500"
                    placeholder="Sua mensagem aqui..."
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl transition-all duration-300">
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
