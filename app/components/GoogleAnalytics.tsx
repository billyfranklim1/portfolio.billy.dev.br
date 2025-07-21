'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-M8LBWHFC6T'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  )
}

// Funções auxiliares para rastrear eventos
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Eventos específicos para o portfólio
export const trackProjectView = (projectName: string) => {
  trackEvent('view_project', 'engagement', projectName)
}

export const trackExternalLink = (url: string, linkType: string) => {
  trackEvent('click', 'external_link', `${linkType}: ${url}`)
}

export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', 'engagement', platform)
}

export const trackArticleRead = (articleTitle: string, readTime?: number) => {
  trackEvent('article_read', 'content', articleTitle, readTime)
}

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'engagement', fileName)
}

export const trackContactClick = (method: string) => {
  trackEvent('contact_click', 'engagement', method)
}

export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage)
}