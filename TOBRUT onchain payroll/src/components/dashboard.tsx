'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts'
import { TrendingUp, Users, DollarSign, Wallet } from 'lucide-react'

const payrollData = [
  { month: 'Jan', amount: 45000 },
  { month: 'Feb', amount: 48000 },
  { month: 'Mar', amount: 52000 },
  { month: 'Apr', amount: 49000 },
  { month: 'May', amount: 55000 },
  { month: 'Jun', amount: 58000 },
]

const treasuryData = [
  { month: 'Jan', balance: 180000 },
  { month: 'Feb', balance: 195000 },
  { month: 'Mar', balance: 210000 },
  { month: 'Apr', balance: 225000 },
  { month: 'May', balance: 240000 },
  { month: 'Jun', balance: 258000 },
]

export function Dashboard(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-black">Dashboard</h2>
        <p className="text-gray-600">Overview of your payroll and treasury</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-black">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">24</div>
            <p className="text-xs text-gray-600">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-black">Monthly Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">$58,000</div>
            <p className="text-xs text-gray-600">+5.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-black">Treasury Balance</CardTitle>
            <Wallet className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">$258,000</div>
            <p className="text-xs text-gray-600">Across 3 accounts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-black">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">+12.5%</div>
            <p className="text-xs text-gray-600">Year over year</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-black">Payroll Expenses</CardTitle>
            <CardDescription>Monthly payroll over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                amount: {
                  label: 'Amount',
                  color: '#000000',
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={payrollData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="#000000" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-black">Treasury Growth</CardTitle>
            <CardDescription>Treasury balance trend over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                balance: {
                  label: 'Balance',
                  color: '#000000',
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={treasuryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    stroke="#000000"
                    strokeWidth={2}
                    dot={{ fill: '#000000' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
