"use client"

import React from 'react'
import { ResumeData } from '@/lib/resume-types'
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'

interface ResumePreviewProps {
  resumeData: ResumeData
  resumeRef: React.RefObject<HTMLDivElement>
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, resumeRef }) => {
  const styles = {
    container: "bg-white p-6 shadow-lg mx-auto max-w-[210mm] resume-container",
    header: "mb-4 pb-2",
    headerCentered: "text-center",
    headerRow: "flex justify-between items-start w-full",
    name: "text-3xl font-bold text-gray-900 mb-4 text-center w-full",
    contactCol: "flex flex-col text-xs text-gray-600 space-y-1",
    contactCompact: "flex flex-row justify-center items-center text-xs text-gray-600 gap-4 mt-2 flex-wrap",
    contactIcon: "inline-block align-middle mr-1",
    contactLink: "flex items-center gap-1 mx-2",
    section: "mb-3 mt-8",
    sectionTitle: "text-sm font-bold pb-1 mb-2 uppercase text-gray-900 border-b border-gray-200",
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

  const isCenteredLayout = resumeData.personalInfo.contactLayout === 'centered';

  // Helper for compact row
  const compactDetails = [
    resumeData.personalInfo.email && `Email: ${resumeData.personalInfo.email}`,
    resumeData.personalInfo.linkedin && `LinkedIn: ${resumeData.personalInfo.linkedin}`,
    resumeData.personalInfo.github && `GitHub: ${resumeData.personalInfo.github}`,
    resumeData.personalInfo.portfolio && `Portfolio: ${resumeData.personalInfo.portfolio}`
  ].filter(Boolean);

  // Helper for full details
  const fullDetails = [
    resumeData.personalInfo.email && `Email: ${resumeData.personalInfo.email}`,
    resumeData.personalInfo.phone && `Phone: ${resumeData.personalInfo.phone}`,
    resumeData.personalInfo.location && `Location: ${resumeData.personalInfo.location}`,
    resumeData.personalInfo.linkedin && `LinkedIn: ${resumeData.personalInfo.linkedin}`,
    resumeData.personalInfo.github && `GitHub: ${resumeData.personalInfo.github}`,
    resumeData.personalInfo.portfolio && `Portfolio: ${resumeData.personalInfo.portfolio}`
  ].filter(Boolean);

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
        fontFamily: "Helvetica, Arial, sans-serif",
        paddingTop: "8mm", // Reduced top padding
      }}
    >
      {/* Header Section */}
      <div className={styles.headerCentered}>
        <div className={styles.name}>{resumeData.personalInfo.name}</div>
        {isCenteredLayout ? (
          // Centered Below Name: 4 links in a single row with icons
          <div className={styles.contactCompact}>
            {resumeData.personalInfo.email && (
              <span className={styles.contactLink}>
                <FaEnvelope className={styles.contactIcon} />
                {resumeData.personalInfo.email}
              </span>
            )}
            {resumeData.personalInfo.linkedin && (
              <span className={styles.contactLink}>
                <FaLinkedin className={styles.contactIcon} />
                {resumeData.personalInfo.linkedin}
              </span>
            )}
            {resumeData.personalInfo.github && (
              <span className={styles.contactLink}>
                <FaGithub className={styles.contactIcon} />
                {resumeData.personalInfo.github}
              </span>
            )}
            {resumeData.personalInfo.portfolio && (
              <span className={styles.contactLink}>
                <FaGlobe className={styles.contactIcon} />
                {resumeData.personalInfo.portfolio}
              </span>
            )}
          </div>
        ) : (
          // Full Details: left and right columns, name centered
          <div className={styles.headerRow}>
            <div className={styles.contactCol} style={{textAlign: 'left'}}>
              {resumeData.personalInfo.email && <div>Email: {resumeData.personalInfo.email}</div>}
              {resumeData.personalInfo.phone && <div>Phone: {resumeData.personalInfo.phone}</div>}
              {resumeData.personalInfo.location && <div>Location: {resumeData.personalInfo.location}</div>}
            </div>
            <div className={styles.contactCol} style={{textAlign: 'right'}}>
              {resumeData.personalInfo.linkedin && <div>LinkedIn: {resumeData.personalInfo.linkedin}</div>}
              {resumeData.personalInfo.github && <div>GitHub: {resumeData.personalInfo.github}</div>}
              {resumeData.personalInfo.portfolio && <div>Portfolio: {resumeData.personalInfo.portfolio}</div>}
            </div>
          </div>
        )}
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