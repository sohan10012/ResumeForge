"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash, PlusCircle } from 'lucide-react'
import { ExperienceItem } from '@/lib/resume-types'

interface ExperienceSectionProps {
  experience: ExperienceItem[]
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

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
  handleArrayInputChange,
  removeItem,
  addItem
}) => {
  return (
    <div className="p-4 pt-0 animate-slideDown">
      {experience.map((exp, index) => (
        <div 
          key={index} 
          className="mb-6 p-4 border rounded-md bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-royal-blue">Experience {index + 1}</h3>
            {experience.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem('experience', index)}
                className="text-imperial-red hover:text-imperial-red-700 hover:bg-imperial-red-50"
              >
                <Trash className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <Input
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) =>
                  handleArrayInputChange(
                    'experience',
                    index,
                    'company',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <Input
                placeholder="Position Title"
                value={exp.position}
                onChange={(e) =>
                  handleArrayInputChange(
                    'experience',
                    index,
                    'position',
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
                Start Date
              </label>
              <Input
                placeholder="Month Year"
                value={exp.startDate}
                onChange={(e) =>
                  handleArrayInputChange(
                    'experience',
                    index,
                    'startDate',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <Input
                placeholder="Month Year or Present"
                value={exp.endDate}
                onChange={(e) =>
                  handleArrayInputChange(
                    'experience',
                    index,
                    'endDate',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <Input
              placeholder="City, Country or Remote"
              value={exp.location}
              onChange={(e) =>
                handleArrayInputChange(
                  'experience',
                  index,
                  'location',
                  e.target.value
                )
              }
              className="transition-colors focus:border-cerulean"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (Use new lines for bullet points)
            </label>
            <Textarea
              className="min-h-[100px] transition-colors focus:border-cerulean"
              placeholder="Describe responsibilities and achievements. Start each bullet point on a new line."
              value={exp.description}
              onChange={(e) =>
                handleArrayInputChange(
                  'experience',
                  index,
                  'description',
                  e.target.value
                )
              }
            />
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full border-cerulean text-cerulean hover:bg-cerulean-50 transition-colors"
        onClick={() => addItem('experience')}
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Experience
      </Button>
    </div>
  )
}

export default ExperienceSection