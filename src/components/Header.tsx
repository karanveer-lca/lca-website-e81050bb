import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl sm:text-2xl font-bold text-primary">
              LCA Industrial Solutions
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="#products"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90">
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
