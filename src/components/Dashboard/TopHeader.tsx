import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Bell, CalendarDays } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-background px-6',
        className
      )}
    >
      <h1 className="text-xl font-semibold text-foreground">Hospital Dashboard</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-10" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-start gap-2">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-blue-500 text-white">AP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">New Appointment Scheduled</p>
                <p className="text-xs text-muted-foreground">Dr. Emily Carter with Patient John Doe at 2:00 PM.</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
             <DropdownMenuItem className="flex items-start gap-2">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-red-500 text-white">LA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Low Supplies Alert</p>
                <p className="text-xs text-muted-foreground">Restock needed for Item XYZ in Ward A.</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-primary hover:underline">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="rounded-full">
           <CalendarDays className="h-5 w-5" /> {/* Using CalendarDays as per image */} 
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage src="/placeholder-user.jpg" alt="User" /> {/* Replace with actual user image path */} 
              <AvatarFallback className="bg-primary text-primary-foreground">DS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
