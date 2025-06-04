import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import MetricCardGrid from '../components/Dashboard/MetricCardGrid';
import AdmissionsTrendChart from '../components/Dashboard/AdmissionsTrendChart';
import ICUOccupancyCard from '../components/Dashboard/ICUOccupancyCard';
import RecentPatientsTable from '../components/Dashboard/RecentPatientsTable';
import StaffOnDutyCard from '../components/Dashboard/StaffOnDutyCard';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout headerTitle="Hospital Dashboard">
      {/* 
        The MainAppLayout already provides a root div for children with:
        className="flex flex-col gap-6 h-full"
        This will space out the direct children components/divs below.
      */}
      
      <MetricCardGrid />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <AdmissionsTrendChart />
        </div>
        <div className="xl:col-span-1">
          <ICUOccupancyCard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentPatientsTable />
        </div>
        <div className="xl:col-span-1">
          <StaffOnDutyCard />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
