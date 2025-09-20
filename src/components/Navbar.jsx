import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="w-full absolute top-0 left-0 z-50 px-4 sm:px-6 lg:px-[80px]">
      <div className="max-w-8xl mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-5xl font-bold text-red-600 font-[Grenze_Gotisch]">Zenith</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-[Iceberg]">
        <div className="border border-white px-[10px] rounded-[3px]">
        <input className="rounded-[2px] px-3  text-white outline-none" type="text" placeholder="Search"/> <i class="ri-search-line"></i>
        </div>
          <a href="#" className="hover:text-red-600"> Home</a>
          <a href="#" className="hover:text-red-600">Explore</a>
          <a href="#" className="hover:text-red-600">Subscriptions</a>
          <a href="#" className="hover:text-red-600">History</a>
        
          <div className="w-8 h-8 rounded-xl bg-gray-300 overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/113900393?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none mr-4"
          >
            {isOpen ? <span className="text-2xl">&#10005;</span> : <span className="text-2xl">&#9776;</span>}
          </button>

          {/* Profile Icon */}
          <div className="w-8 h-8 rounded-xl bg-gray-300 overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/113900393?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black shadow-md flex flex-col">
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">Home</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">Explore</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">Subscriptions</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">History</a>
        </div>
      )}
    </nav>
    </>
  );
}

export default Navbar;
