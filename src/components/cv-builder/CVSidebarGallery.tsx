"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

import { AcademicCVTemplate } from "@/components/cv-builder/templates/AcademicCVTemplate";
import { EuropeanCVTemplate } from "@/components/cv-builder/templates/EuropeanCVTemplate";
import { MedicalCVTemplate } from "@/components/cv-builder/templates/MedicalCVTemplate";
import { ResearchCVTemplate } from "@/components/cv-builder/templates/ResearchCVTemplate";
import { ModernCVTemplate } from "@/components/cv-builder/templates/ModernCVTemplate";

export const CV_TEMPLATES = [
  { id: "academic-cv", name: "Academic CV", component: AcademicCVTemplate },
  { id: "european-cv", name: "European Format", component: EuropeanCVTemplate },
  { id: "medical-cv", name: "Medical/Clinical CV", component: MedicalCVTemplate },
  { id: "research-cv", name: "Research CV", component: ResearchCVTemplate },
  { id: "modern-cv", name: "Modern CV", component: ModernCVTemplate },
];

function TemplatePreview({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setScale(containerWidth / 800);
      }
    };
    
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div ref={containerRef} className="aspect-[210/297] w-full bg-slate-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 pointer-events-none"></div>
      <div 
        className="absolute top-0 left-0 bg-white origin-top-left pointer-events-none"
        style={{ 
          width: "800px", 
          minHeight: "1131px", 
          transform: `scale(${scale})` 
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function CVSidebarGallery() {
  const { templateOptions, setTemplateOptions } = useResumeStore();

  return (
    <div className="w-80 border-r border-slate-200 bg-slate-50 flex flex-col shrink-0 print:hidden h-[calc(100vh-3.5rem)]">
      <div className="p-4 border-b border-slate-200 bg-white shrink-0">
        <h2 className="font-semibold text-slate-900">CV Templates</h2>
        <p className="text-xs text-slate-500 mt-1">Select a multi-page CV format</p>
      </div>
      
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="p-4 space-y-6">
          {CV_TEMPLATES.map((template) => {
            const isActive = templateOptions.templateId === template.id;
            const TemplateComponent = template.component;

            return (
              <div
                key={template.id}
                onClick={() => setTemplateOptions({ templateId: template.id })}
                className={`group cursor-pointer rounded-xl border-2 overflow-hidden transition-all duration-200 ${
                  isActive
                    ? "border-blue-600 shadow-md ring-2 ring-blue-600/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Live Preview Container */}
                <div className="border-b border-slate-100 bg-slate-100 relative group-hover:bg-slate-200 transition-colors">
                   <TemplatePreview>
                     <TemplateComponent />
                   </TemplatePreview>
                </div>
                
                {/* Footer */}
                <div className="p-3 bg-white flex items-center justify-between">
                  <span className={`font-semibold text-sm ${isActive ? "text-blue-900" : "text-slate-700"}`}>
                    {template.name}
                  </span>
                  {isActive && <Check className="h-4 w-4 text-blue-600" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
