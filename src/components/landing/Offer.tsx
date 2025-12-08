import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, Award } from "lucide-react";

const included = [
  "Acesso completo a todos os módulos",
  "6 módulos com conteúdo profissional",
  "Material complementar e checklists",
  "Indicadores técnicos (DSCR, EBITDA)",
  "Certificado de conclusão",
  "Acesso vitalício ao conteúdo",
  "Atualizações futuras inclusas"
];

export function Offer() {
  return (
    <section id="oferta" className="py-24 bg-graphite relative overflow-hidden">
      {/* Gold gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-body uppercase tracking-widest mb-4 block">
              Oferta Especial
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Garanta Seu Acesso <span className="text-gradient-gold">Agora</span>
            </h2>
            <div className="section-divider my-8" />
          </div>

          {/* Main offer card */}
          <div className="bg-card-gradient border border-gold/30 rounded-2xl overflow-hidden shadow-2xl glow-gold">
            {/* Header */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/5 border-b border-gold/20 p-6 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Sistema de Crédito Inteligente
              </h3>
              <p className="font-body text-muted-foreground mt-1">
                Southsea Investments — Acesso Completo
              </p>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefits list */}
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                    O que está incluso:
                  </h4>
                  <ul className="space-y-3">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-body text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-gold" />
                      <span className="font-body text-sm text-muted-foreground">
                        Garantia de 7 dias
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5 text-gold" />
                      <span className="font-body text-sm text-muted-foreground">
                        Acesso imediato
                      </span>
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="w-full max-w-sm mb-4"
                    onClick={() => window.open('https://hotmart.com', '_blank')}
                  >
                    Quero Dominar o Crédito
                  </Button>

                  <p className="font-body text-xs text-muted-foreground">
                    Pagamento 100% seguro via Hotmart
                  </p>
                </div>
              </div>
            </div>

            {/* Footer badges */}
            <div className="bg-secondary/30 border-t border-border/30 p-4">
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2 text-sm font-body">
                  <Award className="w-4 h-4 text-gold" />
                  Certificado Incluso
                </div>
                <div className="flex items-center gap-2 text-sm font-body">
                  <Shield className="w-4 h-4 text-gold" />
                  Compra Segura
                </div>
                <div className="flex items-center gap-2 text-sm font-body">
                  <Clock className="w-4 h-4 text-gold" />
                  Acesso Vitalício
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
