
import { CheckCircle } from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      title: "Redução de 40% no tempo de atendimento",
      description: "Atendimento instantâneo"
    },
    {
      title: "Clientes resolvem dúvidas 24h/dia, mesmo sem internet na trilha",
      description: "Disponibilidade contínua"
    },
    {
      title: "Integração rápida: pronto em 48 horas",
      description: "Implementação simples"
    }
  ];

  return (
    <section id="vantagens" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Vantagens Reais para sua Agência
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-md flex flex-col"
            >
              <div className="mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{advantage.title}</h3>
            </div>
          ))}
        </div>

        <div className="bg-accent/30 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
            Sua agência no piloto automático
          </h3>
          <p className="text-center text-lg mb-8 text-foreground/80">
            Enquanto você está guiando trilhas incríveis, Iza cuida das reservas, dúvidas e atendimentos.
            Seu negócio funcionando 24 horas por dia, 7 dias por semana.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3s</div>
              <p className="text-lg text-muted-foreground mb-1">Tempo médio de resposta</p>
              <p className="text-xl font-medium text-foreground">Atendimento instantâneo</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">+35%</div>
              <p className="text-lg text-muted-foreground mb-1">Aumento médio de conversão</p>
              <p className="text-xl font-medium text-foreground">Mais vendas fechadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
