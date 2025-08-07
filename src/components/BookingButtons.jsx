import React from "react";

export default function BookingButtons() {
  return (
    <div className="fixed bottom-0 md:bottom-12 md:right-12 z-50 w-full md:w-auto">
      <div className="bg-black border-t md:border border-gray-700 overflow-hidden shadow-lg">
        <div className="flex">
          {/* BOOK A ROOM Button */}
          <button className="flex items-center justify-center px-8 py-4 flex-1 md:flex-none">
            <span className="text-white font-bold text-md uppercase">
              BOOK A <span className="text-pink-400">ROOM</span>
            </span>
            <img
              src="/imgi_142_button-play-icon.svg"
              alt="Arrow"
              className="w-6 h-6 ml-2"
            />
          </button>

          {/* Divider */}
          <div className="w-px bg-gray-600 hidden md:block"></div>

          {/* BOOK A TABLE Button */}
          <button className="flex items-center justify-center px-8 py-4 flex-1 md:flex-none">
            <span className="text-white font-bold text-md uppercase">
              BOOK A <span className="text-blue-300">TABLE</span>
            </span>
            <img
              src="/imgi_142_button-play-icon.svg"
              alt="Arrow"
              className="w-6 h-6 ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
