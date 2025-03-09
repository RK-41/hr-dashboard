import Link from 'next/link';
import Image from 'next/image';
import { DashboardIcon, EmployeeIcon, DepartmentIcon, RecruitmentIcon, ScheduleIcon, SupportIcon, SettingsIcon } from '../lib';

const Sidebar = () => {
  return (
    <div className="hidden sm:block w-28 xl:w-56 bg-gray-50 h-full transition-all duration-300">
      <div className="py-10 mb-4">
        <h1 className="text-center text-2xl xl:text-3xl font-bold">WeHR</h1>
      </div>

      <p className="text-xs text-center xl:text-left xl:px-6 xl:text-base text-gray-400 xl:font-medium">MAIN MENU</p>
      <div className="px-4 xl:px-6 py-2 mb-8">
        <nav className="mt-4 space-y-4">
          <Link href="/dashboard" className="flex items-center py-2 justify-center xl:justify-start xl:gap-4">
            <Image src={DashboardIcon} alt="Dashboard" className="w-5 h-5" />
            <span className="hidden xl:block text-[#FF5151]">Dashboard</span>
          </Link>

          <Link href="/recruitment" className="flex items-center text-gray-600 py-2 justify-center xl:justify-start xl:gap-4">
            <Image src={RecruitmentIcon} alt="Recruitment" className="w-5 h-5" />
            <span className="hidden xl:block text-[#686868]">Recruitment</span>
          </Link>

          <Link href="/schedule" className="flex items-center text-gray-600 py-2 justify-center xl:justify-start xl:gap-4">
            <Image src={ScheduleIcon} alt="Schedule" className="w-5 h-5" />
            <span className="hidden xl:block text-[#686868]">Schedule</span>
          </Link>

          <Link href="/employee" className="flex items-center text-gray-600 py-2 justify-center xl:justify-start xl:gap-4">
            <Image src={EmployeeIcon} alt="Employee" className="w-5 h-5" />
            <span className="hidden xl:block text-[#686868]">Employee</span>
          </Link>

          <Link href="/department" className="flex items-center text-gray-600 py-2 justify-center xl:justify-start xl:gap-4">
            <Image src={DepartmentIcon} alt="Department" className="w-5 h-5" />
            <span className="hidden xl:block text-[#686868]">Department</span>
          </Link>
        </nav>
      </div>

      <p className="text-xs text-center xl:text-left xl:px-6 xl:text-base text-gray-400 xl:font-medium">OTHER</p>
      <div className="px-4 xl:px-6 py-2">
        <nav className="mt-4 space-y-4">
          <Link href="/support" className="flex items-center text-gray-600 py-2 justify-center xl:justify-start xl:gap-4">
            <Image src={SupportIcon} alt="Support" className="w-5 h-5" />
            <span className="hidden xl:block text-[#686868]">Support</span>
          </Link>

          <Link href="/settings" className="flex items-center text-gray-600 py-2 justify-center xl:justify-start xl:gap-4">
            <Image src={SettingsIcon} alt="Settings" className="w-5 h-5" />
            <span className="hidden xl:block text-[#686868]">Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 