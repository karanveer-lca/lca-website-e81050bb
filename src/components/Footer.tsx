import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LCA Industrial Solutions</h3>
            <p className="text-background/70 text-sm">
              Leading provider of industrial automation solutions for modern manufacturing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/#products" className="hover:text-primary transition-colors">Special Purpose Machines</a></li>
              <li><a href="/#products" className="hover:text-primary transition-colors">6-Axis Robots</a></li>
              <li><a href="/#products" className="hover:text-primary transition-colors">IIoT Solutions</a></li>
              <li><a href="/#products" className="hover:text-primary transition-colors">PMS & EMS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Visit Us</h4>
            <p className="text-background/70 text-sm mb-4">
              St.No.3, 1279, opposite Dhandari Flyover,<br />
              Dhandari Kalan, Ludhiana,<br />
              Punjab 141016
            </p>
            <h4 className="font-semibold mb-3 mt-6">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/lca-industrial-solutions/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} LCA Industrial Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
