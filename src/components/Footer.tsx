import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Droplet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted border-t mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <Droplet className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  OnePureDrop
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  Premium Water Bottles
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Refreshing Brands, One Bottle at a Time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all cursor-pointer group">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all cursor-pointer group">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all cursor-pointer group">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all cursor-pointer group">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />About Us</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Products</Link></li>
              <li><Link to="/customize" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Customization</Link></li>
              <li><Link to="/industries" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Industries</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/private-label" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Private Label</Link></li>
              <li><Link to="/sustainability" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Sustainability</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Blog</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground leading-relaxed">123 Water Street, Pure City, PC 12345</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:info@onepuredrop.com" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  info@onepuredrop.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 OnePureDrop. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}