
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="container py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Request a free quote through our website or by phone</li>
                <li>Book our fencing services</li>
                <li>Contact us for customer support</li>
                <li>Subscribe to our communications</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This may include your name, email address, phone number, postal address, and details about 
                your fencing requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide quotes and deliver our fencing services</li>
                <li>Communicate with you about your projects</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except as described in this policy. We may share information with trusted service 
                providers who assist us in operating our business, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only as long as necessary to provide our services and for 
                legitimate business purposes, including maintaining warranty records and complying with legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Erase your personal data in certain circumstances</li>
                <li>Restrict processing of your personal data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Cookies and Website Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance your browsing experience. We may also use analytics tools 
                to understand how visitors interact with our website. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any material changes 
                by posting the updated policy on our website with a new effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <p className="mb-1"><strong>Phone:</strong> 07398 243131</p>
                <p className="mb-1"><strong>Email:</strong> info@fencefresh.com</p>
                <p className="mb-4"><strong>Address:</strong> Walsall, West Midlands WS5 3EY</p>
                <p>
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                  if you believe your data protection rights have been breached.
                </p>
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

export default PrivacyPolicy;
