'use client'
import { useState, useEffect } from 'react'
import { Dashboard } from '@/components/dashboard'
import { TreasuryAccounts } from '@/components/treasury-accounts'
import { EmployeeManagement } from '@/components/employee-management'
import { PaymentHistory } from '@/components/payment-history'
import { UserSettings } from '@/components/user-settings'
import { Sidebar } from '@/components/sidebar'
import { sdk } from "@farcaster/miniapp-sdk";
import { useAddMiniApp } from "@/hooks/useAddMiniApp";
import { useQuickAuth } from "@/hooks/useQuickAuth";
import { useIsInFarcaster } from "@/hooks/useIsInFarcaster";

export default function GajianApp() {
    const { addMiniApp } = useAddMiniApp();
    const isInFarcaster = useIsInFarcaster()
    useQuickAuth(isInFarcaster)
    useEffect(() => {
      const tryAddMiniApp = async () => {
        try {
          await addMiniApp()
        } catch (error) {
          console.error('Failed to add mini app:', error)
        }

      }

    

      tryAddMiniApp()
    }, [addMiniApp])
    useEffect(() => {
      const initializeFarcaster = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 100))
          
          if (document.readyState !== 'complete') {
            await new Promise<void>(resolve => {
              if (document.readyState === 'complete') {
                resolve()
              } else {
                window.addEventListener('load', () => resolve(), { once: true })
              }

            })
          }

    

          await sdk.actions.ready()
          console.log('Farcaster SDK initialized successfully - app fully loaded')
        } catch (error) {
          console.error('Failed to initialize Farcaster SDK:', error)
          
          setTimeout(async () => {
            try {
              await sdk.actions.ready()
              console.log('Farcaster SDK initialized on retry')
            } catch (retryError) {
              console.error('Farcaster SDK retry failed:', retryError)
            }

          }, 1000)
        }

      }

    

      initializeFarcaster()
    }, [])
  const [activeTab, setActiveTab] = useState<string>('dashboard')

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8 pt-16 md:pt-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'treasury' && <TreasuryAccounts />}
          {activeTab === 'employees' && <EmployeeManagement />}
          {activeTab === 'payments' && <PaymentHistory />}
          {activeTab === 'settings' && <UserSettings />}
        </div>
      </main>
    </div>
  )
}
