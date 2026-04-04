export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  image?: string;
  gradient: string;
  icon: string;
  status: "Published" | "Draft";
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Smart Cloud Kitchen Formula 2.0",
    description: "Master the art of running a profitable cloud kitchen with modern technology, automation, and data-driven decision making.",
    category: "Business",
    price: "₹4,999",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    icon: "🍳",
    status: "Published",
  },
  {
    id: "2",
    title: "Hackathon",
    description: "Learn how to organize, participate in, and win hackathons. From ideation to pitch-perfect presentations.",
    category: "Technology",
    price: "₹2,999",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "💻",
    status: "Published",
  },
  {
    id: "3",
    title: "Niche Clarity Blueprint",
    description: "Discover your perfect niche, validate your ideas, and build a focused business that stands out in a crowded market.",
    category: "Marketing",
    price: "₹3,499",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "🎯",
    status: "Published",
  },
  {
    id: "4",
    title: "Content Marketing Mastery",
    description: "Create compelling content that drives traffic, engagement, and conversions. Master SEO, social media, and email marketing.",
    category: "Marketing",
    price: "₹3,999",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "✍️",
    status: "Published",
  },
  {
    id: "5",
    title: "Budget Setting Blueprint",
    description: "Take control of your finances with proven budgeting frameworks, expense tracking, and financial goal setting.",
    category: "Finance",
    price: "₹2,499",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    icon: "💰",
    status: "Published",
  },
  {
    id: "6",
    title: "AI Mastery",
    description: "Harness the power of artificial intelligence for your business. Learn prompt engineering, AI tools, and automation workflows.",
    category: "Technology",
    price: "₹5,999",
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
    icon: "🤖",
    status: "Published",
  },
];

export const categories = ["All", "Business", "Technology", "Marketing", "Finance"];
