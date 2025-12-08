import { TrendingUp, Percent, Scale, CheckSquare, Star } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente sua Taxa de Aprovação",
    description: "Apresente-se como o cliente que os bancos querem ter."
  },
  {
    icon: Percent,
    title: "Reduza Juros com Argumentos",
    description: "Negocie de forma profissional, com dados e fundamentos."
  },
  {
    icon: Scale,
    title: "Negocie como Analista",
    description: "Entenda a lógica do banco e use isso a seu favor."
  },
  {
    icon: CheckSquare,
    title: "Checklist Perfeito",
    description: "Documentação completa antes de qualquer solicitação."
  },
  {
    icon: Star,
    title: "Seja Visto como Cliente Valioso",
    description: "Posicione-se como investimento, não como risco."
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-graphite-dark relative overflow-hidden">
      {/* Gold accent */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
            Resultados
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Você Vai <span className="text-gradient-gold">Conquistar</span>
          </h2>
          <div className="section-divider my-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`text-center ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors border border-gold/20">
                <benefit.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
