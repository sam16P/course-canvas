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

const ACADEMY_URL = "https://academy.cloudkitchennetwork.com";

export function CourseCard({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);

  const handleEnroll = () => {
    window.open(ACADEMY_URL, "_blank");
    setOpen(false);
  };

  return (
    <>
      <Card
        className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className={`relative h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
          {course.image ? (
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-5xl drop-shadow-lg">{course.icon}</span>
          )}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
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
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20">
              {course.status}
            </Badge>
            <span className="text-sm font-semibold text-primary">{course.price}</span>
          </div>
        </div>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{course.title}</DialogTitle>
            <DialogDescription>{course.description}</DialogDescription>
          </DialogHeader>
          <div className={`relative h-40 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center overflow-hidden`}>
            {course.image ? (
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            ) : (
              <span className="text-5xl drop-shadow-lg">{course.icon}</span>
            )}
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
