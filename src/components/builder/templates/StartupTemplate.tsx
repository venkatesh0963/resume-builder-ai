import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Globe, LinkIcon } from "lucide-react";

export function StartupTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col font-sans">
      {/* Heavy Header Block */}
      <header className="p-10 text-white" style={{ backgroundColor: themeColor }}>
        <h1 className="text-5xl font-black tracking-tight mb-2">
          {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
        </h1>
        <p className="text-xl font-semibold opacity-90 mb-6">{personalInfo.jobTitle || "Job Title"}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium opacity-90">
          {personalInfo.email && <div className="flex items-center gap-2"><Mail className="w-4 h-4" />{personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4" />{personalInfo.phone}</div>}
          {personalInfo.location && <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{personalInfo.location}</div>}
          {personalInfo.linkedin && <div className="flex items-center gap-2"><LinkIcon className="w-4 h-4" />{personalInfo.linkedin}</div>}
        </div>
      </header>

      <div className="flex flex-1 p-10 gap-10">
        {/* Left Column (Main) */}
        <div className="flex-[2] space-y-8">
          {/* Summary */}
          {summary && (
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest mb-4 text-slate-900 border-l-4 pl-3" style={{ borderColor: themeColor }}>
                About Me
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">{summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest mb-6 text-slate-900 border-l-4 pl-3" style={{ borderColor: themeColor }}>
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg text-slate-900">{exp.position}</h3>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-600" style={{ color: themeColor }}>
                        {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-700 mb-2">{exp.company} <span className="text-slate-400 font-normal ml-2">{exp.location}</span></div>
                    <p className="text-sm text-slate-600 whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex-1 space-y-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest mb-4 text-slate-900 border-l-4 pl-3" style={{ borderColor: themeColor }}>
                Skills
              </h2>
              <div className="flex flex-col gap-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }}></div>
                    <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest mb-4 text-slate-900 border-l-4 pl-3" style={{ borderColor: themeColor }}>
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-slate-900 leading-tight">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                    <div className="text-sm font-medium text-slate-600 mt-1">{edu.school}</div>
                    <div className="text-xs font-semibold text-slate-400 mt-1">
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
