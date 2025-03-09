import Image from 'next/image';
import { BellIcon, BurgerIcon, SearchIcon, DownIcon, MessagesIcon } from "@/app/lib"
interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center py-4 xl:py-6 mx-6 border-b border-[#E0E0E0]">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Burger Button */}
        <button
          title="Toggle Sidebar"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="xl:hidden mr-2 cursor-pointer"
        >
          <Image src={BurgerIcon} alt="Burger" className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="relative xl:w-80 mr-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-10 py-2 bg-gray-50 border border-[#E0E0E0] rounded-sm focus:outline-none hidden sm:block placeholder:text-[#B3B3B3]"
          />
          <div className="sm:absolute right-5 top-3 text-gray-400">
            <Image src={SearchIcon} alt="Search" className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="relative">
          <Image src={BellIcon} alt="Bell" className="w-6 h-6" />
          <span className="absolute top-0 right-0 border-1 border-white bg-[#FF5151] text-white rounded-full w-3 h-3 flex items-center justify-center text-xs"></span>
        </div>

        <div className="relative">
          <Image src={MessagesIcon} alt="Messages" className="w-6 h-6" />
        </div>

        <div className="flex items-center gap-2">
          <Image src="/Admirra_John.png" alt="Profile" width={36} height={36} className="rounded-full" />
          <div className="flex items-center gap-2">
            <span className="font-medium hidden xl:block text-[#161E54]">Admirra John</span>
            <Image src={DownIcon} alt="Down" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 