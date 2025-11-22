'use client'

import { useEffect } from 'react'

export function ResponseLogger() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log('Page is being unloaded or navigated away')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return null
}
