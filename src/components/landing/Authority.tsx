import { Award, BarChart2, PieChart, TrendingUp } from "lucide-react";

const metrics = [
  { label: "DSCR", value: "Debt Service Coverage Ratio", icon: BarChart2 },
  { label: "EBITDA", value: "Lucro Operacional", icon: TrendingUp },
  { label: "Dívida Líquida", value: "Posição de Endividamento", icon: PieChart },
];

export function Authority() {
  return (
    <section className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
                Autoridade
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Conhecimento de <span className="text-gradient-gold">Nível Institucional</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                O curso foi desenvolvido utilizando os mesmos indicadores e metodologias 
                que bancos e fundos de investimento utilizam para avaliar solicitações de crédito.
              </p>

              {/* Metrics */}
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-secondary/30 border border-border/30 rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-display text-lg font-semibold text-gold">
                        {metric.label}
                      </span>
                      <p className="font-body text-sm text-muted-foreground">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Seal/Badge */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl" />
                
                {/* Badge */}
                <div className="relative w-72 h-72 rounded-full border-2 border-gold/30 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                  <div className="w-56 h-56 rounded-full border border-gold/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Award className="w-12 h-12 text-gold mx-auto mb-3" />
                      <div className="font-display text-xl font-bold text-foreground mb-1">
                        Southsea
                      </div>
                      <div className="font-display text-lg text-gradient-gold font-semibold">
                        Investments
                      </div>
                      <div className="w-12 h-px bg-gold/50 mx-auto my-3" />
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                        Florida, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
