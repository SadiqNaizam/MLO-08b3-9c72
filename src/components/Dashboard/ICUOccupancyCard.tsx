import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface OccupancyStat {
  id: string;
  label: string;
  value: number;
  color: string;
}

const occupancyStats: OccupancyStat[] = [
  { id: 'general', label: 'General', value: 75, color: 'bg-blue-500' },
  { id: 'icu', label: 'ICU', value: 82, color: 'bg-red-500' },
  { id: 'er', label: 'ER', value: 45, color: 'bg-yellow-500' },
];

const ICUOccupancyCard: React.FC = () => {
  const totalOccupancy = 82;
  const occupiedBeds = 9;
  const totalBeds = 11;

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-card-foreground">ICU Occupancy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-card-foreground">{totalOccupancy}%</p>
          <p className="text-sm text-muted-foreground">
            {occupiedBeds} of {totalBeds} beds occupied
          </p>
        </div>
        
        <Progress value={totalOccupancy} className="h-3 [&>div]:bg-prd-accent-secondary" />

        <div className="grid grid-cols-3 gap-3 pt-2">
          {occupancyStats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center p-3 rounded-md bg-accent"
            >
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-semibold text-card-foreground">{stat.value}%</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ICUOccupancyCard;
