import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottleScene3D from "@/components/BottleScene3D";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { 
  Droplet, 
  Sparkles, 
  Leaf, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Landing() {
  const navigate = useNavigate();
  const testimonials = useQuery(api.testimonials.featured);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with 3D Bottle */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <Droplet className="h-16 w-16 text-primary" />
              </motion.div>
              
              <motion.h1
                {...fadeInUp}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                Pure Water. <span className="text-primary">Custom Branding.</span>
              </motion.h1>
              
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8"
              >
                Premium plastic water bottles with your brand identity — perfect for events, offices, and retail.
              </motion.p>
              
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer text-lg px-8"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/customize")}
                  className="cursor-pointer text-lg px-8"
                >
                  Design Your Bottle
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* 3D Bottle Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-background"
            >
              <BottleScene3D />
            </motion.div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="currentColor"
              className="text-background"
            />
          </svg>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mb-8"
          >
            Trusted by leading brands worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {["🏢", "🏨", "🎯", "💼", "🎪", "🏋️"].map((emoji, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                About OnePureDrop
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We specialize in premium plastic water bottles with custom branding. 
                Our BPA-free, FDA-approved bottles combine quality, affordability, and stunning design 
                to create memorable branded experiences.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From corporate events to retail launches, we provide end-to-end solutions 
                with eco-friendly plastic bottles that are 100% recyclable and sustainable.
              </p>
              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                className="cursor-pointer"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <BottleScene3D />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to get your custom branded plastic bottles
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Upload Your Logo",
                description: "Share your brand logo and design preferences with us",
                icon: Sparkles,
              },
              {
                step: "02",
                title: "Choose Your Style",
                description: "Select bottle size, label finish, and customization options",
                icon: Award,
              },
              {
                step: "03",
                title: "Get Delivered",
                description: "Receive your premium branded plastic bottles at your doorstep",
                icon: CheckCircle,
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="border-2 hover:border-primary transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 mb-4">
                      {item.step}
                    </div>
                    <item.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => navigate("/customize")}
              className="cursor-pointer"
            >
              Try Our Bottle Customizer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Plastic Bottle Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium quality plastic bottles in various sizes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "250ml Bottles", sizes: "Perfect for events", icon: "💧" },
              { name: "500ml Bottles", sizes: "Most popular size", icon: "💧" },
              { name: "750ml Bottles", sizes: "Great for sports", icon: "💧" },
              { name: "1L Bottles", sizes: "Maximum hydration", icon: "💧" },
            ].map((product, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{product.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.sizes}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate("/products")}
                      className="cursor-pointer w-full"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "100% recyclable plastic and sustainable production",
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "FDA approved, BPA-free, and food-grade certified",
              },
              {
                icon: Users,
                title: "Bulk Orders",
                description: "Flexible MOQ and competitive wholesale pricing",
              },
              {
                icon: Sparkles,
                title: "Custom Design",
                description: "Full-color printing and personalized labels",
              },
              {
                icon: TrendingUp,
                title: "Fast Turnaround",
                description: "Quick production and reliable delivery",
              },
              {
                icon: CheckCircle,
                title: "Quality Assured",
                description: "Rigorous testing and quality control",
              },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trusted by businesses worldwide
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div key={testimonial._id} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Refresh Your Brand?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get started with custom branded plastic bottles today. Request a quote and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/contact")}
                className="cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/customize")}
                className="cursor-pointer bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Design Your Bottle
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}