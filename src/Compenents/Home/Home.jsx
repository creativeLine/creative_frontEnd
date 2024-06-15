import React, { useState } from "react";
import SideNavBar from "../Nav/SideNavBar";
import "./home.css";
import Cards from "../pages/Cards"
import Table from "./table/Table";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (expanded) => {
        setIsSidebarOpen(expanded);
    };

    return (
        <div className="home-container">

            <SideNavBar onToggle={handleToggleSidebar} />
            <div className={`side-home ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="home_component">
                    
                <div className="card-component">
                < Cards/>
                </div>
                
            <div className="table_component">    <Table /></div>
                </div>
            </div>
        </div>
        
        
    );
};

export default Home;
