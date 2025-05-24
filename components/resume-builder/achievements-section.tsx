"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash, PlusCircle } from 'lucide-react'
import { AchievementItem } from '@/lib/resume-types'

interface AchievementsSectionProps {
  achievements: AchievementItem[]
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

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  handleArrayInputChange,
  removeItem,
  addItem
}) => {
  return (
    <div className="p-4 pt-0 animate-slideDown">
      {achievements.map((item, index) => (
        <div 
          key={index} 
          className="mb-6 p-4 border rounded-md bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-royal-blue">Achievement {index + 1}</h3>
            {achievements.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem('achievements', index)}
                className="text-imperial-red hover:text-imperial-red-700 hover:bg-imperial-red-50"
              >
                <Trash className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              className="min-h-[60px] transition-colors focus:border-cerulean"
              placeholder="Describe the achievement, award, or activity"
              value={item.description}
              onChange={(e) =>
                handleArrayInputChange(
                  'achievements',
                  index,
                  'description',
                  e.target.value
                )
              }
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date (Optional)
            </label>
            <Input
              placeholder="Month Year"
              value={item.date}
              onChange={(e) =>
                handleArrayInputChange(
                  'achievements',
                  index,
                  'date',
                  e.target.value
                )
              }
              className="transition-colors focus:border-cerulean"
            />
          </div>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        className="w-full border-cerulean text-cerulean hover:bg-cerulean-50 transition-colors"
        onClick={() => addItem('achievements')}
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Achievement
      </Button>
    </div>
  )
}

export default AchievementsSection