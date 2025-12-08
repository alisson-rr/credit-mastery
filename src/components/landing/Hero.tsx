import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(42, 52%, 54%, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(42, 52%, 54%, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Seal */}
          <div className="animate-fade-up opacity-0 delay-100 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-body tracking-wide">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Southsea Investments — Florida, USA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up opacity-0 delay-200 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Crédito Inteligente</span>
            <br />
            <span className="text-gradient-gold">Não é Sorte — É Método.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up opacity-0 delay-300 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Aprenda como bancos e fundos <strong className="text-foreground">realmente</strong> avaliam você 
            e conquiste crédito de forma profissional e estratégica.
          </p>

          {/* CTA */}
          <div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToOffer}
              className="min-w-[280px]"
            >
              Quero Acessar o Curso Agora
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up opacity-0 delay-500 mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm font-body">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Metodologia Profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Visão Real dos Bancos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certificado Incluso</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gold/50" />
        </div>
      </div>
    </section>
  );
}
