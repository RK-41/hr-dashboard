import Image from "next/image"
import { PinIcon, DotsIcon, PinnedIcon, DownIcon } from "@/app/lib"

const Announcements = () => {
  return (
    <div className="bg-white rounded-[10px] border border-[#E0E0E0] h-max">
      <div className="px-6">
        <div className="flex justify-between items-center my-6">
          <h2 className="text-lg text-[#161E54] font-medium">Announcement</h2>
          <div className="flex gap-2 items-center text-[#686868] text-sm rounded-sm border border-[#EFEFEF] px-2 py-1">
            <span>Today, 13 Sep 2021</span>
            <Image src={DownIcon} alt="Arrow Right" className="w-4 h-4 min-w-4 min-h-4" />
          </div>
        </div>
        <div className="space-y-0 sm:max-h-[240px] xl:max-h-[334px] overflow-auto scrollbar-hide">
          {/* First announcement */}
          <div className="bg-[#FAFAFA] rounded-md border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[#303030] mb-1">Outing schedule for every departement</p>
                <p className="text-sm text-[#686868]">5 Minutes ago</p>
              </div>
              <div className="flex space-x-2">
                <button title="Pin" className="text-gray-400 p-1.5 rounded cursor-pointer">
                  <Image src={PinnedIcon} alt="Pin" className="w-5 h-5 min-w-5 min-h-5" />
                </button>
                <button title="More" className="text-gray-400 p-1.5 cursor-pointer">
                  <Image src={DotsIcon} alt="Dots" className="w-4 h-4 min-w-4 min-h-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Second announcement */}
          <div className="bg-[#FAFAFA] rounded-md border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[#303030] mb-1">Meeting HR Department</p>
                <p className="text-sm text-[#686868]">Yesterday, 12:30 PM</p>
              </div>
              <div className="flex space-x-2">
                <button title="Pin" className="text-gray-400 p-1.5 rounded cursor-pointer">
                  <Image src={PinIcon} alt="Pin" className="w-5 h-5 min-w-5 min-h-5" />
                </button>
                <button title="More" className="text-gray-400 p-1.5 cursor-pointer">
                  <Image src={DotsIcon} alt="Dots" className="w-4 h-4 min-w-4 min-h-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Third announcement */}
          <div className="bg-[#FAFAFA] rounded-md border border-[#E0E0E0] p-4 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[#303030] mb-1">IT Department need two more talents for UX/UI Designer position</p>
                <p className="text-sm text-[#686868]">Yesterday, 09:15 AM</p>
              </div>
              <div className="flex space-x-2">
                <button title="Pin" className="text-gray-400 p-1.5 rounded cursor-pointer">
                  <Image src={PinIcon} alt="Pin" className="w-5 h-5 min-w-5 min-h-5" />
                </button>
                <button title="More" className="text-gray-400 p-1.5 cursor-pointer">
                  <Image src={DotsIcon} alt="Dots" className="w-4 h-4 min-w-4 min-h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E0E0E0] text-center cursor-pointer">
        <button className="text-[#FF5151] text-sm font-medium h-10 my-auto">See All Announcement</button>
      </div>
    </div>
  )
}

export default Announcements 