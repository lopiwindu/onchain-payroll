'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, ExternalLink, Copy } from 'lucide-react'

interface TreasuryAccount {
  id: string
  name: string
  address: string
  balance: string
  network: string
  type: string
}

const accounts: TreasuryAccount[] = [
  {
    id: '1',
    name: 'Main Treasury',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    balance: '158,000 USDC',
    network: 'Base',
    type: 'Primary',
  },
  {
    id: '2',
    name: 'Payroll Account',
    address: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    balance: '75,000 USDC',
    network: 'Base',
    type: 'Operational',
  },
  {
    id: '3',
    name: 'Reserve Fund',
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    balance: '25,000 ETH',
    network: 'Base',
    type: 'Reserve',
  },
]

export function TreasuryAccounts() {
  const copyAddress = (address: string): void => {
    navigator.clipboard.writeText(address)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-black">Treasury Accounts</h2>
          <p className="text-gray-600">Manage your business treasury wallets</p>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800">
          <Plus className="mr-2 h-4 w-4" />
          Add Account
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {accounts.map((account) => (
          <Card key={account.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-black">{account.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-sm">{account.address.slice(0, 10)}...{account.address.slice(-8)}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => copyAddress(account.address)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{account.network}</Badge>
                  <Badge variant={account.type === 'Primary' ? 'default' : 'secondary'}>
                    {account.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Balance</p>
                  <p className="text-2xl font-bold text-black">{account.balance}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Deposit
                  </Button>
                  <Button variant="outline" size="sm">
                    Withdraw
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800" size="sm">
                    Transfer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="text-black">Self-Custody Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            All accounts are fully self-custodial. You maintain complete control of your private keys.
            Gajian never has access to your funds. Always backup your recovery phrases securely.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
