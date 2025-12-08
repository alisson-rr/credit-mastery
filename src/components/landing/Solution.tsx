import { Target, Shield, BarChart3, Eye, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Fundamentos do Crédito",
    description: "Base sólida sobre como o sistema de crédito funciona de verdade."
  },
  {
    icon: Shield,
    title: "Política de Crédito Inteligente",
    description: "Estratégias que profissionais usam para maximizar aprovações."
  },
  {
    icon: BarChart3,
    title: "Os 5 Cs do Crédito",
    description: "Caráter, Capacidade, Capital, Colateral e Condições — dominados."
  },
  {
    icon: Eye,
    title: "Visão Real dos Bancos",
    description: "DSCR, EBITDA, Dívida Líquida — o que realmente importa."
  },
  {
    icon: ClipboardCheck,
    title: "Preparação Profissional",
    description: "Checklist completo antes de qualquer solicitação de crédito."
  }
];

export function Solution() {
  return (
    <section className="py-24 bg-navy-gradient relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
            A Solução
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Método <span className="text-gradient-gold">Southsea</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Um sistema estruturado, desenvolvido por profissionais do mercado financeiro, 
            para você dominar crédito como um analista de banco.
          </p>
          <div className="section-divider my-8" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number indicator */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-10 hidden md:block" />
                
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className={`bg-card-gradient border border-border/50 rounded-lg p-6 hover:border-gold/30 transition-all duration-300 hover:shadow-lg inline-block text-left ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-gold/50 text-sm font-body">Etapa {index + 1}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
