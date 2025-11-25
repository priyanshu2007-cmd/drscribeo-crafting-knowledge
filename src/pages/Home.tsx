import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Shield, Users } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Home = () => {
  const featuredServices = services.slice(0, 6);

  const features = [
    { icon: CheckCircle2, title: "100% Original Content", description: "Plagiarism-free work guaranteed" },
    { icon: Shield, title: "Confidential Service", description: "Your privacy is our priority" },
    { icon: Users, title: "Expert Team", description: "Doctors & research analysts" },
    { icon: Clock, title: "On-Time Delivery", description: "Meeting your deadlines always" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              Premium Academic & Clinical Writing Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Crafting Knowledge With Precision
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              We Shape Your Academic & Clinical Excellence
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Empowering medical, dental, and life-science professionals with expert writing services for thesis, publications, and clinical documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">
                  Join Now <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-serif font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Key Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic and clinical writing solutions tailored for medical professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                category={service.category}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Why Choose DrScribeO?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Original & Plagiarism-Free</h3>
                    <p className="text-muted-foreground">Every document is crafted from scratch with thorough plagiarism checks</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Confidential Service</h3>
                    <p className="text-muted-foreground">Complete privacy and confidentiality of your work guaranteed</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">Doctors, researchers, and experienced medical writers</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">On-Time Delivery</h3>
                    <p className="text-muted-foreground">We respect your deadlines and deliver quality work on schedule</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Guaranteed Approval</h3>
                    <p className="text-muted-foreground">High success rate in journal publications and academic approvals</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Comprehensive Support</h3>
                    <p className="text-muted-foreground">From concept to submission, we're with you every step</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Strip */}
      <section className="py-4 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            <strong>Office Hours:</strong> Sorry, we are closed in the morning. Open again between 1PM–9PM.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Elevate Your Academic Success?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of satisfied medical professionals who trust DrScribeO for their academic writing needs
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
