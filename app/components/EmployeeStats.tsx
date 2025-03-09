const EmployeeStats = () => {
  return (
    <div className="space-y-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-pink-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Available Position</h2>
          <p className="text-4xl font-bold mb-2">24</p>
          <p className="text-sm text-red-500">4 Urgently needed</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Job Open</h2>
          <p className="text-4xl font-bold mb-2">10</p>
          <p className="text-sm text-blue-500">4 Active hiring</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-2">New Employees</h2>
          <p className="text-4xl font-bold mb-2">24</p>
          <p className="text-sm text-purple-500">4 Department</p>
        </div>
      </div>

      {/* Middle Stats with Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Total Employees</h2>
            <div className="flex items-center text-red-500 text-sm">
              <span>+2%</span>
              <svg className="w-16 h-8 ml-2" viewBox="0 0 100 30">
                <path d="M0,30 L10,25 L20,28 L30,20 L40,25 L50,15 L60,20 L70,10 L80,15 L90,5 L100,0" fill="none" stroke="#f87171" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-bold mb-4">216</p>
          <div className="flex text-sm text-gray-500">
            <div className="mr-4">120 Men</div>
            <div>96 Women</div>
          </div>
          <div className="mt-2 text-sm text-green-600">+2% Past month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Talent Request</h2>
            <div className="flex items-center text-red-500 text-sm">
              <span>+5%</span>
              <svg className="w-16 h-8 ml-2" viewBox="0 0 100 30">
                <path d="M0,30 L10,25 L20,28 L30,20 L40,25 L50,15 L60,20 L70,10 L80,15 L90,5 L100,0" fill="none" stroke="#f87171" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-bold mb-4">16</p>
          <div className="flex text-sm text-gray-500">
            <div className="mr-4">6 Men</div>
            <div>10 Women</div>
          </div>
          <div className="mt-2 text-sm text-green-600">+5% Past month</div>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Announcement</h2>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Today, 13 Sep 2021</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="space-y-0">
          {/* First announcement */}
          <div className="bg-[#FAFAFA] rounded-lg p-4 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Outing schedule for every departement</p>
                <p className="text-sm text-gray-500">5 Minutes ago</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 bg-gray-100 p-1.5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="text-gray-400 p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Second announcement */}
          <div className="bg-[#FAFAFA] rounded-lg p-4 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">Meeting HR Department</p>
                <p className="text-sm text-gray-500">Yesterday, 12:30 PM</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 bg-gray-100 p-1.5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="text-gray-400 p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Third announcement */}
          <div className="bg-[#FAFAFA] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 mb-1">IT Department need two more talents for UX/UI Designer position</p>
                <p className="text-sm text-gray-500">Yesterday, 09:15 AM</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 bg-gray-100 p-1.5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="text-gray-400 p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center border-t pt-4">
          <button className="text-red-500 text-sm font-medium">See All Announcement</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats; 