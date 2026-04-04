import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Clock, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DashboardLayout } from "@/components/DashboardLayout";
import { courses, getTotalLectures } from "@/data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg font-medium text-muted-foreground">Course not found</p>
          <Link to="/courses">
            <Button variant="link" className="mt-2">Back to Courses</Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const totalLectures = getTotalLectures(course);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <Link to="/courses" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        <div className={`relative h-48 sm:h-64 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center overflow-hidden`}>
          <span className="text-7xl sm:text-8xl drop-shadow-lg">{course.icon}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{course.title}</h1>
              <Badge className="bg-success/10 text-success border-success/20">{course.status}</Badge>
            </div>
            <p className="text-muted-foreground max-w-2xl">{course.description}</p>
            <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                {course.sections.length} sections
              </span>
              <span className="flex items-center gap-1.5">
                <Play className="h-4 w-4" />
                {totalLectures} lectures
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Manage</Button>
            <Button>Edit Course</Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-foreground">Course Content</h2>
          {course.sections.map((section) => (
            <Collapsible key={section.id} defaultOpen>
              <Card className="border shadow-sm overflow-hidden">
                <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">{section.title}</span>
                    <span className="text-xs text-muted-foreground">{section.lectures.length} lectures</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border-t">
                    {section.lectures.map((lecture, i) => (
                      <div
                        key={lecture.id}
                        className={`flex items-center justify-between px-4 py-3 text-sm ${
                          i < section.lectures.length - 1 ? "border-b" : ""
                        } hover:bg-muted/30 transition-colors`}
                      >
                        <div className="flex items-center gap-3">
                          <Play className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-foreground">{lecture.title}</span>
                        </div>
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {lecture.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
