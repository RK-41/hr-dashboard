const RecentActivity = () => {
  return (
    <div className="sm:flex-2/5 text-white rounded-[10px] overflow-hidden">
      <h2 className="text-xl bg-[#1B204A] font-medium p-6">Recently Activity</h2>
      <div className="bg-[#161E54] p-6 rounded-b-lg">
        <div className="text-xs mb-4 text-white/60">10:40 AM, Fri 10 Sept 2021</div>
        <h3 className="text-xl font-medium mb-2">You Posted a New Job</h3>
        <p className="text-sm mb-6 text-white/80">
          Kindly check the requirements and terms of work and make sure everything is right.
        </p>
        <div className="flex flex-col xl:flex-row gap-4 xl:justify-between xl:items-center mt-8">
          <div className="text-sm">Today you makes 12 Activity</div>
          <button className="bg-[#FF5151] text-white px-4 py-2 w-max rounded-sm text-sm">
            See All Activity
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity 