import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-graphite-dark relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight px-2">
            Quem domina crédito,
            <br />
            <span className="text-gradient-gold">domina crescimento.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-muted-foreground mb-10 max-w-xl mx-auto px-2">
            Não deixe oportunidades passarem por falta de conhecimento. 
            Comece hoje sua jornada para o crédito inteligente.
          </p>

          <Button 
            variant="hero" 
            size="lg" 
            className="min-w-[240px] sm:min-w-[280px] text-sm sm:text-base group"
            onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Garantir Meu Acesso Agora
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Southsea seal */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <div className="inline-flex items-center gap-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                <img src="/logomarca.png" alt="Logo" className="h-36 object-contain"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
