import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Link as LinkIcon, ExternalLink } from "lucide-react";

export function ResearchCVTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience = [], education = [], skills = [], publications = [], languages = [], references = [] } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full bg-white text-slate-900 flex flex-col p-10 font-sans border-t-8" style={{ borderColor: themeColor }}>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl font-medium" style={{ color: themeColor }}>
          {personalInfo.jobTitle}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
          {personalInfo.email && <div className="flex items-center gap-1.5"><Mail className="w-4 h-4" />{personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-1.5"><Phone className="w-4 h-4" />{personalInfo.phone}</div>}
          {personalInfo.location && <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{personalInfo.location}</div>}
          {personalInfo.website && <div className="flex items-center gap-1.5"><LinkIcon className="w-4 h-4" />{personalInfo.website}</div>}
        </div>
      </header>

      <div className="space-y-8">
        {summary && (
          <section>
            <h2 className="text-2xl font-bold mb-3 border-b-2 pb-2" style={{ borderColor: `${themeColor}20`, color: themeColor }}>
              Research Focus & Profile
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{ borderColor: `${themeColor}20`, color: themeColor }}>
              Research & Academic Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2" style={{ borderColor: `${themeColor}50` }}>
                  <div className="absolute w-3 h-3 bg-white border-2 rounded-full -left-[7px] top-1.5" style={{ borderColor: themeColor }}></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-900 text-lg">{exp.position}</h3>
                    <span className="text-sm font-semibold text-slate-500">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <div className="text-md font-medium text-slate-700 mb-2">
                    {exp.company} <span className="text-slate-400">| {exp.location}</span>
                  </div>
                  <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{ borderColor: `${themeColor}20`, color: themeColor }}>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                    <span className="text-sm font-semibold text-slate-500">
                      {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-2">
                    {edu.school}, {edu.location}
                  </div>
                  {edu.description && <p className="text-sm text-slate-600">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {publications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{ borderColor: `${themeColor}20`, color: themeColor }}>
              Selected Publications
            </h2>
            <div className="space-y-4 text-sm">
              {publications.map((pub, idx) => (
                <div key={pub.id} className="flex gap-3">
                  <span className="text-slate-400 font-mono">[{idx + 1}]</span>
                  <div>
                    <span className="font-bold text-slate-900">{pub.title}</span>.{" "}
                    <span className="italic text-slate-700">{pub.publisher}</span> ({pub.date}).
                    {pub.link && (
                      <a href={pub.link} className="inline-flex items-center ml-2 text-blue-600 hover:underline">
                        Link <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    )}
                    {pub.description && <p className="text-slate-600 mt-1">{pub.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{ borderColor: `${themeColor}20`, color: themeColor }}>
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-3 py-1 bg-white border rounded-full text-sm font-medium text-slate-700 shadow-sm" style={{ borderColor: `${themeColor}30` }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{ borderColor: `${themeColor}20`, color: themeColor }}>
                Languages
              </h2>
              <ul className="text-sm text-slate-700 space-y-2">
                {languages.map((lang) => (
                  <li key={lang.id} className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="font-bold">{lang.name}</span>
                    <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
