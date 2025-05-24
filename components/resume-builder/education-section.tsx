"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash, PlusCircle } from 'lucide-react'
import { EducationItem } from '@/lib/resume-types'
import { getDefaultArrayItem } from '@/lib/resume-data'

interface EducationSectionProps {
  education: EducationItem[]
  handleArrayInputChange: (
    section: 'education' | 'experience' | 'projects' | 'achievements',
    index: number,
    field: string,
    value: string
  ) => void
  removeItem: (
    section: 'education' | 'experience' | 'projects' | 'achievements',
    index: number
  ) => void
  addItem: (
    section: 'education' | 'experience' | 'projects' | 'achievements'
  ) => void
}

const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  handleArrayInputChange,
  removeItem,
  addItem
}) => {
  return (
    <div className="p-4 pt-0 animate-slideDown">
      {education.map((edu, index) => (
        <div 
          key={index} 
          className="mb-6 p-4 border rounded-md bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-royal-blue">Education {index + 1}</h3>
            {education.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem('education', index)}
                className="text-imperial-red hover:text-imperial-red-700 hover:bg-imperial-red-50"
              >
                <Trash className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution
              </label>
              <Input
                placeholder="Institution Name"
                value={edu.institution}
                onChange={(e) =>
                  handleArrayInputChange(
                    'education',
                    index,
                    'institution',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <Input
                placeholder="City, Country"
                value={edu.location}
                onChange={(e) =>
                  handleArrayInputChange(
                    'education',
                    index,
                    'location',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <Input
                placeholder="Degree (e.g., Bachelor of Science)"
                value={edu.degree}
                onChange={(e) =>
                  handleArrayInputChange(
                    'education',
                    index,
                    'degree',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field of Study
              </label>
              <Input
                placeholder="Field of Study"
                value={edu.field}
                onChange={(e) =>
                  handleArrayInputChange(
                    'education',
                    index,
                    'field',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Date
              </label>
              <Input
                placeholder="Month Year - Month Year"
                value={edu.graduationDate}
                onChange={(e) =>
                  handleArrayInputChange(
                    'education',
                    index,
                    'graduationDate',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GPA
              </label>
              <Input
                placeholder="GPA (e.g., 3.8)"
                value={edu.gpa}
                onChange={(e) =>
                  handleArrayInputChange('education', index, 'gpa', e.target.value)
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full border-cerulean text-cerulean hover:bg-cerulean-50 transition-colors"
        onClick={() => addItem('education')}
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Education
      </Button>
    </div>
  )
}

export default EducationSection