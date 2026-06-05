export type PersonalInfo = {
  photo?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  jobTitle: string;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
};

export type Skill = {
  id: string;
  name: string;
  level: string; // e.g. "Beginner", "Intermediate", "Advanced", "Expert"
};

export type Project = {
  id: string;
  name: string;
  description: string;
  link: string;
  technologies: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link: string;
};

export type Publication = {
  id: string;
  title: string;
  publisher: string;
  date: string;
  link: string;
  description: string;
};

export type Language = {
  id: string;
  name: string;
  proficiency: string; // e.g., Native, Fluent, Intermediate, Basic
};

export type Reference = {
  id: string;
  name: string;
  position: string;
  company: string;
  contact: string; // email or phone
};

export type ResumeData = {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  publications: Publication[];
  languages: Language[];
  references: Reference[];
};

export type TemplateOptions = {
  templateId: string; // e.g. "modern", "professional", "minimal"
  themeColor: string; // Hex color
  fontFamily: string; // e.g. "Inter", "Roboto"
};
