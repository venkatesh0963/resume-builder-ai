import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Globe, Link as LinkIcon } from "lucide-react";

export function CreativeTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-row p-0 font-sans">
      {/* Left Sidebar */}
      <div 
        className="w-[35%] h-full p-8 text-white flex flex-col gap-6"
        style={{ backgroundColor: themeColor }}
      >
        <div className="mt-4">
          <h1 className="text-4xl font-black uppercase tracking-wider mb-2 leading-tight">
            {personalInfo.firstName || "FIRST"}<br/>
            {personalInfo.lastName || "LASTNAME"}
          </h1>
          <p className="text-lg font-medium opacity-90 tracking-wide uppercase">
            {personalInfo.jobTitle || "Job Title"}
          </p>
        </div>

        <div className="w-12 h-1 bg-white/30 my-2"></div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm opacity-90">
          {personalInfo.email && (
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              <span className="break-all">{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-3">
              <LinkIcon className="h-4 w-4" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/30 pb-2">
              Expertise
            </h2>
            <div className="flex flex-col gap-2">
              {skills.map((skill) => (
                <div key={skill.id} className="text-sm font-medium">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="flex-1 p-10 flex flex-col gap-8 bg-slate-50/50">
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-2xl font-black uppercase tracking-wider mb-3 text-slate-900" style={{ color: themeColor }}>
              Profile
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-2xl font-black uppercase tracking-wider mb-5 text-slate-900" style={{ color: themeColor }}>
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2" style={{ borderColor: themeColor }}>
                  <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5" style={{ backgroundColor: themeColor }}></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-900 text-lg">{exp.position}</h3>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-semibold text-slate-700">{exp.company}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-black uppercase tracking-wider mb-5 text-slate-900" style={{ color: themeColor }}>
              Education
            </h2>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="font-semibold text-slate-700">{edu.school}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-slate-600 mt-2">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
