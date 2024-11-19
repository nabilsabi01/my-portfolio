import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 
                   bg-blue-600 text-white 
                   rounded-full shadow-xl 
                   hover:bg-blue-700 
                   transition-all duration-300 
                   hover:shadow-2xl
                   active:scale-90
                   group
                   z-50"
          aria-label="Retour en haut"
        >
          <div className="relative">
            <ArrowUp className="w-6 h-6 
                      transition-transform 
                      group-hover:-translate-y-0.5 
                      group-active:translate-y-0.5" 
            />
            <span className="absolute inset-0 
                      bg-blue-600 
                      opacity-20 
                      rounded-full 
                      group-hover:opacity-30 
                      transition-opacity 
                      -z-10 
                      animate-ping"
            ></span>
          </div>
        </button>
      )}
    </>
  );
}