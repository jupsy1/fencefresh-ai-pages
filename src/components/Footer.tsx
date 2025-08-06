import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    "Walsall", "Birmingham", "Wolverhampton", "Coventry", "Stafford",
    "Dudley", "West Bromwich", "Sutton Coldfield", "Solihull", "Cannock"
  ];

  const services = [
    "Garden Fencing", "Commercial Fencing", "Fence Repairs",
    "Security Fencing", "Gates & Access", "Boundary Fencing"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">FenceFresh</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional fencing services across the West Midlands. 
              Quality craftsmanship with a 10-year guarantee.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:07398243131" className="hover:text-accent transition-smooth">
                  07398 243131
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@fencefresh.com" className="hover:text-accent transition-smooth">
                  info@fencefresh.com
                </a>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>Walsall, West Midlands WS5 3EY</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={`#services`} 
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a 
                    href={`/fencing-services-in-${area.toLowerCase().replace(' ', '-')}`} 
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Mon-Fri: 8AM-6PM</span>
              </div>
              <div className="ml-6">Sat: 8AM-4PM</div>
              <div className="ml-6">Sun: Closed</div>
              <p className="text-accent text-xs mt-2">Emergency repairs 24/7</p>
            </div>
            
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth">
                  Free Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} FenceFresh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;