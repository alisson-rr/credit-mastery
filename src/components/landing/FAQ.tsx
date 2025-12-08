import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Este curso serve para iniciantes?",
    answer: "Sim! O curso foi estruturado do básico ao avançado. Começamos com os fundamentos do crédito e progredimos até análises técnicas utilizadas por profissionais do mercado."
  },
  {
    question: "Pessoa física pode usar esse conhecimento?",
    answer: "Absolutamente. Embora o curso aborde conceitos empresariais, os princípios de análise de crédito são universais. Você aprenderá a se posicionar melhor em qualquer solicitação de crédito pessoal ou empresarial."
  },
  {
    question: "O curso ajuda a melhorar meu score?",
    answer: "O curso ensina muito mais do que score. Você entenderá como os bancos realmente avaliam solicitações de crédito, incluindo documentação, capacidade de pagamento e garantias — elementos muito mais importantes que apenas o score."
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "Acesso vitalício. Uma vez adquirido, você pode assistir ao conteúdo quantas vezes quiser, para sempre. Incluindo todas as atualizações futuras."
  },
  {
    question: "O certificado está incluso?",
    answer: "Sim, ao concluir o curso você receberá um certificado de conclusão da Southsea Investments que pode ser utilizado para comprovar seu conhecimento em análise de crédito."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-navy-gradient relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas <span className="text-gradient-gold">Respondidas</span>
            </h2>
            <div className="section-divider my-8" />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card-gradient border border-border/50 rounded-lg px-6 data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="font-display text-lg text-foreground hover:text-gold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
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
