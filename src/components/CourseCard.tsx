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
        className="premium-card group overflow-hidden rounded-[18px] hover:-translate-y-1.5 cursor-pointer"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#18002E] via-[#18002E]/40 to-transparent" />
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 font-bold text-sm shadow-[0_8px_20px_-6px_rgba(239,68,68,0.6)] backdrop-blur-sm">
              {course.price}
            </Badge>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-white leading-snug line-clamp-2 group-hover:text-orange-300 transition-colors">
            {course.title}
          </h3>
          <p className="mt-1 text-xs text-white/60">
            {course.sections} sections • {course.lectures} lectures
          </p>
          <div className="mt-3 flex items-center justify-between">
            <Badge className={course.status === "Draft" ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}>
              {course.status}
            </Badge>
            <Badge variant="outline" className="border-white/20 text-white/80">{course.category}</Badge>
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
