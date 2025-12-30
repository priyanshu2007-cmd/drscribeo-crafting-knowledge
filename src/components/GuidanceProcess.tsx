import { MessageSquare, FileEdit, Search, CheckCircle, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We understand your topic and requirements through detailed discussion.",
    step: 1,
  },
  {
    icon: FileEdit,
    title: "Drafting",
    description: "Expert writers craft the initial content with precision and care.",
    step: 2,
  },
  {
    icon: Search,
    title: "Review & Refine",
    description: "You review, we edit - comprehensive proofreading and refinement.",
    step: 3,
  },
  {
    icon: CheckCircle,
    title: "Final Delivery",
    description: "Plagiarism-check, formatting, and quality assurance before delivery.",
    step: 4,
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Post-submission support and defense preparation assistance.",
    step: 5,
  },
];

const GuidanceProcess = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            The Guidance Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to academic excellence - from initial consultation to final success
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
          </div>

          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                {/* Step Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center text-sm font-bold text-primary">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 p-4">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-20 hidden lg:block" style={{ left: `${(index + 1) * 20 - 2}%` }}>
                    <div className="w-6 h-6 text-primary/40">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => (
            <div key={step.step} className="relative flex gap-6">
              {/* Vertical Line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-medium flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-secondary opacity-30 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-2 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidanceProcess;
