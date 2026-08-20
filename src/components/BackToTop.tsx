import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-2xl bg-indigo-600/80 hover:bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 backdrop-blur-md border border-indigo-400/30 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
