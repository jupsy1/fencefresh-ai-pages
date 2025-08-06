import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Paintbrush, Fence, TreePine } from "lucide-react";
import fenceTypesImage from "@/assets/fence-types.jpg";

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Small Fence Painting",
      description: "Professional fence painting service for small fences up to 10 meters in length.",
      features: ["High-quality weather-resistant paint", "Surface preparation included", "Multiple color options"],
      price: "£450–£500"
    },
    {
      icon: Paintbrush,
      title: "Medium Fence Painting",
      description: "Comprehensive fence painting for medium-sized fences between 10-20 meters.",
      features: ["Premium exterior paint", "Power washing included", "2-coat application"],
      price: "£500–£750"
    },
    {
      icon: Paintbrush,
      title: "Large Fence Painting",
      description: "Custom fence painting service for large fences over 20 meters requiring detailed planning.",
      features: ["Site survey included", "Custom color matching", "Professional finish guarantee"],
      price: "£750+ (custom quote)"
    },
    {
      icon: Fence,
      title: "Gate Painting",
      description: "Specialized painting service for gates including hinges and hardware protection.",
      features: ["Hardware masking", "Rust treatment", "Smooth operation maintained"],
      price: "£150–£300 per gate"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Fence Painting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform and protect your fence with our expert painting services. We offer competitive 
            pricing based on fence size with premium quality finishes that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-smooth border-0 shadow-md">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Fence Painting Services?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">2-Year Paint Guarantee</h4>
                  <p className="text-muted-foreground">All our paint work comes with a 2-year guarantee against peeling and fading.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Premium Paints</h4>
                  <p className="text-muted-foreground">We use only the highest quality weather-resistant paints designed for exterior fence applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Professional Application</h4>
                  <p className="text-muted-foreground">Our experienced painters ensure even coverage and smooth finishes with proper surface preparation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={fenceTypesImage} 
              alt="Various fence types and installation examples"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;