import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "What services does DrScribeO provide?",
      answer: "DrScribeO offers comprehensive academic and clinical writing services including thesis and dissertation writing, research articles, journal publication support (PubMed, Scopus, UGC), PPT and poster presentations, patient reports, study charts, medical awareness content, blogs, academic book writing support, and ghost writing services for medical, dental, and life-science professionals.",
    },
    {
      question: "Do you help with both medical and dental research writing?",
      answer: "Yes, absolutely! We specialize in both medical and dental research writing, as well as life-science related academic content. Our team includes experienced doctors and researchers from various medical and dental specialties who understand the specific requirements and nuances of each field.",
    },
    {
      question: "Can you help me publish my research in reputed journals?",
      answer: "Yes, we provide end-to-end journal publication support. Our services include manuscript preparation, formatting according to journal guidelines, submission assistance, and guidance for publications in prestigious indexed journals including PubMed, Scopus, and UGC-approved journals. We have a high success rate with guaranteed approval assistance.",
    },
    {
      question: "Is my work kept confidential?",
      answer: "Absolutely. Confidentiality is one of our core values. All your information, research data, and documents are kept strictly confidential. We sign non-disclosure agreements when required and never share your work with third parties. Your privacy and intellectual property are completely protected.",
    },
    {
      question: "Do you provide plagiarism-free content?",
      answer: "Yes, 100% original and plagiarism-free content is guaranteed. Every document we create is written from scratch by our expert team. We conduct thorough plagiarism checks using professional software before delivery and provide plagiarism reports upon request. Originality and academic integrity are our top priorities.",
    },
    {
      question: "How long does a thesis or research article take?",
      answer: "The timeline depends on the complexity and scope of the project. Typically, a thesis or dissertation can take 4-12 weeks, while a research article might take 2-4 weeks. Synopsis and smaller projects usually take 1-2 weeks. We provide customized timelines during consultation and always respect agreed-upon deadlines. Rush services are available for urgent requirements.",
    },
    {
      question: "How can I place an order?",
      answer: "Placing an order is simple! You can contact us through our website contact form, WhatsApp (+91 8290712576), or email (drscribeo@gmail.com). Share your requirements, and we'll discuss the scope, timeline, and pricing. Once agreed, we'll start working on your project with regular updates throughout the process.",
    },
    {
      question: "What are your charges for services?",
      answer: "Our charges vary based on the type of service, project complexity, word count, and timeline. We offer competitive and transparent pricing. Contact us with your specific requirements for a detailed quotation. We believe in providing excellent value for high-quality academic writing services.",
    },
    {
      question: "Do you offer revisions after delivery?",
      answer: "Yes, we offer post-delivery support and revisions to ensure your complete satisfaction. If you need any modifications or adjustments after receiving your work, we'll make the necessary changes. Our goal is to deliver work that meets your expectations and academic requirements perfectly.",
    },
    {
      question: "What makes DrScribeO different from other writing services?",
      answer: "DrScribeO stands out due to our specialized focus on medical and life-science writing, our team of experienced doctors and research analysts, guaranteed plagiarism-free content, strict confidentiality, on-time delivery, and comprehensive support from concept to submission. We don't just write; we partner with you in your academic success journey.",
    },
    {
      question: "What are your office hours?",
      answer: "We are open between 1:00 PM to 9:00 PM. Please note that we are closed in the morning hours. You can reach us via WhatsApp, email, or phone during our operating hours. For urgent queries outside these hours, you can leave a message and we'll respond as soon as we're available.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions about our services
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl shadow-soft px-6 border-0"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-muted-foreground">
                No questions found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10">
          <h2 className="text-3xl font-serif font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918290712576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact via WhatsApp
            </a>
            <a
              href="mailto:drscribeo@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send us an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
