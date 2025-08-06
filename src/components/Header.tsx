import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { href: "/fencing-services-in-walsall", label: "Walsall" },
    { href: "/fencing-services-in-birmingham", label: "Birmingham" },
    { href: "/fencing-services-in-wolverhampton", label: "Wolverhampton" },
    { href: "/fencing-services-in-coventry", label: "Coventry" },
    { href: "/fencing-services-in-stafford", label: "Stafford" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gradient">FenceFresh</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#blog"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="tel:07398243131" className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth">
            <Phone className="h-4 w-4" />
            <span className="font-medium">07398 243131</span>
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href="#contact">Free Quote</a>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>FenceFresh</SheetTitle>
                <SheetDescription>
                  Professional fencing services across the West Midlands
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#blog"
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-smooth"
                >
                  Blog
                </a>
                <div className="pt-4 border-t">
                  <a href="tel:07398243131" className="flex items-center space-x-2 text-primary">
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">07398 243131</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;