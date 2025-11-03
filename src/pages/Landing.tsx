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
  Star,
  Zap
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

      {/* Hero Section with Enhanced 3D Bottle */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,51,51,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,51,51,0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="z-10"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <Droplet className="h-16 w-16 text-primary" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                  />
                </div>
              </motion.div>
              
              <motion.h1
                {...fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
              >
                Pure Water. <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text">Custom Branding.</span>
              </motion.h1>
              
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
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
                  className="cursor-pointer text-lg px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/customize")}
                  className="cursor-pointer text-lg px-8 border-2 hover:bg-primary/5"
                >
                  Design Your Bottle
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 mt-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>BPA-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>FDA Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>100% Recyclable</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced 3D Bottle Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[500px] md:h-[650px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 shadow-2xl border border-primary/10"
            >
              <BottleScene3D />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="currentColor"
              className="text-background"
            />
          </svg>
        </div>
      </section>

      {/* Featured Clients with improved animation */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-wider"
          >
            Trusted by leading brands worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {[{ emoji: "🏢", label: "Corporate" }, { emoji: "🏨", label: "Hotels" }, { emoji: "🎯", label: "Events" }, { emoji: "💼", label: "Business" }, { emoji: "🎪", label: "Entertainment" }, { emoji: "🏋️", label: "Fitness" }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-2">{item.emoji}</div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with improved layout */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About OnePureDrop
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                We specialize in premium plastic water bottles with custom branding. 
                Our BPA-free, FDA-approved bottles combine quality, affordability, and stunning design 
                to create memorable branded experiences.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                From corporate events to retail launches, we provide end-to-end solutions 
                with eco-friendly plastic bottles that are 100% recyclable and sustainable.
              </p>
              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                size="lg"
                className="cursor-pointer border-2 hover:bg-primary/5"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px]"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/15 to-primary/5 shadow-2xl border border-primary/10">
                <BottleScene3D />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works with enhanced cards */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Three simple steps to get your custom branded plastic bottles
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
                icon: Zap,
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="border-2 hover:border-primary hover:shadow-xl transition-all h-full group">
                  <CardContent className="p-8">
                    <div className="text-6xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                      {item.step}
                    </div>
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
              className="cursor-pointer shadow-lg shadow-primary/25"
            >
              Try Our Bottle Customizer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase with improved cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">Products</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Plastic Bottle Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Premium quality plastic bottles in various sizes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {[
              { name: "250ml Bottles", sizes: "Perfect for events", icon: "💧", popular: false },
              { name: "500ml Bottles", sizes: "Most popular size", icon: "💧", popular: true },
              { name: "750ml Bottles", sizes: "Great for sports", icon: "💧", popular: false },
              { name: "1L Bottles", sizes: "Maximum hydration", icon: "💧", popular: false },
            ].map((product, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="hover:shadow-xl transition-all cursor-pointer h-full group border-2 hover:border-primary relative overflow-hidden">
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="text-7xl mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" }}
                    >
                      {product.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{product.sizes}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate("/products")}
                      className="cursor-pointer w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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

      {/* Features with improved grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
                <div className="flex gap-4 p-6 rounded-xl hover:bg-background transition-colors">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Trusted by businesses worldwide
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div key={testimonial._id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all border-2">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
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

      {/* CTA Section with enhanced design */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Refresh Your Brand?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95 leading-relaxed">
              Get started with custom branded plastic bottles today. Request a quote and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/contact")}
                className="cursor-pointer text-lg px-8 shadow-xl hover:shadow-2xl transition-all"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/customize")}
                className="cursor-pointer bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
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