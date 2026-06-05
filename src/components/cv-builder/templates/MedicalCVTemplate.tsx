import { useResumeStore } from "@/store/useResumeStore";

export function MedicalCVTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience = [], education = [], skills = [], publications = [], languages = [], references = [] } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full bg-white text-slate-900 flex flex-col p-12 font-sans max-w-[210mm] mx-auto">
      {/* Clean centered header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-light tracking-wide uppercase mb-2" style={{ color: themeColor }}>
          {personalInfo.firstName} <span className="font-bold">{personalInfo.lastName}</span>
        </h1>
        <h2 className="text-xl text-slate-500 mb-4">{personalInfo.jobTitle}</h2>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      <div className="space-y-8">
        {summary && (
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b pb-2">Profile Overview</h3>
            <p className="text-sm leading-relaxed text-slate-800">{summary}</p>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b pb-2">Education & Credentials</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 text-sm text-slate-500">
                    {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                  </div>
                  <div className="col-span-3">
                    <h4 className="font-bold text-slate-800">{edu.degree} {edu.field && `in ${edu.field}`}</h4>
                    <p className="text-sm text-slate-600">{edu.school}, {edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b pb-2">Clinical & Professional Experience</h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 text-sm text-slate-500">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </div>
                  <div className="col-span-3">
                    <h4 className="font-bold text-slate-800">{exp.position}</h4>
                    <p className="text-sm text-slate-600 mb-2">{exp.company}, {exp.location}</p>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {publications.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b pb-2">Publications & Research</h3>
            <div className="space-y-4">
              {publications.map((pub) => (
                <div key={pub.id} className="text-sm pl-4 border-l-2" style={{ borderColor: themeColor }}>
                  <p className="font-bold text-slate-800">{pub.title}</p>
                  <p className="text-slate-600 italic">{pub.publisher}, {pub.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {skills.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b pb-2">Core Competencies</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 grid grid-cols-1 gap-1">
                {skills.map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
              </ul>
            </section>
          )}

          {references.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b pb-2">Professional References</h3>
              <div className="space-y-3">
                {references.map((ref) => (
                  <div key={ref.id} className="text-sm">
                    <p className="font-bold text-slate-800">{ref.name}</p>
                    <p className="text-slate-600">{ref.position}, {ref.company}</p>
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
