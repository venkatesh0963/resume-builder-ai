import { useResumeStore } from "@/store/useResumeStore";

export function CorporateTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="p-8 pb-6 border-b-4" style={{ borderColor: themeColor }}>
        <h1 className="text-3xl font-bold uppercase tracking-wide text-slate-900 mb-1">
          {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
        </h1>
        <p className="text-lg font-medium text-slate-600 mb-4">{personalInfo.jobTitle || "Job Title"}</p>
        
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-slate-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-[7] p-8 border-r border-slate-200 space-y-6">
          {/* Summary */}
          {summary && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Professional Summary</h2>
              <p className="text-[13px] leading-relaxed text-slate-700">{summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">Experience</h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <h3 className="font-bold text-[14px] text-slate-900">{exp.position}</h3>
                    <div className="flex justify-between items-baseline mb-2 text-[13px]">
                      <span className="font-semibold text-slate-700">{exp.company} | {exp.location}</span>
                      <span className="text-slate-500 font-medium">
                        {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <p className="text-[13px] text-slate-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex-[3] bg-slate-50 p-8 space-y-6">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">Core Skills</h2>
              <div className="flex flex-col gap-1.5">
                {skills.map((skill) => (
                  <div key={skill.id} className="text-[13px] text-slate-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }}></div>
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-[13px] text-slate-900 leading-tight">{edu.degree}</h3>
                    {edu.field && <div className="text-[12px] text-slate-700 mt-0.5">{edu.field}</div>}
                    <div className="text-[12px] text-slate-500 mt-1">{edu.school}</div>
                    <div className="text-[11px] font-medium text-slate-400 mt-1">
                      {edu.startDate} – {edu.current ? "Present" : edu.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
