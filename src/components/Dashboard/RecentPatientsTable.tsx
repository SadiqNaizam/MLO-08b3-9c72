import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ListFilter, ChevronDown, MoreHorizontal } from 'lucide-react';

type PatientStatus = 'Admitted' | 'Critical' | 'Discharged' | 'Pending';

interface Patient {
  id: string;
  name: string;
  patientId: string;
  status: PatientStatus;
  room: string;
  doctor: string;
  admitDate: string;
}

const patientsData: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    patientId: '#P10043',
    status: 'Admitted' as const,
    room: '301A',
    doctor: 'Dr. Johnson',
    admitDate: 'Oct 12, 2023',
  },
  {
    id: '2',
    name: 'Sarah Williams',
    patientId: '#P10044',
    status: 'Critical' as const,
    room: 'ICU-4',
    doctor: 'Dr. Martinez',
    admitDate: 'Oct 14, 2023',
  },
  {
    id: '3',
    name: 'David Lee',
    patientId: '#P10045',
    status: 'Pending' as const,
    room: 'ER-2',
    doctor: 'Dr. Chen',
    admitDate: 'Oct 15, 2023',
  },
  {
    id: '4',
    name: 'Emily Brown',
    patientId: '#P10046',
    status: 'Discharged' as const,
    room: 'N/A',
    doctor: 'Dr. Wilson',
    admitDate: 'Oct 10, 2023',
  },
  {
    id: '5',
    name: 'Michael Clark',
    patientId: '#P10047',
    status: 'Admitted' as const,
    room: '205B',
    doctor: 'Dr. Johnson',
    admitDate: 'Oct 16, 2023',
  },
];

const getStatusBadgeClass = (status: PatientStatus): string => {
  switch (status) {
    case 'Admitted':
      return 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200';
    case 'Critical':
      return 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200';
    case 'Discharged':
      return 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200';
    default:
      return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
  }
};

const RecentPatientsTable: React.FC = () => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-card-foreground">Recent Patients</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Overview of recently admitted and active patients.
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <ListFilter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                Latest
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Last 24 hours</DropdownMenuItem>
              <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Patient</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Room</TableHead>
              <TableHead className="text-muted-foreground">Doctor</TableHead>
              <TableHead className="text-muted-foreground">Admit Date</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientsData.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="font-medium text-card-foreground">{patient.name}</div>
                  <div className="text-xs text-muted-foreground">{patient.patientId}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn('capitalize', getStatusBadgeClass(patient.status))}>
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-card-foreground">{patient.room}</TableCell>
                <TableCell className="text-card-foreground">{patient.doctor}</TableCell>
                <TableCell className="text-card-foreground">{patient.admitDate}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Patient Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Record</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive hover:!bg-destructive/10 hover:!text-destructive-foreground">
                        Discharge Patient
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentPatientsTable;
