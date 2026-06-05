"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LanguagesForm() {
  const { resumeData, addLanguage, updateLanguage, removeLanguage } = useResumeStore();
  const languages = resumeData.languages || [];

  const handleAdd = () => {
    addLanguage({
      id: crypto.randomUUID(),
      name: "",
      proficiency: "Native",
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {languages.map((lang) => (
          <div key={lang.id} className="flex items-start gap-3 bg-white p-3 border rounded-lg shadow-sm">
            <GripVertical className="h-5 w-5 text-slate-400 cursor-grab mt-2.5 shrink-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Language</Label>
                <Input 
                  value={lang.name} 
                  onChange={(e) => updateLanguage(lang.id, { name: e.target.value })} 
                  placeholder="e.g. English, French" 
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Proficiency</Label>
                <Select
                  value={lang.proficiency}
                  onValueChange={(val) => updateLanguage(lang.id, { proficiency: val as string })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Native">Native</SelectItem>
                    <SelectItem value="Fluent">Fluent</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Basic">Basic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-400 hover:text-red-600 mt-5 shrink-0"
              onClick={() => removeLanguage(lang.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      
      <Button 
        type="button" 
        variant="outline" 
        className="w-full border-dashed border-2 hover:border-blue-500 hover:bg-blue-50 text-blue-600"
        onClick={handleAdd}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Language
      </Button>
    </div>
  );
}
