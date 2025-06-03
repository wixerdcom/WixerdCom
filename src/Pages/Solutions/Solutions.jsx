import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Solutions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const subRoutes = [
    { path: "SOFNOVA", label: "SOFNOVA" },
    { path: "ARTISTRY", label: "ARTISTRY" },
    { path: "WIXACT", label: "WIXACT" },
  ];

  // Get current active route
  const currentRoute = subRoutes.find(route => 
    location.pathname.includes(route.path)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6 sm:pb-10">
      {/* Dropdown (shown on tablet and below) */}
      <div className="md:hidden mb-4 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-3 border-2 border-gray-200 rounded-lg bg-white shadow-sm hover:border-gray-300 transition-colors"
        >
          <span className="font-semibold text-gray-800">
            {currentRoute?.label || "Select Solution"}
          </span>
          <svg
            className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {subRoutes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) => 
                  `block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors ${
                    isActive ? 'bg-red-50 text-red-700 font-semibold' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* Horizontal Tabs (shown on desktop) */}
      <div className="hidden md:flex justify-start mb-6">
        <div className="flex gap-6 lg:gap-8 w-full">
          {subRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `relative font-bold text-lg px-3 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-red-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-red-700"
                    : "text-gray-600 hover:text-red-600"
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Solutions;