import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { services, serviceCategories } from "@/data/services";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive academic and clinical writing solutions for medical and life-science professionals
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              category={service.category}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No services found in this category.</p>
          </div>
        )}
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-medium p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-center mb-6">What Makes Our Services Special?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Quality Assurance</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Thorough plagiarism checks on all content</li>
                <li>Multiple rounds of expert review and editing</li>
                <li>Adherence to international academic standards</li>
                <li>Citation and referencing accuracy</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Process Excellence</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Transparent communication throughout the project</li>
                <li>Customized approach for each client's needs</li>
                <li>Regular progress updates and feedback loops</li>
                <li>Post-delivery support and revisions</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-center text-foreground font-medium">
              <strong>Need a custom service?</strong> We offer tailored solutions for unique academic writing requirements.
              Contact us to discuss your specific needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
