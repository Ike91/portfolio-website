import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../partials/LeftSidebar";
import RightSideBar from "../partials/RightSidebar";
function Layout() {
  return (
    <div className="bg-[#22212b]">
      <LeftSideBar />
      <main className="pt-5">
        <Outlet />
      </main>
      <RightSideBar />
    </div>
  );
}

export default Layout;
