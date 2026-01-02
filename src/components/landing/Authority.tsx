import { BarChart2, PieChart, TrendingUp } from "lucide-react";

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
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Conhecimento de <span className="text-gradient-gold">Nível Institucional</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />

              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
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

            {/* Right: Photo */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 rounded-3xl blur-2xl" />
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-transparent rounded-2xl" />
                
                {/* Photo */}
                <img 
                  src="/Josemar.jpeg" 
                  alt="Josemar" 
                  className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl border border-gold/20"
                />
                
                {/* Badge */}
                <div className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-sm border border-gold/30 rounded-xl px-4 py-2 shadow-lg">
                  <p className="font-display text-xs text-gold font-semibold">Especialista em Crédito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
