import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import ConsortiumPage from './components/ConsortiumPage';
import ProductPage from './components/ProductPage';
import Layout from './components/Layout';
import { PRODUCT_PAGES_DATA } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Global Router Logic
  useEffect(() => {
    // 1. Handle PopState (Back/Forward buttons)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);

    // 2. Intercept Click Events on <a href="/"> links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Check if it's a valid link and meant to be handled internally
      if (
        anchor && 
        anchor.getAttribute('href')?.startsWith('/') && 
        !anchor.getAttribute('target') && // Ignore _blank
        !anchor.getAttribute('download') // Ignore downloads
      ) {
        const href = anchor.getAttribute('href')!;
        
        // Handle Anchor Links on same page or cross-page
        const [path, hash] = href.split('#');
        
        // If it's a pure hash link on same page, let default behavior happen (scroll)
        // unless we are on a different page, then navigate
        if (path === '' || path === window.location.pathname) {
            // It's a hash link on current page, allow default behavior (smooth scroll from CSS)
            // But we might need to push history if path changed (e.g. from /foo to /foo#bar)
            return;
        }

        // It is an internal navigation to a different path
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(path || '/');
        
        // Scroll to top or to hash if present
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Update Page Title based on Route
  useEffect(() => {
    if (currentPath === '/consorcios') {
      document.title = 'Consórcios Kafir – Planeje e conquiste sem juros';
    } else if (PRODUCT_PAGES_DATA[currentPath]) {
      document.title = `${PRODUCT_PAGES_DATA[currentPath].title} | Kafir Seguros`;
    } else {
      document.title = 'Kafir Corretora de Seguros – Consultoria e Seguros sob medida';
    }
  }, [currentPath]);

  // Route Matching
  const renderRoute = () => {
    if (currentPath === '/' || currentPath === '/index.html') {
      return <MainPage />;
    }
    
    if (currentPath === '/consorcios') {
      return <ConsortiumPage />;
    }

    // Dynamic Product Pages
    const productData = PRODUCT_PAGES_DATA[currentPath];
    if (productData) {
      return (
        <Layout>
            <ProductPage data={productData} />
        </Layout>
      );
    }

    // 404 Fallback - Redirect to Home or show Not Found
    // For now, redirecting/rendering Home is safer for a simple site
    return <MainPage />;
  };

  return renderRoute();
};

export default App;