"use client"
import ActivitySchedule from './ActivitySchedule';
import EmployeeStats from './EmployeeStats';
import Navbar from './Navbar';
import { useState } from 'react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="p-6 flex-1">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <EmployeeStats />
          </div>

          <div className="lg:col-span-2">
            <ActivitySchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 