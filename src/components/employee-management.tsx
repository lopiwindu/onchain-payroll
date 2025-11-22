'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Plus, Send } from 'lucide-react'

interface Employee {
  id: string
  name: string
  role: string
  wallet: string
  salary: string
  status: string
  nextPayment: string
}

const employees: Employee[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    role: 'Senior Developer',
    wallet: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    salary: '5,000 USDC',
    status: 'Active',
    nextPayment: 'Jul 1, 2024',
  },
  {
    id: '2',
    name: 'Bob Smith',
    role: 'Product Manager',
    wallet: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    salary: '4,500 USDC',
    status: 'Active',
    nextPayment: 'Jul 1, 2024',
  },
  {
    id: '3',
    name: 'Carol White',
    role: 'Designer',
    wallet: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    salary: '4,000 USDC',
    status: 'Active',
    nextPayment: 'Jul 1, 2024',
  },
  {
    id: '4',
    name: 'David Lee',
    role: 'Marketing Lead',
    wallet: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    salary: '4,200 USDC',
    status: 'Active',
    nextPayment: 'Jul 1, 2024',
  },
]

export function EmployeeManagement() {
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-black">Employee Management</h2>
          <p className="text-gray-600">Manage payroll for your team</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-black text-white hover:bg-gray-800">
            <Plus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
          <Button variant="outline">
            <Send className="mr-2 h-4 w-4" />
            Batch Payment
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Active Employees</CardTitle>
          <CardDescription>Manage employee information and payroll schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-black">Employee</TableHead>
                <TableHead className="text-black">Role</TableHead>
                <TableHead className="text-black">Wallet Address</TableHead>
                <TableHead className="text-black">Monthly Salary</TableHead>
                <TableHead className="text-black">Status</TableHead>
                <TableHead className="text-black">Next Payment</TableHead>
                <TableHead className="text-black">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-black text-white">
                          {getInitials(employee.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-black">{employee.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">{employee.role}</TableCell>
                  <TableCell className="font-mono text-sm text-gray-600">
                    {employee.wallet.slice(0, 6)}...{employee.wallet.slice(-4)}
                  </TableCell>
                  <TableCell className="font-semibold text-black">{employee.salary}</TableCell>
                  <TableCell>
                    <Badge variant={employee.status === 'Active' ? 'default' : 'secondary'}>
                      {employee.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{employee.nextPayment}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Pay Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="text-black">Payroll Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Next Payroll Date:</span>
              <span className="font-semibold text-black">July 1, 2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Monthly Payroll:</span>
              <span className="font-semibold text-black">$58,000 USDC</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Payment Frequency:</span>
              <span className="font-semibold text-black">Monthly (1st of each month)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
