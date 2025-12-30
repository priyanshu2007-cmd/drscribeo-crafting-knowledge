import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Proofreading & Formatting",
    icon: Zap,
    features: [
      "Grammar & spelling correction",
      "Academic tone refinement",
      "Formatting compliance check",
      "Reference style verification",
      "Single revision round",
      "5-7 day turnaround",
    ],
    highlight: false,
    ctaText: "Get Started",
    badge: null,
  },
  {
    name: "Standard",
    description: "Full Writing & Plagiarism Check",
    icon: Star,
    features: [
      "Complete content writing",
      "Thorough plagiarism check",
      "Reference management",
      "Two revision rounds",
      "Formatting & proofreading",
      "3-5 day turnaround",
      "Email support",
    ],
    highlight: true,
    ctaText: "Most Popular",
    badge: "Recommended",
  },
  {
    name: "Premium",
    description: "End-to-End Support & Defense Prep",
    icon: Crown,
    features: [
      "Everything in Standard",
      "Supervisor feedback integration",
      "Mock defense preparation",
      "Presentation coaching",
      "Unlimited revisions",
      "Priority turnaround",
      "Dedicated support manager",
      "Post-submission support",
    ],
    highlight: false,
    ctaText: "Go Premium",
    badge: "Best Value",
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate("/contact?subject=Consultation%20Request");
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Starting Packages
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Choose the level of support that matches your academic journey
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
            Since academic work is custom, these are starting packages. 
            Prices vary based on complexity, timeline, and specific requirements.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary shadow-strong"
                  : "bg-card border border-border shadow-soft hover:shadow-medium"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-bold text-primary-foreground gradient-primary rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.highlight ? "gradient-primary" : "bg-muted"
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlight ? "text-secondary" : "text-primary"
                    }`} />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={handleConsultation}
                className={`w-full ${
                  plan.highlight 
                    ? "gradient-primary hover:opacity-90" 
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                size="lg"
              >
                {plan.ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center border border-border">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every academic project is unique. Contact us for a personalized quote 
              tailored to your specific requirements, timeline, and complexity level.
            </p>
            <Button
              onClick={handleConsultation}
              size="lg"
              className="gradient-primary hover:opacity-90 text-lg px-8"
            >
              Schedule Your Consultation Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Important Note:</strong> Prices vary based on complexity, 
              timeline, subject area, and specific requirements. All packages include our quality guarantee. 
              Contact us for a detailed, customized quotation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
