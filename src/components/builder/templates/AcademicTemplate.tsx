import { useResumeStore } from "@/store/useResumeStore";

export function AcademicTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-black flex flex-col p-12 font-serif">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase mb-1">
          {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
        </h1>
        <p className="text-sm italic text-gray-700 mb-3">{personalInfo.jobTitle || "Curriculum Vitae"}</p>
        <div className="text-[12px] text-gray-700 flex flex-wrap justify-center gap-x-3 gap-y-1">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {/* Education First for Academic CV */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[14px] font-bold uppercase border-b border-black pb-1 mb-3">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-bold text-[13px]">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="text-[13px] italic">{edu.school}, {edu.location}</div>
                  {edu.description && (
                    <p className="text-[12px] mt-1">{edu.description}</p>
                  )}
                </div>
                <div className="text-[12px] text-right">
                  {edu.startDate} – {edu.current ? "Present" : edu.endDate}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Summary / Research Interests */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-[14px] font-bold uppercase border-b border-black pb-1 mb-3">Research Interests & Profile</h2>
          <p className="text-[13px] leading-relaxed text-justify">{summary}</p>
        </section>
      )}

      {/* Academic / Professional Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[14px] font-bold uppercase border-b border-black pb-1 mb-3">Academic & Professional Appointments</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-bold text-[13px]">{exp.position}</h3>
                  <div className="text-[13px] italic">{exp.company}, {exp.location}</div>
                  <p className="text-[12px] leading-relaxed mt-1 whitespace-pre-wrap">{exp.description}</p>
                </div>
                <div className="text-[12px] text-right whitespace-nowrap">
                  {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills / Methods */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-[14px] font-bold uppercase border-b border-black pb-1 mb-3">Technical Skills & Methods</h2>
          <ul className="list-disc list-inside text-[13px] leading-relaxed columns-2">
            {skills.map(s => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
