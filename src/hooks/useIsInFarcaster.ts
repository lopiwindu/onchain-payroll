'use client'

import { useEffect, useState } from 'react'

export function useIsInFarcaster() {
  const [isInFarcaster, setIsInFarcaster] = useState(false)

  useEffect(() => {
    try {
      const isFarcaster = window.parent !== window
      setIsInFarcaster(isFarcaster)
    } catch (error) {
      setIsInFarcaster(false)
    }
  }, [])

  return isInFarcaster
}
