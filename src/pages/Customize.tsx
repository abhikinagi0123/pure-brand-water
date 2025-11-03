import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Upload, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function Customize() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qrCode, setQrCode] = useState(false);
  const createCustomization = useMutation(api.customizations.create);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      bottleType: formData.get("bottleType") as string,
      bottleColor: formData.get("bottleColor") as string,
      labelFinish: formData.get("labelFinish") as string,
      capColor: formData.get("capColor") as string,
      personalizedMessage: formData.get("personalizedMessage") as string,
      qrCode,
    };

    try {
      await createCustomization(data);
      toast.success("Customization saved!", {
        description: "We'll contact you shortly with a mockup.",
      });
      (e.target as HTMLFormElement).reset();
      setQrCode(false);
    } catch (error) {
      toast.error("Failed to save customization. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Design Your Custom Bottle
            </h1>
            <p className="text-lg text-muted-foreground">
              Create a unique branded water bottle that perfectly represents your brand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Customization Options</CardTitle>
                  <CardDescription>
                    Fill in the details to create your perfect bottle
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" name="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bottleType">Bottle Type *</Label>
                      <Select name="bottleType" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bottle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pet">PET Bottles</SelectItem>
                          <SelectItem value="glass">Glass Bottles</SelectItem>
                          <SelectItem value="aluminum">Aluminum Bottles</SelectItem>
                          <SelectItem value="premium">Premium Mineral</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bottleColor">Bottle Color</Label>
                        <Input id="bottleColor" name="bottleColor" placeholder="e.g., Clear, Blue" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="capColor">Cap Color</Label>
                        <Input id="capColor" name="capColor" placeholder="e.g., White, Black" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="labelFinish">Label Finish *</Label>
                      <Select name="labelFinish" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select finish" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gloss">Glossy</SelectItem>
                          <SelectItem value="matte">Matte</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="personalizedMessage">Personalized Message</Label>
                      <Textarea
                        id="personalizedMessage"
                        name="personalizedMessage"
                        placeholder="Add a custom message or tagline..."
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-0.5">
                        <Label htmlFor="qrCode">Add QR Code</Label>
                        <p className="text-sm text-muted-foreground">
                          Include a scannable QR code on your label
                        </p>
                      </div>
                      <Switch
                        id="qrCode"
                        checked={qrCode}
                        onCheckedChange={setQrCode}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="logo">Upload Your Logo</Label>
                      <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG, SVG up to 10MB
                        </p>
                      </div>
                    </div>

                    <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                      {isSubmitting ? "Saving..." : "Save Customization"}
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>See how your bottle will look</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">💧</div>
                      <p className="text-sm text-muted-foreground">
                        Your custom design preview will appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Full-color custom label printing",
                    "Your logo prominently displayed",
                    "Choice of bottle size and material",
                    "Optional QR code integration",
                    "Free design mockup",
                    "Fast turnaround time",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
