"use client";

import React, { useState } from "react";

interface CustomDropdownProperties {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  disabled?: boolean; // Add this prop
}

const CustomDropdown: React.FC<CustomDropdownProperties> = ({
  options,
  selectedOption,
  onSelect,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-2 inline-block w-full text-left">
      <button
        type="button"
        onClick={handleToggle}
        style={{ borderRadius: "6px" }}
        className={`inline-flex w-full justify-between border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border focus:border-orange-500 focus:outline-none ${disabled ? "cursor-not-allowed bg-gray-100" : ""}`}
        disabled={disabled}
      >
        {selectedOption}
        <svg
          className="ml-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen &&
        !disabled && ( // Ensure dropdown only shows if not disabled
          <div className="shadow-lg absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 ring-gray-300">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 focus:outline-none ${selectedOption === option ? "bg-orange-100 text-orange-700" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default CustomDropdown;
