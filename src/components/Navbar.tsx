import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Menu, X, Droplet } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Customization", path: "/customize" },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced design */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
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

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons with enhanced design */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/contact")}
              className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary transition-all"
            >
              Get a Quote
            </Button>
            {!isAuthenticated && (
              <Button 
                onClick={() => navigate("/auth")} 
                className="cursor-pointer shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all bg-gradient-to-r from-primary to-primary/90"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button with enhanced design */}
          <button
            className="lg:hidden cursor-pointer p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with enhanced animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-sm font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/contact");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full cursor-pointer border-2 hover:bg-primary/5"
                >
                  Get a Quote
                </Button>
                {!isAuthenticated && (
                  <Button
                    onClick={() => {
                      navigate("/auth");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full cursor-pointer shadow-lg shadow-primary/25"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}