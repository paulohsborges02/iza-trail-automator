
import { Button } from '@/components/ui/button';

export default function TestChatSection() {
  return (
    <section id="teste" className="w-full py-12 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Teste Iza da Trilha</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Experimente a Iza da Trilha agora mesmo! Clique no botão abaixo ou use 
          o widget de chat no canto da tela para interagir com nossa assistente de IA.
        </p>
        <Button 
          size="lg" 
          onClick={() => {
            // This will trigger the widget to open if it's loaded
            const widgetButton = document.querySelector('.zaia-widget-button');
            if (widgetButton && widgetButton instanceof HTMLElement) {
              widgetButton.click();
            }
          }}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
        >
          Conversar com Iza
        </Button>
      </div>
    </section>
  );
}
