"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Resumes Created", value: "100,000+" },
  { id: 2, name: "Interview Rate Increase", value: "65%" },
  { id: 3, name: "Time Saved (Avg)", value: "3 Hours" },
  { id: 4, name: "ATS Pass Rate", value: "98%" },
];

export function Stats() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-16">
            Trusted by job seekers worldwide
          </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-slate-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
