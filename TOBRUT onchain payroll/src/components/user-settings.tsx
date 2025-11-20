'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export function UserSettings(): JSX.Element {
  const [notifications, setNotifications] = useState<boolean>(true)
  const [autoPayroll, setAutoPayroll] = useState<boolean>(false)
  const [twoFactor, setTwoFactor] = useState<boolean>(false)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-black">Settings</h2>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payroll">Payroll Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-black text-white text-2xl">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Avatar</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-black">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-black">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input id="email" type="email" defaultValue="admin@gajian.xyz" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-black">Company Name</Label>
                <Input id="company" defaultValue="Gajian Inc." />
              </div>

              <Button className="bg-black text-white hover:bg-gray-800">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Wallet Security</CardTitle>
              <CardDescription>Manage your wallet connections and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">Connected Wallet</p>
                  <p className="text-sm text-gray-600 font-mono">
                    0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
                  </p>
                </div>
                <Badge>Connected</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
              </div>

              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  Change Wallet
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-black">Recovery Phrase</CardTitle>
              <CardDescription>Your wallet recovery phrase (never share this)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  Your recovery phrase is securely stored in your browser. Make sure to backup this phrase.
                </p>
                <Button variant="outline" size="sm">
                  View Recovery Phrase
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Notification Preferences</CardTitle>
              <CardDescription>Choose what notifications you receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">Payment Confirmations</p>
                  <p className="text-sm text-gray-600">Get notified when payments are sent</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">Low Balance Alerts</p>
                  <p className="text-sm text-gray-600">Alert when treasury balance is low</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">Weekly Reports</p>
                  <p className="text-sm text-gray-600">Receive weekly payroll summaries</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Payroll Automation</CardTitle>
              <CardDescription>Configure automatic payroll settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">Automatic Payroll</p>
                  <p className="text-sm text-gray-600">Automatically process monthly payroll</p>
                </div>
                <Switch checked={autoPayroll} onCheckedChange={setAutoPayroll} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="payrollDay" className="text-black">Payroll Day</Label>
                <Input id="payrollDay" type="number" defaultValue="1" min="1" max="28" />
                <p className="text-xs text-gray-600">Day of the month to process payroll (1-28)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="defaultToken" className="text-black">Default Payment Token</Label>
                <Input id="defaultToken" defaultValue="USDC" disabled />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gasBuffer" className="text-black">Gas Buffer (%)</Label>
                <Input id="gasBuffer" type="number" defaultValue="20" />
                <p className="text-xs text-gray-600">Extra gas to ensure transactions complete</p>
              </div>

              <Button className="bg-black text-white hover:bg-gray-800">
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
