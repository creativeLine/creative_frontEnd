import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Table.css";

const Table = ({ isNavExpanded }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [count ,setcount] = useState(1);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      const response = await axios({
        method: "get",
        url: "http://169.254.75.170:8080/employee/getAll",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let sortedData = response.data.sort((a, b) => {
        // Assuming empCode is a string in the format "EMPxxx", compare them as strings
        return a.empCode.localeCompare(b.empCode);
      });

      setData(sortedData);
      console.log(sortedData);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, [isNavExpanded]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.empName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredData);
  }, [searchTerm, data]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (empCode) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios({
        method: "delete",
        url: `http://localhost:8080/employee/delete/${empCode}`, // Add a forward slash before empCode
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        // If deletion is successful, fetch the updated list of employees
        fetchData();
        console.log("Employee deleted successfully");
      } else {
        throw new Error(`Failed to delete employee. Status: ${response.status}`);
      }
    } catch (error) {
      console.log("Error deleting employee:", error.message);
    }
  };

  return (
    <div className={`second_Part ${isNavExpanded ? "expanded" : "collapsed"}`}>
      <div className="search_container">
        <input
          type="search"
          placeholder="Search employee"
          className="search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="table">
        <table className="tables">
          <thead className="header">
            <tr>
              <th>S.NO</th>
              <th>EMPCODE</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <tr key={item.transId}>
                <td>{index+1}</td>
                <td>{item.empCode}</td>
                <td>{item.empName}</td>
                <td>{item.empDeptCode}</td>
                <td>{item.empDesgCode}</td>
                <td>
  {item.attendance && item.attendance.monthList && item.attendance.monthList.length > 0 && item.attendance.monthList[0].dayList.length > 0 ? (
    item.attendance.monthList[0].dayList[0].status === 'PP' ? 'Present' : item.attendance.monthList[0].dayList[0].status
  ) : (
    "Absent"
  )}
</td>

                <td>{item.empEmail}</td>
                <td className="edit">
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit
                </td>
                <td>
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.empCode)} /> Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default Table;
