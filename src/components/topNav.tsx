import { useState } from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const TopNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="shadow-md bg-white h-16 px-8 flex items-center">
      <button aria-label="Open menu">
        <HiOutlineMenuAlt2 size={24} />
      </button>

      <div className="ms-auto flex items-center gap-6">
        <div className="relative">
          <button
            className="relative hover:text-primary-500"
            aria-label="Notifications"
            onClick={toggleDropdown}
          >
            <FiBell size={24} />
            <span className="inline-block h-4 w-4 bg-primary-500 text-xs text-white rounded-full absolute -top-1 -right-1">
              3
            </span>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
              onClick={() => setIsDropdownOpen(false)}
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  You have 3 new orders
                </li>
               
              </ul>
            </div>
          )}
        </div>

        <button className="flex items-center hover:text-primary-500" aria-label="Admin menu">
          <span className="text-sm font-medium">Admin</span>
          <FiChevronDown />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
