import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Icon } from './Icon';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog Kafir</h2>
                <p className="text-gray-600 max-w-xl">
                    Fique por dentro das novidades do mercado de seguros e dicas para proteger seu patrimônio.
                </p>
            </div>
            <a href="#" className="hidden md:inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                Ver todos os artigos <Icon name="ArrowRight" size={18} className="ml-2" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 relative h-48">
                <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 shadow-sm">
                    {post.date}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                Ler mais <Icon name="ArrowRight" size={16} className="ml-1" />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                Ver todos os artigos <Icon name="ArrowRight" size={18} className="ml-2" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;