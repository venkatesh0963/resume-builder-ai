import { useResumeStore } from "@/store/useResumeStore";
import { Link as LinkIcon, Globe, Mail } from "lucide-react";

export function DeveloperTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-[#0d1117] text-[#c9d1d9] flex flex-col p-10 font-mono text-sm">
      {/* Header */}
      <header className="mb-8 border-b border-[#30363d] pb-6">
        <h1 className="text-4xl font-bold mb-2 text-white">
          <span style={{ color: themeColor }}>const</span> developer = {"{"}
        </h1>
        <div className="pl-8 space-y-1 text-[#8b949e]">
          <div>name: <span className="text-[#a5d6ff]">"{personalInfo.firstName} {personalInfo.lastName}"</span>,</div>
          <div>role: <span className="text-[#a5d6ff]">"{personalInfo.jobTitle}"</span>,</div>
          <div>location: <span className="text-[#a5d6ff]">"{personalInfo.location}"</span>,</div>
          <div className="flex items-center gap-2">
            contact: <span className="text-[#a5d6ff]">"{personalInfo.email}"</span>,
          </div>
          <div className="flex gap-4 mt-2 text-white">
            {personalInfo.github && <div className="flex items-center gap-1 bg-[#21262d] px-2 py-1 rounded text-xs"><LinkIcon className="w-3 h-3"/> {personalInfo.github}</div>}
            {personalInfo.linkedin && <div className="flex items-center gap-1 bg-[#21262d] px-2 py-1 rounded text-xs"><LinkIcon className="w-3 h-3"/> {personalInfo.linkedin}</div>}
            {personalInfo.website && <div className="flex items-center gap-1 bg-[#21262d] px-2 py-1 rounded text-xs"><Globe className="w-3 h-3"/> {personalInfo.website}</div>}
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-2 text-white">{"};"}</h1>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-8 flex-1">
        {/* Left Col (Experience) */}
        <div className="col-span-8 space-y-8">
          {summary && (
            <section>
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span style={{ color: themeColor }}>&gt;</span> About
              </h2>
              <p className="text-[#8b949e] leading-relaxed">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span style={{ color: themeColor }}>&gt;</span> Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 pl-4 border-[#30363d] relative">
                    <div className="absolute w-2 h-2 rounded-full -left-[5px] top-1.5 bg-[#8b949e]"></div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-white text-base">{exp.position}</h3>
                      <span className="text-xs text-[#8b949e]">
                        {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="text-[#a5d6ff] mb-2">{exp.company}</div>
                    <p className="text-[#8b949e] whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Col (Skills & Edu) */}
        <div className="col-span-4 space-y-8">
          {skills.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span style={{ color: themeColor }}>&gt;</span> Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-2 py-1 bg-[#21262d] border border-[#30363d] text-white text-xs rounded-md">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span style={{ color: themeColor }}>&gt;</span> Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-[#161b22] border border-[#30363d] p-3 rounded-lg">
                    <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                    <div className="text-[#8b949e] text-xs mt-1">{edu.school}</div>
                    <div className="text-[#8b949e] text-xs mt-2">
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
