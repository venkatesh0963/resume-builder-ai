import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Globe, LinkIcon } from "lucide-react";

export function PhotoCreativeTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col font-sans relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-48" style={{ backgroundColor: themeColor }}></div>
      <div className="absolute top-48 right-0 w-full h-2" style={{ backgroundColor: themeColor, opacity: 0.5 }}></div>

      {/* Header Container */}
      <header className="relative z-10 px-12 pt-16 pb-8 flex items-end gap-10">
        {personalInfo.photo ? (
          <div className="w-48 h-48 rounded-2xl overflow-hidden border-8 border-white shadow-xl shrink-0 bg-slate-100">
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-48 h-48 rounded-2xl border-8 border-white shadow-xl shrink-0 bg-slate-200 flex items-center justify-center">
            <span className="text-4xl font-black text-slate-400 opacity-50">{personalInfo.firstName?.[0] || ""}{personalInfo.lastName?.[0] || ""}</span>
          </div>
        )}

        <div className="flex-1 pb-4">
          <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-md mb-2 leading-none">
            {personalInfo.firstName} <br />
            {personalInfo.lastName}
          </h1>
          <p className="text-xl font-bold uppercase tracking-widest text-white/90 drop-shadow-md">
            {personalInfo.jobTitle || "Job Title"}
          </p>
        </div>
      </header>

      {/* Contact Bar */}
      <div className="px-12 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-slate-600">
        {personalInfo.email && <div className="flex items-center gap-2"><Mail className="w-4 h-4"/>{personalInfo.email}</div>}
        {personalInfo.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4"/>{personalInfo.phone}</div>}
        {personalInfo.location && <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/>{personalInfo.location}</div>}
        {personalInfo.linkedin && <div className="flex items-center gap-2"><LinkIcon className="w-4 h-4"/>{personalInfo.linkedin}</div>}
      </div>

      {/* Main Content */}
      <div className="flex gap-12 p-12 flex-1">
        
        {/* Left Column (Main) */}
        <div className="flex-[2] space-y-10">
          {summary && (
            <section>
              <h2 className="text-2xl font-black uppercase tracking-widest mb-4 flex items-center gap-4">
                <span style={{ color: themeColor }}>Profile</span>
                <div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
              </h2>
              <p className="text-[15px] font-medium leading-relaxed text-slate-700">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2 className="text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
                <span style={{ color: themeColor }}>Experience</span>
                <div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
              </h2>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-black text-xl text-slate-900">{exp.position}</h3>
                      <span className="text-xs font-black tracking-widest uppercase text-slate-500">
                        {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="text-lg font-bold mb-3" style={{ color: themeColor }}>{exp.company} <span className="text-sm font-medium text-slate-400 ml-2">{exp.location}</span></div>
                    <p className="text-sm font-medium text-slate-600 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex-1 space-y-10">
          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b-4 pb-2 inline-block" style={{ borderColor: themeColor, color: themeColor }}>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-3 py-1.5 bg-slate-100 text-slate-800 font-bold text-xs rounded-lg border border-slate-200 shadow-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b-4 pb-2 inline-block" style={{ borderColor: themeColor, color: themeColor }}>
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative">
                    <h3 className="font-black text-slate-900 text-lg leading-tight">{edu.degree}</h3>
                    {edu.field && <div className="text-sm font-bold text-slate-700 mt-1">{edu.field}</div>}
                    <div className="text-sm font-medium text-slate-500 mt-1">{edu.school}</div>
                    <div className="text-xs font-black tracking-widest uppercase text-slate-400 mt-2">
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
