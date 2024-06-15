import React, { useState } from 'react';
import SideNav, { Toggle, NavItem, NavText, NavIcon } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faHouse, faUser, faUserPlus, faUsers, faCalendar, faSignOut } from "@fortawesome/free-solid-svg-icons";
import  "./nav.css";    
import { useNavigate } from "react-router-dom";

function SideNavBar({ onToggle }) {
    const navigate = useNavigate();

    const handleToggle = (expanded) => {
        onToggle(expanded);
    };

    return (
        <SideNav onToggle={handleToggle} onSelect={(selected) => { navigate("/" + selected); }}>
            <Toggle />
            <SideNav.Nav>
                <NavItem eventKey="home">
                    <NavIcon><FontAwesomeIcon icon={faHouse} /></NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="employee">
                    <NavIcon><FontAwesomeIcon icon={faUser} /></NavIcon>
                    <NavText>Employee</NavText>
                </NavItem>
                <NavItem eventKey="update">
                    <NavIcon><FontAwesomeIcon icon={faPenToSquare} /></NavIcon>
                    <NavText>Update</NavText>
                </NavItem>
                <NavItem eventKey="delete">
                    <NavIcon><FontAwesomeIcon icon={faTrash} /></NavIcon>
                    <NavText>Delete</NavText>
                </NavItem>
                <NavItem eventKey="addEmployee">
                    <NavIcon><FontAwesomeIcon icon={faUserPlus} /></NavIcon>
                    <NavText>Add Employee</NavText>
                </NavItem>
                <NavItem eventKey="getEmployees">
                    <NavIcon><FontAwesomeIcon icon={faUsers} /></NavIcon>
                    <NavText>Employees</NavText>
                </NavItem>
                <NavItem eventKey="attendance">
                    <NavIcon><FontAwesomeIcon icon={faCalendar} /></NavIcon>
                    <NavText>Attendance</NavText>
                </NavItem>
                <NavItem eventKey="logout">
                    <NavIcon><FontAwesomeIcon icon={faSignOut} /></NavIcon>
                    <NavText>Log Out</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideNavBar;
