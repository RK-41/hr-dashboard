import Total_Employees from "@/public/Total_Employees.svg"
import Talent_Request from "@/public/Talent_Request.svg"
import Pin from "@/public/Pin.svg"
import Dots from "@/public/Dots.svg"
import Image from "next/image"

const EmployeeStats = () => {
  return (
    <div className="space-y-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#FFEFE7] flex flex-col justify-between p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-2">Available Position</h2>
          <p className="text-4xl mb-2">24</p>
          <p className="text-sm text-red-500">4 Urgently needed</p>
        </div>

        <div className="bg-[#E8F0FB] flex flex-col justify-between p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-2">Job Open</h2>
          <p className="text-4xl mb-2">10</p>
          <p className="text-sm text-blue-500">4 Active hiring</p>
        </div>

        <div className="bg-[#FDEBF9] flex flex-col justify-between p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-2">New Employees</h2>
          <p className="text-4xl mb-2">24</p>
          <p className="text-sm text-purple-500">4 Department</p>
        </div>
      </div>

      {/* Middle Stats with Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#E0E0E0]">
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-medium text-indigo-900">Total Employees</h2>
            <div className="w-full flex justify-between items-end">
              <div className="flex flex-col justify-end">
                <p className="text-5xl text-indigo-900 my-4">216</p>
                <div className="flex flex-col text-sm text-gray-600 mb-2">
                  <div className="mr-4">120 Men</div>
                  <div>96 Women</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <Image src={Total_Employees} alt="Total Employees" className="w-32 h-32" />
                <div className="inline-block bg-[#FFF8ED] text-sm text-[#B29141] px-3 py-1 rounded-sm">
                  +2% Past month
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-[#E0E0E0]">
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-medium text-indigo-900">Talent Request</h2>
            <div className="w-full flex justify-between items-end">
              <div className="flex flex-col justify-end">
                <p className="text-5xl text-indigo-900 my-4">16</p>
                <div className="flex flex-col text-sm text-gray-600 mb-2">
                  <div className="mr-4">6 Men</div>
                  <div>10 Women</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <Image src={Talent_Request} alt="Talent Request" className="w-32 h-32" />
                <div className="inline-block bg-[#FFF8ED] text-sm text-[#B29141] px-3 py-1 rounded-sm">
                  +5% Past month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-xl border border-[#E0E0E0] shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Announcement</h2>
          <div className="flex gap-2 items-center text-gray-500 text-sm rounded-sm border border-[#EFEFEF] px-2 py-1">
            <span>Today, 13 Sep 2021</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="space-y-0">
          {/* First announcement */}
          <div className="bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Outing schedule for every departement</p>
                <p className="text-sm text-gray-500">5 Minutes ago</p>
              </div>
              <div className="flex space-x-2">
                <button title="Pin" className="text-gray-400 p-1.5 rounded">
                  <Image src={Pin} alt="Pin" className="w-4 h-4" />
                </button>
                <button title="More" className="text-gray-400 p-1.5">
                  <Image src={Dots} alt="Dots" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Second announcement */}
          <div className="bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Meeting HR Department</p>
                <p className="text-sm text-gray-500">Yesterday, 12:30 PM</p>
              </div>
              <div className="flex space-x-2">
                <button title="Pin" className="text-gray-400 p-1.5 rounded">
                  <Image src={Pin} alt="Pin" className="w-4 h-4" />
                </button>
                <button title="More" className="text-gray-400 p-1.5">
                  <Image src={Dots} alt="Dots" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Third announcement */}
          <div className="bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">IT Department need two more talents for UX/UI Designer position</p>
                <p className="text-sm text-gray-500">Yesterday, 09:15 AM</p>
              </div>
              <div className="flex space-x-2">
                <button title="Pin" className="text-gray-400 p-1.5 rounded">
                  <Image src={Pin} alt="Pin" className="w-4 h-4" />
                </button>
                <button title="More" className="text-gray-400 p-1.5">
                  <Image src={Dots} alt="Dots" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#E0E0E0] pt-4 text-center">
          <button className="text-[#FF5151] text-sm font-medium">See All Announcement</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats; 