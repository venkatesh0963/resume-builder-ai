import { useResumeStore } from "@/store/useResumeStore";

export function BoldTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-900 flex flex-col p-10 font-sans">
      {/* Heavy Header */}
      <header className="border-l-[12px] pl-6 mb-8" style={{ borderColor: themeColor }}>
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-2">
          {personalInfo.firstName || "FIRST"}<br />
          {personalInfo.lastName || "LASTNAME"}
        </h1>
        <p className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-4">
          {personalInfo.jobTitle || "Job Title"}
        </p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-slate-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-3" style={{ color: themeColor }}>Summary</h2>
          <p className="text-base font-medium leading-relaxed text-slate-700">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-5" style={{ color: themeColor }}>Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-black text-xl text-slate-900 uppercase">{exp.position}</h3>
                <div className="flex justify-between items-baseline mb-2 border-b-2 border-slate-100 pb-2">
                  <span className="font-bold text-slate-600 text-lg">{exp.company}</span>
                  <span className="text-sm font-black text-slate-400 uppercase tracking-widest">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-700 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-4" style={{ color: themeColor }}>Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-black text-lg text-slate-900">{edu.school}</h3>
                  <div className="font-bold text-slate-600">{edu.degree} {edu.field && `in ${edu.field}`}</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">
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
            <h2 className="text-2xl font-black uppercase tracking-widest mb-4" style={{ color: themeColor }}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill.id} className="px-3 py-1.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
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
