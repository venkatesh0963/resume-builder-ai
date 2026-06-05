import { useResumeStore } from "@/store/useResumeStore";

export function ClassicTemplate() {
  const { resumeData, templateOptions } = useResumeStore();
  const { personalInfo, summary, experience, education, skills } = resumeData;
  const themeColor = templateOptions.themeColor;

  return (
    <div className="w-full h-full bg-white text-black flex flex-col p-12 font-serif">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase mb-2">
          {personalInfo.firstName || "FIRST"} {personalInfo.lastName || "LASTNAME"}
        </h1>
        <div className="text-[13px] text-gray-800 flex flex-wrap justify-center gap-x-2 gap-y-1">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-[15px] font-bold uppercase border-b border-black pb-1 mb-2">Summary</h2>
          <p className="text-[13px] leading-relaxed text-justify">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[15px] font-bold uppercase border-b border-black pb-1 mb-3">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">{exp.company}</h3>
                  <span className="text-[13px]">{exp.location}</span>
                </div>
                <div className="flex justify-between items-baseline italic mb-1 text-[13px]">
                  <span>{exp.position}</span>
                  <span>{exp.startDate} – {exp.current ? "Present" : exp.endDate}</span>
                </div>
                <p className="text-[13px] leading-relaxed whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[15px] font-bold uppercase border-b border-black pb-1 mb-3">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">{edu.school}</h3>
                  <span className="text-[13px]">{edu.location}</span>
                </div>
                <div className="flex justify-between items-baseline italic mb-1 text-[13px]">
                  <span>{edu.degree} {edu.field && `in ${edu.field}`}</span>
                  <span>{edu.startDate} – {edu.current ? "Present" : edu.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-[15px] font-bold uppercase border-b border-black pb-1 mb-2">Skills</h2>
          <p className="text-[13px] leading-relaxed">
            {skills.map(s => s.name).join(", ")}
          </p>
        </section>
      )}
    </div>
  );
}
