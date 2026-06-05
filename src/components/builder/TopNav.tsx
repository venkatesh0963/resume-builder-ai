"use client";

import Link from "next/link";
import { ArrowLeft, Download, Settings2, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/useResumeStore";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const COLORS = [
  { name: "Blue", value: "#2563eb" },
  { name: "Purple", value: "#9333ea" },
  { name: "Rose", value: "#e11d48" },
  { name: "Emerald", value: "#059669" },
  { name: "Slate", value: "#475569" },
];

export function TopNav() {
  const { templateOptions, setTemplateOptions } = useResumeStore();
  const [isExporting, setIsExporting] = useState(false);
  const pathname = usePathname();
  const isCVBuilder = pathname === "/cv-builder";

  const handleExportPDF = () => {
    // We use native browser printing because it preserves selectable text (crucial for ATS systems)
    // whereas html2canvas flattens everything into an image.
    window.print();
    toast.success("PDF exported successfully! (Make sure 'Save as PDF' is selected)");
  };

  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 lg:px-6 z-10 shrink-0 shadow-sm print:hidden">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2 text-slate-500 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Home
          </Button>
        </Link>
        <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
        
        {/* Document Type Switcher */}
        <div className="hidden sm:flex bg-slate-100 p-1 rounded-lg">
          <Link href="/builder">
            <div className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 ${!isCVBuilder ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>
              <FileText className="h-4 w-4" />
              Resume
            </div>
          </Link>
          <Link href="/cv-builder">
            <div className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 ${isCVBuilder ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>
              <FileText className="h-4 w-4" />
              CV / Curriculum Vitae
            </div>
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Colors Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3">
            <Settings2 className="h-4 w-4" />
            <span className="hidden sm:inline">Colors</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Theme Color</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {COLORS.map((color) => (
                <DropdownMenuItem 
                  key={color.value}
                  onClick={() => setTemplateOptions({ themeColor: color.value })}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.value }}></div>
                  {color.name}
                  {templateOptions.themeColor === color.value && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Export Button */}
        <Button 
          size="sm" 
          className="bg-blue-600 hover:bg-blue-700 text-white gap-2 ml-2"
          onClick={handleExportPDF}
          disabled={isExporting}
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">{isExporting ? "Exporting..." : "Download PDF"}</span>
        </Button>
      </div>
    </header>
  );
}

