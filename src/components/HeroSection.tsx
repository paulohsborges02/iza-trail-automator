
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
            >
              Experimente Grátis por 30 Dias
            </a>
            <a
              href="#teste"
              className="bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-3 rounded-md font-medium text-center transition-colors"
            >
              Teste no Site
            </a>
          </div>
        </div>
        
        <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/lovable-uploads/441789db-10e4-407e-ba39-9cee4b021984.png"
            alt="Iza da Trilha - Guia de Ecoturismo"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
