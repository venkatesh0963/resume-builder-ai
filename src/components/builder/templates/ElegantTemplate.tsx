import { useResumeStore } from "@/store/useResumeStore";

export function ElegantTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-[#fcfaf9] text-[#333333] flex flex-col p-12 font-serif">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl tracking-widest font-light uppercase mb-4" style={{ color: themeColor }}>
          {personalInfo.firstName || "FIRST"} <span className="font-semibold">{personalInfo.lastName || "LASTNAME"}</span>
        </h1>
        <p className="text-lg tracking-widest uppercase text-slate-500 mb-6">{personalInfo.jobTitle || "Job Title"}</p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs tracking-widest text-slate-400 uppercase">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>•</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-10 max-w-3xl mx-auto text-center">
          <p className="text-[15px] leading-loose text-slate-600 italic">
            "{summary}"
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-xl tracking-[0.2em] uppercase font-light" style={{ color: themeColor }}>Experience</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-medium">{exp.position}</h3>
                  <span className="text-xs tracking-widest uppercase text-slate-400">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-sm font-medium mb-3" style={{ color: themeColor }}>
                  {exp.company} <span className="text-slate-400 font-normal">| {exp.location}</span>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-600 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Grid for Education and Skills */}
      <div className="grid grid-cols-2 gap-12">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-slate-200 flex-1"></div>
              <h2 className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: themeColor }}>Education</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="text-[15px] font-medium mb-1">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="text-[13px] text-slate-500 mb-1">{edu.school}</div>
                  <div className="text-[11px] tracking-widest uppercase text-slate-400">
                    {edu.startDate} – {edu.current ? "Present" : edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-slate-200 flex-1"></div>
              <h2 className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: themeColor }}>Skills</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {skills.map((skill) => (
                <span key={skill.id} className="text-[13px] text-slate-600 tracking-wide">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
