import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

export default function Gallery() {
  const portfolioItems = useQuery(api.portfolio.list);

  const categories = ["all", "corporate", "events", "hotels", "retail"];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of custom branded water bottles for various industries
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                {!portfolioItems ? (
                  <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems
                      .filter((item) => category === "all" || item.industry === category)
                      .map((item, i) => (
                        <motion.div
                          key={item._id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                              <div className="text-8xl">💧</div>
                            </div>
                            <CardContent className="p-4">
                              <h3 className="font-semibold mb-1">{item.brandName}</h3>
                              <p className="text-sm text-muted-foreground mb-2 capitalize">
                                {item.industry}
                              </p>
                              <p className="text-sm">{item.description}</p>
                              {item.testimonial && (
                                <p className="text-sm text-muted-foreground italic mt-2">
                                  "{item.testimonial}"
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                )}

                {portfolioItems && portfolioItems.filter((item) => category === "all" || item.industry === category).length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-muted-foreground">No items in this category yet.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
