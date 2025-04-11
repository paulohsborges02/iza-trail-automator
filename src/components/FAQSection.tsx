
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Preciso de equipe técnica para usar?",
      answer: "Não! Configuramos tudo para você. Nossa equipe cuida de toda a implementação, treinamento e configuração da Iza para atender às necessidades específicas da sua agência de ecoturismo."
    },
    {
      question: "A Iza funciona offline?",
      answer: "Não, mas armazena perguntas e responde quando houver conexão. Assim que o cliente retornar para uma área com cobertura, todas as interações pendentes serão processadas automaticamente."
    },
    {
      question: "Como a Iza aprende sobre meus serviços e trilhas?",
      answer: "A Iza é treinada com todas as informações sobre seus serviços, trilhas, preços e políticas. Ela aprende continuamente com cada interação, melhorando seu conhecimento sobre seu negócio."
    },
    {
      question: "É possível integrar com meu sistema de reservas atual?",
      answer: "Sim, a Iza pode ser integrada com a maioria dos sistemas de reserva existentes. Nossa equipe técnica avaliará seu sistema atual e implementará a melhor solução de integração."
    },
    {
      question: "Os pagamentos são processados diretamente pelo WhatsApp?",
      answer: "Não, a Iza gera links de pagamento seguros que redirecionam para a plataforma Voor, garantindo transações seguras e protegidas por criptografia avançada."
    }
  ];

  return (
    <section id="faq" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Iza da Trilha
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-lg font-medium py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
