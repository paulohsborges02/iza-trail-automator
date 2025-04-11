
export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-background flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
          IZ
        </div>
        <span className="text-lg md:text-xl font-medium text-primary">Iza da Trilha</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#funcionalidades" className="text-foreground hover:text-primary transition-colors">
          Funcionalidades
        </a>
        <a href="#vantagens" className="text-foreground hover:text-primary transition-colors">
          Vantagens
        </a>
        <a href="#planos" className="text-foreground hover:text-primary transition-colors">
          Planos
        </a>
        <a href="#faq" className="text-foreground hover:text-primary transition-colors">
          FAQ
        </a>
      </nav>
    </header>
  );
}
