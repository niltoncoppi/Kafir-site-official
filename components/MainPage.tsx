import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Consortiums from './Consortiums';
import Process from './Process';
import Features from './Features';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import { Icon } from './Icon';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <About />
        <Process />
        <Products />
        <Consortiums />
        <Features />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      {/* Floating Action Button for Phone */}
      <a 
        href="tel:+5511999999999"
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-transform hover:scale-110 border-2 border-white"
        aria-label="Ligar Agora"
      >
        <Icon name="Phone" size={28} />
      </a>
    </Layout>
  );
};

export default MainPage;