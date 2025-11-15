import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import ContactDialog from "./ContactDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="/#products"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="/#benefits"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefits
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
            <ContactDialog className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 space-y-4 border-t border-border">
            <a
              href="/#products"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="/#benefits"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <ContactDialog className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
