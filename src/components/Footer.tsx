import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="OnePureDrop" className="h-8 w-8" />
              <span className="font-bold text-lg">OnePureDrop</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Refreshing Brands, One Bottle at a Time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors cursor-pointer">Products</Link></li>
              <li><Link to="/customize" className="hover:text-primary transition-colors cursor-pointer">Customization</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors cursor-pointer">Industries</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/private-label" className="hover:text-primary transition-colors cursor-pointer">Private Label</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary transition-colors cursor-pointer">Sustainability</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors cursor-pointer">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors cursor-pointer">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">123 Water Street, Pure City, PC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@onepuredrop.com" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  info@onepuredrop.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 OnePureDrop. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
