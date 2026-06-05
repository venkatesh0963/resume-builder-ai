"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap, LayoutTemplate, FileCheck2, Download } from "lucide-react";

const features = [
  {
    name: "AI-Powered Writing",
    description: "Generate professional summaries, bullet points, and cover letters instantly using advanced Gemini AI models.",
    icon: Sparkles,
  },
  {
    name: "ATS Optimization",
    description: "Our templates are designed to pass through Applicant Tracking Systems, ensuring your resume gets read by humans.",
    icon: Target,
  },
  {
    name: "Real-time Preview",
    description: "See your changes instantly. What you see is exactly what you get when you download your final PDF.",
    icon: Zap,
  },
  {
    name: "Premium Templates",
    description: "Choose from dozens of professionally designed templates tailored for various industries and experience levels.",
    icon: LayoutTemplate,
  },
  {
    name: "Smart Resume Scoring",
    description: "Get instant feedback on your resume's impact, readability, and formatting with actionable suggestions.",
    icon: FileCheck2,
  },
  {
    name: "One-Click Export",
    description: "Download high-quality, pixel-perfect PDF resumes ready to be sent to recruiters and hiring managers.",
    icon: Download,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Build Faster, Land Jobs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to create a winning resume
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our platform combines cutting-edge AI technology with proven resume strategies to give you an unfair advantage in your job search.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-600 shadow-sm shadow-blue-500/20">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
