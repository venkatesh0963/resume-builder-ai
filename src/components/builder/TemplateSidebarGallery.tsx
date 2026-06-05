"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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

export const TEMPLATES = [
  { id: "modern", name: "Modern", component: ModernTemplate },
  { id: "professional", name: "Professional", component: ProfessionalTemplate },
  { id: "minimal", name: "Minimal", component: MinimalTemplate },
  { id: "creative", name: "Creative", component: CreativeTemplate },
  { id: "executive", name: "Executive", component: ExecutiveTemplate },
  { id: "tech", name: "Tech", component: TechTemplate },
  { id: "elegant", name: "Elegant", component: ElegantTemplate },
  { id: "compact", name: "Compact", component: CompactTemplate },
  { id: "startup", name: "Startup", component: StartupTemplate },
  { id: "classic", name: "Classic", component: ClassicTemplate },
  { id: "bold", name: "Bold", component: BoldTemplate },
  { id: "academic", name: "Academic", component: AcademicTemplate },
  { id: "corporate", name: "Corporate", component: CorporateTemplate },
  { id: "developer", name: "Developer", component: DeveloperTemplate },
  { id: "designer", name: "Designer", component: DesignerTemplate },
  { id: "photo-modern", name: "Photo Modern", component: PhotoModernTemplate },
  { id: "photo-sidebar", name: "Photo Sidebar", component: PhotoSidebarTemplate },
  { id: "photo-professional", name: "Photo Professional", component: PhotoProfessionalTemplate },
  { id: "photo-creative", name: "Photo Creative", component: PhotoCreativeTemplate },
  { id: "photo-executive", name: "Photo Executive", component: PhotoExecutiveTemplate },
];

function TemplatePreview({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        // 800px is the assumed width of our A4 template
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

export function TemplateSidebarGallery() {
  const { templateOptions, setTemplateOptions } = useResumeStore();

  return (
    <div className="w-80 border-r border-slate-200 bg-slate-50 flex flex-col shrink-0 print:hidden h-[calc(100vh-3.5rem)]">
      <div className="p-4 border-b border-slate-200 bg-white shrink-0">
        <h2 className="font-semibold text-slate-900">Templates</h2>
        <p className="text-xs text-slate-500 mt-1">Select a premium design</p>
      </div>
      
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="p-4 space-y-6">
          {TEMPLATES.map((template) => {
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
