
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-wider">
            ÁSPERUS
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-amber-400 transition-colors duration-300">
              Início
            </a>
            <a href="#services" className="text-white hover:text-amber-400 transition-colors duration-300">
              Serviços
            </a>
            <a href="#benefits" className="text-white hover:text-amber-400 transition-colors duration-300">
              Benefícios
            </a>
            <a href="#contact" className="text-white hover:text-amber-400 transition-colors duration-300">
              Contato
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-amber-400 transition-colors duration-300">
                Início
              </a>
              <a href="#services" className="text-white hover:text-amber-400 transition-colors duration-300">
                Serviços
              </a>
              <a href="#benefits" className="text-white hover:text-amber-400 transition-colors duration-300">
                Benefícios
              </a>
              <a href="#contact" className="text-white hover:text-amber-400 transition-colors duration-300">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
