import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);

  const handleEnroll = () => {
    window.open(course.enrollUrl, "_blank");
    setOpen(false);
  };

  return (
    <>
      <Card
        className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width={768}
            height={512}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          <div className="absolute top-3 right-3">
            <Badge className="bg-background/90 text-foreground border-0 font-bold text-sm shadow-md backdrop-blur-sm">
              {course.price}
            </Badge>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {course.sections} sections • {course.lectures} lectures
          </p>
          <div className="mt-3 flex items-center justify-between">
            <Badge className={course.status === "Draft" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : "bg-success/10 text-success border-success/20 hover:bg-success/20"}>
              {course.status}
            </Badge>
            <Badge variant="outline">{course.category}</Badge>
          </div>
        </div>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{course.title}</DialogTitle>
            <DialogDescription>{course.description}</DialogDescription>
          </DialogHeader>
          <div className="relative h-40 rounded-xl overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
              width={768}
              height={512}
            />
            <div className="absolute top-3 right-3">
              <Badge className="bg-background/90 text-foreground border-0 font-bold text-sm shadow-md backdrop-blur-sm">
                {course.price}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <Badge variant="outline">{course.category}</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Price</span>
              <span className="font-bold text-lg text-primary">{course.price}</span>
            </div>
            <Button className="w-full mt-2" size="lg" onClick={handleEnroll}>
              Enroll Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
