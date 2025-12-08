import { AlertTriangle, TrendingDown, FileX, Percent } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Crédito como Vilão",
    description: "Usado de forma emocional, não como ferramenta estratégica de crescimento."
  },
  {
    icon: TrendingDown,
    title: "Avaliação Técnica",
    description: "Bancos avaliam risco de forma técnica e matemática — não emocional."
  },
  {
    icon: FileX,
    title: "Falta de Documentação",
    description: "Sem método, documentação adequada e estratégia, a aprovação é improvável."
  },
  {
    icon: Percent,
    title: "Juros Elevados",
    description: "Quem não conhece o sistema paga mais caro — muito mais caro."
  }
];

export function Problem() {
  return (
    <section className="py-24 bg-graphite-dark relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
            O Problema
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que Tantos <span className="text-gradient-gold">Fracassam</span> com Crédito?
          </h2>
          <div className="section-divider my-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-card-gradient border border-border/50 rounded-lg p-6 hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key phrase */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold/20 text-6xl font-display">"</div>
            <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
              Sem método, crédito afunda.
              <br />
              <span className="text-gradient-gold">Com método, crédito impulsiona.</span>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
