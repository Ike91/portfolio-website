import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

export default function AcdemicRecord() {
  function getTodaysDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1).toString().padStart(2, "0");
    var day = today.getDate().toString().padStart(2, "0");
    var formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }
  var todaysDate = getTodaysDate();
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="text-gray-300 p-2 card">
            <div className="card-header ">
              <div class="flex items-center gap-x-4 text-xs">
                <a
                  href="#"
                  class="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100"
                >
                  last updated
                </a>
                <time datetime="2020-03-16" class="text-gray-500 mt-2">
                  Thursday, December 9, 2021
                </time>
              </div>
            </div>
            <h3 className="pl-5">
              <i className="fas fa-file-pdf mr-1"></i>
              Academic record
            </h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-gray-300 p-2 ">
            <div className="card-header justify-center text-center">
              <div class="flex items-center gap-x-4 text-xs">
                <a
                  href="#"
                  class="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Updated academic record
                </a>
                <time datetime="2020-03-16" class="text-gray-500 mt-2">
                  {todaysDate}
                </time>
              </div>
            </div>
            <div className="card-body">
              <form>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="file"
                  placeholder="Language"
                  required
                />
                <a className="btn btn-primary adminBtn btn-sm mr-2">
                  <i className="fas fa-file-alt mr-2"></i>
                  update record
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
