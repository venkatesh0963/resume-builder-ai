"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pb-48">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
              Announcing our new AI-powered ATS scoring system.{" "}
              <a href="#ats-scoring" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
          >
            Build a <span className="text-blue-600">Premium Resume</span> that gets you hired.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Stand out from the crowd with ATS-friendly templates, AI-powered writing assistance, and professional formatting. Create your perfect resume in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/builder">
              <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="mr-2 h-4 w-4" />
                Create My Resume
              </Button>
            </Link>
            <Link href="/cv-builder">
              <Button size="lg" variant="outline" className="rounded-full border-2 hover:bg-slate-50">
                Create CV
              </Button>
            </Link>
            <Link href="/templates" className="text-sm font-semibold leading-6 text-slate-900 group">
              View templates <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Dashboard/Resume Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flow-root sm:mt-24"
        >
          <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
              {/* Fake Left Panel */}
              <div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-100 p-6 flex flex-col gap-4">
                <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-10 w-full bg-white border border-slate-200 rounded-md shadow-sm"></div>
                  <div className="h-10 w-full bg-white border border-slate-200 rounded-md shadow-sm"></div>
                  <div className="h-24 w-full bg-white border border-slate-200 rounded-md shadow-sm"></div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-blue-600 font-medium bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <Sparkles className="h-4 w-4" />
                  <span>AI generating bullet points...</span>
                </div>
              </div>
              {/* Fake Right Panel (Resume) */}
              <div className="w-full md:w-2/3 bg-slate-200/50 p-8 flex justify-center items-center">
                <div className="w-full max-w-sm aspect-[1/1.414] bg-white shadow-md rounded flex flex-col p-6 space-y-4 relative overflow-hidden">
                   {/* Resume Header */}
                   <div className="flex flex-col items-center border-b pb-4">
                      <div className="h-6 w-32 bg-slate-800 rounded mb-2"></div>
                      <div className="h-3 w-48 bg-slate-300 rounded"></div>
                   </div>
                   {/* Resume Body */}
                   <div className="space-y-4">
                      <div>
                        <div className="h-4 w-24 bg-blue-600 rounded mb-2"></div>
                        <div className="space-y-2">
                           <div className="h-2 w-full bg-slate-200 rounded"></div>
                           <div className="h-2 w-full bg-slate-200 rounded"></div>
                           <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <div className="h-4 w-24 bg-blue-600 rounded mb-2"></div>
                        <div className="space-y-2">
                           <div className="h-2 w-full bg-slate-200 rounded"></div>
                           <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                   </div>

                   {/* Scanning Overlay Animation */}
                   <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]"
                      animate={{ y: [0, 400, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
