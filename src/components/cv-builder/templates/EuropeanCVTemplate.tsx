import { useResumeStore } from "@/store/useResumeStore";

export function EuropeanCVTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience = [], education = [], skills = [], publications = [], languages = [], references = [] } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full bg-white text-slate-800 flex flex-col p-10 font-sans">
      <div className="flex gap-8">
        {/* Left Column - Names & Details */}
        <div className="w-1/3 flex flex-col gap-6 text-right border-r-2 pr-6" style={{ borderColor: themeColor }}>
          <div>
            <h1 className="text-3xl font-light uppercase tracking-widest text-slate-900 break-words">
              {personalInfo.firstName}
            </h1>
            <h1 className="text-3xl font-bold uppercase tracking-widest break-words" style={{ color: themeColor }}>
              {personalInfo.lastName}
            </h1>
          </div>

          <div className="space-y-1 text-sm text-slate-600">
            {personalInfo.jobTitle && <p className="font-bold text-slate-800 uppercase text-xs mb-3">{personalInfo.jobTitle}</p>}
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
            {personalInfo.website && <p className="text-blue-600">{personalInfo.website}</p>}
          </div>

          {skills.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Skills</h2>
              <ul className="text-sm space-y-1">
                {skills.map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
              </ul>
            </div>
          )}

          {languages.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Languages</h2>
              <ul className="text-sm space-y-2">
                {languages.map((lang) => (
                  <li key={lang.id}>
                    <span className="font-bold text-slate-700 block">{lang.name}</span>
                    <span className="text-xs">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column - Main Content */}
        <div className="w-2/3 flex flex-col gap-8">
          {summary && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-2" style={{ color: themeColor }}>
                Profile
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                Work Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-900">{exp.position}</h3>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="text-sm font-medium mb-2 text-slate-700">
                      {exp.company} <span className="text-slate-400 font-normal">| {exp.location}</span>
                    </div>
                    <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                Education and Training
              </h2>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-700">
                      {edu.school} <span className="text-slate-400 font-normal">| {edu.location}</span>
                    </div>
                    {edu.description && <p className="text-sm text-slate-600 mt-2">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {publications.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                Publications
              </h2>
              <div className="space-y-4">
                {publications.map((pub) => (
                  <div key={pub.id} className="text-sm">
                    <p className="font-bold text-slate-900">{pub.title}</p>
                    <p className="text-slate-700">{pub.publisher} | {pub.date}</p>
                    {pub.description && <p className="text-slate-600 mt-1">{pub.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {references.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b pb-1" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                References
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {references.map((ref) => (
                  <div key={ref.id} className="text-sm">
                    <p className="font-bold text-slate-900">{ref.name}</p>
                    <p className="text-slate-600">{ref.position} at {ref.company}</p>
                    <p className="text-slate-500 mt-1">{ref.contact}</p>
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
