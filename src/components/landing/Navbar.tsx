"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">AI Resume</span>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#features" className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="/templates" className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors">
            Templates
          </Link>
          <Link href="#ats-scoring" className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors">
            ATS Scoring
          </Link>
          <Link href="#pricing" className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
        </div>
        
        <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
          <Link href="/builder" className="hidden sm:block text-sm font-semibold leading-6 text-slate-900">
            Log in
          </Link>
          <div className="flex gap-2">
            <Link href="/builder">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 sm:px-6">
                Resume
              </Button>
            </Link>
            <Link href="/cv-builder">
              <Button variant="outline" className="rounded-full px-4 sm:px-6">
                CV
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
