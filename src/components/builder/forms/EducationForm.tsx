"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export function EducationForm() {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResumeStore();
  const educations = resumeData.education;

  const handleAdd = () => {
    addEducation({
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  };

  return (
    <div className="space-y-4">
      <Accordion className="w-full space-y-4">
        {educations.map((edu, index) => (
          <AccordionItem key={edu.id} value={edu.id} className="border rounded-lg px-4 bg-white shadow-sm">
            <div className="flex items-center w-full">
              <GripVertical className="h-5 w-5 text-slate-400 cursor-grab mr-2" />
              <AccordionTrigger className="hover:no-underline flex-1">
                <div className="flex flex-col text-left">
                  <span className="font-medium text-slate-900">{edu.school || "(Not specified)"}</span>
                  <span className="text-sm text-slate-500">
                    {edu.degree ? `${edu.degree} in ${edu.field || '...'}` : "Degree"}
                  </span>
                </div>
              </AccordionTrigger>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-400 hover:text-red-600 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  removeEducation(edu.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <AccordionContent className="pt-4 pb-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>School / University</Label>
                  <Input 
                    value={edu.school} 
                    onChange={(e) => updateEducation(edu.id, { school: e.target.value })} 
                    placeholder="Stanford University" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Degree</Label>
                  <Input 
                    value={edu.degree} 
                    onChange={(e) => updateEducation(edu.id, { degree: e.target.value })} 
                    placeholder="Bachelor of Science" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Field of Study</Label>
                  <Input 
                    value={edu.field} 
                    onChange={(e) => updateEducation(edu.id, { field: e.target.value })} 
                    placeholder="Computer Science" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input 
                    value={edu.location} 
                    onChange={(e) => updateEducation(edu.id, { location: e.target.value })} 
                    placeholder="Stanford, CA" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input 
                    type="month"
                    value={edu.startDate} 
                    onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })} 
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date (or expected)</Label>
                  <Input 
                    type="month"
                    value={edu.endDate} 
                    onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })} 
                    disabled={edu.current}
                  />
                </div>
                <div className="flex items-center space-x-2 sm:col-span-2">
                  <Checkbox 
                    id={`current-edu-${edu.id}`} 
                    checked={edu.current}
                    onCheckedChange={(checked) => updateEducation(edu.id, { current: checked as boolean, endDate: checked ? '' : edu.endDate })}
                  />
                  <Label htmlFor={`current-edu-${edu.id}`} className="font-normal cursor-pointer text-slate-600">
                    I currently study here
                  </Label>
                </div>
                <div className="space-y-2 sm:col-span-2 mt-2">
                  <Label>Description (Optional)</Label>
                  <Textarea 
                    value={edu.description} 
                    onChange={(e) => updateEducation(edu.id, { description: e.target.value })} 
                    placeholder="Relevant coursework, honors, GPA..." 
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <Button 
        type="button" 
        variant="outline" 
        className="w-full border-dashed border-2 hover:border-blue-500 hover:bg-blue-50 text-blue-600"
        onClick={handleAdd}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Education
      </Button>
    </div>
  );
}
