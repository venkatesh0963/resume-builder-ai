import { useResumeStore } from "@/store/useResumeStore";

export function ModernCVTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience = [], education = [], skills = [], publications = [], languages = [], references = [] } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full bg-white text-slate-900 flex flex-col font-sans">
      {/* Header Banner */}
      <header className="p-10 text-white" style={{ backgroundColor: themeColor }}>
        <h1 className="text-4xl font-black tracking-tight uppercase mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl font-medium opacity-90 mb-6">{personalInfo.jobTitle}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-90 font-medium">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      <div className="p-10 flex gap-8">
        {/* Left Column (Main Content) */}
        <div className="w-2/3 space-y-8">
          {summary && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-slate-900 border-b-2 pb-1" style={{ borderColor: themeColor }}>
                Profile Summary
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-slate-900 border-b-2 pb-1" style={{ borderColor: themeColor }}>
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <h3 className="font-bold text-slate-900 text-lg">{exp.position}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold" style={{ color: themeColor }}>{exp.company}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {publications.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-slate-900 border-b-2 pb-1" style={{ borderColor: themeColor }}>
                Publications & Awards
              </h2>
              <div className="space-y-4">
                {publications.map((pub) => (
                  <div key={pub.id} className="text-sm">
                    <p className="font-bold text-slate-900">{pub.title}</p>
                    <p className="text-slate-600">{pub.publisher} — {pub.date}</p>
                    {pub.description && <p className="text-slate-700 mt-1">{pub.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-1/3 space-y-8">
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-slate-900 border-b-2 pb-1" style={{ borderColor: themeColor }}>
                Education
              </h2>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-sm font-medium" style={{ color: themeColor }}>{edu.school}</p>
                    <p className="text-xs text-slate-500 font-bold tracking-wider mt-1 uppercase">
                      {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-slate-900 border-b-2 pb-1" style={{ borderColor: themeColor }}>
                Skills
              </h2>
              <div className="flex flex-col gap-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-slate-100 p-2 rounded text-sm font-semibold text-slate-700">
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-slate-900 border-b-2 pb-1" style={{ borderColor: themeColor }}>
                Languages
              </h2>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.id} className="text-sm flex flex-col">
                    <span className="font-bold text-slate-900">{lang.name}</span>
                    <span className="text-slate-500">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {references.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-slate-900 border-b-2 pb-1" style={{ borderColor: themeColor }}>
                References
              </h2>
              <div className="space-y-4">
                {references.map((ref) => (
                  <div key={ref.id} className="text-sm">
                    <p className="font-bold text-slate-900">{ref.name}</p>
                    <p className="text-slate-600">{ref.company}</p>
                    <p className="text-blue-600 mt-1">{ref.contact}</p>
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
