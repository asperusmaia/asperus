
import { TrendingUp, DollarSign, Clock, Target, Zap, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Aumento de 40% no Faturamento",
      description: "Processos otimizados que geram mais vendas e oportunidades de negócio."
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Redução de 60% nos Custos",
      description: "Eliminação de desperdícios e otimização de recursos operacionais."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "90% Menos Tempo Manual",
      description: "Automação completa de tarefas repetitivas e burocráticas."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Precisão Operacional",
      description: "Redução drástica de erros humanos com processos automatizados."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Velocidade 10x Maior",
      description: "Processos que antes levavam horas, agora acontecem em minutos."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "ROI Garantido",
      description: "Retorno sobre investimento visível já nos primeiros 30 dias."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados Comprovados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforme sua empresa com automação inteligente e veja resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para Revolucionar Seu Negócio?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Agende uma consultoria gratuita e descubra como podemos transformar sua operação
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Agendar Consultoria
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
