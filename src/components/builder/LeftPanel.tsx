"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PersonalInfoForm } from "@/components/builder/forms/PersonalInfoForm";
import { SummaryForm } from "@/components/builder/forms/SummaryForm";
import { ExperienceForm } from "@/components/builder/forms/ExperienceForm";
import { EducationForm } from "@/components/builder/forms/EducationForm";
import { SkillsForm } from "@/components/builder/forms/SkillsForm";

export function LeftPanel() {
  return (
    <div className="flex w-full flex-col bg-white lg:w-[500px] xl:w-[600px] shrink-0 border-r border-slate-200 z-10 shadow-sm print:hidden">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Resume Details</h2>
            <p className="text-sm text-slate-500 mt-1">
              Fill in your details below. The preview will update in real-time.
            </p>
          </div>
          
          <Accordion defaultValue={["personal"]} className="w-full">
            <AccordionItem value="personal" className="border rounded-lg mb-4 px-4 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-slate-800">
                Personal Information
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <PersonalInfoForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="summary" className="border rounded-lg mb-4 px-4 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-slate-800">
                Professional Summary
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <SummaryForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experience" className="border rounded-lg mb-4 px-4 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-slate-800">
                Experience
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <ExperienceForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education" className="border rounded-lg mb-4 px-4 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-slate-800">
                Education
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <EducationForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills" className="border rounded-lg mb-4 px-4 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-slate-800">
                Skills
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <SkillsForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
