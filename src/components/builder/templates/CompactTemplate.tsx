import { useResumeStore } from "@/store/useResumeStore";

export function CompactTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-900 flex flex-col p-8 font-sans text-[11px] leading-tight">
      {/* Header */}
      <header className="flex justify-between items-end border-b-2 pb-2 mb-3" style={{ borderColor: themeColor }}>
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight" style={{ color: themeColor }}>
            {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
          </h1>
          <p className="text-sm font-bold text-slate-700">{personalInfo.jobTitle || "Job Title"}</p>
        </div>
        <div className="text-right text-slate-600 flex flex-col gap-0.5">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-3">
          <p className="text-justify text-slate-800 leading-snug">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-3">
          <h2 className="text-xs font-black uppercase tracking-wider mb-1.5 bg-slate-100 p-1" style={{ color: themeColor }}>
            Experience
          </h2>
          <div className="space-y-2.5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>{exp.position} – {exp.company}</span>
                  <span>{exp.startDate} – {exp.current ? "Present" : exp.endDate}</span>
                </div>
                <div className="flex justify-between items-baseline italic text-slate-600 mb-0.5">
                  <span>{exp.location}</span>
                </div>
                <p className="text-slate-800 leading-snug whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Skills in two columns if both exist */}
      <div className="flex gap-6 mt-auto pt-3">
        {/* Education */}
        {education.length > 0 && (
          <section className="flex-1">
            <h2 className="text-xs font-black uppercase tracking-wider mb-1.5 bg-slate-100 p-1" style={{ color: themeColor }}>
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{edu.school}</span>
                    <span>{edu.startDate} – {edu.current ? "Present" : edu.endDate}</span>
                  </div>
                  <div className="italic text-slate-700">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section className="flex-1">
            <h2 className="text-xs font-black uppercase tracking-wider mb-1.5 bg-slate-100 p-1" style={{ color: themeColor }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {skills.map((skill) => (
                <span key={skill.id} className="font-semibold text-slate-700">
                  {skill.name} •
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
