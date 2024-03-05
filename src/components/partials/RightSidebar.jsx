import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaAddressBook,
  FaCog,
} from "react-icons/fa";

function RightSidebar() {
  const [isSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const location = useLocation();

  const handleRightSidebarToggle = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  function getHeaderText() {
    const currentRoute = location.pathname.split("/").pop();
    return currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
  }

  const headerText = getHeaderText() || "Home";

  return (
    <div className="sidebar w-40 leading-15">
      <aside
        id="right-sidebar"
        className={`fixed top-0 right-0 w-30 h-screen transition-transform ${
          isSidebarOpen ? "" : "translate-x-full"
        } sm:translate-x-0 hidden sm:block`}
        aria-label="Sidebar"
      >
        <div className="h-full w-30 p-2.5 py-4 flex flex-col items-center bg-[#1f1e28]">
          <button
            data-drawer-target="right-sidebar"
            data-drawer-toggle="right-sidebar"
            aria-controls=""
            type="button"
            className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleRightSidebarToggle}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <h4 className="vertical-text mt-4 text-white">{headerText}</h4>
        </div>
      </aside>

      {isRightSidebarOpen && (
        <aside
          id="right-sidebar"
          className={`fixed -top-4 right-0 w-30 h-screen transition-transform ${
            isRightSidebarOpen ? "" : "translate-x-full"
          } sm:translate-x-0`}
          aria-label="Right Sidebar"
        >
          <div className="h-full w-30 top-0 p-2.5 py-4 flex flex-col items-center bg-[#1f1e28]">
            <button
              type="button"
              className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleRightSidebarToggle}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>

            <aside
              className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <button
                type="button"
                className="absolute top-4 right-4 text-white text-sm p-1 rounded-lg hover:bg-[#3e3d47] focus:outline-none focus:ring focus:ring-[#3e3d47]"
                onClick={handleRightSidebarToggle}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.172 10l4.94-4.94a1 1 0 10-1.415-1.414L11.758 8.586 6.818 3.646a1 1 0 10-1.415 1.415L10.343 10l-4.94 4.94a1 1 0 101.415 1.414L11.758 11.41l4.94 4.94a1 1 0 101.415-1.414L13.172 10z"
                  ></path>
                </svg>
              </button>
              <div className="h-full py-4 mt-3 overflow-y-auto bg-[#1f1e28]">
                <nav className="flex items-center justify-between px-4 py-2 bg-gray-800">
                  <div className="text-white font-bold text-xl">
                    Isaac Mhlanga
                  </div>
                </nav>
                <ul className="bg-transparent flex flex-col mt-4 ml-4 space-y-2">
                  <li>
                    <Link
                      to="/"
                      onClick={handleRightSidebarToggle}
                      className="text-white hover:text-yellow-300"
                    >
                      <FaHome size={15} className="inline-block mr-2" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education"
                      onClick={handleRightSidebarToggle}
                      className="text-white hover:text-yellow-300"
                    >
                      <FaGraduationCap
                        size={15}
                        className="inline-block mr-2"
                      />
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      onClick={handleRightSidebarToggle}
                      className="text-white hover:text-yellow-300"
                    >
                      <FaCog size={15} className="inline-block mr-2" />
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/work-experience"
                      onClick={handleRightSidebarToggle}
                      className="text-white hover:text-yellow-300"
                    >
                      <FaBriefcase size={15} className="inline-block mr-2" />
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={handleRightSidebarToggle}
                      className="text-white hover:text-yellow-300"
                    >
                      <FaAddressBook size={15} className="inline-block mr-2" />
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      onClick={handleRightSidebarToggle}
                      className="text-white hover:text-yellow-300"
                    >
                      <i class="fas fa-sign-in-alt fa-lg  mr-2"></i>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </aside>
      )}
    </div>
  );
}
export default RightSidebar;
