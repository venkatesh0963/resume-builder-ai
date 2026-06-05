"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { generateSummary } from "@/lib/gemini";

export function SummaryForm() {
  const { resumeData, setSummary } = useResumeStore();
  const summary = resumeData.summary;
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateWithAI = async () => {
    if (!resumeData.personalInfo.jobTitle) {
      toast.error("Please enter a Job Title in Personal Info first.");
      return;
    }
    
    setIsGenerating(true);
    try {
      const generatedSummary = await generateSummary(
        resumeData.personalInfo.jobTitle,
        resumeData.experience,
        resumeData.skills
      );
      
      setSummary(generatedSummary);
      toast.success("Summary generated successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to generate summary.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="summary">Professional Summary</Label>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          className="h-8 gap-1.5 text-blue-600 border-blue-200 hover:bg-blue-50"
          onClick={handleGenerateWithAI}
          disabled={isGenerating}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {isGenerating ? "Generating..." : "Generate with AI"}
        </Button>
      </div>
      <Textarea 
        id="summary" 
        placeholder="Write a brief summary of your professional background..." 
        className="min-h-[150px] resize-y"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <p className="text-xs text-slate-500">
        Write 2-4 short and energetic sentences to interest the reader! Mention your role, experience, and most importantly - your biggest achievements, best qualities, and skills.
      </p>
    </div>
  );
}
