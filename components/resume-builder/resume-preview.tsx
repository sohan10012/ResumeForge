"use client"

import React from 'react'
import { ResumeData } from '@/lib/resume-types'

interface ResumePreviewProps {
  resumeData: ResumeData
  resumeRef: React.RefObject<HTMLDivElement>
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, resumeRef }) => {
  const styles = {
    container: "bg-white p-6 shadow-lg mx-auto max-w-[210mm] resume-container",
    header: "flex justify-between items-start mb-4 pb-2 border-b border-gray-200",
    name: "text-lg font-bold text-gray-900",
    contact: "text-xs text-gray-600 space-y-0.5",
    section: "mb-3",
    sectionTitle: "text-sm font-bold border-b pb-1 mb-2 uppercase text-gray-900",
    education: "mb-2",
    educationInstitution: "font-bold text-xs text-gray-900",
    educationDetails: "flex justify-between items-start",
    educationDegree: "text-xs text-gray-700 italic",
    educationYear: "text-xs text-gray-600 italic",
    skills: "flex flex-col -space-y-1",
    skillCategory: "mb-0.5",
    skillTitle: "font-bold text-xs text-gray-900",
    experience: "mb-2",
    experienceHeader: "flex justify-between items-start mb-0.5",
    experienceCompany: "font-bold text-xs text-gray-900",
    experiencePosition: "text-xs text-gray-700 italic",
    experienceLocation: "text-xs text-gray-600",
    experienceDate: "text-xs text-gray-600",
    experienceDescription: "ml-4 list-disc text-xs text-gray-700",
    projects: "mb-2",
    projectItem: "mb-1.5",
    projectTitle: "font-bold text-xs text-gray-900",
    projectDescription: "ml-4 text-xs text-gray-700",
    achievements: "ml-4 list-disc text-xs text-gray-700",
  }

  return (
    <div
      ref={resumeRef}
      className={styles.container}
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        fontSize: "10pt",
        lineHeight: "1.3",
        fontFamily: "Tahoma, sans-serif",
      }}
    >
      {/* Header Section */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.name}>{resumeData.personalInfo.name}</h1>
          <div className={styles.contact}>
            <p>Email: {resumeData.personalInfo.email}</p>
            <p>Phone: {resumeData.personalInfo.phone}</p>
            <p>Location: {resumeData.personalInfo.location}</p>
          </div>
        </div>
        <div className={styles.contact}>
          <p>LinkedIn: {resumeData.personalInfo.linkedin}</p>
          <p>GitHub: {resumeData.personalInfo.github}</p>
          <p>Portfolio: {resumeData.personalInfo.portfolio}</p>
        </div>
      </div>

      {/* Education Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className={styles.education}>
            <div className={styles.educationInstitution}>{edu.institution}</div>
            <div className={styles.educationDetails}>
              <div className={styles.educationDegree}>
                {edu.degree} {edu.field ? `in ${edu.field}` : ""}
                {edu.gpa ? `; GPA: ${edu.gpa}` : ""}
              </div>
              <div className={styles.educationYear}>{edu.graduationDate}</div>
            </div>
            <div className="text-xs text-gray-600">{edu.location}</div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-6">
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className="flex flex-col -space-y-1">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category} className={styles.skillCategory}>
              <span className={styles.skillTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}:
              </span>
              <span className="ml-2 text-xs">{skills}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-6">
        <h2 className={styles.sectionTitle}>Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className={styles.experience}>
            <div className={styles.experienceHeader}>
              <div>
                <div className={styles.experienceCompany}>{exp.company}</div>
                <div className={styles.experiencePosition}>{exp.position}</div>
                <div className={styles.experienceLocation}>{exp.location}</div>
              </div>
              <div className={styles.experienceDate}>
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <ul className={styles.experienceDescription}>
              {exp.description.split("\n").map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mt-6">
        <h2 className={styles.sectionTitle}>Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className="text-xs text-gray-600 italic">
              {project.technologies} | {project.date}
            </div>
            <div className={styles.projectDescription}>{project.description}</div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="mt-6">
        <h2 className={styles.sectionTitle}>Achievements</h2>
        <ul className={styles.achievements}>
          {resumeData.achievements.map((achievement, index) => (
            <li key={index}>
              {achievement.description}
              {achievement.date && ` (${achievement.date})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumePreview