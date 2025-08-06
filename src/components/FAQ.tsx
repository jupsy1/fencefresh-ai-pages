import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "How much does fencing typically cost in the West Midlands?",
      answer: "Fencing costs vary depending on materials and complexity. Garden panel fencing starts from £45/meter, while commercial security fencing begins at £85/meter. We provide free, detailed quotes for all projects with no hidden costs."
    },
    {
      question: "What types of fencing materials are best for the UK weather?",
      answer: "Pressure-treated timber is excellent for residential fencing, offering durability against UK weather conditions. For commercial applications, galvanized steel with powder coating provides superior longevity. We source all materials from reputable UK suppliers with appropriate weather resistance ratings."
    },
    {
      question: "How long does fence installation take?",
      answer: "Most residential garden fencing projects are completed within 1-2 days. Larger commercial installations may take 3-5 days depending on scope. We provide accurate timelines during our free consultation and always stick to agreed schedules."
    },
    {
      question: "Do I need planning permission for fencing?",
      answer: "Generally, fences up to 2 meters high don't require planning permission. However, restrictions apply near highways, conservation areas, and listed buildings. We provide guidance on regulations and can help with any necessary applications."
    },
    {
      question: "What's the best time of year to install fencing?",
      answer: "We install fencing year-round, but spring and summer offer optimal conditions. Ground conditions are typically better, and weather delays are less likely. However, we can work in winter with proper preparation and techniques."
    },
    {
      question: "How do I maintain my fence for longevity?",
      answer: "Annual inspection and cleaning extend fence life significantly. Apply wood treatment every 2-3 years for timber fences. Check for loose panels, damaged posts, and clear vegetation growth. We offer maintenance services and provide detailed care instructions."
    },
    {
      question: "What fencing options are most secure for my property?",
      answer: "Security needs vary by property type. For residential: close-board or panel fencing with concrete posts. For commercial: palisade or mesh fencing with anti-climb features. We assess your specific security requirements during consultation."
    },
    {
      question: "Can you repair existing fences?",
      answer: "Yes, we provide comprehensive repair services including panel replacement, post straightening, and gate repairs. We can often match existing materials and styles. Emergency repairs are available for storm damage and security issues."
    },
    {
      question: "What's the difference between panel and lap fencing?",
      answer: "Panel fencing uses pre-made sections for quick installation and uniform appearance. Lap fencing (close-board) uses individual boards for a more traditional look and better wind resistance. Both offer excellent privacy and security when properly installed."
    },
    {
      question: "How do I choose the right fencing company?",
      answer: "Look for proper insurance, local references, written guarantees, and transparent pricing. We're fully insured, offer 10-year guarantees, and provide detailed written quotes. Check reviews, view previous work, and ensure clear communication throughout."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our fencing services, installation process, 
            and maintenance requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-smooth">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:07398243131" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              Call Us: 07398 243131
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;