'use client'

import { useEffect } from 'react'
import { trackProjectView, trackExternalLink } from './GoogleAnalytics'
import { useScrollTracking } from '../hooks/useScrollTracking'

interface ProjectTrackerProps {
  projectName: string
  externalLink: string
}

export function ProjectTracker({ projectName, externalLink }: ProjectTrackerProps) {
  useScrollTracking()

  useEffect(() => {
    trackProjectView(projectName)
  }, [projectName])

  const handleExternalClick = () => {
    trackExternalLink(externalLink, 'project_page')
  }

  return (
    <a
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleExternalClick}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
    >
      Visitar Projeto
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}