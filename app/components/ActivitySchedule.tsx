import Dots from "@/public/Dots.svg"
import Image from "next/image"

const ActivitySchedule = () => {
  return (
    <div className="space-y-6">
      {/* Recent Activity */}
      <div className="bg-[#161E54] text-white p-6 rounded-lg shadow">
        <h2 className="text-lg bg-[#1B204A] font-medium mb-4">Recently Activity</h2>
        <div className="text-xs mb-4">10:40 AM, Fri 10 Sept 2021</div>

        <h3 className="text-xl font-medium mb-2">You Posted a New Job</h3>
        <p className="text-sm mb-6">Kindly check the requirements and terms of work and make sure everything is right.</p>

        <div className="flex justify-between items-center">
          <div className="text-sm">Today you makes 12 Activity</div>
          <button className="bg-[#FF5151] text-white px-4 py-2 rounded-sm text-sm">See All Activity</button>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white p-6 rounded-xl border border-[#E0E0E0] shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Upcoming Schedule</h2>
          <div className="flex gap-2 items-center text-gray-500 text-sm rounded-sm border border-[#EFEFEF] px-2 py-1">
            <span>Today, 13 Sep 2021</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="space-y-0  h-[424px] overflow-auto scrollbar-none">
          {/* Priority Task */}
          <p className="text-sm font-medium text-gray-500 mb-3">Priority</p>
          <div className="bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Review candidate applications</p>
                <p className="text-sm text-gray-500">Today - 11:30 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5">
                <Image src={Dots} alt="Dots" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Other Tasks */}
          <p className="text-sm font-medium text-gray-500 mb-3">Other</p>
          <div className="bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Interview with candidates</p>
                <p className="text-sm text-gray-500">Today - 10:30 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5">
                <Image src={Dots} alt="Dots" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Short meeting with product designer from IT Department</p>
                <p className="text-sm text-gray-500">Today - 09:15 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5">
                <Image src={Dots} alt="Dots" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Short meeting with product designer from IT Department</p>
                <p className="text-sm text-gray-500">Today - 09:15 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5">
                <Image src={Dots} alt="Dots" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#E0E0E0] pt-4 text-center">
          <button className="text-[#FF5151] text-sm font-medium">Create a New Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySchedule; 