"use client";

import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useResumeStore } from "@/store/useResumeStore";

import { AcademicCVTemplate } from "@/components/cv-builder/templates/AcademicCVTemplate";
import { EuropeanCVTemplate } from "@/components/cv-builder/templates/EuropeanCVTemplate";
import { MedicalCVTemplate } from "@/components/cv-builder/templates/MedicalCVTemplate";
import { ResearchCVTemplate } from "@/components/cv-builder/templates/ResearchCVTemplate";
import { ModernCVTemplate } from "@/components/cv-builder/templates/ModernCVTemplate";

export function CVRightPanel() {
  const [scale, setScale] = useState(1);
  const { templateOptions } = useResumeStore();

  const renderTemplate = () => {
    switch (templateOptions.templateId) {
      case "academic-cv": return <AcademicCVTemplate />;
      case "european-cv": return <EuropeanCVTemplate />;
      case "medical-cv": return <MedicalCVTemplate />;
      case "research-cv": return <ResearchCVTemplate />;
      case "modern-cv": return <ModernCVTemplate />;
      default:
        // Default to Academic for CV builder if somehow an old resume template ID is still in state
        return <AcademicCVTemplate />;
    }
  };

  return (
    <div className="flex flex-1 flex-col bg-slate-100 overflow-hidden relative print:bg-white print:overflow-visible">
      {/* Zoom Controls Overlay */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-1 bg-white/90 backdrop-blur shadow-lg rounded-full px-3 py-1.5 border border-slate-200 print:hidden">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-600 hover:bg-slate-100" onClick={() => setScale(s => Math.max(0.5, s - 0.1))}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-xs font-medium w-12 text-center text-slate-600">{Math.round(scale * 100)}%</span>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-600 hover:bg-slate-100" onClick={() => setScale(s => Math.min(2, s + 0.1))}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <div className="w-px h-4 bg-slate-300 mx-1"></div>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-600 hover:bg-slate-100" onClick={() => setScale(1)}>
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-y-auto print:h-auto print:overflow-visible">
        <div className="min-h-full flex justify-center p-8 sm:p-12 print:p-0 print:block">
          {/* A4 Paper wrapper (height not constrained, allows flowing to multiple pages) */}
          <div 
            className="bg-white shadow-2xl transition-transform duration-200 ease-out origin-top print:shadow-none print:m-0 print:transform-none h-fit"
            id="cv-preview-container"
            style={{ 
              width: "210mm", 
              minHeight: "297mm", 
              transform: `scale(${scale})` 
            }}
          >
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
}
