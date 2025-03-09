import Image from "next/image"
import { TotalEmployeesChart, TalentRequestChart } from "@/app/lib"

const EmployeeCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-[10px] border border-[#E0E0E0]">
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-medium text-[#161E54]">Total Employees</h2>
          <div className="w-full flex justify-between items-end">
            <div className="flex flex-col justify-end">
              <p className="text-5xl text-[#161E54] my-4">216</p>
              <div className="flex flex-col text-xs text-[#686868] mb-2">
                <div className="mr-4">120 Men</div>
                <div>96 Women</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Image src={TotalEmployeesChart} alt="Total Employees" className="w-32 h-32" />
              <div className="inline-block bg-[#FFF8ED] text-sm text-[#303030] px-3 py-1 rounded-sm">
                +2% Past month
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-[10px] border border-[#E0E0E0]">
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-medium text-[#161E54]">Talent Request</h2>
          <div className="w-full flex justify-between items-end">
            <div className="flex flex-col justify-end">
              <p className="text-5xl text-[#161E54] my-4">16</p>
              <div className="flex flex-col text-xs text-[#686868] mb-2">
                <div className="mr-4">6 Men</div>
                <div>10 Women</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Image src={TalentRequestChart} alt="Talent Request" className="w-32 h-32" />
              <div className="inline-block bg-[#FFF8ED] text-sm text-[#303030] px-3 py-1 rounded-sm">
                +5% Past month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCharts 