
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Modern grid background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-emerald-300 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-16 w-2 h-2 bg-teal-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-green-300 rounded-full opacity-50"></div>
      </div>

      <Header />
      
      {/* Main content with modern layout */}
      <main className="relative z-10">
        <Hero />
        
        {/* Content sections with improved spacing */}
        <div className="relative">
          {/* About section */}
          <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
            <About />
          </section>
          
          {/* Skills section */}
          <section className="py-20 bg-gradient-to-b from-slate-900/50 to-gray-900/50">
            <Skills />
          </section>
          
          {/* Experience section */}
          <section className="py-20 bg-gradient-to-b from-gray-900/50 to-slate-900/50">
            <Experience />
          </section>
          
          {/* Projects section */}
          <section className="py-20 bg-gradient-to-b from-slate-900/50 to-gray-900/50">
            <Projects />
          </section>
          
          {/* Contact section */}
          <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
            <Contact />
          </section>
        </div>
        
        <Footer />
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;
