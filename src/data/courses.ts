import course1 from "@/assets/course-1.jpeg";
import course2 from "@/assets/course-2.png";
import course3 from "@/assets/course-3.png";
import course4 from "@/assets/course-4.png";
import course5 from "@/assets/course-5.png";
import course6 from "@/assets/course-6.png";
import course7 from "@/assets/course-7.jpg";
import course8 from "@/assets/course-08.png";
import course9 from "@/assets/course-09.png";
import course10 from "@/assets/course-10.png";
import course11 from "@/assets/course-11.png";
import course12 from "@/assets/course-12.jpeg";
import course13 from "@/assets/course-13.jpg";
import course14 from "@/assets/course-14.jpeg";
import course15 from "@/assets/course-15.jpeg";
import course16 from "@/assets/course-16.jpeg";
import course17 from "@/assets/course-17.jpeg";
import course18 from "@/assets/course-18.jpg";
import course19 from "@/assets/course-19.jpeg";
import course20 from "@/assets/course-20.jpg";
import course21 from "@/assets/course-21.jpg";
import course22 from "@/assets/course-22.jpg";
import course23 from "@/assets/course-23.jpeg";
import course24 from "@/assets/course-24.png";
import course25 from "@/assets/course-25.png";
import course26 from "@/assets/course-26.jpg";
import course27 from "@/assets/course-27.jpeg";
import course28 from "@/assets/course-28.jpg";
import course29 from "@/assets/course-29.png";
import course30 from "@/assets/course-30.jpeg";
import course31 from "@/assets/course-31.png";
import course32 from "@/assets/course-32.jpg";
import course33 from "@/assets/course-33.jpg";
import course34 from "@/assets/course-34.jpg";
import course35 from "@/assets/course-35.png";
import course36 from "@/assets/course-36.jpeg";
import course37 from "@/assets/course-37.png";
import course38 from "@/assets/course-38.jpg";
import course39 from "@/assets/course-39.jpg";
import course40 from "@/assets/course-40.jpeg";
import course41 from "@/assets/course-41.png";
import course42 from "@/assets/course-42.jpg";
import course43 from "@/assets/course-43.jpg";
import course44 from "@/assets/course-44.jpg";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  image: string;
  gradient: string;
  icon: string;
  status: "Published" | "Draft";
  enrollUrl: string;
  sections: number;
  lectures: number;
}

const DEFAULT_ENROLL = "https://academy.cloudkitchennetwork.com";
const FIRST_COURSE_ENROLL = "https://academy.cloudkitchennetwork.com/web/checkout/691d86d0274820516cc3339d";

const gradients = [
  "from-violet-500 via-purple-500 to-fuchsia-500",
  "from-cyan-500 via-blue-500 to-indigo-500",
  "from-emerald-500 via-teal-500 to-cyan-500",
  "from-orange-500 via-amber-500 to-yellow-500",
  "from-rose-500 via-pink-500 to-fuchsia-500",
  "from-indigo-500 via-violet-500 to-purple-500",
  "from-sky-500 via-blue-500 to-violet-500",
  "from-lime-500 via-green-500 to-emerald-500",
  "from-amber-500 via-orange-500 to-red-500",
];

function grad(i: number) { return gradients[i % gradients.length]; }

function price(i: number): string {
  if (i === 0) return "₹25,000";
  const vals = [25000,25500,26000,26500,27000,27500,28000,28500,29000,29500,30000];
  return "₹" + vals[i % vals.length].toLocaleString("en-IN");
}

