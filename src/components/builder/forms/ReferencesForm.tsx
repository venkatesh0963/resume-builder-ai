"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ReferencesForm() {
  const { resumeData, addReference, updateReference, removeReference } = useResumeStore();
  const references = resumeData.references || [];

  const handleAdd = () => {
    addReference({
      id: crypto.randomUUID(),
      name: "",
      position: "",
      company: "",
      contact: "",
    });
  };

  return (
    <div className="space-y-4">
      <Accordion className="w-full space-y-4">
        {references.map((ref) => (
          <AccordionItem key={ref.id} value={ref.id} className="border rounded-lg px-4 bg-white shadow-sm">
            <div className="flex items-center w-full">
              <GripVertical className="h-5 w-5 text-slate-400 cursor-grab mr-2" />
              <AccordionTrigger className="hover:no-underline flex-1">
                <div className="flex flex-col text-left">
                  <span className="font-medium text-slate-900">{ref.name || "(Unnamed Reference)"}</span>
                  <span className="text-sm text-slate-500">{ref.company || "Company"}</span>
                </div>
              </AccordionTrigger>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-400 hover:text-red-600 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  removeReference(ref.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <AccordionContent className="pt-4 pb-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input 
                    value={ref.name} 
                    onChange={(e) => updateReference(ref.id, { name: e.target.value })} 
                    placeholder="Dr. Jane Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Position</Label>
                  <Input 
                    value={ref.position} 
                    onChange={(e) => updateReference(ref.id, { position: e.target.value })} 
                    placeholder="Head of Research" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Company / Institution</Label>
                  <Input 
                    value={ref.company} 
                    onChange={(e) => updateReference(ref.id, { company: e.target.value })} 
                    placeholder="MIT" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Contact Info</Label>
                  <Input 
                    value={ref.contact} 
                    onChange={(e) => updateReference(ref.id, { contact: e.target.value })} 
                    placeholder="jane@example.com" 
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
        Add Reference
      </Button>
    </div>
  );
}
