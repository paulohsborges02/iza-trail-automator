
import { Link } from "react-router-dom";

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
        <Link to="#funcionalidades" className="text-foreground hover:text-primary transition-colors">
          Funcionalidades
        </Link>
        <Link to="#vantagens" className="text-foreground hover:text-primary transition-colors">
          Vantagens
        </Link>
        <Link to="#planos" className="text-foreground hover:text-primary transition-colors">
          Planos
        </Link>
        <Link to="#faq" className="text-foreground hover:text-primary transition-colors">
          FAQ
        </Link>
      </nav>
    </header>
  );
}
