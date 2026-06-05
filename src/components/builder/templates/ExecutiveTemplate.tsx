import { useResumeStore } from "@/store/useResumeStore";

export function ExecutiveTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-900 flex flex-col p-12 font-serif">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold tracking-widest uppercase mb-4" style={{ color: themeColor }}>
          {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
        </h1>
        <div className="w-full h-[1px] bg-slate-300 mb-4"></div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-700 font-sans tracking-wide">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo.email && <span>| {personalInfo.email}</span>}
          {personalInfo.linkedin && <span>| {personalInfo.linkedin}</span>}
        </div>
        <div className="w-full h-[1px] bg-slate-300 mt-4"></div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <p className="text-sm leading-relaxed text-slate-800 text-justify">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b-2 border-slate-900 pb-1" style={{ color: themeColor, borderColor: themeColor }}>
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-end mb-1">
                  <h3 className="font-bold text-lg text-slate-900">{exp.company}</h3>
                  <span className="text-sm font-sans font-medium text-slate-600">
                    {exp.location}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="italic font-medium text-slate-800">{exp.position}</span>
                  <span className="text-sm font-sans font-medium text-slate-600">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed font-sans">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b-2 border-slate-900 pb-1" style={{ color: themeColor, borderColor: themeColor }}>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-end mb-1">
                  <h3 className="font-bold text-slate-900">{edu.school}</h3>
                  <span className="text-sm font-sans font-medium text-slate-600">
                    {edu.location}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="italic text-slate-800">{edu.degree} {edu.field && `in ${edu.field}`}</span>
                  <span className="text-sm font-sans font-medium text-slate-600">
                    {edu.startDate} – {edu.current ? "Present" : edu.endDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b-2 border-slate-900 pb-1" style={{ color: themeColor, borderColor: themeColor }}>
            Core Competencies
          </h2>
          <div className="font-sans text-sm text-slate-800 leading-relaxed">
            {skills.map((s, i) => (
              <span key={s.id}>
                <span className="font-semibold">{s.name}</span>
                {i < skills.length - 1 && <span className="mx-2 text-slate-300">|</span>}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
