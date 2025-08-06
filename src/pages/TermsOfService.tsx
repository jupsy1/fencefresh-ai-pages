
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="container py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using FenceFresh services, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FenceFresh provides professional fencing services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Residential and commercial fence installation</li>
                <li>Fence repair and maintenance services</li>
                <li>Gate installation and repair</li>
                <li>Security fencing solutions</li>
                <li>Free quotations and consultations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms will be specified in your service agreement. Generally:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Deposits may be required before work commences</li>
                <li>Final payment is due upon completion of work</li>
                <li>Late payments may incur additional charges</li>
                <li>We accept cash, cheque, and bank transfer payments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Warranties and Guarantees</h2>
              <p className="text-muted-foreground leading-relaxed">
                FenceFresh provides a 10-year guarantee on workmanship for new installations, subject to normal wear 
                and tear and proper maintenance. This warranty covers defects in our installation work but does not 
                cover damage from extreme weather, accidents, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Liability Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                FenceFresh carries full public liability insurance. Our liability is limited to the value of the 
                services provided. We are not responsible for indirect or consequential damages arising from our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Property Access</h2>
              <p className="text-muted-foreground leading-relaxed">
                By engaging our services, you grant FenceFresh reasonable access to your property during agreed working 
                hours. You are responsible for ensuring safe access and for securing or removing valuable items from 
                the work area.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancellations must be made in writing. Cancellation charges may apply if materials have been ordered 
                or work has commenced. Full details will be provided in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the 
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Contact Information</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-2">For questions about these terms, contact us:</p>
                <p className="mb-1"><strong>Phone:</strong> 07398 243131</p>
                <p className="mb-1"><strong>Email:</strong> info@fencefresh.com</p>
                <p><strong>Address:</strong> Walsall, West Midlands WS5 3EY</p>
              </div>
            </section>

            <p className="text-sm text-muted-foreground border-t pt-8">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
