import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Walsall",
      rating: 5,
      text: "Absolutely fantastic service from FenceFresh! They installed a beautiful garden fence that has transformed our outdoor space. The team was professional, punctual, and cleaned up perfectly after themselves.",
      service: "Garden Fencing"
    },
    {
      name: "Mark Thompson",
      location: "Birmingham",
      rating: 5,
      text: "Needed urgent fence repairs after storm damage. FenceFresh responded within hours and had it fixed the same day. Excellent workmanship and very reasonable pricing. Highly recommended!",
      service: "Fence Repairs"
    },
    {
      name: "Lisa Chen",
      location: "Wolverhampton",
      rating: 5,
      text: "Professional installation of our commercial security fencing. The team understood our requirements perfectly and delivered exactly what we needed. Great communication throughout the project.",
      service: "Commercial Fencing"
    },
    {
      name: "David Williams",
      location: "Coventry",
      rating: 5,
      text: "From quote to completion, everything was seamless. The quality of materials and installation is outstanding. Our new fence looks amazing and we're confident it will last for years to come.",
      service: "Boundary Fencing"
    },
    {
      name: "Emma Roberts",
      location: "Stafford",
      rating: 5,
      text: "Exceptional service and craftsmanship. The team helped us choose the perfect fencing solution for our property and installed it to perfection. Worth every penny for the quality we received.",
      service: "Garden Fencing"
    },
    {
      name: "James Mitchell",
      location: "Birmingham",
      rating: 5,
      text: "Impressed with the professionalism and attention to detail. Our automatic gates work flawlessly and the installation was completed exactly on schedule. Fantastic value for money.",
      service: "Gates & Access"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Customer Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Hundreds of Happy Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers across the West Midlands 
            have to say about our fencing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-muted p-4 rounded-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold">4.9/5 average rating</span>
            <span className="text-muted-foreground">from 250+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;