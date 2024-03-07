import React, { useState } from "react";

import Resume from "./Resume";
import Academic from "./AcdemicRecord";

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState("resume");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center mt-1">
            <div className="card-header admin">
              <h4>Page visits</h4>
            </div>
            <div className="card-body">
              <h4>0</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center  mt-1">
            <div className="card-header admin">
              <h4>Page visits</h4>
            </div>
            <div className="card-body">
              <h4>120</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-1 text-center">
            <div className="card-header admin">
              <h4>Page visits</h4>
            </div>
            <div className="card-body">
              <h4>120</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex p-2 ">
          <a
            onClick={() => handleTabClick("resume")}
            className={`btn btn-primary adminBtn btn-sm mr-2
            ${activeTab === "resume" ? "active" : "border-yellow-700"}`}
          >
            <i className="fas fa-file-alt mr-2"></i>
            update resume
          </a>

          <a
            onClick={() => handleTabClick("academic")}
            className={`btn btn-primary adminBtn btn-sm mr-2
            ${activeTab === "academic" ? "active" : ""}`}
          >
            <i className="fas fa-graduation-cap mr-2"></i>
            Academic record
          </a>
        </div>
      </div>
      <hr className="text-gray-200"></hr>
      <div className="content ">
        {activeTab === "resume" && <Resume />}
        {activeTab === "academic" && <Academic />}
      </div>
    </div>
  );
}
