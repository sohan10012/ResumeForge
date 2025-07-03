"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ResumeData } from '@/lib/resume-types'

interface PersonalSectionProps {
  resumeData: ResumeData
  handleInputChange: (
    section: 'personalInfo' | 'skills',
    field: string,
    value: string
  ) => void
}

const PersonalSection: React.FC<PersonalSectionProps> = ({
  resumeData,
  handleInputChange
}) => {
  return (
    <div className="p-4 pt-0 animate-slideDown">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            placeholder="Name"
            value={resumeData.personalInfo.name}
            onChange={(e) =>
              handleInputChange('personalInfo', 'name', e.target.value)
            }
            className="border-gray-300 focus:border-cerulean focus:ring-cerulean"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <Input
            placeholder="City, Country"
            value={resumeData.personalInfo.location}
            onChange={(e) =>
              handleInputChange('personalInfo', 'location', e.target.value)
            }
            className="border-gray-300 focus:border-cerulean focus:ring-cerulean"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            placeholder="Email"
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) =>
              handleInputChange('personalInfo', 'email', e.target.value)
            }
            className="border-gray-300 focus:border-cerulean focus:ring-cerulean"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <Input
            placeholder="Phone"
            value={resumeData.personalInfo.phone}
            onChange={(e) =>
              handleInputChange('personalInfo', 'phone', e.target.value)
            }
            className="border-gray-300 focus:border-cerulean focus:ring-cerulean"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Portfolio URL
          </label>
          <Input
            placeholder="Portfolio URL"
            value={resumeData.personalInfo.portfolio}
            onChange={(e) =>
              handleInputChange('personalInfo', 'portfolio', e.target.value)
            }
            className="border-gray-300 focus:border-cerulean focus:ring-cerulean"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GitHub URL
          </label>
          <Input
            placeholder="GitHub URL"
            value={resumeData.personalInfo.github}
            onChange={(e) =>
              handleInputChange('personalInfo', 'github', e.target.value)
            }
            className="border-gray-300 focus:border-cerulean focus:ring-cerulean"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn URL
          </label>
          <Input
            placeholder="LinkedIn URL"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) =>
              handleInputChange('personalInfo', 'linkedin', e.target.value)
            }
            className="border-gray-300 focus:border-cerulean focus:ring-cerulean"
          />
        </div>
      </div>

      {/* Contact Layout Option */}
      <div className="mb-4 p-4 bg-gray-50 rounded-lg border">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Contact Information Layout
        </label>
        <RadioGroup
          value={resumeData.personalInfo.contactLayout}
          onValueChange={(value) =>
            handleInputChange('personalInfo', 'contactLayout', value)
          }
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="side-by-side" id="side-by-side" />
            <Label htmlFor="side-by-side" className="text-sm">
              Side by Side (Email, Phone, Location | LinkedIn, GitHub, Portfolio)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="centered" id="centered" />
            <Label htmlFor="centered" className="text-sm">
              Centered Below Name (All contact details centered under name)
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default PersonalSection