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
        <div className="max-w-4xl mx-auto">
          {/* Content - Centered */}
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="animate-fade-up opacity-0 delay-200 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 px-2">
              <span className="text-foreground">Crédito Inteligente</span>
              <br />
              <span className="text-gradient-gold">Não é Sorte. É Método.</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up opacity-0 delay-300 font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-2">
              Aprenda como bancos e fundos <strong className="text-foreground">realmente</strong> avaliam você 
              e conquiste crédito de forma profissional e estratégica.
            </p>

            {/* CTA */}
            <div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToOffer}
                className="min-w-[240px] sm:min-w-[280px] text-sm sm:text-base"
              >
                Quero Acessar o Curso Agora
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-up opacity-0 delay-500 mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground text-sm font-body">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Metodologia Profissional</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Visão Real dos Bancos</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificado Incluso</span>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="animate-fade-up opacity-0 delay-500 mt-12">
              <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/aPK-8FxU2ho"
                  title="Video de apresentação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
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
