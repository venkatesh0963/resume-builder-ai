import { useResumeStore } from "@/store/useResumeStore";

export function MinimalTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col p-12 font-sans">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-light tracking-tight mb-1" style={{ color: themeColor }}>
          {personalInfo.firstName || "First"} {personalInfo.lastName || "Lastname"}
        </h1>
        <p className="text-lg text-slate-500 font-medium tracking-wide mb-4">
          {personalInfo.jobTitle || "Job Title"}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-8 grid grid-cols-4 gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 col-span-1 pt-1">
            About
          </h2>
          <div className="col-span-3">
            <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8 grid grid-cols-4 gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 col-span-1 pt-1">
            Experience
          </h2>
          <div className="col-span-3 space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-semibold text-slate-900">{exp.position}</h3>
                <div className="flex justify-between items-center text-sm mb-2 text-slate-500">
                  <span>{exp.company}</span>
                  <span>{exp.startDate} – {exp.current ? "Present" : exp.endDate}</span>
                </div>
                <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8 grid grid-cols-4 gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 col-span-1 pt-1">
            Education
          </h2>
          <div className="col-span-3 space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-semibold text-slate-900">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                </h3>
                <div className="flex justify-between items-center text-sm text-slate-500 mb-1">
                  <span>{edu.school}</span>
                  <span>{edu.startDate} – {edu.current ? "Present" : edu.endDate}</span>
                </div>
                {edu.description && (
                  <p className="text-sm text-slate-700">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="grid grid-cols-4 gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 col-span-1 pt-1">
            Skills
          </h2>
          <div className="col-span-3">
            <p className="text-sm text-slate-700 leading-relaxed">
              {skills.map(s => s.name).join(" • ")}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
