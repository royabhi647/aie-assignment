import React from "react";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div
      style={{
        background: "#F5F6F7",
        width: "1992px",
        height: "1600px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
