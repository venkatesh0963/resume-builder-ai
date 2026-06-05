import { useResumeStore } from "@/store/useResumeStore";
import { Terminal } from "lucide-react";

export function TechTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-slate-950 text-slate-300 flex flex-col p-10 font-mono text-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}20` }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}20` }}></div>

      {/* Header */}
      <header className="mb-8 relative z-10">
        <div className="flex items-center gap-3 mb-4 text-slate-100">
          <Terminal className="h-8 w-8" style={{ color: themeColor }} />
          <h1 className="text-3xl font-bold tracking-tight">
            {personalInfo.firstName || "FIRST"}_{personalInfo.lastName || "LAST"}
          </h1>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col gap-2 shadow-xl">
          <div className="text-slate-400">
            <span style={{ color: themeColor }}>$</span> echo $TITLE
            <div className="text-slate-200 mt-1">{personalInfo.jobTitle || "Software Engineer"}</div>
          </div>
          <div className="text-slate-400">
            <span style={{ color: themeColor }}>$</span> cat contact.json
            <div className="text-slate-200 mt-1 flex flex-wrap gap-x-6 gap-y-1">
              {personalInfo.email && <span>"email": "{personalInfo.email}"</span>}
              {personalInfo.phone && <span>"phone": "{personalInfo.phone}"</span>}
              {personalInfo.location && <span>"location": "{personalInfo.location}"</span>}
              {personalInfo.github && <span>"github": "{personalInfo.github}"</span>}
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col gap-6 relative z-10">
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: themeColor }}>
              <span>~/readme.md</span>
              <div className="h-px flex-1 bg-slate-800"></div>
            </h2>
            <p className="leading-relaxed text-slate-300 bg-slate-900/50 p-4 rounded border border-slate-800/50">{summary}</p>
          </section>
        )}

        <div className="flex gap-6 flex-1">
          {/* Main Content */}
          <div className="flex-[2] space-y-6">
            {experience.length > 0 && (
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                  <span>~/experience.sh</span>
                  <div className="h-px flex-1 bg-slate-800"></div>
                </h2>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-4 border-l border-slate-800">
                      <div className="absolute w-2 h-2 rounded-full -left-[4.5px] top-1.5" style={{ backgroundColor: themeColor }}></div>
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="font-bold text-slate-100 text-base">{exp.position}</h3>
                          <div className="text-slate-400">@ {exp.company}</div>
                        </div>
                        <span className="text-xs text-slate-500 whitespace-nowrap bg-slate-900 px-2 py-1 rounded">
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>
                      <p className="text-slate-300 whitespace-pre-wrap mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex-1 space-y-6">
            {skills.length > 0 && (
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                  <span>~/skills.json</span>
                  <div className="h-px flex-1 bg-slate-800"></div>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill.id} 
                      className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                  <span>~/education.log</span>
                  <div className="h-px flex-1 bg-slate-800"></div>
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="bg-slate-900/50 p-3 rounded border border-slate-800/50">
                      <h3 className="font-bold text-slate-200">{edu.degree}</h3>
                      <div className="text-slate-400 text-xs mt-1">{edu.school}</div>
                      <div className="text-xs text-slate-500 mt-2">
                        [{edu.startDate} - {edu.current ? "Present" : edu.endDate}]
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
