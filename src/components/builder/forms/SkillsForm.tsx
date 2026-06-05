"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X, GripVertical, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function SkillsForm() {
  const { resumeData, addSkill, updateSkill, removeSkill } = useResumeStore();
  const skills = resumeData.skills;
  const [newSkill, setNewSkill] = useState("");

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newSkill.trim()) return;
    
    addSkill({
      id: crypto.randomUUID(),
      name: newSkill.trim(),
      level: "",
    });
    setNewSkill("");
  };

  const handleGenerateWithAI = async () => {
    if (!resumeData.personalInfo.jobTitle) {
      toast.error("Please enter a Job Title in Personal Info to get tailored skill suggestions.");
      return;
    }
    
    try {
      // Simulate API
      await new Promise(resolve => setTimeout(resolve, 1500));
      const suggestions = ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Redux", "Jest"];
      
      suggestions.forEach(skill => {
        // Only add if not already present
        if (!skills.some(s => s.name.toLowerCase() === skill.toLowerCase())) {
          addSkill({
            id: crypto.randomUUID(),
            name: skill,
            level: "",
          });
        }
      });
      toast.success("Added AI suggested skills!");
    } catch (error) {
      toast.error("Failed to generate skills.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Add 5-10 skills that are most relevant to the job you are applying for.
        </p>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          className="h-8 gap-1.5 text-blue-600 border-blue-200 hover:bg-blue-50"
          onClick={handleGenerateWithAI}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Suggest Skills
        </Button>
      </div>

      <form onSubmit={handleAdd} className="flex gap-2">
        <Input 
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="e.g. Project Management, Python, Figma..."
          className="flex-1"
        />
        <Button type="submit" variant="secondary" className="bg-slate-100 hover:bg-slate-200 text-slate-900">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </form>

      <div className="flex flex-wrap gap-2 pt-2">
        {skills.map((skill) => (
          <div 
            key={skill.id} 
            className="flex items-center gap-1 bg-blue-50 border border-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm group"
          >
            <GripVertical className="h-3 w-3 text-blue-300 cursor-grab hidden group-hover:block" />
            <span className="font-medium">{skill.name}</span>
            <button
              onClick={() => removeSkill(skill.id)}
              className="ml-1 text-blue-400 hover:text-blue-600 rounded-full hover:bg-blue-200/50 p-0.5"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
        {skills.length === 0 && (
          <div className="text-sm text-slate-400 italic">No skills added yet.</div>
        )}
      </div>
    </div>
  );
}
