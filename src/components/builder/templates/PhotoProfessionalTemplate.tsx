import { useResumeStore } from "@/store/useResumeStore";

export function PhotoProfessionalTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-900 flex flex-col p-12 font-serif">
      {/* Header */}
      <header className="flex gap-8 items-center border-b-4 pb-6 mb-8" style={{ borderColor: themeColor }}>
        {personalInfo.photo && (
          <div className="w-28 h-28 shrink-0 overflow-hidden shadow-sm" style={{ border: `3px solid ${themeColor}` }}>
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover grayscale opacity-90" />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-wider uppercase mb-2 text-slate-900">
            {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
          </h1>
          <p className="text-lg tracking-widest uppercase mb-3 font-semibold" style={{ color: themeColor }}>
            {personalInfo.jobTitle || "Job Title"}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600 font-sans font-medium">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          </div>
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span style={{ color: themeColor }}>Professional Summary</span>
          </h2>
          <p className="text-[14px] leading-relaxed text-slate-800 text-justify font-sans">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-slate-300 pb-1" style={{ color: themeColor }}>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-[16px] text-slate-900">{exp.company}</h3>
                  <span className="text-sm font-sans font-semibold text-slate-600">
                    {exp.location}
                  </span>
                </div>
                <div className="flex justify-between items-baseline italic text-slate-700 mb-2">
                  <span className="font-medium">{exp.position}</span>
                  <span className="text-sm font-sans font-medium">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-[14px] text-slate-800 whitespace-pre-wrap leading-relaxed font-sans">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Skills */}
      <div className="grid grid-cols-2 gap-10">
        {education.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-slate-300 pb-1" style={{ color: themeColor }}>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-900">{edu.school}</h3>
                  </div>
                  <div className="flex justify-between items-baseline italic text-slate-700 mb-1">
                    <span>{edu.degree} {edu.field && `in ${edu.field}`}</span>
                  </div>
                  <div className="text-sm font-sans font-medium text-slate-600">
                    {edu.startDate} – {edu.current ? "Present" : edu.endDate} | {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-slate-300 pb-1" style={{ color: themeColor }}>
              Core Competencies
            </h2>
            <div className="font-sans text-[14px] text-slate-800 leading-relaxed font-medium">
              <ul className="list-disc list-inside columns-2 gap-4">
                {skills.map((s) => (
                  <li key={s.id} className="mb-1">{s.name}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
