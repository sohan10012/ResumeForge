"use client"

import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Section } from '@/lib/resume-types'

interface SectionHeaderProps {
  title: string
  section: Section
  isExpanded: boolean
  onToggle: (section: Section) => void
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  section,
  isExpanded,
  onToggle
}) => {
  return (
    <div
      className="flex justify-between items-center p-4 cursor-pointer transition-colors hover:bg-platinum-200"
      onClick={() => onToggle(section)}
    >
      <h2 className="text-xl font-semibold text-royal-blue">{title}</h2>
      {isExpanded ? (
        <ChevronUp className="h-5 w-5 text-royal-blue transition-transform" />
      ) : (
        <ChevronDown className="h-5 w-5 text-royal-blue transition-transform" />
      )}
    </div>
  )
}

export default SectionHeader