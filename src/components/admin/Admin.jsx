import React, { useState } from "react";
import HomeContent from "./HomeContent";
import ProjectsContent from "./ProjectsContent";
import RequestsContent from "./RequestsContent ";
import AddProject from "./AddProject";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("home");

  // Function to handle tab clicks and update the active tab state
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="p-4 sm:ml-64 sm:mr-35">
      <div class="container admin">
        <div className="d-flex p-2 mb-3">
          <a
            className={`btn btn-primary adminBtn btn-sm mr-2 ${
              activeTab === "home" ? "active" : ""
            }`}
            onClick={() => handleTabClick("home")}
          >
            <i class="fas fa-home mr-2"></i>
            Home
          </a>

          <a
            className={`btn btn-primary adminBtn btn-sm mr-2 ${
              activeTab === "projects" ? "active" : ""
            }`}
            onClick={() => handleTabClick("projects")}
          >
            <i class="fas fa-newspaper mr-2"></i>
            Projects
          </a>
          <a
            className={`btn btn-primary adminBtn btn-sm mr-2 ${
              activeTab === "requests" ? "active" : ""
            }`}
            onClick={() => handleTabClick("requests")}
          >
            <i class="fas fa-file-alt mr-2"></i>
            Requests
          </a>
          <a
            className={`btn btn-primary adminBtn btn-sm mr-2 ${
              activeTab === "addproject" ? "active" : ""
            }`}
            onClick={() => handleTabClick("addproject")}
          >
            <i class="fas fa-plus mr-2"></i>
            Add Project
          </a>
        </div>
        <hr className="text-gray-200"></hr>

        <div className="content">
          {activeTab === "home" && <HomeContent />}
          {activeTab === "projects" && <ProjectsContent />}
          {activeTab === "addproject" && <AddProject />}
          {activeTab === "requests" && <RequestsContent />}
        </div>
      </div>
    </div>
  );
}
