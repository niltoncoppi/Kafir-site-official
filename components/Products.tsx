import React, { useState } from 'react';
import { PERSONAL_PRODUCTS, BUSINESS_PRODUCTS } from '../constants';
import { Category, InsuranceProduct } from '../types';
import { Icon } from './Icon';

const ProductCard: React.FC<{ product: InsuranceProduct }> = ({ product }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
      <Icon name={product.iconName} size={24} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
    <p className="text-gray-500 text-sm mb-6 flex-grow">{product.description}</p>
    <a href="#contato" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-auto">
      Saiba mais <Icon name="ExternalLink" size={14} className="ml-1" />
    </a>
  </div>
);

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('personal');

  const products = activeCategory === 'personal' ? PERSONAL_PRODUCTS : BUSINESS_PRODUCTS;

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossas Soluções</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seja para você ou para sua empresa, temos o seguro ideal com as melhores coberturas do mercado.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-200 inline-flex">
            <button
              onClick={() => setActiveCategory('personal')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === 'personal'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Pra Você
            </button>
            <button
              onClick={() => setActiveCategory('business')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === 'business'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Pra Empresa
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Não encontrou o que procurava?</p>
            <a href="#contato" className="text-emerald-600 font-semibold hover:underline">Fale com um consultor</a>
        </div>
      </div>
    </section>
  );
};

export default Products;