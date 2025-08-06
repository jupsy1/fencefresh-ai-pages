import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wrench, Shield, TreePine, Fence } from "lucide-react";
import fenceTypesImage from "@/assets/fence-types.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Garden Fencing",
      description: "Beautiful wooden panel fencing, picket fences, and decorative boundaries for residential properties.",
      features: ["Pressure treated timber", "Various heights available", "Panel and post installation"],
      price: "From £45/meter"
    },
    {
      icon: Building2,
      title: "Commercial Fencing",
      description: "Security fencing solutions for businesses, including palisade, mesh, and acoustic barriers.",
      features: ["Security grade materials", "Custom height options", "Access gates included"],
      price: "From £85/meter"
    },
    {
      icon: Wrench,
      title: "Fence Repairs",
      description: "Professional repair services for damaged panels, posts, and gates to restore your fence.",
      features: ["Same-day emergency repairs", "Post replacement", "Panel matching"],
      price: "From £75/visit"
    },
    {
      icon: Shield,
      title: "Security Fencing",
      description: "High-security perimeter fencing with anti-climb features for ultimate property protection.",
      features: ["Anti-climb spikes", "Reinforced posts", "CCTV integration ready"],
      price: "From £120/meter"
    },
    {
      icon: TreePine,
      title: "Boundary Fencing",
      description: "Clear property boundaries with durable fencing solutions that stand the test of time.",
      features: ["Surveyor marking", "Legal boundary compliance", "Neighbour consultation"],
      price: "From £55/meter"
    },
    {
      icon: Fence,
      title: "Gates & Access",
      description: "Custom gates and access solutions including automation for residential and commercial use.",
      features: ["Manual and automatic options", "Intercom systems", "Vehicle and pedestrian gates"],
      price: "From £350/gate"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Fencing Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential garden boundaries to commercial security systems, we provide comprehensive 
            fencing services with premium materials and expert craftsmanship.
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
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Fencing Services?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">10-Year Guarantee</h4>
                  <p className="text-muted-foreground">All our installations come with a comprehensive 10-year warranty for your peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Premium Materials</h4>
                  <p className="text-muted-foreground">We source only the highest quality timber and materials, all pressure-treated for longevity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Expert Installation</h4>
                  <p className="text-muted-foreground">Our certified installers ensure every fence is perfectly aligned and securely installed.</p>
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