import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ResumeData, TemplateOptions, Experience, Education, Skill, Project, Certification, Publication, Language, Reference } from '@/types/resume';

const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    jobTitle: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  publications: [],
  languages: [],
  references: [],
};

const initialTemplateOptions: TemplateOptions = {
  templateId: 'modern',
  themeColor: '#2563eb', // blue-600
  fontFamily: 'Inter',
};

interface ResumeStore {
  resumeData: ResumeData;
  templateOptions: TemplateOptions;
  setPersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void;
  setSummary: (summary: string) => void;
  
  // Array operations
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  removeExperience: (id: string) => void;

  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  removeEducation: (id: string) => void;

  addSkill: (skill: Skill) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;

  addProject: (proj: Project) => void;
  updateProject: (id: string, proj: Partial<Project>) => void;
  removeProject: (id: string) => void;

  addCertification: (cert: Certification) => void;
  updateCertification: (id: string, cert: Partial<Certification>) => void;
  removeCertification: (id: string) => void;

  addPublication: (pub: Publication) => void;
  updatePublication: (id: string, pub: Partial<Publication>) => void;
  removePublication: (id: string) => void;

  addLanguage: (lang: Language) => void;
  updateLanguage: (id: string, lang: Partial<Language>) => void;
  removeLanguage: (id: string) => void;

  addReference: (ref: Reference) => void;
  updateReference: (id: string, ref: Partial<Reference>) => void;
  removeReference: (id: string) => void;

  setTemplateOptions: (options: Partial<TemplateOptions>) => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resumeData: initialResumeData,
      templateOptions: initialTemplateOptions,

      setPersonalInfo: (info) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            personalInfo: { ...state.resumeData.personalInfo, ...info },
          },
        })),
        
      setSummary: (summary) =>
        set((state) => ({
          resumeData: { ...state.resumeData, summary },
        })),

      addExperience: (exp) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: [...state.resumeData.experience, exp],
          },
        })),
      updateExperience: (id, exp) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.map((e) =>
              e.id === id ? { ...e, ...exp } : e
            ),
          },
        })),
      removeExperience: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.filter((e) => e.id !== id),
          },
        })),

      addEducation: (edu) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: [...state.resumeData.education, edu],
          },
        })),
      updateEducation: (id, edu) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.map((e) =>
              e.id === id ? { ...e, ...edu } : e
            ),
          },
        })),
      removeEducation: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.filter((e) => e.id !== id),
          },
        })),

      addSkill: (skill) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: [...state.resumeData.skills, skill],
          },
        })),
      updateSkill: (id, skill) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: state.resumeData.skills.map((s) =>
              s.id === id ? { ...s, ...skill } : s
            ),
          },
        })),
      removeSkill: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: state.resumeData.skills.filter((s) => s.id !== id),
          },
        })),

      addProject: (proj) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: [...state.resumeData.projects, proj],
          },
        })),
      updateProject: (id, proj) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: state.resumeData.projects.map((p) =>
              p.id === id ? { ...p, ...proj } : p
            ),
          },
        })),
      removeProject: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: state.resumeData.projects.filter((p) => p.id !== id),
          },
        })),

      addCertification: (cert) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: [...state.resumeData.certifications, cert],
          },
        })),
      updateCertification: (id, cert) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.map((c) =>
              c.id === id ? { ...c, ...cert } : c
            ),
          },
        })),
      removeCertification: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.filter((c) => c.id !== id),
          },
        })),

      addPublication: (pub) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            publications: [...state.resumeData.publications, pub],
          },
        })),
      updatePublication: (id, pub) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            publications: state.resumeData.publications.map((p) =>
              p.id === id ? { ...p, ...pub } : p
            ),
          },
        })),
      removePublication: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            publications: state.resumeData.publications.filter((p) => p.id !== id),
          },
        })),

      addLanguage: (lang) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            languages: [...state.resumeData.languages, lang],
          },
        })),
      updateLanguage: (id, lang) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            languages: state.resumeData.languages.map((l) =>
              l.id === id ? { ...l, ...lang } : l
            ),
          },
        })),
      removeLanguage: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            languages: state.resumeData.languages.filter((l) => l.id !== id),
          },
        })),

      addReference: (ref) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            references: [...state.resumeData.references, ref],
          },
        })),
      updateReference: (id, ref) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            references: state.resumeData.references.map((r) =>
              r.id === id ? { ...r, ...ref } : r
            ),
          },
        })),
      removeReference: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            references: state.resumeData.references.filter((r) => r.id !== id),
          },
        })),

      setTemplateOptions: (options) =>
        set((state) => ({
          templateOptions: { ...state.templateOptions, ...options },
        })),
    }),
    {
      name: 'resume-builder-storage',
    }
  )
);
