
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Sitemap = () => {
  const serviceAreas = [
    { name: "Walsall", href: "/fencing-services-in-walsall" },
    { name: "Birmingham", href: "/fencing-services-in-birmingham" },
    { name: "Wolverhampton", href: "/fencing-services-in-wolverhampton" },
    { name: "Coventry", href: "/fencing-services-in-coventry" },
    { name: "Stafford", href: "/fencing-services-in-stafford" },
  ];

  const mainPages = [
    { name: "Home", href: "/" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const sections = [
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="container py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">Sitemap</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Find all the pages and sections available on the FenceFresh website.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Pages */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-2">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link 
                      to={page.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                    >
                      {page.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Home Page Sections */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-2">Home Page Sections</h2>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.href}>
                    <a 
                      href={section.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                    >
                      {section.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Service Areas */}
            <section className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-2">Service Area Pages</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {serviceAreas.map((area) => (
                  <div key={area.href} className="p-4 border border-border rounded-lg">
                    <Link 
                      to={area.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center font-medium"
                    >
                      Fencing Services in {area.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Offered */}
            <section className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-2">Services We Offer</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Garden Fencing Installation</li>
                  <li className="text-muted-foreground">• Commercial Fencing Solutions</li>
                  <li className="text-muted-foreground">• Fence Repairs & Maintenance</li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Security Fencing</li>
                  <li className="text-muted-foreground">• Gates & Access Control</li>
                  <li className="text-muted-foreground">• Boundary Fencing</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="md:col-span-2 bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <a href="tel:07398243131" className="text-muted-foreground hover:text-primary">
                    07398 243131
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <a href="mailto:info@fencefresh.com" className="text-muted-foreground hover:text-primary">
                    info@fencefresh.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Walsall, West Midlands WS5 3EY
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sitemap;
