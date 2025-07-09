
import { Settings, BarChart3, Users, Workflow, Shield, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Integração de Sistemas",
      description: "Conectamos todas as suas ferramentas em um fluxo único e eficiente, eliminando trabalho manual e redundâncias."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise de Performance",
      description: "Monitoramento em tempo real dos seus processos com relatórios detalhados para tomada de decisões estratégicas."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automação Personalizada",
      description: "Soluções sob medida para automatizar processos específicos do seu negócio, aumentando produtividade."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão de Equipes",
      description: "Otimização do fluxo de trabalho entre equipes com distribuição inteligente de tarefas e recursos."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança de Dados",
      description: "Proteção avançada dos seus dados com backup automatizado e controle de acesso seguro."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IA & Machine Learning",
      description: "Implementação de inteligência artificial para predições e otimizações automáticas dos processos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas de automação para transformar sua operação em uma máquina de resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
              <div className="text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
