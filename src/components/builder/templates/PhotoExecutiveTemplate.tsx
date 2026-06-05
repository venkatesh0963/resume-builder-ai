import { useResumeStore } from "@/store/useResumeStore";

export function PhotoExecutiveTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-[#fdfdfd] text-[#1a1a1a] flex flex-col p-12 font-serif border-[16px] border-white outline outline-1 outline-slate-200">
      {/* Header Grid */}
      <header className="grid grid-cols-[auto_1fr] gap-8 items-center border-b-[3px] pb-8 mb-8" style={{ borderColor: themeColor }}>
        {personalInfo.photo ? (
          <div className="w-32 h-32 overflow-hidden shadow-lg border-[3px] border-slate-100 p-1 bg-white">
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover filter contrast-125 grayscale" />
          </div>
        ) : (
          <div className="w-32 h-32 shadow-lg border-[3px] border-slate-100 p-1 bg-white flex items-center justify-center">
             <span className="text-3xl font-black text-slate-300">{personalInfo.firstName?.[0] || ""}{personalInfo.lastName?.[0] || ""}</span>
          </div>
        )}

        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-black tracking-widest uppercase mb-3 text-slate-900" style={{ letterSpacing: '0.15em' }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <div className="w-16 h-1 mb-4" style={{ backgroundColor: themeColor }}></div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold tracking-widest uppercase text-slate-500">
            {personalInfo.jobTitle && <span className="text-slate-800">{personalInfo.jobTitle}</span>}
            {personalInfo.jobTitle && <span>|</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.phone && <span>|</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.email && <span>|</span>}
            {personalInfo.email && <span>{personalInfo.email}</span>}
          </div>
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-10 text-center px-12">
          <p className="text-[15px] leading-loose text-slate-700 italic font-medium">"{summary}"</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-6 text-center" style={{ color: themeColor }}>
            Executive Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-lg text-slate-900 uppercase tracking-widest">{exp.company}</h3>
                  <span className="text-sm font-bold tracking-widest uppercase text-slate-500">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-[15px] font-semibold italic text-slate-700 mb-3 border-b border-slate-200 pb-2">
                  {exp.position} <span className="font-normal text-slate-400">| {exp.location}</span>
                </div>
                <p className="text-[14px] leading-relaxed text-slate-700 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Grid for Edu/Skills */}
      <div className="grid grid-cols-2 gap-12 mt-auto">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-lg font-black uppercase tracking-[0.2em] mb-5" style={{ color: themeColor }}>
              Education
            </h2>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[14px]">{edu.school}</h3>
                  <div className="text-[14px] italic text-slate-700 mt-1">{edu.degree} {edu.field && `in ${edu.field}`}</div>
                  <div className="text-[12px] font-bold tracking-widest uppercase text-slate-400 mt-2">
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
            <h2 className="text-lg font-black uppercase tracking-[0.2em] mb-5" style={{ color: themeColor }}>
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {skills.map((skill) => (
                <div key={skill.id} className="text-[14px] font-bold text-slate-700 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-300 rotate-45"></div>
                  {skill.name}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
