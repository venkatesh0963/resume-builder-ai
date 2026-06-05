import { useResumeStore } from "@/store/useResumeStore";

export function DesignerTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-[#fdfdfd] text-[#1a1a1a] flex flex-col p-12 font-sans relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-32 h-full opacity-10 pointer-events-none" style={{ backgroundColor: themeColor }}></div>

      {/* Header */}
      <header className="mb-12 relative z-10">
        <h1 className="text-6xl font-black tracking-tighter leading-none mb-3" style={{ color: themeColor }}>
          {personalInfo.firstName} <br />
          {personalInfo.lastName}
        </h1>
        <div className="text-xl font-bold uppercase tracking-[0.2em] text-[#666] mb-6">
          {personalInfo.jobTitle}
        </div>
        
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-[#333]">
          {personalInfo.email && <span className="border-b-2 border-transparent hover:border-black transition-colors">{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex gap-16 relative z-10 flex-1">
        
        {/* Left Column (Narrower) */}
        <div className="w-[30%] space-y-12">
          {/* Summary */}
          {summary && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#999] mb-4">Profile</h2>
              <p className="text-sm font-medium leading-relaxed text-[#444]">{summary}</p>
            </section>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#999] mb-4">Expertise</h2>
              <div className="flex flex-col gap-2 text-sm font-bold text-[#333]">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-3">
                    <div className="w-4 h-[2px]" style={{ backgroundColor: themeColor }}></div>
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#999] mb-4">Education</h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-[#1a1a1a]">{edu.degree}</h3>
                    <div className="text-sm font-medium text-[#666] mt-1">{edu.school}</div>
                    <div className="text-xs font-bold text-[#999] mt-2 tracking-widest uppercase">
                      {edu.startDate} – {edu.current ? "Present" : edu.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (Wider - Experience) */}
        <div className="flex-1 space-y-12">
          {experience.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#999] mb-8">Experience</h2>
              <div className="space-y-12">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-black text-[#1a1a1a] leading-tight w-[70%]">{exp.position}</h3>
                      <div className="text-right w-[30%]">
                        <span className="inline-block text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full bg-[#f0f0f0] text-[#666]">
                          {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>
                    </div>
                    <div className="text-lg font-bold mb-4" style={{ color: themeColor }}>{exp.company}</div>
                    <p className="text-[15px] font-medium leading-relaxed text-[#555] whitespace-pre-wrap">{exp.description}</p>
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
