'use client'

import { useEffect } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'

export function useQuickAuth(isInFarcaster: boolean) {
  useEffect(() => {
    if (!isInFarcaster) return

    const initializeQuickAuth = async () => {
      try {
        // Quick auth initialization
        console.log('Quick auth initialized')
      } catch (error) {
        console.error('Failed to initialize quick auth:', error)
      }
    }

    initializeQuickAuth()
  }, [isInFarcaster])
}
