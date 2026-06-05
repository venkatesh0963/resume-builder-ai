import { useResumeStore } from "@/store/useResumeStore";

export function ProfessionalTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-900 flex flex-col p-10 font-serif">
      {/* Header */}
      <header className="text-center border-b-[3px] pb-6 mb-6" style={{ borderColor: themeColor }}>
        <h1 className="text-3xl font-bold tracking-widest uppercase mb-2">
          {personalInfo.firstName || "FIRST"}{" "}
          {personalInfo.lastName || "LASTNAME"}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-2 border-b border-slate-300" style={{ color: themeColor }}>
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-800">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-slate-300" style={{ color: themeColor }}>
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900">{exp.company}</h3>
                  <span className="text-sm font-medium text-slate-700">
                    {exp.location}
                  </span>
                </div>
                <div className="flex justify-between items-baseline italic text-slate-700 mb-1">
                  <span>{exp.position}</span>
                  <span className="text-sm">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-800 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-slate-300" style={{ color: themeColor }}>
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900">{edu.school}</h3>
                  <span className="text-sm font-medium text-slate-700">
                    {edu.location}
                  </span>
                </div>
                <div className="flex justify-between items-baseline italic text-slate-700 mb-1">
                  <span>{edu.degree} {edu.field && `in ${edu.field}`}</span>
                  <span className="text-sm">
                    {edu.startDate} – {edu.current ? "Present" : edu.endDate}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-sm text-slate-800 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-slate-300" style={{ color: themeColor }}>
            Skills
          </h2>
          <p className="text-sm text-slate-800">
            {skills.map(s => s.name).join(", ")}
          </p>
        </section>
      )}
    </div>
  );
}
