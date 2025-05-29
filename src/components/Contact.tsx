
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:asra.devops@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                    <p className="text-white font-medium">asra.devops@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Phone className="text-gray-300" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Telefone</h4>
                    <p className="text-white font-medium">(32) 99948-2095</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <MapPin className="text-gray-300" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Localização</h4>
                    <p className="text-white font-medium">Minas Gerais</p>
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
                <a 
                  href="https://www.linkedin.com/in/alvaroassuncao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Linkedin className="text-gray-300" size={18} />
                </a>
                <a 
                  href="https://github.com/alvarorosaassuncao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Github className="text-gray-300" size={18} />
                </a>
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 focus:border-primary rounded-xl text-white placeholder:text-gray-500"
                      placeholder="João Silva"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Seu Email</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 focus:border-primary rounded-xl text-white placeholder:text-gray-500"
                      placeholder="joao@exemplo.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Assunto</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white focus:border-primary focus:outline-none"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Oportunidade de Trabalho">Oportunidade de Trabalho</option>
                    <option value="Projeto">Projeto</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 focus:border-primary min-h-[120px] rounded-xl text-white placeholder:text-gray-500"
                    placeholder="Sua mensagem aqui..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
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
