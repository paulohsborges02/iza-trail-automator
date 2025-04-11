
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-10 w-10 rounded-full bg-primary-foreground flex items-center justify-center text-primary font-bold">
              IZ
            </div>
            <span className="text-lg font-medium">Iza da Trilha</span>
          </div>
          
          <div className="text-sm text-primary-foreground/80">
            &copy; {currentYear} Iza da Trilha. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
