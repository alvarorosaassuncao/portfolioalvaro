
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
    <div className="min-h-screen bg-black">
      <Header />
      <div className="space-y-0">
        <Hero />
        <div className="py-8 md:py-12">
          <About />
        </div>
        <div className="py-8 md:py-12">
          <Skills />
        </div>
        <div className="py-8 md:py-12">
          <Experience />
        </div>
        <div className="py-8 md:py-12">
          <Projects />
        </div>
        <div className="py-8 md:py-12">
          <Contact />
        </div>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
