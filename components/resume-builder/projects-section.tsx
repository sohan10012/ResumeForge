"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash, PlusCircle } from 'lucide-react'
import { ProjectItem } from '@/lib/resume-types'

interface ProjectsSectionProps {
  projects: ProjectItem[]
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

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  handleArrayInputChange,
  removeItem,
  addItem
}) => {
  return (
    <div className="p-4 pt-0 animate-slideDown">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="mb-6 p-4 border rounded-md bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-royal-blue">Project {index + 1}</h3>
            {projects.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem('projects', index)}
                className="text-imperial-red hover:text-imperial-red-700 hover:bg-imperial-red-50"
              >
                <Trash className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Title
              </label>
              <Input
                placeholder="Project Title"
                value={project.title}
                onChange={(e) =>
                  handleArrayInputChange(
                    'projects',
                    index,
                    'title',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <Input
                placeholder="Month Year"
                value={project.date}
                onChange={(e) =>
                  handleArrayInputChange(
                    'projects',
                    index,
                    'date',
                    e.target.value
                  )
                }
                className="transition-colors focus:border-cerulean"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Github Link (Optional)
            </label>
            <Input
              placeholder="https://github.com/user/repo"
              value={project.githubLink}
              onChange={(e) =>
                handleArrayInputChange(
                  'projects',
                  index,
                  'githubLink',
                  e.target.value
                )
              }
              className="transition-colors focus:border-cerulean"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies Used
            </label>
            <Input
              placeholder="Comma-separated (e.g., React, Node.js, MongoDB)"
              value={project.technologies}
              onChange={(e) =>
                handleArrayInputChange(
                  'projects',
                  index,
                  'technologies',
                  e.target.value
                )
              }
              className="transition-colors focus:border-cerulean"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              className="min-h-[80px] transition-colors focus:border-cerulean"
              placeholder="Describe the project and your contributions."
              value={project.description}
              onChange={(e) =>
                handleArrayInputChange(
                  'projects',
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
        onClick={() => addItem('projects')}
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Project
      </Button>
    </div>
  )
}

export default ProjectsSection