import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Dr. Anita Sharma",
      role: "MD, General Medicine",
      service: "Thesis Writing",
      rating: 5,
      review: "DrScribeO helped me complete my MD thesis with exceptional quality. The team understood my research topic perfectly and delivered a well-structured, plagiarism-free thesis that was approved on the first submission. Highly recommend their services!",
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "BDS, Periodontology",
      service: "Journal Publication",
      rating: 5,
      review: "I was struggling to get my research published in an indexed journal. DrScribeO not only helped me refine my manuscript but also guided me through the entire publication process. My paper is now published in a Scopus-indexed journal!",
    },
    {
      id: 3,
      name: "Priya Mehta",
      role: "PhD Scholar, Life Sciences",
      service: "Synopsis Writing",
      rating: 5,
      review: "The synopsis they prepared for my PhD was comprehensive and perfectly aligned with university guidelines. Their attention to detail and prompt communication made the entire process smooth. Worth every penny!",
    },
    {
      id: 4,
      name: "Dr. Amit Verma",
      role: "MS, Orthopedics",
      service: "Research Article",
      rating: 5,
      review: "Professional service with excellent results. My research article was written with proper citations and methodology. The team's medical knowledge and writing expertise are truly impressive. Will definitely use their services again.",
    },
    {
      id: 5,
      name: "Sneha Patel",
      role: "MDS Student",
      service: "PPT Presentation",
      rating: 5,
      review: "Needed a professional presentation for my seminar on short notice. DrScribeO delivered an outstanding PowerPoint with excellent content and design. My professors were very impressed!",
    },
    {
      id: 6,
      name: "Dr. Mohammed Ali",
      role: "MBBS, Intern",
      service: "Patient Reports",
      rating: 5,
      review: "They helped me prepare detailed patient case reports for a conference. The reports were meticulously formatted and clinically accurate. Excellent work and very responsive team.",
    },
    {
      id: 7,
      name: "Dr. Kavita Reddy",
      role: "MDS, Prosthodontics",
      service: "Dissertation",
      rating: 5,
      review: "My MDS dissertation was a complex project, but DrScribeO handled it with expertise. From literature review to conclusion, everything was perfectly researched and written. Completely satisfied with the outcome!",
    },
    {
      id: 8,
      name: "Arjun Singh",
      role: "MSc Microbiology",
      service: "Review Article",
      rating: 5,
      review: "Excellent systematic review article that met all journal requirements. The team's understanding of scientific writing standards is remarkable. Timely delivery and great support throughout.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Happy Clients
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Real testimonials from satisfied medical and life-science professionals
          </p>
          <div className="flex items-center justify-center gap-2 text-3xl mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-yellow-400 text-yellow-400" size={32} />
            ))}
          </div>
          <p className="text-lg font-medium text-foreground">5.0 out of 5 based on client feedback</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <p className="text-muted-foreground">First-Time Approval</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded">
                        {review.service}
                      </span>
                    </div>
                    <Quote className="text-muted-foreground/30 flex-shrink-0" size={32} />
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed italic">
                    "{review.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto gradient-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Join Our Happy Clients
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Experience the same quality service that earned us these glowing reviews
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors text-lg"
          >
            Start Your Project Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
