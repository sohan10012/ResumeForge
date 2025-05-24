import { ResumeData } from './resume-types';

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: "FirstName LastName",
    email: "email@example.com",
    phone: "+91-98765 4321",
    location: "City, Country",
    linkedin: "linkedin.com/username/",
    github: "github.com/username",
    portfolio: "portfolio.com/username",
  },
  education: [
    {
      institution: "University name College Name",
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      gpa: "10.0",
      graduationDate: "Month Year - Month Year",
      location: "City, Country",
    },
  ],
  skills: {
    languages: "JavaScript, TypeScript, C++, C, Zig, HTML, CSS",
    frameworks: "React, NextJs, NodeJs, ExpressJs, Tailwind CSS, Bootstrap",
    tools: "Git, Postman, Figma",
    platforms: "Linux, Web, Windows, MongoDB, Polygon, ThirdWebJS, Netlify, Render",
    softSkills: "Leadership, Event Management, Writing, Time Management",
  },
  experience: [
    {
      company: "Company Name/Organization Name",
      position: "Role",
      startDate: "Month Year",
      endDate: "Present",
      location: "Remote",
      description: "Provide a detailed description of your responsibilities and achievements in this role.",
    },
    {
      company: "Company Name/Organization Name",
      position: "Role",
      startDate: "Month Year",
      endDate: "Present",
      location: "Online",
      description: "Provide a detailed description of your responsibilities and achievements in this role.",
    },
  ],
  projects: [
    {
      title: "Project Title",
      description: "Give a brief description of the project and your contributions (1-2 lines)",
      technologies: "Tech Stack used in the project",
      date: "Month Year",
    },
    {
      title: "Project Title",
      description: "Give a brief description of the project and your contributions (1-2 lines)",
      technologies: "Tech Stack used in the project",
      date: "Month Year",
    },
    {
      title: "Project Title",
      description: "Give a brief description of the project and your contributions (1-2 lines)",
      technologies: "Tech Stack used in the project",
      date: "Month Year",
    },
  ],
  achievements: [
    {
      description: "Achievement Description and the organised place of event (1-2 lines)",
      date: "Month Year",
    },
    {
      description: "Achievement Description and the organised place of event (1-2 lines)",
      date: "Month Year",
    },
    {
      description: "Achievement Description and the organised place of event (1-2 lines)",
      date: "Month Year",
    },
  ],
};

export const getDefaultArrayItem = (section: 'education' | 'experience' | 'projects' | 'achievements') => {
  switch (section) {
    case 'education':
      return {
        institution: '',
        degree: '',
        field: '',
        gpa: '',
        graduationDate: '',
        location: ''
      };
    case 'experience':
      return {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
      };
    case 'projects':
      return {
        title: '',
        description: '',
        technologies: '',
        date: '',
        githubLink: ''
      };
    case 'achievements':
      return {
        description: '',
        date: ''
      };
    default:
      return {};
  }
};