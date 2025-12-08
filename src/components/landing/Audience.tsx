import { Briefcase, LineChart, User, Users, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Empresários",
    description: "Que precisam de crédito para expandir ou estruturar seus negócios."
  },
  {
    icon: LineChart,
    title: "Profissionais Financeiros",
    description: "Que querem aprofundar conhecimento em análise de crédito."
  },
  {
    icon: User,
    title: "Pessoas Físicas",
    description: "Organizando vida financeira e buscando melhores condições."
  },
  {
    icon: Users,
    title: "Consultores",
    description: "Que assessoram clientes em decisões de crédito e financiamento."
  },
  {
    icon: GraduationCap,
    title: "Iniciantes",
    description: "Que querem entender o sistema de crédito desde o básico."
  }
];

export function Audience() {
  return (
    <section className="py-24 bg-navy-gradient relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
            Para Quem É
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Este Curso Foi Feito <span className="text-gradient-gold">Para Você</span>
          </h2>
          <div className="section-divider my-8" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group flex items-center gap-3 bg-secondary/50 border border-border/30 rounded-full px-6 py-3 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <audience.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground max-w-[200px]">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
