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
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Area,
} from 'recharts';

const chartData = [
  { name: 'Jan', admissions: 280 },
  { name: 'Feb', admissions: 350 },
  { name: 'Mar', admissions: 320 },
  { name: 'Apr', admissions: 410 },
  { name: 'May', admissions: 380 },
  { name: 'Jun', admissions: 290 },
  { name: 'Jul', admissions: 360 },
  { name: 'Aug', admissions: 520 },
  { name: 'Sep', admissions: 610 },
  { name: 'Oct', admissions: 550 },
  { name: 'Nov', admissions: 480 },
  { name: 'Dec', admissions: 450 },
];

const AdmissionsTrendChart: React.FC = () => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-card-foreground">Admissions Trend</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Monthly patient admissions over the past year.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[350px] p-0 pr-4 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
            <defs>
              <linearGradient id="admissionsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" vertical={false} />
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              axisLine={false} 
              dy={10}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `${value}`}
              dx={-5} 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'hsl(var(--popover))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)'
              }}
              labelStyle={{ color: 'hsl(var(--popover-foreground))', fontWeight: 'bold' }}
              itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
            />
            <Area 
              type="monotone" 
              dataKey="admissions" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#admissionsGradient)" 
            />
            <Line 
              type="monotone" 
              dataKey="admissions" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2.5} 
              dot={false} 
              activeDot={{ r: 6, strokeWidth: 2, fill: 'hsl(var(--primary))', stroke: 'hsl(var(--background))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AdmissionsTrendChart;
