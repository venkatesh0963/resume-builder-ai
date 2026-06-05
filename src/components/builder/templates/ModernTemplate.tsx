import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Globe, Link as LinkIcon } from "lucide-react";

export function ModernTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-900 flex flex-col p-8">
      {/* Header */}
      <header className="border-b-2 pb-6 mb-6" style={{ borderColor: themeColor }}>
        <h1 className="text-4xl font-bold tracking-tight uppercase" style={{ color: themeColor }}>
          {personalInfo.firstName || "FIRST"}{" "}
          <span className="text-slate-900">{personalInfo.lastName || "LASTNAME"}</span>
        </h1>
        <p className="text-xl mt-1 text-slate-600 font-medium">
          {personalInfo.jobTitle || "Job Title"}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-slate-500">
          {personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" style={{ color: themeColor }} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" style={{ color: themeColor }} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" style={{ color: themeColor }} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1.5">
              <LinkIcon className="h-4 w-4" style={{ color: themeColor }} />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-1.5">
              <LinkIcon className="h-4 w-4" style={{ color: themeColor }} />
              <span>{personalInfo.github}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" style={{ color: themeColor }} />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1 gap-8">
        {/* Left Column (Main Content) */}
        <div className="flex-1 space-y-6">
          {/* Summary */}
          {summary && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-8 h-px bg-slate-300"></span>
                <span style={{ color: themeColor }}>Profile</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-slate-300"></span>
                <span style={{ color: themeColor }}>Experience</span>
              </h2>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-slate-900">{exp.position}</h3>
                      <span className="text-xs font-medium text-slate-500 whitespace-nowrap ml-4">
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm font-medium" style={{ color: themeColor }}>{exp.company}</span>
                      <span className="text-xs text-slate-500">{exp.location}</span>
                    </div>
                    <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-[30%] space-y-6">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-slate-300"></span>
                <span style={{ color: themeColor }}>Skills</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill.id} 
                    className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-slate-300"></span>
                <span style={{ color: themeColor }}>Education</span>
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-slate-900 text-sm">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                    <p className="text-sm" style={{ color: themeColor }}>{edu.school}</p>
                    <div className="flex justify-between items-baseline mt-1 text-xs text-slate-500">
                      <span>{edu.location}</span>
                      <span>{edu.startDate} - {edu.current ? "Present" : edu.endDate}</span>
                    </div>
                    {edu.description && (
                      <p className="text-xs text-slate-600 mt-2">{edu.description}</p>
                    )}
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
