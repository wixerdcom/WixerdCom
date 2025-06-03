import { NavLink, Outlet } from "react-router-dom";

const Solutions = () => {
  const subRoutes = [
    { path: "SOFNOVA", label: "SOFNOVA" },
    { path: "ARTISTRY", label: "ARTISTRY" },
    { path: "WIXACT", label: "WIXACT" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6 sm:pb-10">
      <div className="flex justify-start mb-4 sm:mb-6">
        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {subRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `relative font-bold text-base sm:text-lg md:text-xl px-2 sm:px-3 pb-1 sm:pb-2 transition-all duration-300 ${
                  isActive
                    ? "text-red-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-900"
                    : "text-gray-700 hover:text-red-700"
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Solutions;