"use client";

import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useResumeStore } from "@/store/useResumeStore";
import { ModernTemplate } from "@/components/builder/templates/ModernTemplate";
import { ProfessionalTemplate } from "@/components/builder/templates/ProfessionalTemplate";
import { MinimalTemplate } from "@/components/builder/templates/MinimalTemplate";
import { CreativeTemplate } from "@/components/builder/templates/CreativeTemplate";
import { ExecutiveTemplate } from "@/components/builder/templates/ExecutiveTemplate";
import { TechTemplate } from "@/components/builder/templates/TechTemplate";
import { ElegantTemplate } from "@/components/builder/templates/ElegantTemplate";
import { CompactTemplate } from "@/components/builder/templates/CompactTemplate";
import { StartupTemplate } from "@/components/builder/templates/StartupTemplate";
import { ClassicTemplate } from "@/components/builder/templates/ClassicTemplate";
import { BoldTemplate } from "@/components/builder/templates/BoldTemplate";
import { AcademicTemplate } from "@/components/builder/templates/AcademicTemplate";
import { CorporateTemplate } from "@/components/builder/templates/CorporateTemplate";
import { DeveloperTemplate } from "@/components/builder/templates/DeveloperTemplate";
import { DesignerTemplate } from "@/components/builder/templates/DesignerTemplate";
import { PhotoModernTemplate } from "@/components/builder/templates/PhotoModernTemplate";
import { PhotoSidebarTemplate } from "@/components/builder/templates/PhotoSidebarTemplate";
import { PhotoProfessionalTemplate } from "@/components/builder/templates/PhotoProfessionalTemplate";
import { PhotoCreativeTemplate } from "@/components/builder/templates/PhotoCreativeTemplate";
import { PhotoExecutiveTemplate } from "@/components/builder/templates/PhotoExecutiveTemplate";

export function RightPanel() {
  const [scale, setScale] = useState(1);
  const { templateOptions } = useResumeStore();

  const renderTemplate = () => {
    switch (templateOptions.templateId) {
      case "professional": return <ProfessionalTemplate />;
      case "minimal": return <MinimalTemplate />;
      case "creative": return <CreativeTemplate />;
      case "executive": return <ExecutiveTemplate />;
      case "tech": return <TechTemplate />;
      case "elegant": return <ElegantTemplate />;
      case "compact": return <CompactTemplate />;
      case "startup": return <StartupTemplate />;
      case "classic": return <ClassicTemplate />;
      case "bold": return <BoldTemplate />;
      case "academic": return <AcademicTemplate />;
      case "corporate": return <CorporateTemplate />;
      case "developer": return <DeveloperTemplate />;
      case "designer": return <DesignerTemplate />;
      case "photo-modern": return <PhotoModernTemplate />;
      case "photo-sidebar": return <PhotoSidebarTemplate />;
      case "photo-professional": return <PhotoProfessionalTemplate />;
      case "photo-creative": return <PhotoCreativeTemplate />;
      case "photo-executive": return <PhotoExecutiveTemplate />;
      case "modern":
      default:
        return <ModernTemplate />;
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
        <div className="min-h-full flex items-center justify-center p-8 sm:p-12 print:p-0 print:block">
          {/* A4 Paper wrapper */}
          <div 
            className="bg-white shadow-2xl transition-transform duration-200 ease-out origin-top print:shadow-none print:m-0 print:transform-none"
            id="resume-preview-container"
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
