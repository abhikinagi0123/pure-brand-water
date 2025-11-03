import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Award, Users, TrendingUp, Heart, Target, Leaf } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on the quality of our products and services.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and reducing environmental impact.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We go above and beyond.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly improving our processes and exploring new solutions.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1M+", label: "Bottles Produced" },
    { number: "50+", label: "Countries Served" },
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
              About OnePureDrop
            </h1>
            <p className="text-lg text-muted-foreground">
              Refreshing brands, one bottle at a time since 2014
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2014, OnePureDrop began with a simple mission: to help businesses create memorable branded experiences through custom water bottles. What started as a small operation has grown into a trusted partner for companies worldwide.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We've produced over 1 million bottles for clients ranging from Fortune 500 companies to local businesses, always maintaining our commitment to quality, sustainability, and exceptional service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to innovate and expand our offerings, helping brands make a lasting impression with every drop.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users className="h-32 w-32 text-primary" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your brand. Get in touch today.
            </p>
            <Button size="lg" onClick={() => navigate("/contact")} className="cursor-pointer">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
