"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, ArrowLeft, FileText } from "lucide-react"
import { initialResumeData, getDefaultArrayItem } from "@/lib/resume-data"
import { ResumeData, ExpandedSections, Section, ArraySection } from "@/lib/resume-types"

// Import components
import ResumeDocument from "@/components/resume-builder/ResumeDocument";
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
  const element = resumeRef.current;
  if (!element) {
    throw new Error('Resume element reference not found');
  }

  let tempContainer: HTMLElement | null = null;
  
  try {
    // Dynamic import with version pinning for stability
    const html2pdf = (await import('html2pdf.js')).default;
    
    // Professional-grade configuration optimized for pixel-perfect rendering
    const opt = {
      margin: [0, 0, 0, 0], // Zero margins for precise control
      filename: `resume_${new Date().toISOString().split('T')[0]}.pdf`,
      image: { 
        type: 'jpeg', 
        quality: 1.0 // Maximum quality
      },
      html2canvas: { 
        scale: 3, // Higher scale for crisp rendering
        useCORS: true,
        allowTaint: false,
        letterRendering: true,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: '#ffffff',
        removeContainer: true,
        imageTimeout: 30000,
        logging: false,
        onclone: (clonedDoc: Document) => {
          // Ensure all styles are properly cloned
          const clonedElement = clonedDoc.body.firstElementChild as HTMLElement;
          if (clonedElement) {
            clonedElement.style.transform = 'scale(1)';
            clonedElement.style.transformOrigin = 'top left';
          }
        }
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4',
        orientation: 'portrait',
        compress: true,
        precision: 2
      },
      pagebreak: { 
        mode: ['css', 'legacy'],
        before: '.page-break, .page-break-before',
        after: '.page-break-after',
        avoid: ['.keep-together', '.no-break', '.avoid-break']
      }
    };

    // Create pixel-perfect clone
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Get computed styles from original element
    const originalStyles = window.getComputedStyle(element);
    const originalRect = element.getBoundingClientRect();
    
    // Apply precise A4 styling with computed dimensions
    clone.style.cssText = `
      width: 210mm !important;
      max-width: 210mm !important;
      min-height: 297mm !important;
      padding: 12mm !important;
      margin: 0 !important;
      font-family: ${originalStyles.fontFamily} !important;
      font-size: ${originalStyles.fontSize} !important;
      line-height: ${originalStyles.lineHeight} !important;
      color: ${originalStyles.color} !important;
      background: #ffffff !important;
      box-sizing: border-box !important;
      overflow: visible !important;
      position: relative !important;
      display: block !important;
      zoom: 1 !important;
      -webkit-font-smoothing: subpixel-antialiased !important;
      -moz-osx-font-smoothing: auto !important;
      text-rendering: optimizeLegibility !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    `;

    // Deep clone and enhance all child elements
    const processElement = (el: HTMLElement, depth = 0) => {
      if (depth > 100) return; // Prevent infinite recursion
      
      const computedStyle = window.getComputedStyle(el);
      
      // Preserve exact styling
      el.style.cssText += `
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        box-sizing: ${computedStyle.boxSizing} !important;
        display: ${computedStyle.display} !important;
        position: ${computedStyle.position === 'fixed' ? 'absolute' : computedStyle.position} !important;
        font-weight: ${computedStyle.fontWeight} !important;
        font-style: ${computedStyle.fontStyle} !important;
        text-decoration: ${computedStyle.textDecoration} !important;
        text-align: ${computedStyle.textAlign} !important;
        vertical-align: ${computedStyle.verticalAlign} !important;
        border: ${computedStyle.border} !important;
        border-radius: ${computedStyle.borderRadius} !important;
        background: ${computedStyle.background} !important;
        padding: ${computedStyle.padding} !important;
        margin: ${computedStyle.margin} !important;
        width: ${computedStyle.width !== 'auto' ? computedStyle.width : ''} !important;
        height: ${computedStyle.height !== 'auto' ? computedStyle.height : ''} !important;
        max-width: ${computedStyle.maxWidth !== 'none' ? computedStyle.maxWidth : ''} !important;
        min-height: ${computedStyle.minHeight !== '0px' ? computedStyle.minHeight : ''} !important;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: subpixel-antialiased !important;
        -moz-osx-font-smoothing: auto !important;
      `;

      // Handle images with enhanced loading
      if (el.tagName === 'IMG') {
        const img = el as HTMLImageElement;
        img.style.cssText += `
          max-width: 100% !important;
          height: auto !important;
          display: ${computedStyle.display} !important;
          object-fit: ${computedStyle.objectFit} !important;
          border-radius: ${computedStyle.borderRadius} !important;
        `;
        
        // Ensure images are loaded and accessible
        if (img.src && !img.src.startsWith('data:')) {
          img.crossOrigin = 'anonymous';
          img.decoding = 'sync';
        }
      }

      // Handle SVG elements
      if (el.tagName === 'SVG') {
        el.style.cssText += `
          display: ${computedStyle.display} !important;
          width: ${computedStyle.width} !important;
          height: ${computedStyle.height} !important;
        `;
      }

      // Process children recursively
      Array.from(el.children).forEach(child => {
        if (child instanceof HTMLElement) {
          processElement(child, depth + 1);
        }
      });
    };

    // Process all elements in the clone
    processElement(clone);

    // Enhance page break handling
    const pageBreaks = clone.querySelectorAll('.page-break, .page-break-before');
    pageBreaks.forEach((el: Element) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.cssText = `
        page-break-before: always !important;
        break-before: page !important;
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        display: block !important;
        clear: both !important;
      `;
    });

    // Create isolated rendering container
    tempContainer = document.createElement('div');
    tempContainer.style.cssText = `
      position: fixed !important;
      top: -200vh !important;
      left: -200vw !important;
      width: 210mm !important;
      height: 297mm !important;
      visibility: hidden !important;
      pointer-events: none !important;
      z-index: -9999 !important;
      overflow: hidden !important;
      background: #ffffff !important;
      font-family: ${originalStyles.fontFamily} !important;
    `;
    
    tempContainer.appendChild(clone);
    document.body.appendChild(tempContainer);

    // Wait for complete resource loading
    await new Promise<void>((resolve) => {
      const images = tempContainer!.querySelectorAll('img');
      const fonts = document.fonts;
      
      const imagePromises = Array.from(images).map(img => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve();
        }
        return new Promise<void>(resolve => {
          const timeout = setTimeout(() => resolve(), 10000);
          img.onload = () => {
            clearTimeout(timeout);
            resolve();
          };
          img.onerror = () => {
            clearTimeout(timeout);
            resolve();
          };
        });
      });

      Promise.all([
        fonts.ready,
        ...imagePromises,
        new Promise(resolve => setTimeout(resolve, 1000)) // Style settling time
      ]).then(() => resolve());
    });

    // Force layout recalculation
    clone.offsetHeight;
    
    // Generate PDF with enhanced precision
    const pdfInstance = html2pdf().set(opt).from(clone);
    
    await pdfInstance
      .save()
      .then(() => {
        // PDF generation completed successfully
        console.log('PDF generated successfully');
      });

  } catch (error) {
    console.error('Professional PDF generation failed:', error);
    
    // Enhanced error reporting
    if (error instanceof Error) {
      if (error.message.includes('html2pdf')) {
        throw new Error('PDF library failed to load. Please check your network connection and try again.');
      } else if (error.message.includes('CORS')) {
        throw new Error('Image loading failed due to security restrictions. Please ensure all images are properly hosted.');
      } else if (error.message.includes('canvas')) {
        throw new Error('Canvas rendering failed. This may be due to browser compatibility issues.');
      } else {
        throw new Error(`PDF generation failed: ${error.message}`);
      }
    }
    
    throw new Error('An unexpected error occurred during PDF generation.');
    
  } finally {
    // Guaranteed cleanup
    if (tempContainer && tempContainer.parentNode) {
      document.body.removeChild(tempContainer);
    }
  }
};

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