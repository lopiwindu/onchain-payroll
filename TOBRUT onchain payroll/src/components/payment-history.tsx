'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ExternalLink, Download } from 'lucide-react'

interface Payment {
  id: string
  date: string
  employee: string
  amount: string
  status: string
  txHash: string
  type: string
}

const payments: Payment[] = [
  {
    id: '1',
    date: 'Jun 1, 2024',
    employee: 'Alice Johnson',
    amount: '5,000 USDC',
    status: 'Completed',
    txHash: '0x7d1d3e7b9c...f8a2b4c6',
    type: 'Salary',
  },
  {
    id: '2',
    date: 'Jun 1, 2024',
    employee: 'Bob Smith',
    amount: '4,500 USDC',
    status: 'Completed',
    txHash: '0x9a2c4e6b8d...c5f7a9b1',
    type: 'Salary',
  },
  {
    id: '3',
    date: 'Jun 1, 2024',
    employee: 'Carol White',
    amount: '4,000 USDC',
    status: 'Completed',
    txHash: '0x3f5a7c9e1b...d8e2f4a6',
    type: 'Salary',
  },
  {
    id: '4',
    date: 'Jun 15, 2024',
    employee: 'David Lee',
    amount: '1,000 USDC',
    status: 'Completed',
    txHash: '0x6b8d0f2a4c...e9f1a3b5',
    type: 'Bonus',
  },
  {
    id: '5',
    date: 'May 1, 2024',
    employee: 'Alice Johnson',
    amount: '5,000 USDC',
    status: 'Completed',
    txHash: '0x2e4f6a8c0d...b7c9e1f3',
    type: 'Salary',
  },
]

export function PaymentHistory(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-black">Payment History</h2>
          <p className="text-gray-600">Track all payroll transactions</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-black">Total Paid (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">$58,000</div>
            <p className="text-xs text-gray-600">24 transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-black">Total Paid (Last Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">$55,000</div>
            <p className="text-xs text-gray-600">24 transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-black">Year to Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">$307,000</div>
            <p className="text-xs text-gray-600">144 transactions</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Recent Transactions</CardTitle>
          <CardDescription>All onchain payroll transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-black">Date</TableHead>
                <TableHead className="text-black">Employee</TableHead>
                <TableHead className="text-black">Amount</TableHead>
                <TableHead className="text-black">Type</TableHead>
                <TableHead className="text-black">Status</TableHead>
                <TableHead className="text-black">Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="text-gray-600">{payment.date}</TableCell>
                  <TableCell className="font-medium text-black">{payment.employee}</TableCell>
                  <TableCell className="font-semibold text-black">{payment.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{payment.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={payment.status === 'Completed' ? 'default' : 'secondary'}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="font-mono text-xs">
                      {payment.txHash.slice(0, 10)}...
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
