import { Target, Users, BookOpen, Award } from "lucide-react";

const About = () => {
  const focusPoints = [
    {
      icon: Target,
      title: "Recognizing Your Academic Goals",
      description: "We understand the unique challenges faced by medical and life-science professionals in their academic journey.",
    },
    {
      icon: Award,
      title: "Enhancing Research Quality",
      description: "Our expert team ensures your research meets the highest standards of academic excellence and publication requirements.",
    },
    {
      icon: BookOpen,
      title: "Clear, Structured, Ethical Writing",
      description: "We support your learning through transparent, well-organized, and ethically sound academic writing practices.",
    },
    {
      icon: Users,
      title: "Building Academic Community",
      description: "Creating a strong network of scholars, researchers, and future academics in the medical and life-science fields.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            About DrScribeO
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Premium Academic and Clinical Writing Platform
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">DrScribeO</strong> is a premium academic and clinical writing platform
                dedicated to empowering medical, dental, and life-science students, researchers, clinicians, and academicians
                in their pursuit of academic excellence.
              </p>
              <p>
                We specialize in transforming complex medical and scientific ideas into publication-ready manuscripts,
                high-quality theses, dissertations, synopsis, PowerPoint presentations, seminar papers, study charts,
                and patient reports that meet the rigorous standards of academic institutions and research journals.
              </p>
              <p>
                Our expertise extends to guiding researchers and students toward successful publications in prestigious
                national and international journals, including those indexed in <strong className="text-foreground">PubMed, Scopus,</strong> and
                <strong className="text-foreground"> UGC-approved journals</strong>.
              </p>
              <p>
                At DrScribeO, we believe in the power of words to shape careers, advance knowledge, and contribute to
                the global medical and scientific community. Our team comprises experienced doctors, research analysts,
                and academic writers who understand the nuances of medical literature and the importance of precise,
                clear communication in healthcare and research.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-12 border border-primary/10">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              To provide comprehensive, ethical, and high-quality academic writing services that empower healthcare
              professionals and researchers to achieve their academic and professional goals while maintaining the
              highest standards of originality and confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Our Focus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusPoints.map((point, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <point.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Why Work With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Original Content</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="text-4xl font-bold text-secondary mb-2">Expert</div>
                <p className="text-sm text-muted-foreground">Medical Writers</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="text-4xl font-bold text-accent mb-2">On-Time</div>
                <p className="text-sm text-muted-foreground">Delivery Always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-primary max-w-3xl mx-auto">
            "It's okay to take help. We're here to support your academic journey every step of the way."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;
