import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-fencing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white/90 font-medium">4.9/5 from 250+ customers</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional <span className="text-accent">Fencing Services</span> Across the West Midlands
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Transform your property with premium fencing solutions. From garden boundaries to commercial security, 
            we deliver quality craftsmanship with a 10-year guarantee across Birmingham, Walsall, and surrounding areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Get Your Free Quote Today</a>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:07398243131">Call Now: 07398 243131</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>10-Year Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Free Quotations</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;