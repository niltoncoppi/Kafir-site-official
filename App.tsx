import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Icon } from './components/Icon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button for Phone/WhatsApp if needed, strictly Phone as requested */}
      <a 
        href="tel:+5511999999999"
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Ligar Agora"
      >
        <Icon name="Phone" size={28} />
      </a>
    </div>
  );
};

export default App;