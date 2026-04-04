import { Link } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Course, getTotalLectures } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  const totalLectures = getTotalLectures(course);

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={`/courses/${course.id}`}>
        <div className={`relative h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
          <span className="text-5xl drop-shadow-lg">{course.icon}</span>
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/courses/${course.id}`}>
            <h3 className="font-semibold text-foreground leading-snug line-clamp-2 hover:text-primary transition-colors">
              {course.title}
            </h3>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-muted-foreground">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {course.sections.length} sections • {totalLectures} lectures
        </p>
        <div className="mt-4 flex items-center justify-between">
          <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20">
            {course.status}
          </Badge>
          <Link to={`/courses/${course.id}`}>
            <Button variant="outline" size="sm" className="text-xs">
              Edit course
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
