"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import { SkillsData } from '@/lib/resume-types'

interface SkillsSectionProps {
  skills: SkillsData
  handleInputChange: (
    section: 'personalInfo' | 'skills',
    field: string,
    value: string
  ) => void
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  handleInputChange
}) => {
  return (
    <div className="p-4 pt-0 animate-slideDown">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Languages
        </label>
        <Input
          placeholder="Comma-separated (e.g., JavaScript, Python, C++)"
          value={skills.languages}
          onChange={(e) =>
            handleInputChange('skills', 'languages', e.target.value)
          }
          className="transition-colors focus:border-cerulean"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Frameworks
        </label>
        <Input
          placeholder="Comma-separated (e.g., React, Node.js, Express)"
          value={skills.frameworks}
          onChange={(e) =>
            handleInputChange('skills', 'frameworks', e.target.value)
          }
          className="transition-colors focus:border-cerulean"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tools
        </label>
        <Input
          placeholder="Comma-separated (e.g., Git, Docker, Figma)"
          value={skills.tools}
          onChange={(e) => handleInputChange('skills', 'tools', e.target.value)}
          className="transition-colors focus:border-cerulean"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Platforms
        </label>
        <Input
          placeholder="Comma-separated (e.g., AWS, Windows, Linux)"
          value={skills.platforms}
          onChange={(e) =>
            handleInputChange('skills', 'platforms', e.target.value)
          }
          className="transition-colors focus:border-cerulean"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Soft Skills
        </label>
        <Input
          placeholder="Comma-separated (e.g., Leadership, Teamwork)"
          value={skills.softSkills}
          onChange={(e) =>
            handleInputChange('skills', 'softSkills', e.target.value)
          }
          className="transition-colors focus:border-cerulean"
        />
      </div>
    </div>
  )
}

export default SkillsSection