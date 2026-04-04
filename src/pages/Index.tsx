import { Link } from "react-router-dom";
import { BookOpen, Users, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { courses } from "@/data/courses";

const stats = [
  { label: "Total Courses", value: "45", icon: BookOpen, color: "text-primary" },
  { label: "Active Students", value: "1,247", icon: Users, color: "text-success" },
  { label: "Events", value: "12", icon: Calendar, color: "text-amber-500" },
  { label: "Completion Rate", value: "89%", icon: TrendingUp, color: "text-cyan-500" },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back! 👋</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your courses today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="border-0 shadow-sm">
              <CardContent className="flex items-center gap-4 p-5">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-muted ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Courses</h2>
            <Link to="/courses" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.slice(0, 3).map((course) => (
              <Link key={course.id} to="/courses">
                <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="h-32 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" loading="lazy" width={768} height={512} />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground text-sm line-clamp-1">{course.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{course.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
