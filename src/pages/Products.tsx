import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Droplet, CheckCircle, ArrowRight } from "lucide-react";

export default function Products() {
  const navigate = useNavigate();

  const products = [
    {
      name: "250ml Plastic Bottles",
      icon: "💧",
      sizes: ["250ml"],
      features: ["Lightweight & Portable", "100% Recyclable", "BPA-Free", "Perfect for Events"],
      description: "Compact and convenient for events, promotions, and on-the-go hydration.",
    },
    {
      name: "500ml Plastic Bottles",
      icon: "💧",
      sizes: ["500ml"],
      features: ["Most Popular Size", "100% Recyclable", "BPA-Free", "Versatile Use"],
      description: "The perfect all-purpose size for corporate events, offices, and retail.",
      popular: true,
    },
    {
      name: "750ml Plastic Bottles",
      icon: "💧",
      sizes: ["750ml"],
      features: ["Extended Hydration", "100% Recyclable", "BPA-Free", "Sports & Fitness"],
      description: "Ideal for sports events, gyms, and outdoor activities.",
    },
    {
      name: "1L Plastic Bottles",
      icon: "💧",
      sizes: ["1L"],
      features: ["Maximum Capacity", "100% Recyclable", "BPA-Free", "All-Day Hydration"],
      description: "Perfect for long events, conferences, and maximum brand visibility.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-24 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,51,51,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-6"
            >
              <Droplet className="h-16 w-16 text-primary mx-auto" />
            </motion.div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">Products</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Plastic Bottle Collection
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Premium quality plastic bottles in various sizes to suit your brand needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-primary relative overflow-hidden group">
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <motion.div 
                      className="text-7xl mb-6 text-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" }}
                    >
                      {product.icon}
                    </motion.div>
                    <CardTitle className="text-2xl text-center">{product.name}</CardTitle>
                    <CardDescription className="text-center">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Available Sizes:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className="w-full cursor-pointer shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all"
                      onClick={() => navigate("/contact")}
                    >
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer flexible customization options for all bottle sizes. Contact us to discuss your specific requirements.
            </p>
            <Button size="lg" onClick={() => navigate("/customize")} className="cursor-pointer shadow-lg shadow-primary/25">
              Design Your Bottle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}