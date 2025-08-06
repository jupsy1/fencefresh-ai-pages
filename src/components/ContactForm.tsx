import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Submitted!",
      description: "Thank you for your interest. We'll contact you within 2 hours during business hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      postcode: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get Your Free Quote</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a detailed, no-obligation quote for your fencing project. 
            We respond to all enquiries within 2 hours during business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Request Your Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll provide you with a detailed quote within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="07xxx xxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input
                        id="postcode"
                        type="text"
                        required
                        value={formData.postcode}
                        onChange={(e) => handleInputChange("postcode", e.target.value)}
                        placeholder="B1 1AA"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-installation">New Fence Installation</SelectItem>
                        <SelectItem value="fence-repair">Fence Repair</SelectItem>
                        <SelectItem value="fence-replacement">Fence Replacement</SelectItem>
                        <SelectItem value="commercial-fencing">Commercial Fencing</SelectItem>
                        <SelectItem value="gates-access">Gates & Access</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your fencing requirements, approximate length, height preferences, etc."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="cta"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Call Us Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">07398 243131</p>
                <p className="text-muted-foreground">
                  Speak directly with our fencing experts. We're here to help with any questions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Primary Areas:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Walsall & surrounding areas</li>
                    <li>• Birmingham & West Midlands</li>
                    <li>• Wolverhampton & Stafford</li>
                    <li>• Coventry & Warwickshire</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    We cover a 50-mile radius. Contact us to confirm coverage in your area.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Emergency repairs available 24/7
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Why Choose FenceFresh?</span>
                </div>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>✓ 10-Year Guarantee on All Work</li>
                  <li>✓ Free, No-Obligation Quotes</li>
                  <li>✓ Fully Insured & Certified</li>
                  <li>✓ Same-Day Emergency Repairs</li>
                  <li>✓ Premium Materials Only</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;