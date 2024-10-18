import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft, FiMenu, FiX,FiChevronDown } from "react-icons/fi";

const FilterSidebar = ({ customTheme = "light", togglePosition = "right" }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Type of Plants", subItems: ["a","b"] },
    { name: "Price",  subItems: ["100-200", "200-500"] },
    { name: "Plant Size", subItems: ["a","b"] },
    { name: "Indoor/Outdoor", subItems: ["a","b"] },
    { name: "Light", subItems: ["a","b"] },
    { name: "Customer Rating", subItems: ["a","b"] }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleItemClick = (itemName) => setActiveItem(itemName);

  return (
    <div className={`relative ${isOpen ? "w-64" : "w-16"} transition-all duration-300 ease-in-out`}>
      <div
        className={`h-95 border rounded-lg border-gray-300 ${isOpen ? "w-64" : "w-16"} transition-all duration-300 ease-in-out bg-[#e6e7e7] p-4 mt-12 ml-8`}
      >
        
        <div className="flex items-center justify-between">
          {isOpen && <h1 className="text-xl font-bold">Filter</h1>}
          <button className="px-3 py-1 bg-white bg-opacity-70 border border-green-500 text-green-500 rounded-xl hover:bg-opacity-90 transition-all">
            {isOpen ?"Clear All" : <FiMenu />}
          </button>
        </div>
        <nav>

          <ul className="space-y-2 mt-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleItemClick(item.name)}
                  className={`w-full flex items-center p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 ${activeItem === item.name ? "bg-gray-200" : ""} transition-colors duration-200 ease-in-out`}
                  aria-expanded={activeItem === item.name && item.subItems.length > 0}
                >
                  <span className="mr-4">{item.icon}</span>
                  {isOpen && (
                    <>
                      <span>{item.name}</span>
                      {item.subItems.length > 0 && (
                        <FiChevronDown className={`ml-auto transition-transform duration-200 ${activeItem === item.name ? "transform rotate-90" : ""}`} />
                      )}
                    </>
                  )}
                </button>
                {activeItem === item.name && item.subItems.length > 0 && isOpen && (
                  <ul className="ml-8 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem}>
                        <button
                          onClick={() => handleItemClick(subItem)}
                          className="w-full flex items-center p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200 ease-in-out"
                        >
                          <FiChevronRight className="mr-2" />
                          <span>{subItem}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FilterSidebar;
