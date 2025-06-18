
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-xl font-bold glow-text">Aditya Vishwakarma</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Aspiring Web Designer & Developer
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer">
              <span className="text-sm font-bold">Li</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer">
              <span className="text-sm font-bold">Gh</span>
            </div>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Aditya Vishwakarma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
