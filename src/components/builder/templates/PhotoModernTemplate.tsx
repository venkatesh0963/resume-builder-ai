import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Globe, LinkIcon } from "lucide-react";

export function PhotoModernTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col p-10 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center border-b-[3px] pb-6 mb-8" style={{ borderColor: themeColor }}>
        <div className="flex-1">
          <h1 className="text-5xl font-black tracking-tight mb-2 text-slate-900" style={{ color: themeColor }}>
            {personalInfo.firstName || "FIRST"} <span className="text-slate-900">{personalInfo.lastName || "LASTNAME"}</span>
          </h1>
          <p className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-4">
            {personalInfo.jobTitle || "Job Title"}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            {personalInfo.email && <div className="flex items-center gap-1.5"><Mail className="w-4 h-4"/>{personalInfo.email}</div>}
            {personalInfo.phone && <div className="flex items-center gap-1.5"><Phone className="w-4 h-4"/>{personalInfo.phone}</div>}
            {personalInfo.location && <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/>{personalInfo.location}</div>}
            {personalInfo.linkedin && <div className="flex items-center gap-1.5"><LinkIcon className="w-4 h-4"/>{personalInfo.linkedin}</div>}
          </div>
        </div>
        {personalInfo.photo && (
          <div className="w-32 h-32 ml-6 shrink-0 rounded-full border-4 overflow-hidden shadow-md" style={{ borderColor: themeColor }}>
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex gap-10 flex-1">
        <div className="flex-[2] space-y-8">
          {/* Summary */}
          {summary && (
            <section>
              <h2 className="text-lg font-black uppercase tracking-widest mb-3" style={{ color: themeColor }}>Profile</h2>
              <p className="text-sm font-medium leading-relaxed text-slate-700">{summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-lg font-black uppercase tracking-widest mb-5" style={{ color: themeColor }}>Experience</h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-4 border-l-2" style={{ borderColor: themeColor }}>
                    <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg text-slate-900">{exp.position}</h3>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-700 mb-2">{exp.company} <span className="font-normal text-slate-400">| {exp.location}</span></div>
                    <p className="text-sm text-slate-600 whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="flex-1 space-y-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-lg font-black uppercase tracking-widest mb-4" style={{ color: themeColor }}>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-3 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-full">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-lg font-black uppercase tracking-widest mb-4" style={{ color: themeColor }}>Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-slate-900 leading-tight">{edu.degree}</h3>
                    {edu.field && <div className="text-sm font-medium text-slate-700 mt-0.5">{edu.field}</div>}
                    <div className="text-sm text-slate-500 mt-1">{edu.school}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
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
