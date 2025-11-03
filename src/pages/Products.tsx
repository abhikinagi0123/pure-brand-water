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
      name: "PET Bottles",
      icon: "💧",
      sizes: ["250ml", "330ml", "500ml", "750ml", "1L"],
      features: ["Lightweight", "100% Recyclable", "BPA-Free", "Cost-effective"],
      description: "Perfect for events, promotions, and retail distribution.",
    },
    {
      name: "Glass Bottles",
      icon: "🍾",
      sizes: ["330ml", "500ml", "750ml"],
      features: ["Premium Feel", "Reusable", "Eco-Friendly", "Elegant Design"],
      description: "Ideal for luxury brands, hotels, and high-end events.",
    },
    {
      name: "Aluminum Bottles",
      icon: "🥤",
      sizes: ["500ml", "750ml", "1L"],
      features: ["Durable", "Infinitely Recyclable", "Keeps Cold", "Modern Look"],
      description: "Great for sports events, gyms, and outdoor activities.",
    },
    {
      name: "Premium Mineral Water",
      icon: "💎",
      sizes: ["500ml", "750ml", "1L"],
      features: ["Natural Spring", "Mineral-Rich", "Premium Quality", "Custom Labels"],
      description: "Sourced from pristine springs for the ultimate quality.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Droplet className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Product Range
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium quality bottles in various materials and sizes to suit your brand needs
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-6xl mb-4">{product.icon}</div>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Available Sizes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
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
                      className="w-full mt-6 cursor-pointer"
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