export const courses: Course[] = [
  // ── SILVER ──
  { id: "1", title: "Smart Cloud Kitchen Formula", description: "Master the art of running a profitable cloud kitchen with modern technology, automation, and data-driven decision making.", category: "Silver", price: "₹25,000", image: course1, gradient: grad(0), icon: "🍳", status: "Published", enrollUrl: FIRST_COURSE_ENROLL, sections: 3, lectures: 19 },
  { id: "2", title: "Hackathon", description: "Learn how to organize, participate in, and win hackathons. From ideation to pitch-perfect presentations.", category: "Silver", price: price(1), image: course2, gradient: grad(1), icon: "💻", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 10, lectures: 28 },
  { id: "3", title: "Niche Clarity Blueprint", description: "Discover your perfect niche, validate your ideas, and build a focused business that stands out.", category: "Silver", price: price(2), image: course3, gradient: grad(2), icon: "🎯", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 4 },
  { id: "4", title: "Content Marketing Mastery", description: "Create compelling content that drives traffic, engagement, and conversions across all channels.", category: "Silver", price: price(3), image: course4, gradient: grad(3), icon: "✍️", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 5, lectures: 7 },
  { id: "5", title: "Budget Setting Blueprint", description: "Take control of your finances with proven budgeting frameworks and financial goal setting.", category: "Silver", price: price(4), image: course5, gradient: grad(4), icon: "💰", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 3 },
  { id: "6", title: "AI Mastery", description: "Harness artificial intelligence for your business. Learn prompt engineering, AI tools, and automation.", category: "Silver", price: price(5), image: course6, gradient: grad(5), icon: "🤖", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 5, lectures: 5 },
  { id: "7", title: "Listing and Growth in Swiggy & Zomato", description: "Master listing optimization and growth strategies on Swiggy and Zomato platforms.", category: "Silver", price: price(6), image: course7, gradient: grad(6), icon: "📱", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 6 },
  { id: "8", title: "Inner Circle Vault - Tuesday Calls Recording (Bonus)", description: "Exclusive recordings of Tuesday inner circle calls with actionable insights.", category: "Silver", price: price(7), image: course8, gradient: grad(7), icon: "🔒", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 66 },
  { id: "9", title: "Platinum Heroes", description: "Inspiring stories and strategies from top-performing platinum members.", category: "Silver", price: price(8), image: course9, gradient: grad(8), icon: "🏆", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 8 },
  { id: "10", title: "Business Attraction Workshop (Bonus)", description: "Attract more customers and grow your business with proven workshop techniques.", category: "Silver", price: price(9), image: course10, gradient: grad(0), icon: "🧲", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 3 },
  { id: "11", title: "Cloud Kitchen Meetup (Bonus)", description: "Recordings from exclusive cloud kitchen meetups with industry leaders.", category: "Silver", price: price(10), image: course11, gradient: grad(1), icon: "🤝", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 3, lectures: 37 },
  { id: "12", title: "Facebook Ad Mastery (Bonus)", description: "Run profitable Facebook ad campaigns to drive orders and brand awareness.", category: "Silver", price: price(1), image: course12, gradient: grad(2), icon: "📘", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 1 },
  { id: "13", title: "Cloud Kitchen System (Bonus)", description: "Build robust systems for your cloud kitchen operations.", category: "Silver", price: price(2), image: course13, gradient: grad(3), icon: "⚙️", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 3, lectures: 3 },
  { id: "14", title: "Expert Session (Bonus)", description: "Learn from industry experts in exclusive recorded sessions.", category: "Silver", price: price(3), image: course14, gradient: grad(4), icon: "🎓", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 10, lectures: 16 },
  { id: "15", title: "Hall Of Fame (Bonus)", description: "Celebrating success stories and lessons from top achievers.", category: "Silver", price: price(4), image: course15, gradient: grad(5), icon: "⭐", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 40 },
  { id: "16", title: "Super Growth Club (Bonus)", description: "Exclusive growth strategies and resources for scaling your business fast.", category: "Silver", price: price(5), image: course16, gradient: grad(6), icon: "🚀", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 30 },

  // ── GOLD ──
  { id: "17", title: "Cloud Kitchen MASTERY", description: "Comprehensive mastery program for cloud kitchen operations, marketing, and scaling.", category: "Gold", price: price(6), image: course17, gradient: grad(7), icon: "👨‍🍳", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 5, lectures: 38 },
  { id: "18", title: "BRAND Building Mastery", description: "Build a powerful, memorable brand that customers love and trust.", category: "Gold", price: price(7), image: course18, gradient: grad(8), icon: "🏗️", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 4 },
  { id: "19", title: "Instagram Brand Building", description: "Grow your brand on Instagram with content strategies that drive engagement and sales.", category: "Gold", price: price(8), image: course19, gradient: grad(0), icon: "📸", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 7 },
  { id: "20", title: "Youtube Mastery (Gold Bonus)", description: "Build and grow a YouTube channel to establish authority and reach new audiences.", category: "Gold", price: price(9), image: course20, gradient: grad(1), icon: "▶️", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 5 },
  { id: "21", title: "Automation Mastery (Gold Bonus)", description: "Automate your business operations with the right tools and integrations.", category: "Gold", price: price(10), image: course21, gradient: grad(2), icon: "🤖", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 5 },
  { id: "22", title: "Sales Growth Hack (Gold Bonus)", description: "Proven sales hacks to boost revenue and close more deals.", category: "Gold", price: price(1), image: course22, gradient: grad(3), icon: "💸", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 2 },
  { id: "23", title: "Hackathon Archives - All Hackathon Recordings (Gold Bonus)", description: "Complete archive of all hackathon recordings for reference and learning.", category: "Gold", price: price(2), image: course23, gradient: grad(4), icon: "📂", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 20, lectures: 95 },

  // ── PLATINUM ──
  { id: "24", title: "Platinum COUNCIL (Wednesday Calls Recordings)", description: "Exclusive Wednesday call recordings from the Platinum Council.", category: "Platinum", price: price(3), image: course24, gradient: grad(5), icon: "💎", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 12, lectures: 76 },
  { id: "25", title: "Amazing Life Workshop", description: "Transform your life and business with this comprehensive workshop.", category: "Platinum", price: "₹50,000", image: course25, gradient: grad(6), icon: "✨", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 7, lectures: 19 },
  { id: "26", title: "Implementation Challenge", description: "Take action and implement strategies with guided challenges.", category: "Platinum", price: "₹50,000", image: course26, gradient: grad(7), icon: "🎯", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 8 },
  { id: "27", title: "Sales, Marketing & Profit Mastery", description: "Master sales, marketing, and profit optimization for your food business.", category: "Platinum", price: "₹80,000", image: course28, gradient: grad(8), icon: "📈", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 11 },
  { id: "28", title: "Team Building Challenge", description: "Build and lead high-performing teams with structured challenges.", category: "Platinum", price: price(7), image: course29, gradient: grad(0), icon: "👥", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 4 },
  { id: "29", title: "OPERATION & SYSTEM CHALLENGE", description: "Streamline operations and build systems for scalable growth.", category: "Platinum", price: price(8), image: course30, gradient: grad(1), icon: "🏭", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 7 },
  { id: "30", title: "FOOD BUSINESS MASTERY", description: "Complete mastery program for running a successful food business.", category: "Platinum", price: price(9), image: course27, gradient: grad(2), icon: "🍽️", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 3, lectures: 4 },
  { id: "31", title: "Collaboration Presentations", description: "Learn collaboration strategies through detailed presentations and case studies.", category: "Platinum", price: price(10), image: course31, gradient: grad(3), icon: "🤝", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 9, lectures: 88 },
  { id: "32", title: "Advance Marketing Mastery", description: "Advanced marketing strategies for scaling your food business.", category: "Platinum", price: price(1), image: course32, gradient: grad(4), icon: "📊", status: "Draft", enrollUrl: DEFAULT_ENROLL, sections: 3, lectures: 13 },
  //{ id: "33", title: "Advance AI (Team Replacement)", description: "Leverage advanced AI to automate tasks and reduce team dependency.", category: "Platinum", price: price(2), image: course33, gradient: grad(5), icon: "🧠", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 0 },
  { id: "34", title: "Franchise Creation Challenge (Platinum Bonus)", description: "Learn to create and scale a franchise model for your food business.", category: "Platinum", price: price(3), image: course33, gradient: grad(6), icon: "🏢", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 6, lectures: 24 },
  { id: "35", title: "Platinum Rise & Shine", description: "Morning motivation and strategy sessions for platinum members.", category: "Platinum", price: price(4), image: course34, gradient: grad(7), icon: "🌅", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 14 },
  { id: "36", title: "Hall Of Fame Mastermind", description: "Mastermind sessions with hall of fame members sharing winning strategies.", category: "Platinum", price: price(5), image: course35, gradient: grad(8), icon: "🏅", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 9 },
  { id: "37", title: "Fast Track Launch", description: "Launch your cloud kitchen business fast with step-by-step guidance.", category: "Platinum", price: price(6), image: course36, gradient: grad(0), icon: "🚀", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 10, lectures: 32 },
  { id: "38", title: "Menu Engineering Mastery", description: "Design profitable menus using data analytics and culinary creativity.", category: "Platinum", price: price(7), image: course37, gradient: grad(1), icon: "📋", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 5 },
  { id: "39", title: "Smart Packaging Mastery (Platinum Bonus)", description: "Design packaging that wows customers and strengthens your brand.", category: "Platinum", price: price(8), image: course38, gradient: grad(2), icon: "📦", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 4 },
  { id: "40", title: "Facebook Ad Launch Challenge (Platinum Bonus)", description: "Launch profitable Facebook ad campaigns with guided challenges.", category: "Platinum", price: price(9), image: course39, gradient: grad(3), icon: "📘", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 2, lectures: 8 },
  { id: "41", title: "Reels Mastery (Platinum Bonus)", description: "Create viral reels that boost brand visibility and drive sales.", category: "Platinum", price: price(10), image: course40, gradient: grad(4), icon: "🎬", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 4, lectures: 16 },
  { id: "42", title: "Marketing Special Masterclass", description: "Special masterclass on advanced marketing techniques for food businesses.", category: "Platinum", price: price(1), image: course41, gradient: grad(5), icon: "🎯", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 1 },
  { id: "43", title: "Hall Of Fame Interviews", description: "In-depth interviews with hall of fame members sharing their journeys.", category: "Platinum", price: price(2), image: course42, gradient: grad(6), icon: "🎤", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 21 },
  { id: "44", title: "Collab With Brands", description: "Learn to collaborate with brands for mutual growth and revenue.", category: "Platinum", price: price(3), image: course43, gradient: grad(7), icon: "🤝", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 1, lectures: 8 },
  { id: "45", title: "Brand Case Study", description: "Detailed brand case studies with actionable takeaways for your business.", category: "Platinum", price: price(4), image: course44, gradient: grad(8), icon: "📖", status: "Published", enrollUrl: DEFAULT_ENROLL, sections: 7, lectures: 70 },
];

export const categories = ["All", "Silver", "Gold", "Platinum"];
