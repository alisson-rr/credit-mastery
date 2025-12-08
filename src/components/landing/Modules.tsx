import { BookOpen, Brain, Layers, Building2, CreditCard, FileCheck } from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    number: "01",
    title: "Fundamentos do Crédito",
    topics: ["História e evolução", "Tipos de crédito", "Sistema financeiro"]
  },
  {
    icon: Brain,
    number: "02",
    title: "Política de Crédito Inteligente",
    topics: ["Análise de risco", "Critérios de aprovação", "Estratégias de apresentação"]
  },
  {
    icon: Layers,
    number: "03",
    title: "5 Cs do Crédito",
    topics: ["Caráter", "Capacidade", "Capital", "Colateral", "Condições"]
  },
  {
    icon: Building2,
    number: "04",
    title: "Visão dos Bancos e Fundos",
    topics: ["DSCR", "EBITDA", "Dívida Líquida", "Covenants"]
  },
  {
    icon: CreditCard,
    number: "05",
    title: "Linhas de Crédito",
    topics: ["Capital de giro", "Financiamentos", "Garantias"]
  },
  {
    icon: FileCheck,
    number: "06",
    title: "Preparação Profissional",
    topics: ["Documentação", "Checklist completo", "Apresentação ao banco"]
  }
];

export function Modules() {
  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
            Conteúdo Completo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Você Vai <span className="text-gradient-gold">Aprender</span>
          </h2>
          <div className="section-divider my-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="group bg-card-gradient border border-border/50 rounded-xl p-6 hover:border-gold/40 transition-all duration-500 hover:shadow-[0_8px_32px_-8px_hsl(42,52%,54%,0.2)] hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <module.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-display text-4xl font-bold text-gold/20 group-hover:text-gold/30 transition-colors">
                  {module.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {module.title}
              </h3>

              {/* Topics */}
              <ul className="space-y-2">
                {module.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
