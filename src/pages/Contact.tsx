import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, Instagram, Youtube, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/data/services";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    subject: "",
    service: "",
    message: "",
  });

  // Pre-fill subject from URL params
  useEffect(() => {
    const subjectFromUrl = searchParams.get("subject");
    if (subjectFromUrl) {
      setFormData(prev => ({ ...prev, subject: subjectFromUrl }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      toast({
        title: "Thank you for contacting us!",
        description: "We'll get back to you within 24 hours. You can also reach us directly via WhatsApp.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        state: "",
        subject: "",
        service: "",
        message: "",
      });
      setErrors({});
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team for any inquiries or to start your project
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-xl shadow-soft p-6">
              <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Phone / WhatsApp</p>
                    <a href="tel:+918290712576" className="text-muted-foreground hover:text-primary">
                      +91 8290712576
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:drscribeo@gmail.com" className="text-muted-foreground hover:text-primary break-all">
                      drscribeo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-muted-foreground">1:00 PM - 9:00 PM</p>
                    <p className="text-sm text-muted-foreground/80">(Closed in morning)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <a 
                      href="https://instagram.com/drscribeo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @drscribeo
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Youtube className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">YouTube</p>
                    <a 
                      href="https://youtube.com/@Drscribeo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Drscribeo
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button asChild className="w-full gradient-secondary">
                  <a href="https://wa.me/918290712576" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2" size={18} />
                    Contact via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-medium p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Dr. John Doe"
                      className={errors.fullName ? "border-destructive" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 1234567890"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      placeholder="Maharashtra"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Inquiry about thesis writing"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Select Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-destructive">{errors.service}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
