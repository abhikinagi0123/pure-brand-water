import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Building2, Hotel, Dumbbell, ShoppingBag, PartyPopper, Briefcase, ArrowRight } from "lucide-react";

export default function Industries() {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Make your conferences, meetings, and corporate events memorable with branded water bottles.",
      features: ["Company logo printing", "Event-specific designs", "Bulk ordering", "Fast delivery"],
      image: "🏢",
    },
    {
      icon: Hotel,
      title: "Hotels & Hospitality",
      description: "Elevate guest experience with premium branded water bottles in rooms and amenities.",
      features: ["Luxury packaging", "Custom sizes", "Eco-friendly options", "Consistent branding"],
      image: "🏨",
    },
    {
      icon: Dumbbell,
      title: "Gyms & Fitness",
      description: "Keep your members hydrated with custom sports bottles featuring your gym's branding.",
      features: ["Durable materials", "Sports cap options", "Motivational messages", "Member rewards"],
      image: "🏋️",
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Sell branded water bottles as merchandise or promotional items for your brand.",
      features: ["Retail-ready packaging", "Multiple size options", "Private labeling", "Wholesale pricing"],
      image: "🛍️",
    },
    {
      icon: PartyPopper,
      title: "Events & Weddings",
      description: "Create lasting memories with personalized water bottles for your special occasions.",
      features: ["Custom designs", "Date & names printing", "Favor packaging", "Small batch orders"],
      image: "🎉",
    },
    {
      icon: Briefcase,
      title: "Marketing & Promotions",
      description: "Boost brand awareness with promotional water bottles for campaigns and giveaways.",
      features: ["Eye-catching designs", "QR code integration", "Campaign tracking", "Cost-effective"],
      image: "💼",
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Industries We Serve
            </h1>
            <p className="text-lg text-muted-foreground">
              Custom branded water bottles for every business and occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-6xl mb-4">{industry.image}</div>
                    <CardTitle className="flex items-center gap-2">
                      <industry.icon className="h-5 w-5 text-primary" />
                      {industry.title}
                    </CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {industry.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer"
                      onClick={() => navigate("/contact")}
                    >
                      Get Started
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
              Don't See Your Industry?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We work with businesses of all types and sizes. Contact us to discuss your specific needs.
            </p>
            <Button size="lg" onClick={() => navigate("/contact")} className="cursor-pointer">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
