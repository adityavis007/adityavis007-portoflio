
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary to-blue-500 p-1 animate-pulse-glow">
                <img src="https://i.postimg.cc/44w1tSQB/adiprot.png" alt="Aditya Vishwakarma" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="glow-text bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Aditya Vishwakarma
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
            Aspiring Web Designer & Developer
          </h2>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Creative and enthusiastic CSE student exploring the world of frontend development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
              Download Resume
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold">View My Self</Button>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">Social Links</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.facebook.com/aditya.vishakarma.5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer hover:glow-border"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/its___aditya007" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer hover:glow-border"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-vishwakarma007" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer hover:glow-border"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/adityavis007" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary/70 hover:border-primary hover:text-primary transition-colors cursor-pointer hover:glow-border"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
