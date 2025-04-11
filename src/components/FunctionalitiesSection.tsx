
import { Brain, Smartphone, CreditCard, X } from "lucide-react";

export default function FunctionalitiesSection() {
  const features = [
    {
      title: "Treinamento contínuo",
      description: "Iza aprende com cada interação, processando texto, fotos e vídeos para melhorar o atendimento.",
      icon: <Brain className="h-8 w-8 text-primary" />
    },
    {
      title: "Multiplataforma",
      description: "Integração perfeita com WhatsApp e sites, permitindo atendimento em qualquer canal.",
      icon: <Smartphone className="h-8 w-8 text-primary" />
    },
    {
      title: "Pagamento seguro",
      description: "Link de pagamento direto no chat para reservas fáceis e seguras, redirecionando para plataforma Voor.",
      icon: <CreditCard className="h-8 w-8 text-primary" />
    },
    {
      title: "Sem fidelidade",
      description: "Cancele quando quiser, sem multas ou contratos longos. Você no controle.",
      icon: <X className="h-8 w-8 text-primary" />
    },
  ];

  return (
    <section id="funcionalidades" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Funcionalidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça o que a Iza da Trilha pode fazer pela sua agência de ecoturismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
