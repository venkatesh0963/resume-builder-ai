"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function PublicationsForm() {
  const { resumeData, addPublication, updatePublication, removePublication } = useResumeStore();
  const publications = resumeData.publications || [];

  const handleAdd = () => {
    addPublication({
      id: crypto.randomUUID(),
      title: "",
      publisher: "",
      date: "",
      link: "",
      description: "",
    });
  };

  return (
    <div className="space-y-4">
      <Accordion className="w-full space-y-4">
        {publications.map((pub) => (
          <AccordionItem key={pub.id} value={pub.id} className="border rounded-lg px-4 bg-white shadow-sm">
            <div className="flex items-center w-full">
              <GripVertical className="h-5 w-5 text-slate-400 cursor-grab mr-2" />
              <AccordionTrigger className="hover:no-underline flex-1">
                <div className="flex flex-col text-left">
                  <span className="font-medium text-slate-900">{pub.title || "(Untitled Publication)"}</span>
                  <span className="text-sm text-slate-500">{pub.publisher || "Publisher / Journal"}</span>
                </div>
              </AccordionTrigger>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-400 hover:text-red-600 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  removePublication(pub.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <AccordionContent className="pt-4 pb-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label>Title</Label>
                  <Input 
                    value={pub.title} 
                    onChange={(e) => updatePublication(pub.id, { title: e.target.value })} 
                    placeholder="E.g., Quantum Computing in the 21st Century" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Publisher / Journal</Label>
                  <Input 
                    value={pub.publisher} 
                    onChange={(e) => updatePublication(pub.id, { publisher: e.target.value })} 
                    placeholder="Nature" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input 
                    type="month"
                    value={pub.date} 
                    onChange={(e) => updatePublication(pub.id, { date: e.target.value })} 
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Link (URL)</Label>
                  <Input 
                    value={pub.link} 
                    onChange={(e) => updatePublication(pub.id, { link: e.target.value })} 
                    placeholder="https://..." 
                  />
                </div>
                <div className="space-y-2 sm:col-span-2 mt-2">
                  <Label>Description / Abstract</Label>
                  <Textarea 
                    value={pub.description} 
                    onChange={(e) => updatePublication(pub.id, { description: e.target.value })} 
                    placeholder="Brief description of the publication..." 
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
        Add Publication
      </Button>
    </div>
  );
}
