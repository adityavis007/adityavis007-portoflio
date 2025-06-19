import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    href: '#home',
    label: 'Home'
  }, {
    href: '#about',
    label: 'About'
  }, {
    href: '#education',
    label: 'Education'
  }, {
    href: '#skills',
    label: 'Skills'
  }, {
    href: '#services',
    label: 'Services'
  }, {
    href: '#projects',
    label: 'Projects'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold glow-text">Aditya Portfolio.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => <a key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-text">
                  {item.label}
                </a>)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-muted-foreground hover:text-primary transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
              {navItems.map(item => <a key={item.href} href={item.href} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;