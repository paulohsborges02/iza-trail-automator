
export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 md:px-12">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Reduza Custos, Ganhe Tempo e Aumente Vendas com Iza da Trilha
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Sua Assistente de IA 24/7
          </h2>
          <p className="text-lg text-foreground/80">
            Atenda clientes no WhatsApp e site, automatize reservas, tire dúvidas e processe pagamentos—tudo com inteligência artificial
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="#planos"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium text-center transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Experimente Grátis por 30 Dias
            </a>
            <a
              href="#teste"
              className="bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-3 rounded-md font-medium text-center transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('teste')?.scrollIntoView({ behavior: 'smooth' });
                
                // Optional: Also trigger the chat widget after a short delay
                setTimeout(() => {
                  const widgetButton = document.querySelector('.zaia-widget-button');
                  if (widgetButton && widgetButton instanceof HTMLElement) {
                    widgetButton.click();
                  }
                }, 1000);
              }}
            >
              Teste no Site
            </a>
          </div>
        </div>
        
        <div className="relative max-w-md mx-auto lg:mx-0 h-auto rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/lovable-uploads/441789db-10e4-407e-ba39-9cee4b021984.png"
            alt="Iza da Trilha - Guia de Ecoturismo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
