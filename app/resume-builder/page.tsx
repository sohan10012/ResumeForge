"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft, FileText } from "lucide-react"
import { initialResumeData, getDefaultArrayItem } from "@/lib/resume-data"
import { ResumeData, ExpandedSections, Section, ArraySection } from "@/lib/resume-types"

// Import components
import SectionHeader from "@/components/resume-builder/section-header"
import PersonalSection from "@/components/resume-builder/personal-section"
import EducationSection from "@/components/resume-builder/education-section"
import SkillsSection from "@/components/resume-builder/skills-section"
import ExperienceSection from "@/components/resume-builder/experience-section"
import ProjectsSection from "@/components/resume-builder/projects-section"
import AchievementsSection from "@/components/resume-builder/achievements-section"
import ResumePreview from "@/components/resume-builder/resume-preview"

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    personal: true,
    education: false,
    skills: false,
    experience: false,
    projects: false,
    achievements: false,
  })
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleSectionToggle = (section: Section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleInputChange = (
    section: "personalInfo" | "skills",
    field: string,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleArrayInputChange = (
    section: "education" | "experience" | "projects" | "achievements",
    index: number,
    field: string,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }))
  }

  const addItem = (section: 'education' | 'experience' | 'projects' | 'achievements') => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], getDefaultArrayItem(section)]
    }))
  }

  const removeItem = (section: ArraySection, index: number) => {
    setResumeData((prev) => {
      const newData = { ...prev }
      if (section === 'education') {
        newData.education = [...newData.education]
        newData.education.splice(index, 1)
      } else if (section === 'experience') {
        newData.experience = [...newData.experience]
        newData.experience.splice(index, 1)
      } else if (section === 'projects') {
        newData.projects = [...newData.projects]
        newData.projects.splice(index, 1)
      } else if (section === 'achievements') {
        newData.achievements = [...newData.achievements]
        newData.achievements.splice(index, 1)
      }
      return newData
    })
  }

  const downloadPDF = async () => {
    const element = resumeRef.current
    if (!element) return

    try {
      const html2pdf = (await import('html2pdf.js')).default
      
      const opt = {
        margin: [5, 5],
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: "avoid-all", before: ".page-break" }
      }

      const clone = element.cloneNode(true) as HTMLElement
      clone.style.width = "210mm"
      clone.style.padding = "10mm"
      clone.style.fontSize = "8pt"
      clone.style.lineHeight = "1.1"
      clone.style.fontFamily = "Tahoma, sans-serif"
      
      
      clone.style.maxHeight = "297mm"
      clone.style.overflow = "hidden"

      await html2pdf().set(opt).from(clone).save()
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left side - Form */}
      <div className="w-full md:w-1/3 overflow-y-auto p-4 bg-white md:shadow-md">
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600 shadow-md hover:shadow-lg hover:shadow-gray-900/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <h1 className="text-2xl font-bold text-gray-900">ResumeForge</h1>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <SectionHeader
            title="Personal details"
            section="personal"
            isExpanded={expandedSections.personal}
            onToggle={handleSectionToggle}
          />
          {expandedSections.personal && (
            <PersonalSection
              resumeData={resumeData}
              handleInputChange={handleInputChange}
            />
          )}
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <SectionHeader
            title="Experience"
            section="experience"
            isExpanded={expandedSections.experience}
            onToggle={handleSectionToggle}
          />
          {expandedSections.experience && (
            <ExperienceSection
              experience={resumeData.experience}
              handleArrayInputChange={handleArrayInputChange}
              removeItem={removeItem}
              addItem={addItem}
            />
          )}
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <SectionHeader
            title="Education"
            section="education"
            isExpanded={expandedSections.education}
            onToggle={handleSectionToggle}
          />
          {expandedSections.education && (
            <EducationSection
              education={resumeData.education}
              handleArrayInputChange={handleArrayInputChange}
              removeItem={removeItem}
              addItem={addItem}
            />
          )}
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <SectionHeader
            title="Skills"
            section="skills"
            isExpanded={expandedSections.skills}
            onToggle={handleSectionToggle}
          />
          {expandedSections.skills && (
            <SkillsSection
              skills={resumeData.skills}
              handleInputChange={handleInputChange}
            />
          )}
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <SectionHeader
            title="Projects"
            section="projects"
            isExpanded={expandedSections.projects}
            onToggle={handleSectionToggle}
          />
          {expandedSections.projects && (
            <ProjectsSection
              projects={resumeData.projects}
              handleArrayInputChange={handleArrayInputChange}
              removeItem={removeItem}
              addItem={addItem}
            />
          )}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
          <SectionHeader
            title="Achievements"
            section="achievements"
            isExpanded={expandedSections.achievements}
            onToggle={handleSectionToggle}
          />
          {expandedSections.achievements && (
            <AchievementsSection
              achievements={resumeData.achievements}
              handleArrayInputChange={handleArrayInputChange}
              removeItem={removeItem}
              addItem={addItem}
            />
          )}
        </div>
      </div>

      {/* Right side - Preview */}
      <div className="w-full md:w-2/3 bg-gray-100 p-4 overflow-y-auto">
        <div className="sticky top-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Preview</h2>
            <Button
              variant="default"
              className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2"
              onClick={downloadPDF}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
          
          <ResumePreview 
            resumeData={resumeData}
            resumeRef={resumeRef}
          />
        </div>
      </div>
    </div>
  )
}