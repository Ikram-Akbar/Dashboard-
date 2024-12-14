import { useState } from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const TopNav: React.FC<{ onToggleSidebar: () => void }> = ({
  onToggleSidebar,
}) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleToggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsProfileDropdownOpen(false);
  };

  const handleToggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsNotificationOpen(false);
  };

  const closeAllDropdowns = () => {
    setIsNotificationOpen(false);
    setIsProfileDropdownOpen(false);
  };

  return (
    <header className="shadow-md bg-white h-16 px-8 flex items-center">
      <button aria-label="Toggle sidebar" onClick={onToggleSidebar}>
        <HiOutlineMenuAlt2 size={24} />
      </button>

      <div className="ms-auto flex items-center gap-6">
        <div className="relative">
          <button
            className="relative hover:text-primary-500"
            aria-label="Notifications"
            aria-expanded={isNotificationOpen}
            onClick={handleToggleNotificationDropdown}
          >
            <FiBell size={24} />
            <span className="inline-block h-4 w-4 bg-primary-500 text-xs text-white rounded-full absolute -top-1 -right-1">
              3
            </span>
          </button>

          {isNotificationOpen && (
            <div
              className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
              onClick={closeAllDropdowns}
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:text-primary-500 cursor-pointer">
                  You have 3 new orders
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center hover:text-primary-500"
            aria-label="Profile menu"
            aria-expanded={isProfileDropdownOpen}
            onClick={handleToggleProfileDropdown}
          >
            <span className="text-sm font-medium">Admin</span>
            <FiChevronDown />
          </button>

          {isProfileDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
              onClick={closeAllDropdowns}
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-primary-500">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-primary-500">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-primary-500">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
