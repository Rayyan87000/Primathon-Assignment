import { useState } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiChevronDown, FiUser } from "react-icons/fi";
 
import logo from "../assets/logos/a.png";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-0.5">

        {/* Logo with Tagline */}
        {/* <div className="flex-shrink-0">
          <img 
            src={logo} 
            alt="BBLUNT Logo" 
            className="h-6 md:h-8 w-auto mb-1"
          />
          <p className="text-[10px] md:text-xs text-gray-600">Salons + Products + Expertise</p>
        </div> */}

        {/* Logo with Tagline */}
<div className="flex-shrink-0">
  <img 
    src={logo}
    alt="BBLUNT Logo"
    className="h-6 md:h-8 w-auto"
  />
</div>


        {/* Desktop Menu */}
        <ul className="hidden mr-auto lg:flex items-center gap-6 py-3 md:gap-8 text-sm font-medium text-black ml-10 text:bold">
          <li className="cursor-pointer hover:text-gray-600 transition-colors flex items-center gap-1">
            Product
            <FiChevronDown className="w-4 h-4" />
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors flex items-center gap-1">
            Hair Care
            <FiChevronDown className="w-4 h-4" />
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors flex items-center gap-1">
            Hair Colour
            <FiChevronDown className="w-4 h-4" />
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors flex items-center gap-1">
            Hair Styling
            <FiChevronDown className="w-4 h-4" />
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition-colors flex items-center gap-1">
            Salon
            <FiChevronDown className="w-4 h-4" />
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <FiSearch className="w-5 h-5 md:w-6 md:h-6 cursor-pointer text-gray-800 hover:text-gray-600 transition-colors" />
          <div className="relative">
            <FiShoppingBag className="w-5 h-5 md:w-6 md:h-6 cursor-pointer text-gray-800 hover:text-gray-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
          <FiUser className="w-5 h-5 md:w-6 md:h-6 cursor-pointer text-gray-800 hover:text-gray-600 transition-colors hidden md:block" />

          {/* Hamburger (Mobile only) */}
          <button
            className="lg:hidden text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col px-4 py-4 gap-4 text-sm font-medium text-gray-800">
            <li className="cursor-pointer hover:text-gray-600 transition-colors py-2 flex items-center justify-between">
              Product <FiChevronDown className="w-4 h-4" />
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors py-2 flex items-center justify-between">
              Hair Care <FiChevronDown className="w-4 h-4" />
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors py-2 flex items-center justify-between">
              Hair Colour <FiChevronDown className="w-4 h-4" />
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors py-2 flex items-center justify-between">
              Hair Styling <FiChevronDown className="w-4 h-4" />
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors py-2 flex items-center justify-between">
              Salon <FiChevronDown className="w-4 h-4" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
