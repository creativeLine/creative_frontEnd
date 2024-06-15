import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the name list from the API when the component mounts
    const fetchNames = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in local storage");
        }
        
        const response = await axios.get('http://localhost:8080/employee/nameList', {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the request header
          }
        });
        setEmployees(response.data); // Assuming response.data contains the array of employee names
      } catch (error) {
        console.error("There was an error fetching the name list!", error);
      }
    };

    fetchNames();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm === "") {
      setResults([]);
    } else {
      const filteredEmployees = employees.filter((employee) =>
        employee.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredEmployees);
    }
  };

  return (
    <div className="top_left">
      <input
        type="search"
        placeholder="search employee"
        className="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="sBtn" onClick={handleSearch}>search</button>
      <div id="nameSpace">
        {results.map((employee, index) => (
          <p key={index}>{employee}</p>
        ))}
      </div>
    </div>
  );
};

export default Search;
