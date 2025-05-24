export type Section = "personal" | "education" | "skills" | "experience" | "projects" | "achievements";
export type ArraySection = "education" | "experience" | "projects" | "achievements";

export interface ExpandedSections {
  personal: boolean;
  education: boolean;
  skills: boolean;
  experience: boolean;
  projects: boolean;
  achievements: boolean;
}

// Define interfaces for resume data structure
export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  graduationDate: string;
  location: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string;
  date: string;
  githubLink?: string;
}

export interface AchievementItem {
  description: string;
  date?: string;
}

export interface SkillsData {
  languages: string;
  frameworks: string;
  tools: string;
  platforms: string;
  softSkills: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  education: EducationItem[];
  skills: SkillsData;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
}