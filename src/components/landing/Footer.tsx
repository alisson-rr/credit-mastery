export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center">
              <span className="font-display text-gold text-xs font-bold">S</span>
            </div>
            <span className="font-display text-sm text-foreground">
              Southsea Investments
            </span>
          </div>

          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Southsea Investments. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Termos de Uso
            </a>
            <a 
              href="#" 
              className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
