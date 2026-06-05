"use client";

import { useResumeStore } from "@/store/useResumeStore";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Import all templates
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

const TEMPLATES = [
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

import { useState, useRef, useEffect } from "react";

function TemplatePreview({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

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

export default function TemplatesGallery() {
  const router = useRouter();
  const { templateOptions, setTemplateOptions } = useResumeStore();

  const handleSelectTemplate = (id: string) => {
    setTemplateOptions({ templateId: id });
    router.push("/builder");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 shrink-0 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/builder">
            <Button variant="ghost" size="sm" className="gap-2 text-slate-500 hover:text-slate-900">
              <ArrowLeft className="h-4 w-4" />
              Back to Builder
            </Button>
          </Link>
          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
          <h1 className="text-lg font-bold text-slate-900 hidden sm:block">Template Gallery</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 max-w-[1600px] mx-auto w-full">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-3">Choose your design</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Select from our collection of 20 premium resume templates. The previews below are fully live and show exactly how your actual data will look in each layout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEMPLATES.map((template) => {
            const isActive = templateOptions.templateId === template.id;
            const TemplateComponent = template.component;

            return (
              <div 
                key={template.id}
                onClick={() => handleSelectTemplate(template.id)}
                className={`group cursor-pointer rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  isActive 
                    ? "border-blue-600 shadow-xl ring-4 ring-blue-600/10" 
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {/* Preview Window */}
                <TemplatePreview>
                  <TemplateComponent />
                </TemplatePreview>

                {/* Card Footer */}
                <div className="p-5 bg-white flex items-center justify-between">
                  <div>
                    <h3 className={`font-bold text-lg ${isActive ? "text-blue-900" : "text-slate-900"}`}>
                      {template.name}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">
                      {isActive ? "Currently Selected" : "Click to apply"}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
