import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category?: string;
}

const ServiceCard = ({ title, description, icon: Icon, category }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-medium transition-shadow duration-300 group">
      <CardHeader>
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
          <Icon size={24} />
        </div>
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full w-fit mb-2">
            {category}
          </span>
        )}
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link to="/contact">Enquire Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
