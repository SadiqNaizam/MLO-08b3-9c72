import React from 'react';
import Sidebar from './Sidebar'; // Relative import
import Header from './Header';   // Relative import
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  headerTitle?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, headerTitle }) => {
  return (
    <div 
      className={cn(
        'grid grid-cols-[theme(spacing.64)_1fr] grid-rows-[theme(spacing.16)_1fr] h-screen bg-background',
        className
      )}
    >
      <Sidebar className="row-span-2" />
      
      <Header className="col-start-2" title={headerTitle} />
      
      <main className="col-start-2 row-start-2 overflow-y-auto bg-background px-6 py-4">
        <div className="flex flex-col gap-6 h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
