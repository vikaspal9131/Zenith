import { useState } from "react";

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="w-full top-0 left-0 z-50 fixed ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-blue-600">Home</a>
            <a href="#" className="text-white hover:text-blue-600">About</a>
            <a href="#" className="text-white hover:text-blue-600">Services</a>
            <a href="#" className="text-white hover:text-blue-600">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span> 
              ) : (
                <span className="text-2xl">&#9776;</span> 
              )}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
    </>
  );
}

export default Navbar;
