import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`bg-white dark:bg-gray-900 w-full z-70 top-0 start-0 ${
          isOpen ? "fixed" : ""
        }`}
      >
        <div className="max-w-screen flex flex-wrap items-center justify-between px-6 md:px-10 lg:px-20 py-5 mx-auto">
          {/* Logo and Bars */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              className={`relative w-6 h-4 cursor-pointer`}
              animate={isOpen ? "open" : "closed"}
              initial={false}
            >
              <motion.span
                className={`absolute top-1/2 left-0 w-full h-[2px] bg-black dark:bg-white`}
                variants={{
                  closed: {
                    y: -6,
                    rotate: 0,
                  },
                  open: {
                    y: 0,
                    rotate: 45,
                  },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`absolute top-1/2 left-0 w-full h-[2px] bg-black dark:bg-white`}
                variants={{
                  closed: {
                    y: 6,
                    rotate: 0,
                  },
                  open: {
                    y: 0,
                    rotate: -45,
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <img
              src="/imgi_1_FPJ-new.svg"
              className="h-[12px] md:h-[15px]"
              alt="Logo"
            />
          </div>

          {/* Icons */}
          <div className="flex md:order-2 sm:space-x-0 md:space-x-5 rtl:space-x-reverse items-center">
            <img
              src="/imgi_208_default.svg"
              className="h-4 w-4 transition-all hover:-translate-y-1 cursor-pointer"
              alt="Icon 1"
            />
            <img
              src="/imgi_209_default.svg"
              className="h-4 w-4 hidden md:block transition-all hover:-translate-y-1 cursor-pointer"
              alt="Icon 2"
            />
            <img
              src="/imgi_210_default.svg"
              className="h-4 w-4 hidden md:block animate-rotate-left cursor-pointer"
              alt="Icon 3"
            />
          </div>

          {/* Nav Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className={`me-5 flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-7 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${
                isOpen ? "hidden" : "hidden lg:flex"
              }`}
            >
              {["Rooms", "Dine", "Events", "Relax", "Music", "Shop"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="nav-link font-bold text-sm uppercase relative group"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu with Framer Motion */}
      <motion.div
        className="fixed inset-0 bg-white z-60"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : -100,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="flex h-full flex-col lg:flex-row">
          {/* Left Side - Navigation Links */}
          <motion.div
            className="w-full lg:w-2/3 h-full bg-[url('/imgi_223_header-dropdown-pattern.svg')] bg-[length:260px] bg-center p-8 sm:p-12 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {/* Main Navigation Links */}
            <div className="flex-1 flex flex-col justify-center">
              <ul className="space-y-5 lg:space-y-7">
                {[
                  "Rooms",
                  "Dine",
                  "Events",
                  "Relax",
                  "FIVE MUSIC",
                  "Shop",
                  "FIVE HOTELS & RESORTS",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      x: isOpen ? 0 : -20,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <a
                      href="#"
                      className="relative group inline-flex items-center text-2xl sm:text-3xl uppercase font-semibold text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* النص */}
                      <span
                        className="relative z-10 transition-all duration-500 ease-in-out 
    group-hover:text-gray-400"
                      >
                        {item}
                      </span>

                      {/* السهم */}
                      <span
                        className="absolute right-0 translate-x-[-50%] opacity-0 
  group-hover:translate-x-[100%] group-hover:opacity-100 
  transition-all duration-500 ease-in-out ml-3"
                      >
                        <img
                          src="/imgi_142_button-play-icon.svg"
                          alt="Arrow"
                          className="w-8 h-8"
                          style={{
                            filter:
                              "invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)",
                          }}
                        />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Sub Navigation Links */}
            <motion.div
              className="border-t border-gray-300 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-20">
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-gray-500 text-sm hover:text-black transition-colors"
                  >
                    Private Events
                  </a>
                  <a
                    href="#"
                    className="block text-gray-500 text-sm hover:text-black transition-colors"
                  >
                    What's On
                  </a>
                  <a
                    href="#"
                    className="block text-gray-500 text-sm hover:text-black transition-colors"
                  >
                    Come Play Fly
                  </a>
                </div>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-gray-500 text-sm hover:text-black transition-colors"
                  >
                    Sustainability
                  </a>
                  <a
                    href="#"
                    className="block text-gray-500 text-sm hover:text-black transition-colors"
                  >
                    Gallery
                  </a>
                  <a
                    href="#"
                    className="block text-gray-500 text-sm hover:text-black transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content Area (unchanged) */}
          <motion.div
            className="w-1/3 bg-[#ededed] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <div className="relative h-[650px] w-[500px] border-4 border-[#ededed] p-2 mt-10 overflow-hidden group">
              <img
                src="/imgi_16_SEVENROOMS-BG.jpg.webp"
                alt="Seven Rooms"
                className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
