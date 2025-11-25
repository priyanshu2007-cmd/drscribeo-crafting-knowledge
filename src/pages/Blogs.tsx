import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "You Know? It's Okay to Take Help",
      excerpt: "In the demanding world of medical and academic research, seeking professional writing assistance is not just acceptable—it's smart. Learn why successful researchers and clinicians choose to collaborate with expert writers.",
      category: "Academic Advice",
      date: "2024-01-15",
      featured: true,
    },
    {
      id: 2,
      title: "How to Choose the Right Journal for Your Research",
      excerpt: "Publishing your research in the right journal is crucial for maximum impact. Discover the key factors to consider when selecting a journal, from impact factor to scope alignment and publication timeline.",
      category: "Publication Tips",
      date: "2024-01-10",
      featured: false,
    },
    {
      id: 3,
      title: "Common Mistakes in Medical Thesis Writing",
      excerpt: "Avoid these common pitfalls that can delay your thesis submission or affect your grades. From literature review errors to methodology issues, we cover what to watch out for in your thesis writing journey.",
      category: "Writing Tips",
      date: "2024-01-05",
      featured: false,
    },
    {
      id: 4,
      title: "Understanding PubMed Indexing Requirements",
      excerpt: "Want your research to be indexed in PubMed? Learn about the criteria, journal requirements, and best practices for ensuring your work reaches this prestigious medical literature database.",
      category: "Publication Guide",
      date: "2023-12-28",
      featured: false,
    },
    {
      id: 5,
      title: "Crafting an Effective Research Synopsis",
      excerpt: "A well-written synopsis is your first step toward thesis approval. Discover the essential components, formatting guidelines, and writing strategies that make your synopsis stand out to review committees.",
      category: "Academic Writing",
      date: "2023-12-20",
      featured: false,
    },
    {
      id: 6,
      title: "The Importance of Plagiarism-Free Academic Work",
      excerpt: "Academic integrity is the foundation of credible research. Understand why plagiarism-free content matters, how to avoid unintentional plagiarism, and the consequences of academic dishonesty.",
      category: "Academic Ethics",
      date: "2023-12-15",
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Insights, tips, and guidance for academic writing and research publication
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-strong hover:shadow-[0_16px_50px_-8px_hsl(var(--primary)/0.25)] transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-white mx-auto mb-4">
                      <span className="text-3xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary">Featured Post</h3>
                  </div>
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-3">
                    {featuredPost.category}
                  </span>
                  <CardTitle className="text-2xl font-serif mb-4">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={16} className="mr-2" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Read More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="flex flex-col shadow-soft hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full w-fit mb-2">
                    {post.category}
                  </span>
                  <CardTitle className="text-xl font-serif">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    Read <ArrowRight className="ml-1" size={14} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-medium p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Want to Share Your Story?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Have insights or experiences about academic writing? We'd love to feature your story on our blog.
          </p>
          <Button asChild size="lg" className="gradient-primary">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
