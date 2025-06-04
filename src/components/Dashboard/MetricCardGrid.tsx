import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersRound, MinusCircle, ClipboardCheck, Activity, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardData {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  iconBgColor: string;
}

const metricData: MetricCardData[] = [
  {
    id: 'newAdmissions',
    title: 'New Admissions',
    value: '25',
    change: '+12% from last week',
    changeType: 'positive' as const,
    icon: UsersRound,
    iconBgColor: 'bg-blue-100',
  },
  {
    id: 'dischargeRate',
    title: 'Discharge Rate',
    value: '18%',
    change: '-5% from last week',
    changeType: 'negative' as const,
    icon: MinusCircle, // Using MinusCircle based on visual analysis
    iconBgColor: 'bg-sky-100',
  },
  {
    id: 'averageStay',
    title: 'Average Stay',
    value: '4.2 days',
    change: '+0.3 days from last month',
    changeType: 'neutral' as const, // Neutral change, but text suggests improvement
    icon: ClipboardCheck,
    iconBgColor: 'bg-indigo-100',
  },
  {
    id: 'criticalPatients',
    title: 'Critical Patients',
    value: '8',
    change: '-2 from yesterday',
    changeType: 'negative' as const, // Negative number is good here, meaning fewer critical patients
    icon: Activity,
    iconBgColor: 'bg-purple-100',
  },
];

const MetricCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {metricData.map((metric) => {
        const IconComponent = metric.icon;
        const TrendIcon = metric.changeType === 'positive' ? TrendingUp : metric.changeType === 'negative' && (metric.id === 'dischargeRate' || metric.id === 'criticalPatients') ? TrendingDown : TrendingUp; // Simplified logic, could be more nuanced
        const changeColor = 
          metric.changeType === 'positive' ? 'text-prd-success' :
          metric.changeType === 'negative' ? 'text-prd-accent-secondary' :
          'text-muted-foreground';

        // Specific handling for critical patients where a negative change is good
        const displayChangeColor = 
          (metric.id === 'criticalPatients' && metric.change.startsWith('-')) || (metric.id === 'dischargeRate' && metric.change.startsWith('+'))
          ? 'text-prd-success' 
          : (metric.id === 'criticalPatients' && metric.change.startsWith('+')) || (metric.id === 'dischargeRate' && metric.change.startsWith('-'))
          ? 'text-prd-accent-secondary'
          : changeColor;

        return (
          <Card key={metric.id} className="shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                {metric.title}
              </CardTitle>
              <div className={cn('p-2 rounded-full', metric.iconBgColor)}>
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-card-foreground">{metric.value}</div>
              <p className={cn('text-xs mt-1', displayChangeColor)}>
                {metric.change}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricCardGrid;
