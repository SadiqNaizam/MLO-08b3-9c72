import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatarFallback: string;
  avatarImage?: string;
  status: 'On Duty' | 'On Break' | 'Off Duty';
}

const staffData: StaffMember[] = [
  {
    id: '1',
    name: 'Dr. Emily Johnson',
    role: 'Cardiologist',
    department: 'Cardiology',
    avatarFallback: 'EJ',
    avatarImage: '/avatars/emily-johnson.jpg', // Placeholder path
    status: 'On Duty' as const,
  },
  {
    id: '2',
    name: 'Dr. David Chen',
    role: 'Emergency Physician',
    department: 'ER',
    avatarFallback: 'DC',
    status: 'On Duty' as const,
  },
  {
    id: '3',
    name: 'Nurse Maria Garcia',
    role: 'Head Nurse',
    department: 'ICU',
    avatarFallback: 'MG',
    avatarImage: '/avatars/maria-garcia.jpg', // Placeholder path
    status: 'On Duty' as const,
  },
  {
    id: '4',
    name: 'Dr. Kevin Lee',
    role: 'Pediatrician',
    department: 'Pediatrics',
    avatarFallback: 'KL',
    status: 'On Break' as const,
  },
];

const getStatusBadgeClass = (status: StaffMember['status']): string => {
  switch (status) {
    case 'On Duty':
      return 'bg-green-100 text-prd-success border-green-200';
    case 'On Break':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'Off Duty':
      return 'bg-gray-100 text-gray-700 border-gray-200';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

const StaffOnDutyCard: React.FC = () => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold text-card-foreground">Staff On-Duty</CardTitle>
        <Button variant="link" size="sm" className="text-primary px-0 h-auto">
          View All
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {staffData.filter(staff => staff.status === 'On Duty' || staff.status === 'On Break').slice(0,3).map((staff) => (
          <div key={staff.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                {staff.avatarImage && <AvatarImage src={staff.avatarImage} alt={staff.name} />}
                <AvatarFallback className={cn(
                  staff.id === '1' ? 'bg-red-500' :
                  staff.id === '2' ? 'bg-blue-500' :
                  staff.id === '3' ? 'bg-purple-500' : 'bg-gray-500',
                  'text-white'
                )}>{staff.avatarFallback}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-card-foreground">{staff.name}</p>
                <p className="text-xs text-muted-foreground">
                  {staff.role} &bull; {staff.department}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
                <Badge variant="outline" className={cn('text-xs', getStatusBadgeClass(staff.status))}>
                    {staff.status}
                </Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Staff Actions</span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Schedule</DropdownMenuItem>
                    <DropdownMenuItem>Send Message</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StaffOnDutyCard;
