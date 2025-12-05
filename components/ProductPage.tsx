import React from 'react';
import { ProductPageData } from '../types';
import { Icon } from './Icon';

interface ProductPageProps {
  data: ProductPageData;
}

const ProductPage: React.FC<ProductPageProps> = ({ data }) => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl opacity-30"></div>
         </div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-700">
                    <Icon name={data.iconName} size={14} />
                    Kafir Seguros
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                    {data.title}
                </h1>
                <p className="text-emerald-100 text-lg md:text-xl mb-10 leading-relaxed">
                    {data.subtitle}
                </p>
                <a 
                    href="#contact-product" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
                >
                    {data.ctaText}
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                </a>
            </div>
         </div>
      </section>

      {/* Description & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/3">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Por que contratar?</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {data.description}
                    </p>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                        <div className="flex items-center gap-3 mb-2 text-emerald-800 font-bold">
                            <Icon name="UserCheck" size={20} />
                            Consultoria Kafir
                        </div>
                        <p className="text-sm text-emerald-700">
                            Nossa equipe avalia seu perfil e encontra a seguradora com o melhor custo-benefício para você.
                        </p>
                    </div>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all group">
                            <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <Icon name={benefit.iconName} size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Product CTA */}
      <section id="contact-product" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.ctaTitle}</h2>
            <p className="text-gray-600 mb-8">
                Preencha nosso formulário de contato geral e especifique seu interesse em {data.title}. 
                Nossa equipe entrará em contato rapidamente.
            </p>
            <a 
                href="/#contato" 
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-lg shadow-md hover:shadow-xl transition-all"
            >
                Ir para Formulário de Contato
            </a>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;