
import { Check } from "lucide-react";

export default function PricingSection() {
  const features = [
    "Até 2.000 interações/mês",
    "Suporte técnico dedicado",
    "Sem custo de instalação",
    "Integração com WhatsApp e site",
    "Treinamento personalizado"
  ];

  return (
    <section id="planos" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Plano Exclusivo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solução completa para sua agência de ecoturismo, sem complicações
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-xl overflow-hidden shadow-lg">
            <div className="bg-primary p-6 text-center">
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Plano Mensal</h3>
              <div className="flex items-center justify-center">
                <span className="text-5xl font-bold text-primary-foreground">R$300</span>
                <span className="text-primary-foreground/80 ml-2">/mês</span>
              </div>
              <div className="bg-accent/80 text-accent-foreground text-sm font-medium py-1 px-4 rounded-full mt-4 inline-block">
                Primeiro mês grátis!
              </div>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 mb-4 text-center py-3 px-4 bg-accent/30 rounded-md text-sm">
                Cancele quando quiser - sem multas ou taxas escondidas
              </div>

              <a 
                href="#teste" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-md font-medium text-center block mt-6 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('teste')?.scrollIntoView({ behavior: 'smooth' });
                  
                  // Also trigger the chat widget after a short delay
                  setTimeout(() => {
                    const widgetButton = document.querySelector('.zaia-widget-button');
                    if (widgetButton && widgetButton instanceof HTMLElement) {
                      widgetButton.click();
                    }
                  }, 1000);
                }}
              >
                Comece Agora sem Risco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
