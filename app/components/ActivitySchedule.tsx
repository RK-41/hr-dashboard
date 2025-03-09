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
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Upcoming Schedule</h2>
          <div className="flex items-center text-gray-500 text-sm">
            Today, 13 Sep 2021
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="mb-2 text-sm font-medium text-gray-500">Priority</div>
        <div className="flex justify-between items-start border-b pb-4 mb-4">
          <div>
            <p className="font-medium">Review candidate applications</p>
            <p className="text-sm text-gray-500">Today - 11:30 AM</p>
          </div>
          <button title="More" className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        <div className="mb-2 text-sm font-medium text-gray-500">Other</div>
        <div className="space-y-4">
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <p className="font-medium">Interview with candidates</p>
              <p className="text-sm text-gray-500">Today - 10:30 AM</p>
            </div>
            <button title="More" className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-start pb-2">
            <div>
              <p className="font-medium">Short meeting with product designer from IT Departement</p>
              <p className="text-sm text-gray-500">Today - 09:15 AM</p>
            </div>
            <button title="More" className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button className="text-red-500 text-sm font-medium">Creat a New Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySchedule; 