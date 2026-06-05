import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Globe, LinkIcon } from "lucide-react";

export function PhotoSidebarTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-row font-sans">
      {/* Sidebar */}
      <div className="w-[35%] h-full flex flex-col p-8 text-white" style={{ backgroundColor: themeColor }}>
        {personalInfo.photo ? (
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-lg mb-6">
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-lg mb-6 bg-black/10 flex items-center justify-center">
            <span className="text-4xl font-black text-white/30">{personalInfo.firstName?.[0] || ""}{personalInfo.lastName?.[0] || ""}</span>
          </div>
        )}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-widest leading-none mb-2">
            {personalInfo.firstName} <br /> {personalInfo.lastName}
          </h1>
          <p className="text-sm font-semibold tracking-widest uppercase opacity-90">{personalInfo.jobTitle}</p>
        </div>

        <div className="w-full h-[1px] bg-white/20 mb-8"></div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm font-medium opacity-90 mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-4">Contact</h2>
          {personalInfo.email && <div className="flex items-center gap-3"><Mail className="w-4 h-4"/> <span className="break-all">{personalInfo.email}</span></div>}
          {personalInfo.phone && <div className="flex items-center gap-3"><Phone className="w-4 h-4"/> <span>{personalInfo.phone}</span></div>}
          {personalInfo.location && <div className="flex items-center gap-3"><MapPin className="w-4 h-4"/> <span>{personalInfo.location}</span></div>}
          {personalInfo.website && <div className="flex items-center gap-3"><Globe className="w-4 h-4"/> <span>{personalInfo.website}</span></div>}
          {personalInfo.linkedin && <div className="flex items-center gap-3"><LinkIcon className="w-4 h-4"/> <span>{personalInfo.linkedin}</span></div>}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-4">Expertise</h2>
            <div className="flex flex-col gap-2">
              {skills.map((skill) => (
                <div key={skill.id} className="text-sm font-semibold">{skill.name}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-[2] p-10 space-y-10 bg-slate-50">
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest mb-4 text-slate-900 border-b-2 pb-2" style={{ borderColor: themeColor }}>Profile</h2>
            <p className="text-[15px] leading-relaxed text-slate-700 font-medium">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest mb-6 text-slate-900 border-b-2 pb-2" style={{ borderColor: themeColor }}>Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-lg text-slate-900">{exp.position}</h3>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-slate-200 text-slate-700" style={{ color: themeColor }}>
                      {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold text-slate-700 mb-2">{exp.company} <span className="text-slate-400 font-normal ml-2">{exp.location}</span></div>
                  <p className="text-[14px] leading-relaxed text-slate-600 whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-black uppercase tracking-widest mb-6 text-slate-900 border-b-2 pb-2" style={{ borderColor: themeColor }}>Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="text-sm font-semibold text-slate-600 mt-1">{edu.school}</div>
                  <div className="text-xs font-bold text-slate-400 mt-1 tracking-widest uppercase">
                    {edu.startDate} – {edu.current ? "Present" : edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
