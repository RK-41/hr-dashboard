"use client"
import { useState } from 'react';
import Navbar from './Navbar';
import TopStatsCards from './TopStatsCards';
import EmployeeCharts from './EmployeeCharts';
import Announcements from './Announcements';
import RecentActivity from './RecentActivity';
import UpcomingSchedule from './UpcomingSchedule';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="p-6 flex-1">
        <h1 className="text-2xl text-[#161E54] font-semibold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          {/* Left column - Employee Stats */}
          <div className="lg:col-span-3 space-y-6">
            <TopStatsCards />
            <EmployeeCharts />
            <Announcements />
          </div>

          {/* Right column - Activity & Schedule */}
          <div className="lg:col-span-2">
            <div className="h-full flex flex-col sm:flex-row xl:flex-col gap-6 justify-between">
              <RecentActivity />
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 