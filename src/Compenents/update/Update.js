import React, { useState } from "react";
import SideNavBar from "../Nav/SideNavBar";
import "./update.css"; // Ensure this file has similar styles as home.css

const Update = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (expanded) => {
    setIsSidebarOpen(expanded);
  };

  return (
    <div className="update-container">
      <SideNavBar onToggle={handleToggleSidebar} />
      <div className={`side-update ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="update_component">
          <div className="update-content">
            {/* Include additional content or components as needed */}
            <h1>Hello, this is the Update component</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
