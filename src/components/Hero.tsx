
import { ArrowRight, TrendingUp, DollarSign, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Movement */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=7372&auto=format&fit=crop')",
          backgroundSize: "110% 110%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider animate-fade-in">
            ÁSPERUS
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light animate-fade-in">
            Gestor de Automação Empresarial
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Integração inteligente de ferramentas para maximizar seu faturamento, 
            aumentar lucros e reduzir custos operacionais com processos automatizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group animate-fade-in">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 animate-fade-in">
              Saiba Mais
            </button>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 animate-fade-in">
              <TrendingUp className="w-8 h-8 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Aumento de Faturamento</h3>
              <p className="text-gray-300 text-sm">Otimização de processos para maximizar receitas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 animate-fade-in">
              <DollarSign className="w-8 h-8 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Redução de Custos</h3>
              <p className="text-gray-300 text-sm">Elimine desperdícios e melhore a eficiência</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 animate-fade-in">
              <Zap className="w-8 h-8 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Automação Completa</h3>
              <p className="text-gray-300 text-sm">Integração de ferramentas para máxima produtividade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
