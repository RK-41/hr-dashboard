const TopStatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#FFEFE7] flex flex-col justify-between p-6 rounded-[10px]">
        <h2 className="text-lg font-medium mb-2 text-[#161E54]">Available Position</h2>
        <p className="text-4xl mb-2 text-[#161E54]">24</p>
        <p className="text-sm text-[#FF5151]">4 Urgently needed</p>
      </div>

      <div className="bg-[#E8F0FB] flex flex-col justify-between p-6 rounded-[10px]">
        <h2 className="text-lg font-medium mb-2 text-[#161E54]">Job Open</h2>
        <p className="text-4xl mb-2 text-[#161E54]">10</p>
        <p className="text-sm text-[#3786F1]">4 Active hiring</p>
      </div>

      <div className="bg-[#FDEBF9] flex flex-col justify-between p-6 rounded-[10px]">
        <h2 className="text-lg font-medium mb-2 text-[#161E54]">New Employees</h2>
        <p className="text-4xl mb-2 text-[#161E54]">24</p>
        <p className="text-sm text-[#EE61CF]">4 Department</p>
      </div>
    </div>
  )
}

export default TopStatsCards 