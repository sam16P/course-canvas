import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Upload, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DashboardLayout } from "@/components/DashboardLayout";
import { toast } from "sonner";

interface NewSection {
  title: string;
  lectures: string[];
}

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState<NewSection[]>([
    { title: "", lectures: [""] },
  ]);

  const addSection = () => setSections([...sections, { title: "", lectures: [""] }]);

  const removeSection = (idx: number) => {
    if (sections.length <= 1) return;
    setSections(sections.filter((_, i) => i !== idx));
  };

  const updateSectionTitle = (idx: number, val: string) => {
    const copy = [...sections];
    copy[idx].title = val;
    setSections(copy);
  };

  const addLecture = (sIdx: number) => {
    const copy = [...sections];
    copy[sIdx].lectures.push("");
    setSections(copy);
  };

  const removeLecture = (sIdx: number, lIdx: number) => {
    const copy = [...sections];
    if (copy[sIdx].lectures.length <= 1) return;
    copy[sIdx].lectures = copy[sIdx].lectures.filter((_, i) => i !== lIdx);
    setSections(copy);
  };

  const updateLecture = (sIdx: number, lIdx: number, val: string) => {
    const copy = [...sections];
    copy[sIdx].lectures[lIdx] = val;
    setSections(copy);
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      toast.error("Please enter a course title");
      return;
    }
    toast.success("Course created successfully!");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-3xl">
        <Link to="/courses" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        <h1 className="text-2xl font-bold text-foreground">Create New Course</h1>

        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Course Details</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input id="title" placeholder="Enter course title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-background" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe your course..." rows={4} value={description} onChange={(e) => setDescription(e.target.value)} className="bg-background" />
            </div>
            <div className="space-y-2">
              <Label>Thumbnail</Label>
              <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 text-center transition-colors hover:border-primary/40 hover:bg-accent/50 cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-primary">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Sections & Lectures</CardTitle>
            <Button variant="outline" size="sm" onClick={addSection} className="gap-1.5">
              <Plus className="h-3.5 w-3.5" />
              Add Section
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {sections.map((section, sIdx) => (
              <div key={sIdx} className="rounded-xl border bg-muted/20 p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" />
                  <Input
                    placeholder={`Section ${sIdx + 1} title`}
                    value={section.title}
                    onChange={(e) => updateSectionTitle(sIdx, e.target.value)}
                    className="bg-card"
                  />
                  <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-destructive" onClick={() => removeSection(sIdx)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {section.lectures.map((lecture, lIdx) => (
                  <div key={lIdx} className="flex items-center gap-2 pl-6">
                    <Input
                      placeholder={`Lecture ${lIdx + 1}`}
                      value={lecture}
                      onChange={(e) => updateLecture(sIdx, lIdx, e.target.value)}
                      className="bg-card"
                    />
                    <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-destructive" onClick={() => removeLecture(sIdx, lIdx)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="ml-6 text-primary" onClick={() => addLecture(sIdx)}>
                  <Plus className="h-3.5 w-3.5 mr-1" />
                  Add Lecture
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3 pb-8">
          <Button variant="outline">Save as Draft</Button>
          <Button onClick={handleSubmit}>Publish Course</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
