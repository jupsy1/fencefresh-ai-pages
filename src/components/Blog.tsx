import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Complete Guide to Garden Fencing in 2024",
      excerpt: "Everything you need to know about choosing, installing, and maintaining garden fencing for your property.",
      category: "Guides",
      readTime: "8 min read",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop",
      slug: "complete-guide-garden-fencing-2024"
    },
    {
      title: "Planning Permission for Fencing: What You Need to Know",
      excerpt: "Navigate the complex world of fencing regulations and planning permission requirements in the UK.",
      category: "Legal",
      readTime: "6 min read",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop",
      slug: "planning-permission-fencing-uk"
    },
    {
      title: "5 Signs Your Fence Needs Professional Repair",
      excerpt: "Learn to identify common fence problems before they become costly replacements.",
      category: "Maintenance",
      readTime: "4 min read",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1585128721299-3416977e8d97?w=800&h=400&fit=crop",
      slug: "fence-repair-warning-signs"
    },
    {
      title: "Commercial Security Fencing: A Business Owner's Guide",
      excerpt: "Protect your business premises with the right security fencing solution for your industry.",
      category: "Commercial",
      readTime: "10 min read",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
      slug: "commercial-security-fencing-guide"
    },
    {
      title: "Sustainable Fencing Options for Eco-Conscious Homeowners",
      excerpt: "Explore environmentally friendly fencing materials and practices for sustainable property boundaries.",
      category: "Sustainability",
      readTime: "7 min read",
      date: "February 20, 2024",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      slug: "sustainable-eco-friendly-fencing"
    },
    {
      title: "Winter Fence Maintenance: Protecting Your Investment",
      excerpt: "Essential tips for maintaining your fence during harsh winter weather conditions.",
      category: "Maintenance",
      readTime: "5 min read",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      slug: "winter-fence-maintenance-tips"
    }
  ];

  const categoryColors = {
    "Guides": "bg-primary/10 text-primary",
    "Legal": "bg-destructive/10 text-destructive",
    "Maintenance": "bg-accent/10 text-accent",
    "Commercial": "bg-blue-100 text-blue-700",
    "Sustainability": "bg-green-100 text-green-700"
  };

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Latest Insights</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fencing Tips, Guides & Industry News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our expert advice on fencing installation, maintenance, 
            regulations, and the latest industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-smooth overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${categoryColors[post.category] || 'bg-muted text-muted-foreground'}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;