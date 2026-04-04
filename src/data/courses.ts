export interface Lecture {
  id: string;
  title: string;
  duration: string;
}

export interface Section {
  id: string;
  title: string;
  lectures: Lecture[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "Published" | "Draft";
  sections: Section[];
  gradient: string;
  icon: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Smart Cloud Kitchen Formula 2.0",
    description: "Master the art of running a profitable cloud kitchen with modern technology, automation, and data-driven decision making.",
    category: "Business",
    status: "Published",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    icon: "🍳",
    sections: [
      {
        id: "s1",
        title: "Getting Started",
        lectures: [
          { id: "l1", title: "Introduction to Cloud Kitchens", duration: "12:30" },
          { id: "l2", title: "Market Research & Analysis", duration: "18:45" },
          { id: "l3", title: "Setting Up Your Kitchen", duration: "22:10" },
        ],
      },
      {
        id: "s2",
        title: "Operations & Technology",
        lectures: [
          { id: "l4", title: "POS Systems & Automation", duration: "15:20" },
          { id: "l5", title: "Delivery Platform Integration", duration: "19:00" },
          { id: "l6", title: "Inventory Management", duration: "14:35" },
        ],
      },
      {
        id: "s3",
        title: "Growth & Scaling",
        lectures: [
          { id: "l7", title: "Marketing Your Kitchen", duration: "20:15" },
          { id: "l8", title: "Scaling to Multiple Locations", duration: "25:00" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Hackathon",
    description: "Learn how to organize, participate in, and win hackathons. From ideation to pitch-perfect presentations.",
    category: "Technology",
    status: "Published",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "💻",
    sections: [
      {
        id: "s4",
        title: "Hackathon Fundamentals",
        lectures: [
          { id: "l9", title: "What Makes a Winning Hackathon Project", duration: "10:00" },
          { id: "l10", title: "Team Formation Strategies", duration: "8:45" },
          { id: "l11", title: "Rapid Prototyping Techniques", duration: "16:30" },
        ],
      },
      {
        id: "s5",
        title: "Execution & Presentation",
        lectures: [
          { id: "l12", title: "Time Management During Hackathons", duration: "12:00" },
          { id: "l13", title: "Pitch Deck Creation", duration: "14:20" },
          { id: "l14", title: "Demo Day Preparation", duration: "11:15" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Niche Clarity Blueprint",
    description: "Discover your perfect niche, validate your ideas, and build a focused business that stands out in a crowded market.",
    category: "Marketing",
    status: "Published",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "🎯",
    sections: [
      {
        id: "s6",
        title: "Finding Your Niche",
        lectures: [
          { id: "l15", title: "Self-Assessment & Skills Audit", duration: "14:00" },
          { id: "l16", title: "Market Gap Analysis", duration: "18:30" },
          { id: "l17", title: "Competitor Research", duration: "16:45" },
        ],
      },
      {
        id: "s7",
        title: "Validation & Launch",
        lectures: [
          { id: "l18", title: "MVP Testing Strategies", duration: "20:00" },
          { id: "l19", title: "Building Your Audience", duration: "22:15" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Content Marketing Mastery",
    description: "Create compelling content that drives traffic, engagement, and conversions. Master SEO, social media, and email marketing.",
    category: "Marketing",
    status: "Published",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "✍️",
    sections: [
      {
        id: "s8",
        title: "Content Strategy",
        lectures: [
          { id: "l20", title: "Content Pillars & Planning", duration: "15:30" },
          { id: "l21", title: "SEO Fundamentals", duration: "20:00" },
          { id: "l22", title: "Content Calendar Creation", duration: "12:45" },
        ],
      },
      {
        id: "s9",
        title: "Distribution & Analytics",
        lectures: [
          { id: "l23", title: "Social Media Strategy", duration: "18:00" },
          { id: "l24", title: "Email Marketing Campaigns", duration: "16:30" },
          { id: "l25", title: "Analytics & Optimization", duration: "14:15" },
          { id: "l26", title: "Repurposing Content", duration: "10:00" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Budget Setting Blueprint",
    description: "Take control of your finances with proven budgeting frameworks, expense tracking, and financial goal setting.",
    category: "Finance",
    status: "Published",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    icon: "💰",
    sections: [
      {
        id: "s10",
        title: "Budgeting Basics",
        lectures: [
          { id: "l27", title: "Understanding Your Cash Flow", duration: "13:00" },
          { id: "l28", title: "The 50/30/20 Rule", duration: "9:45" },
          { id: "l29", title: "Emergency Fund Planning", duration: "11:30" },
        ],
      },
      {
        id: "s11",
        title: "Advanced Strategies",
        lectures: [
          { id: "l30", title: "Investment Allocation", duration: "22:00" },
          { id: "l31", title: "Debt Payoff Strategies", duration: "17:30" },
          { id: "l32", title: "Financial Automation", duration: "14:00" },
          { id: "l33", title: "Annual Financial Review", duration: "19:15" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "AI Mastery",
    description: "Harness the power of artificial intelligence for your business. Learn prompt engineering, AI tools, and automation workflows.",
    category: "Technology",
    status: "Published",
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
    icon: "🤖",
    sections: [
      {
        id: "s12",
        title: "AI Foundations",
        lectures: [
          { id: "l34", title: "Understanding AI & Machine Learning", duration: "16:00" },
          { id: "l35", title: "Prompt Engineering Masterclass", duration: "24:30" },
          { id: "l36", title: "AI Tools Landscape", duration: "18:00" },
        ],
      },
      {
        id: "s13",
        title: "Practical Applications",
        lectures: [
          { id: "l37", title: "AI for Content Creation", duration: "20:15" },
          { id: "l38", title: "Automation with AI", duration: "22:00" },
          { id: "l39", title: "Building AI-Powered Products", duration: "26:30" },
        ],
      },
      {
        id: "s14",
        title: "Advanced AI Strategies",
        lectures: [
          { id: "l40", title: "Fine-tuning Models", duration: "28:00" },
          { id: "l41", title: "AI Ethics & Best Practices", duration: "15:45" },
        ],
      },
    ],
  },
];

export const categories = ["All", "Business", "Technology", "Marketing", "Finance"];

export function getTotalLectures(course: Course): number {
  return course.sections.reduce((acc, s) => acc + s.lectures.length, 0);
}
