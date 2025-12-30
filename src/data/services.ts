import { BookOpen, FileText, Award, Presentation, ClipboardList, BookMarked, PenTool, Heart, Newspaper, Edit, GraduationCap } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Thesis and Dissertation + Synopsis",
    description: "Comprehensive support for your thesis, dissertation, and synopsis writing. Expert guidance from topic selection to final submission with rigorous quality checks.",
    icon: BookOpen,
    category: "Academic Writing",
  },
  {
    id: 2,
    title: "Research & Review Articles",
    description: "Publication-ready research articles and systematic review papers crafted by experienced research analysts. Perfect for journal submissions.",
    icon: FileText,
    category: "Academic Writing",
  },
  {
    id: 3,
    title: "Journal Publications (PubMed, Scopus, UGC)",
    description: "End-to-end support for publishing in reputed indexed journals including PubMed, Scopus, and UGC approved publications. Guaranteed approval assistance.",
    icon: Award,
    category: "Publication Support",
  },
  {
    id: 4,
    title: "PPT, Paper & Poster Presentations",
    description: "Professional presentation materials including PowerPoint slides, seminar papers, and conference posters designed to impress academic audiences.",
    icon: Presentation,
    category: "Academic Materials",
  },
  {
    id: 5,
    title: "Patient Reports & Study Charts",
    description: "Detailed patient case reports and study charts formatted for conference presentations and clinical documentation with medical precision.",
    icon: ClipboardList,
    category: "Clinical Documentation",
  },
  {
    id: 6,
    title: "Academic Book Writing Support",
    description: "Complete support for academic book projects from conceptualization to manuscript preparation, including editing and formatting services.",
    icon: BookMarked,
    category: "Academic Writing",
  },
  {
    id: 7,
    title: "Ghost Writing",
    description: "Confidential professional writing services for medical and academic content. Your ideas, our words - completely confidential and plagiarism-free.",
    icon: PenTool,
    category: "Writing Services",
  },
  {
    id: 8,
    title: "Medical Awareness Posts & Templates",
    description: "Engaging medical awareness content and social media templates for healthcare professionals and institutions to educate and inform patients.",
    icon: Heart,
    category: "Content Creation",
  },
  {
    id: 9,
    title: "Blogs & Articles",
    description: "Well-researched medical and health blogs, articles, and web content written by subject matter experts for websites, journals, and online platforms.",
    icon: Newspaper,
    category: "Content Creation",
  },
  {
    id: 10,
    title: "Thesis Editing and Proofreading",
    description: "Expert editing focused on grammar, flow, academic tone, and formatting compliance. We polish your work to meet the highest academic standards.",
    icon: Edit,
    category: "Editing Services",
  },
  {
    id: 11,
    title: "Revisions and Defense Preparation",
    description: "Comprehensive support for addressing supervisor feedback, mock defense questions, and presentation coaching to ensure your success.",
    icon: GraduationCap,
    category: "Defense Support",
  },
];

export const serviceCategories = [
  "All",
  "Academic Writing",
  "Publication Support",
  "Clinical Documentation",
  "Writing Services",
  "Content Creation",
  "Academic Materials",
  "Statistical Analysis",
  "Editing Services",
  "Defense Support"
];
