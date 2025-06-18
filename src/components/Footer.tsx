
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

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
            <a
              href="https://www.facebook.com/aditya.vishakarma.5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com/its___aditya007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-vishwakarma007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/adityavis007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <Github size={18} />
            </a>
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
