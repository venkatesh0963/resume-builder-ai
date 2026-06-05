"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { improveBulletPoint } from "@/lib/gemini";
import { useState } from "react";
import { toast } from "sonner";

export function ExperienceForm() {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResumeStore();
  const experiences = resumeData.experience;
  const [generatingId, setGeneratingId] = useState<string | null>(null);

  const handleAdd = () => {
    addExperience({
      id: crypto.randomUUID(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  };

  const handleImproveDescription = async (id: string, description: string, position: string) => {
    if (!description) {
      toast.error("Please write a basic description first.");
      return;
    }
    
    setGeneratingId(id);
    try {
      // Improve bullet points line by line
      const lines = description.split('\n').filter(l => l.trim().length > 0);
      const improvedLines = [];
      
      for (const line of lines) {
        const cleanLine = line.replace(/^[•\-\*]\s*/, '');
        const improved = await improveBulletPoint(cleanLine, position || "professional");
        improvedLines.push(`• ${improved}`);
      }
      
      updateExperience(id, { description: improvedLines.join('\n') });
      toast.success("Description improved with AI!");
    } catch (error: any) {
      toast.error(error.message || "Failed to improve description.");
    } finally {
      setGeneratingId(null);
    }
  };

  return (
    <div className="space-y-4">
      <Accordion className="w-full space-y-4">
        {experiences.map((exp, index) => (
          <AccordionItem key={exp.id} value={exp.id} className="border rounded-lg px-4 bg-white shadow-sm">
            <div className="flex items-center w-full">
              <GripVertical className="h-5 w-5 text-slate-400 cursor-grab mr-2" />
              <AccordionTrigger className="hover:no-underline flex-1">
                <div className="flex flex-col text-left">
                  <span className="font-medium text-slate-900">{exp.position || "(Not specified)"}</span>
                  <span className="text-sm text-slate-500">{exp.company || "Company"}</span>
                </div>
              </AccordionTrigger>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-400 hover:text-red-600 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  removeExperience(exp.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <AccordionContent className="pt-4 pb-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Job Title</Label>
                  <Input 
                    value={exp.position} 
                    onChange={(e) => updateExperience(exp.id, { position: e.target.value })} 
                    placeholder="Software Engineer" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Employer</Label>
                  <Input 
                    value={exp.company} 
                    onChange={(e) => updateExperience(exp.id, { company: e.target.value })} 
                    placeholder="Google" 
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Location</Label>
                  <Input 
                    value={exp.location} 
                    onChange={(e) => updateExperience(exp.id, { location: e.target.value })} 
                    placeholder="Mountain View, CA" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input 
                    type="month"
                    value={exp.startDate} 
                    onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })} 
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input 
                    type="month"
                    value={exp.endDate} 
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })} 
                    disabled={exp.current}
                  />
                </div>
                <div className="flex items-center space-x-2 sm:col-span-2">
                  <Checkbox 
                    id={`current-${exp.id}`} 
                    checked={exp.current}
                    onCheckedChange={(checked) => updateExperience(exp.id, { current: checked as boolean, endDate: checked ? '' : exp.endDate })}
                  />
                  <Label htmlFor={`current-${exp.id}`} className="font-normal cursor-pointer text-slate-600">
                    I currently work here
                  </Label>
                </div>
                <div className="space-y-2 sm:col-span-2 mt-2">
                  <div className="flex items-center justify-between">
                    <Label>Description</Label>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-7 text-xs gap-1 text-blue-600"
                      onClick={() => handleImproveDescription(exp.id, exp.description, exp.position)}
                      disabled={generatingId === exp.id}
                    >
                      <Sparkles className="h-3 w-3" />
                      {generatingId === exp.id ? "Improving..." : "Improve with AI"}
                    </Button>
                  </div>
                  <Textarea 
                    value={exp.description} 
                    onChange={(e) => updateExperience(exp.id, { description: e.target.value })} 
                    placeholder="• Led the development of..." 
                    className="min-h-[120px]"
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
        Add Employment
      </Button>
    </div>
  );
}
