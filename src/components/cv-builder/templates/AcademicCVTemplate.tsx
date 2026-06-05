import { useResumeStore } from "@/store/useResumeStore";
import { Mail, Phone, MapPin, Globe, Link as LinkIcon } from "lucide-react";

export function AcademicCVTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience = [], education = [], skills = [], publications = [], languages = [], references = [] } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full bg-white text-slate-900 flex flex-col p-10 font-serif" style={{ fontFamily: "Georgia, serif" }}>
      {/* Header */}
      <header className="text-center pb-6 mb-6 border-b-2" style={{ borderColor: themeColor }}>
        <h1 className="text-3xl font-bold tracking-tight uppercase" style={{ color: themeColor }}>
          {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
        </h1>
        <p className="text-lg mt-1 text-slate-700 italic">
          {personalInfo.jobTitle || "Curriculum Vitae"}
        </p>

        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-3 text-sm text-slate-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.website && <span>• {personalInfo.website}</span>}
        </div>
      </header>

      <div className="space-y-8">
        {/* Education (Often first in Academic CVs) */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                    <span className="text-sm font-medium text-slate-600">
                      {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-md italic text-slate-800">{edu.school}</span>
                    <span className="text-sm text-slate-600">{edu.location}</span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-slate-700 mt-2">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
              Academic & Professional Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-900">{exp.position}</h3>
                    <span className="text-sm font-medium text-slate-600">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-md italic text-slate-800">{exp.company}</span>
                    <span className="text-sm text-slate-600">{exp.location}</span>
                  </div>
                  <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
              Publications
            </h2>
            <div className="space-y-3">
              {publications.map((pub) => (
                <div key={pub.id} className="text-sm text-slate-800">
                  <span className="font-bold">{pub.title}.</span>{" "}
                  <span className="italic">{pub.publisher}</span>, {pub.date}.
                  {pub.link && <span className="text-blue-600 ml-2">[{pub.link}]</span>}
                  {pub.description && <p className="text-slate-600 mt-1">{pub.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills & Languages */}
        <div className="grid grid-cols-2 gap-8">
          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                Skills
              </h2>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                {skills.map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
              </ul>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                Languages
              </h2>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                {languages.map((lang) => (
                  <li key={lang.id}><span className="font-medium">{lang.name}</span> - {lang.proficiency}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* References */}
        {references.length > 0 && (
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
              References
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {references.map((ref) => (
                <div key={ref.id} className="text-sm">
                  <p className="font-bold text-slate-900">{ref.name}</p>
                  <p className="text-slate-700 italic">{ref.position}</p>
                  <p className="text-slate-700">{ref.company}</p>
                  <p className="text-slate-600 mt-1">{ref.contact}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
