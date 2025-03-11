import React, { useState } from "react";

const PopupBox: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-80 font-sans rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold py-2 px-4 text-gray-800 bg-gray-100">Find Your Job</h2>
      <div className="border-t border-gray-300">
        {/* Search Jobflow */}
        <button className="flex items-center justify-between w-full border-b text-sm font-medium px-4 py-3 bg-white hover:bg-gray-200 ">
          <span>🔍 Search Jobflow</span>
        </button>

        {/* Enable Extension Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full text-sm font-medium px-4 py-3 border-b bg-white hover:bg-gray-200"
          >
            <span>🔗 Enable Extension</span>
            <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isDropdownOpen && (
            <div className="relative w-full bg-white rounded-md border-b">
              <div className="p-4 space-y-2 max-h-52 overflow-y-auto">
                <ToggleOption icon="🔗" label="LinkedIn" />
                <ToggleOption icon="✉️" label="Ycombinator" />
                <ToggleOption icon="📅" label="Glassdoor" />
                <ToggleOption icon="🌐" label="All websites" />
              </div>
            </div>
          )}
        </div>
        {/* Refresh Extension */}
        <button className="flex items-center justify-between w-full border-b text-sm font-medium px-4 py-3 bg-white hover:bg-gray-200 ">
          <span>↻ Refresh Extension</span>
        </button>
      </div>
    </div>
  );
};

interface ToggleOptionProps {
  icon: string;
  label: string;
}

const ToggleOption: React.FC<ToggleOptionProps> = ({ icon, label }) => {
  const [enabled, setEnabled] = useState<boolean>(true);

  const toggle = () => setEnabled(!enabled);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-xl">{icon}</span>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <button
        onClick={toggle}
        className={`px-4 py-1 text-sm font-medium rounded-md transition-colors ${
          enabled
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-red-500 text-white hover:bg-red-600"
        }`}
      >
        {enabled ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default PopupBox;