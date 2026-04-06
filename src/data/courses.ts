import course1 from "@/assets/course-1.jpeg";
import course2 from "@/assets/course-2.png";
import course3 from "@/assets/course-3.png";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import course7 from "@/assets/course-7.jpg";
import course8 from "@/assets/course-8.jpg";
import course9 from "@/assets/course-9.jpg";

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
}

const DEFAULT_ENROLL = "https://academy.cloudkitchennetwork.com";
const FIRST_COURSE_ENROLL = "https://academy.cloudkitchennetwork.com/web/checkout/691d86d0274820516cc3339d";

const images = [course1, course2, course3, course4, course5, course6, course7, course8, course9];
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

function img(i: number) { return images[i % images.length]; }
function grad(i: number) { return gradients[i % gradients.length]; }

function price(i: number): string {
  if (i === 0) return "₹25,000";
  const vals = [25000,25500,26000,26500,27000,27500,28000,28500,29000,29500,30000];
  return "₹" + vals[i % vals.length].toLocaleString("en-IN");
}

export const courses: Course[] = [
  { id: "1", title: "Smart Cloud Kitchen Formula 2.0", description: "Master the art of running a profitable cloud kitchen with modern technology, automation, and data-driven decision making.", category: "Platinum", price: "₹25,000", image: img(0), gradient: grad(0), icon: "🍳", status: "Published", enrollUrl: FIRST_COURSE_ENROLL },
  { id: "2", title: "Hackathon", description: "Learn how to organize, participate in, and win hackathons. From ideation to pitch-perfect presentations.", category: "Gold", price: price(1), image: img(1), gradient: grad(1), icon: "💻", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "3", title: "Niche Clarity Blueprint", description: "Discover your perfect niche, validate your ideas, and build a focused business that stands out.", category: "Silver", price: price(2), image: img(2), gradient: grad(2), icon: "🎯", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "4", title: "Content Marketing Mastery", description: "Create compelling content that drives traffic, engagement, and conversions across all channels.", category: "Gold", price: price(3), image: img(3), gradient: grad(3), icon: "✍️", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "5", title: "Budget Setting Blueprint", description: "Take control of your finances with proven budgeting frameworks and financial goal setting.", category: "Silver", price: price(4), image: img(4), gradient: grad(4), icon: "💰", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "6", title: "AI Mastery", description: "Harness artificial intelligence for your business. Learn prompt engineering, AI tools, and automation.", category: "Platinum", price: price(5), image: img(5), gradient: grad(5), icon: "🤖", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "7", title: "Digital Marketing Funnel", description: "Build high-converting marketing funnels that turn visitors into paying customers.", category: "Gold", price: price(6), image: img(6), gradient: grad(6), icon: "📊", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "8", title: "E-Commerce Launchpad", description: "Launch your online store from scratch with proven strategies for product sourcing and sales.", category: "Platinum", price: price(7), image: img(7), gradient: grad(7), icon: "🛒", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "9", title: "Leadership Excellence", description: "Develop leadership skills to inspire teams, drive results, and create lasting impact.", category: "Gold", price: price(8), image: img(8), gradient: grad(8), icon: "👥", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "10", title: "Cloud Kitchen Operations", description: "Streamline cloud kitchen operations with SOPs, inventory management, and delivery optimization.", category: "Platinum", price: price(9), image: img(0), gradient: grad(0), icon: "🏭", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "11", title: "Social Media Growth", description: "Grow your social media presence organically with content strategies that actually work.", category: "Silver", price: price(10), image: img(3), gradient: grad(1), icon: "📱", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "12", title: "Food Business Branding", description: "Create a powerful brand identity for your food business that customers remember and love.", category: "Gold", price: price(1), image: img(6), gradient: grad(2), icon: "🎨", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "13", title: "Revenue Optimization", description: "Maximize revenue with pricing strategies, upselling techniques, and customer retention.", category: "Platinum", price: price(2), image: img(4), gradient: grad(3), icon: "📈", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "14", title: "Menu Engineering", description: "Design profitable menus using data analytics, psychology, and culinary creativity.", category: "Gold", price: price(3), image: img(0), gradient: grad(4), icon: "📋", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "15", title: "Delivery App Mastery", description: "Master Swiggy, Zomato, and other delivery platforms to maximize orders and ratings.", category: "Silver", price: price(4), image: img(7), gradient: grad(5), icon: "🚀", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "16", title: "Customer Retention Secrets", description: "Build loyal customers who keep coming back with proven retention strategies.", category: "Gold", price: price(5), image: img(8), gradient: grad(6), icon: "❤️", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "17", title: "Food Photography Pro", description: "Capture stunning food photos that sell. Master lighting, styling, and editing.", category: "Silver", price: price(6), image: img(3), gradient: grad(7), icon: "📸", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "18", title: "Franchise Model Blueprint", description: "Scale your food business through franchising with legal, operational, and growth frameworks.", category: "Platinum", price: price(7), image: img(8), gradient: grad(8), icon: "🏢", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "19", title: "Supply Chain Management", description: "Optimize your supply chain to reduce costs, minimize waste, and ensure quality.", category: "Gold", price: price(8), image: img(4), gradient: grad(0), icon: "🔗", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "20", title: "SEO for Food Business", description: "Rank your food business on Google with local SEO, content marketing, and reviews.", category: "Silver", price: price(9), image: img(6), gradient: grad(1), icon: "🔍", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "21", title: "Financial Planning Pro", description: "Master financial planning with cash flow management, forecasting, and investment.", category: "Platinum", price: price(10), image: img(4), gradient: grad(2), icon: "💵", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "22", title: "Automation & Tech Stack", description: "Automate your business operations with the right technology stack and integrations.", category: "Gold", price: price(1), image: img(5), gradient: grad(3), icon: "⚙️", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "23", title: "Video Marketing Mastery", description: "Create viral video content that builds brand awareness and drives sales.", category: "Silver", price: price(2), image: img(1), gradient: grad(4), icon: "🎬", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "24", title: "Multi-Brand Strategy", description: "Launch and manage multiple food brands from a single kitchen for maximum profitability.", category: "Platinum", price: price(3), image: img(0), gradient: grad(5), icon: "🎯", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "25", title: "Influencer Marketing", description: "Leverage influencer partnerships to boost brand visibility and drive sales growth.", category: "Gold", price: price(4), image: img(8), gradient: grad(6), icon: "⭐", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "26", title: "Kitchen Design & Setup", description: "Design an efficient cloud kitchen layout that maximizes productivity and minimizes costs.", category: "Silver", price: price(5), image: img(0), gradient: grad(7), icon: "🏗️", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "27", title: "Data Analytics for F&B", description: "Use data analytics to make smarter decisions about your food and beverage business.", category: "Platinum", price: price(6), image: img(5), gradient: grad(8), icon: "📊", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "28", title: "WhatsApp Marketing", description: "Build a powerful WhatsApp marketing channel for direct customer engagement.", category: "Silver", price: price(7), image: img(3), gradient: grad(0), icon: "💬", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "29", title: "Staff Training Systems", description: "Create effective training programs that build a skilled and motivated team.", category: "Gold", price: price(8), image: img(8), gradient: grad(1), icon: "🎓", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "30", title: "Brand Storytelling", description: "Craft compelling brand stories that emotionally connect with your target audience.", category: "Platinum", price: price(9), image: img(6), gradient: grad(2), icon: "📖", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "31", title: "Packaging & Presentation", description: "Design packaging that wows customers and strengthens your brand identity.", category: "Silver", price: price(10), image: img(7), gradient: grad(3), icon: "📦", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "32", title: "Google Ads for Restaurants", description: "Run profitable Google ad campaigns to drive local orders and awareness.", category: "Gold", price: price(1), image: img(6), gradient: grad(4), icon: "🎯", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "33", title: "Negotiation Skills", description: "Master negotiation to get better deals with suppliers, partners, and investors.", category: "Silver", price: price(2), image: img(8), gradient: grad(5), icon: "🤝", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "34", title: "Hygiene & Compliance", description: "Ensure food safety compliance with FSSAI standards and best hygiene practices.", category: "Gold", price: price(3), image: img(0), gradient: grad(6), icon: "✅", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "35", title: "Startup Funding Guide", description: "Raise funding for your food startup through investors, loans, and grants.", category: "Platinum", price: price(4), image: img(4), gradient: grad(7), icon: "💼", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "36", title: "Email Marketing Blueprint", description: "Build email lists and craft campaigns that convert subscribers into customers.", category: "Silver", price: price(5), image: img(3), gradient: grad(8), icon: "✉️", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "37", title: "Profit Margin Mastery", description: "Understand and optimize profit margins across every aspect of your business.", category: "Platinum", price: price(6), image: img(4), gradient: grad(0), icon: "💎", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "38", title: "CRM for F&B Business", description: "Implement CRM systems to manage customer relationships and drive repeat orders.", category: "Gold", price: price(7), image: img(5), gradient: grad(1), icon: "📇", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "39", title: "Crisis Management", description: "Handle business crises effectively with communication plans and recovery strategies.", category: "Silver", price: price(8), image: img(8), gradient: grad(2), icon: "🛡️", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "40", title: "Podcast Marketing", description: "Launch and grow a podcast to establish authority and reach new audiences.", category: "Gold", price: price(9), image: img(1), gradient: grad(3), icon: "🎙️", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "41", title: "International Expansion", description: "Take your food brand global with market research, partnerships, and localization.", category: "Platinum", price: price(10), image: img(7), gradient: grad(4), icon: "🌍", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "42", title: "Personal Branding", description: "Build your personal brand as a food entrepreneur to attract opportunities.", category: "Silver", price: price(1), image: img(8), gradient: grad(5), icon: "🌟", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "43", title: "Competitor Analysis", description: "Analyze competitors to find gaps, opportunities, and winning strategies.", category: "Gold", price: price(2), image: img(2), gradient: grad(6), icon: "🔎", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "44", title: "Tax Planning for Business", description: "Minimize tax liability legally with smart planning, deductions, and structures.", category: "Silver", price: price(3), image: img(4), gradient: grad(7), icon: "🧾", status: "Published", enrollUrl: DEFAULT_ENROLL },
  { id: "45", title: "Growth Hacking Playbook", description: "Rapid growth strategies for food businesses using low-cost, high-impact tactics.", category: "Platinum", price: price(4), image: img(1), gradient: grad(8), icon: "🚀", status: "Published", enrollUrl: DEFAULT_ENROLL },
];

export const categories = ["All", "Silver", "Gold", "Platinum"];
