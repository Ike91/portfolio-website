import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import BarRating from "../../components/partials/BarRating";
import technologies from "../../data/data";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import resume from "../../documents/Isaac.pdf";

import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaAddressBook,
  FaDownload,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCog,
} from "react-icons/fa";

function LeftSideBar() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  //tongle the right sidebar of the mobile
  const toggleAside = () => {
    setIsAsideOpen((prevIsAsideOpen) => !prevIsAsideOpen);
  };

  // Function to handle sidebar toggle
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("default-sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };

  // Add event listener to the button for sidebar toggle
  useEffect(() => {
    const sidebarToggleButton = document.querySelector(
      '[data-drawer-toggle="default-sidebar"]'
    );
    if (sidebarToggleButton) {
      sidebarToggleButton.addEventListener("click", handleSidebarToggle);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (sidebarToggleButton) {
        sidebarToggleButton.removeEventListener("click", handleSidebarToggle);
      }
    };
  }, []);

  //download resume
  const handleDownload = () => {
    window.open(resume, "_blank");
  };

  // Destructuring the technologies object
  const { languages, frameworks, visualization, databses, tools, language } =
    technologies;

  return (
    <div className="sidebar w-full items-center bg-[#24242e] fixed top-0 leading-15 z-50">
      <div className="flex items-center bg-[#1f1e28] justify-between">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 mb-2 ml-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M4.75 2A.75.75 0 014 2.75v14.5a.75.75 0 011.5 0V2.75A.75.75 0 014.75 2zm10.5.75a.75.75 0 00-.75-.75H9.5a.75.75 0 100 1.5h5a.75.75 0 00.75-.75zm0 5a.75.75 0 00-.75-.75H9.5a.75.75 0 100 1.5h5a.75.75 0 00.75-.75zm0 5a.75.75 0 00-.75-.75H9.5a.75.75 0 100 1.5h5a.75.75 0 00.75-.75z"
            ></path>
          </svg>
        </button>

        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={toggleAside}
          className="inline-flex items-center p-2 mt-2 mb-2 mr-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="4" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      </div>

      <aside
        id="default-sidebar"
        class="fixed left-0 z-40 w-64 overflow-y-auto scrollbar-hide h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="sticky top-0 left-0 p-2  rounded-m bg-[#24242e] shadow-lg z-10">
          <div class="flex justify-center mt-2 mb-2 items-center ">
            <img
              class="rounded-full border p-2"
              src="../images/unnamed.png"
              alt=""
            />
          </div>
          <h4 className="text-m mt-3 pb-3 text-center font-medium text-gray-500 dark:text-gray-400">
            Isaac Mhlanga
          </h4>
        </div>

        <div className="bg-[#20202a] p-2">
          <p className="text-m p-2 font-medium text-gray-500 dark:text-gray-400">
            Languages Proficiency
          </p>
          <div className="mb-4 p-2">
            <div class="gap-8 sm:grid sm:grid-cols-1">
              <div>
                {languages.map((language) => (
                  <dl key={language.name}>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {language.name}
                    </dt>
                    <BarRating className="p-2" rating={language.rating} />
                  </dl>
                ))}
              </div>
            </div>
          </div>

          <hr className="text-gray-500 dark:text-gray-400" />

          <div className="p-2 ">
            <p className="text-m font-medium text-gray-500 dark:text-gray-400">
              Frameworks
            </p>
            <div class="gap-2 sm:grid sm:grid-cols-1">
              {frameworks.map((framework) => (
                <div
                  key={framework.name}
                  class="flex items-center text-gray-500"
                >
                  <AiOutlineCheck className="mr-2 mb-2.5 text-yellow-500" />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {framework.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr className=" text-gray-500 dark:text-gray-400" />

          <div className="p-2">
            <p className="text-m font-medium  text-gray-500 dark:text-gray-400">
              Visualization tools
            </p>
            <div class="gap-2 sm:grid sm:grid-cols-1">
              {visualization.map((visualization) => (
                <div
                  key={visualization.name}
                  class="flex items-center text-gray-500"
                >
                  <AiOutlineCheck className="mr-2 mb-2.5 text-yellow-500" />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {visualization.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr className=" text-gray-500 dark:text-gray-400" />

          <div className="mb-4 p-2">
            <p className="text-m font-medium text-gray-500 dark:text-gray-400">
              Databases
            </p>
            <div class="gap-8 sm:grid sm:grid-cols-1">
              <div>
                {databses.map((databse) => (
                  <dl key={databse.name}>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {databse.name}
                    </dt>
                    <BarRating className="p-2" rating={databse.rating} />
                  </dl>
                ))}
              </div>
            </div>
          </div>

          <hr className=" text-gray-500 dark:text-gray-400" />

          <div className="mb-4 p-2">
            <p className="text-m font-medium text-gray-500 dark:text-gray-400">
              Tools
            </p>
            <div class="gap-8 sm:grid sm:grid-cols-1">
              <div>
                {tools.map((tool) => (
                  <dl key={tool.name}>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {tool.name}
                    </dt>
                    <BarRating className="p-2" rating={tool.rating} />
                  </dl>
                ))}
              </div>
            </div>
          </div>

          <hr className=" text-gray-500 dark:text-gray-400" />

          <div className="mb-4 p-2">
            <div class="gap-8 sm:grid sm:grid-cols-1">
              <div>
                {language.map((language) => (
                  <dl key={language.name}>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {language.name}
                    </dt>
                    <BarRating className="p-2" rating={language.rating} />
                  </dl>
                ))}
              </div>
            </div>
          </div>

          <hr className=" text-gray-500 dark:text-gray-400" />

          <a
            type="button"
            onClick={handleDownload}
            className="btn btn-primary adminBtn mb-3 btn-lg mr-2 w-full"
          >
            <div className="flex items-center justify-center  text-white">
              <span>
                <FaDownload className="text-white mr-1 dark:text-white hover:text-yellow-400 " />
              </span>
              Download resume
            </div>
          </a>

          <div className="flex justify-center items-center space-x-3 bg-[#24242e] p-3 mb-5">
            <div className="rounded-full p-2 border text-gray-500">
              <a
                href="https://www.linkedin.com/in/isaac-mhlanga-31ba62217"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="text-gray-400" />
              </a>
            </div>
            <div className="rounded-full p-2 border text-gray-500">
              <a
                href="https://www.facebook.com/profile.php?id=100072606405818"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} className="text-gray-400" />
              </a>
            </div>
            <div className="rounded-full p-2 text-gray-500 border ">
              <a
                href="https://www.instagram.com/_isac_i"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} className="text-gray-400" />
              </a>
            </div>
            <div className="rounded-full p-2 text-gray-500 border">
              <a
                href="https://twitter.com/_Isaac_ike1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} className="text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      <aside
        id="default-sidebar"
        className={`fixed right-0 z-40 w-64 h-screen overflow-y-auto block transition-transform ${
          isAsideOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
        aria-label="Sidebar"
      >
        <div class="sticky top-0 right-0 p-2 h-screen  bg-[#24242e] shadow-lg z-10">
          <nav className="flex items-center justify-between px-4 py-2 bg-gray-800">
            <div className="text-white font-bold text-xl">Isaac Mhlanga</div>
          </nav>
          <ul className="bg-transparent flex flex-col mt-4 ml-4 space-y-2">
            <li>
              <Link
                to="/"
                onClick={toggleAside}
                className="text-white hover:text-yellow-300"
              >
                <FaHome className="inline-block mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                onClick={toggleAside}
                className="text-white hover:text-yellow-300"
              >
                <FaGraduationCap className="inline-block mr-2" />
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={toggleAside}
                className="text-white hover:text-yellow-300"
              >
                <FaCog className="inline-block mr-2" />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/work-experience"
                onClick={toggleAside}
                className="text-white hover:text-yellow-300"
              >
                <FaBriefcase className="inline-block mr-3" />
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleAside}
                className="text-white hover:text-yellow-300"
              >
                <FaAddressBook className="inline-block mr-2" /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default LeftSideBar;
