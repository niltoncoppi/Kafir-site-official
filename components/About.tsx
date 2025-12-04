import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <div className="relative">
                <img 
                    src="https://picsum.photos/600/400" 
                    alt="Equipe Kafir em reunião" 
                    className="rounded-2xl shadow-2xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-500/30 rounded-2xl -z-0 hidden md:block"></div>
             </div>
          </div>
          
          <div className="md:w-1/2">
            <span className="text-emerald-300 font-semibold tracking-wider uppercase mb-2 block">Nossa História</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise e compromisso desde 2010</h2>
            <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
              Fundada com a missão de trazer clareza para o complexo mundo dos seguros, a Kafir se consolidou como uma consultoria que valoriza o <strong className="text-white">atendimento humanizado</strong>.
            </p>
            <p className="text-emerald-100 mb-8 leading-relaxed">
              Não vendemos apenas apólices; construímos relacionamentos de confiança, analisando riscos minuciosamente e buscando as melhores soluções nas maiores seguradoras do mercado para proteger o que realmente importa para você.
            </p>
            
            <div className="flex gap-8 border-t border-emerald-800 pt-8">
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">+13</span>
                    <span className="text-emerald-300 text-sm">Anos de experiência</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">100%</span>
                    <span className="text-emerald-300 text-sm">Foco no cliente</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;