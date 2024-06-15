import React, { useState } from "react";
import SideNavBar from "../Nav/SideNavBar";
import "./addEmployee.css"; // Ensure this file has similar styles as home.css

const AddEmployee = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleToggleSidebar = (expanded) => {
    setIsSidebarOpen(expanded);
  }
  const keys = [
    "empCode",
    "empName",
    "empCatgCode",
    "empDeptCode",
    "empDesgCode",
    "empUnitCode",
    "empDOJ",
    "empDOL",
    "empLeftTag",
    "empAge",
    "empDOB",
    "gender",
    "empGuardianName",
    "empGuardianRelations",
    "empMotherName",
    "empNationality",
    "empEmail",
    "empHealthIns",
    "empTds",
    "empMiscDed",
    "empPaymentMode",
    "empAadhaarCardNo",
    "empPanNo",
    "empMaritalStatus",
    "empNominee",
    "empNomineeRelations",
    "empNomineeDOB",
    "empTimeInFirst",
    "empTimeOutFirst",
    "empTimeInLast",
    "empTimeOutLast",
    "empWorkingHours",
    "empBasicPay",
    "empRelaxTime",
    "empTeaTime",
    "empLunchTime",
    "empTeaTime2",
    "teaBreak1Out",
    "teaBreak2Out",
    "teaBreak1In",
    "teaBreak2In",
    "perHourWage",
    "perHourWageTime",
    "dailyWageHours",
    "empTeaTag",
    "empLunchTag",
    "empOverTimeTag",
    "empSundayTag",
    "empTimeDedOnlyTag",
    "empTeaTag2",
    "empPerHourWageTag",
    "empEpfTag",
    "empEfpfTag",
    "empESIDTag",
    "employeeBank",
    "tatalSalary",
    "attendance",
    "lunchBreakIn",
    "empReligion",
    "lunchBreakOut"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="addEmployee-container">
      <SideNavBar onToggle={handleToggleSidebar} />
      <div className={`side-addEmployee ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="addEmployee_component">
         <div className="form_container">
         <form>
            {keys.map((key) => (
              <div key={key} className="form-group">
                <label htmlFor={key}>{key}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  className="input-field"
                  placeholder={key}
                  value={formData[key] || ''}
                  onChange={handleChange}
                />
              </div>
            ))}
          </form>
         </div>

         <div className="abuutons">
            <button className="save_button">save</button>
            <button className="cancel_button">cancel</button>
         </div>
          
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;