import { DotsIcon, DownIcon } from "@/app/lib"
import Image from "next/image"

const UpcomingSchedule = () => {
  return (
    <div className="sm:flex-3/5 bg-white rounded-[10px] border border-[#E0E0E0] h-max">
      <div className="px-6">
        <div className="flex justify-between items-center my-6">
          <h2 className="text-lg text-[#161E54] font-medium">Upcoming Schedule</h2>
          <div className="flex gap-2 items-center text-[#686868] text-sm rounded-sm border border-[#EFEFEF] px-2 py-1">
            <span>Today, 13 Sep 2021</span>
            <Image src={DownIcon} alt="Arrow Right" className="w-4 h-4 min-w-4 min-h-4" />
          </div>
        </div>
        <div className="overflow-scroll scrollbar-none sm:max-h-[240px] xl:max-h-[420px]">
          {/* Priority Task */}
          <p className="text-sm font-medium text-[#686868] mb-3">Priority</p>
          <div className="bg-[#FAFAFA] rounded-md border border-[#E0E0E0] px-4 py-2.5 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[#303030] mb-1">Review candidate applications</p>
                <p className="text-sm text-[#686868]">Today - 11:30 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5 cursor-pointer">
                <Image src={DotsIcon} alt="Dots" className="w-4 h-4 min-w-4 min-h-4" />
              </button>
            </div>
          </div>
          {/* Other Tasks */}
          <p className="text-sm font-medium text-[#686868] mb-3">Other</p>
          <div className="bg-[#FAFAFA] rounded-md border border-[#E0E0E0] px-4 py-2.5 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[#303030] mb-1">Interview with candidates</p>
                <p className="text-sm text-[#686868]">Today - 10:30 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5 cursor-pointer">
                <Image src={DotsIcon} alt="Dots" className="w-4 h-4 min-w-4 min-h-4" />
              </button>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-md border border-[#E0E0E0] px-4 py-2.5 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[#303030] mb-1">Short meeting with product designer from IT Department</p>
                <p className="text-sm text-[#686868]">Today - 09:15 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5 cursor-pointer">
                <Image src={DotsIcon} alt="Dots" className="w-4 h-4 min-w-4 min-h-4" />
              </button>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-md border border-[#E0E0E0] px-4 py-2.5 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[#303030] mb-1">Short meeting with product manager</p>
                <p className="text-sm text-[#686868]">Today - 11:15 AM</p>
              </div>
              <button title="More" className="text-gray-400 p-1.5 cursor-pointer">
                <Image src={DotsIcon} alt="Dots" className="w-4 h-4 min-w-4 min-h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E0E0E0] text-center cursor-pointer">
        <button className="text-[#FF5151] text-sm font-medium h-10 my-auto">
          Create a New Schedule
        </button>
      </div>
    </div>
  )
}

export default UpcomingSchedule 