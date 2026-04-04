import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function CourseDetail() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-lg font-medium text-muted-foreground">Please browse courses from the courses page.</p>
        <Link to="/courses">
          <Button variant="link" className="mt-2 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>
        </Link>
      </div>
    </DashboardLayout>
  );
}
