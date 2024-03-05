import React from "react";

export default function RequestsContent() {
  return (
    <div className="admin">
      <h4 className="text-sm text-yellow-300 mb-4 text-bold">
        Accademic transcript request
      </h4>
      <div
        class=" card  border-t border-b mt-2 border-blue-500 text-blue-700 px-4 py-4"
        role="alert"
      >
        <h4 class="font-bold mb-3 text-yellow-600">
          <i className="fas fa-bell mr-2"></i>
          Informational message
        </h4>

        <a class="text-sm">Hlayisani has requested your academic transcript</a>

        <div className="d-flex mt-1">
          <a className="btn adminBtn btn-primary border-yellow-300 mr-2">
            <i className="fas fa-paper-plane fa-xs mr-2"></i>
            Send
          </a>
          <a className="btn adminBtn btn-primary ">
            <i className="fas fa-ban fa-xs mr-2"></i>
            Ignore
          </a>
        </div>
      </div>
      <div
        class=" card  border-t border-b mt-2 border-blue-500 text-blue-700 px-4 py-4"
        role="alert"
      >
        <h4 class="font-bold mb-3 text-gray-200">
          <i className="fas fa-bell mr-2"></i>
          Informational message
        </h4>

        <a class="text-sm">Hlayisani has requested your academic transcript.</a>
        <div className="d-flex mt-1">
          <a className="btn adminBtn btn-primary mr-2">
            <i className="fas fa-paper-plane fa-xs mr-2"></i>
            Send
          </a>
          <a className="btn adminBtn btn-primary">
            <i className="fas fa-ban fa-xs mr-2"></i>
            Ignore
          </a>
        </div>
      </div>
      <div
        class=" card  border-t border-b mt-2 border-blue-500 text-blue-700 px-4 py-4"
        role="alert"
      >
        <h4 class="font-bold mb-3 text-gray-200">
          <i className="fas fa-bell mr-2"></i>
          Informational message
        </h4>
        <a class="text-sm">Hlayisani has requested your academic transcript</a>
        <div className="d-flex mt-1">
          <a className="btn adminBtn btn-primary mr-2">
            <i className="fas fa-paper-plane fa-xs mr-2"></i>Send{" "}
          </a>
          <a className="btn adminBtn btn-primary">
            <i className="fas fa-ban fa-xs mr-2"></i>
            Ignore
          </a>
        </div>
      </div>
    </div>
  );
}
