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

interface HeaderProps {
  className?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ className, title = 'Hospital Dashboard' }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-background px-6 shrink-0',
        className
      )}
    >
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-10 h-9" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative rounded-full h-9 w-9">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-start gap-2">
              <Avatar className="h-8 w-8 mt-1 shrink-0">
                <AvatarFallback className="bg-blue-500 text-white">AP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">New Appointment Scheduled</p>
                <p className="text-xs text-muted-foreground">Dr. Emily Carter with Patient John Doe at 2:00 PM.</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
             <DropdownMenuItem className="flex items-start gap-2">
              <Avatar className="h-8 w-8 mt-1 shrink-0">
                <AvatarFallback className="bg-red-500 text-white">LA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Low Supplies Alert</p>
                <p className="text-xs text-muted-foreground">Restock needed for Item XYZ in Ward A.</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center">
              <button className='text-sm text-primary hover:underline'>View all notifications</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
           <CalendarDays className="h-5 w-5" />
           <span className="sr-only">Calendar</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              {/* Replace with actual user image path or remove if only fallback is used */} 
              {/* <AvatarImage src="/placeholder-user.jpg" alt="User" /> */} 
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

export default Header;
