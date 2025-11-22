'use client'

import { useEffect } from 'react'

export function ReadyNotifier() {
  useEffect(() => {
    // Notify parent that the mini-app is ready
    if (window.parent && window.parent !== window) {
      try {
        window.parent.postMessage({ type: 'ready' }, '*')
      } catch (error) {
        console.error('Failed to notify parent:', error)
      }
    }
  }, [])

  return null
}
