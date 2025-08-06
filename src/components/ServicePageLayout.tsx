
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

interface ServicePageLayoutProps {
  location: string;
}

const ServicePageLayout = ({ location }: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary to-primary-dark">
          <div className="container relative z-10 py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Professional <span className="text-accent">Fencing Services</span> in {location}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Transform your {location} property with premium fencing solutions. From garden boundaries to commercial security, 
                we deliver quality craftsmanship with a 10-year guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Your Free Quote in {location}
                </a>
                <a 
                  href="tel:07398243131" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-colors"
                >
                  Call Now: 07398 243131
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Services />
      <Testimonials />
      <FAQ />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
