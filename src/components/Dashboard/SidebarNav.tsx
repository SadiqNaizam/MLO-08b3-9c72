import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Bed,
  Activity,
  BarChart3,
  FileText,
  Settings as SettingsIcon,
  ChevronLeft,
  LogOut
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: number;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { id: 'patients', label: 'Patients', icon: Users, href: '#', badge: 3 },
  { id: 'appointments', label: 'Appointments', icon: CalendarDays, href: '#' },
  { id: 'beds', label: 'Beds', icon: Bed, href: '#' },
  { id: 'monitoring', label: 'Monitoring', icon: Activity, href: '#' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '#' },
  { id: 'reports', label: 'Reports', icon: FileText, href: '#' },
  { id: 'settings', label: 'Settings', icon: SettingsIcon, href: '#' },
];

interface UserProfileProps {
  name: string;
  role: string;
  avatarSrc?: string;
  avatarFallback: string;
}

const userProfileData: UserProfileProps = {
  name: 'Dr. Smith',
  role: 'On Duty',
  avatarFallback: 'DS',
};

const SidebarNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('dashboard');
  // const [isCollapsed, setIsCollapsed] = useState<boolean>(false); // Future use

  return (
    <aside className={cn(
      'fixed left-0 top-0 z-20 flex h-full flex-col bg-sidebar text-sidebar-foreground',
      'w-64 transition-all duration-300 ease-in-out'
      // isCollapsed ? 'w-20' : 'w-64'
    )}>
      <div className={cn(
        'flex items-center justify-between border-b border-sidebar-border p-4 h-16'
        // isCollapsed ? 'justify-center' : 'justify-between'
      )}>
        {/* {!isCollapsed && ( */} 
          <span className="text-2xl font-bold text-primary">MedCare</span>
        {/* )} */} 
        <button 
          // onClick={() => setIsCollapsed(!isCollapsed)} 
          className="p-1 rounded-md hover:bg-sidebar-accent"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = item.id === activeId;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveId(item.id)}
              className={cn(
                'flex items-center rounded-md px-3 py-2.5 text-sm font-medium',
                'transition-colors duration-150',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-accent focus:text-sidebar-accent-foreground',
                // isCollapsed && 'justify-center'
              )}
            >
              <IconComponent size={18} className={cn('mr-3'/*, isCollapsed && 'mr-0'*/)} />
              {/* {!isCollapsed && ( */} 
                <span className="flex-1">{item.label}</span>
              {/* )} */} 
              {item.badge && /*!isCollapsed &&*/ (
                <Badge variant="secondary" className="bg-sidebar-accent text-sidebar-accent-foreground">
                  {item.badge}
                </Badge>
              )}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-sidebar-border p-4">
        <div className={cn('flex items-center'/*, isCollapsed && 'flex-col items-center text-center'*/)}>
          <Avatar className={cn('h-10 w-10'/*, isCollapsed && 'mb-2'*/)}>
            {userProfileData.avatarSrc && <AvatarImage src={userProfileData.avatarSrc} alt={userProfileData.name} />}
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userProfileData.avatarFallback}
            </AvatarFallback>
          </Avatar>
          {/* {!isCollapsed && ( */} 
            <div className="ml-3">
              <p className="text-sm font-semibold text-sidebar-foreground">{userProfileData.name}</p>
              <p className="text-xs text-muted-foreground">{userProfileData.role}</p>
            </div>
          {/* )} */} 
        </div>
        <button 
          className={cn(
            'mt-3 flex w-full items-center justify-start rounded-md px-3 py-2.5 text-sm font-medium',
            'text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            // isCollapsed && 'justify-center'
          )}
        >
          <LogOut size={18} className={cn('mr-3'/*, isCollapsed && 'mr-0'*/)} />
          {/* {!isCollapsed && <span>Logout</span>} */} 
        </button>
      </div>
    </aside>
  );
};

export default SidebarNav;
