import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../Home/table/Table";
import "./cards.css";

const Cards = () => {
  const [total, setTotal] = useState(0);
  const [present, setPresent] = useState(0);
  const [absent,setAbsent] = useState(0);


  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        const response = await axios({
          method: "get",
          url: "http://localhost:8080/employee/getAll",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        const data = response.data;
        setTotal(data.length);
        setPresent(1)
        console.log(data);
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    })();
  }, []);

  return (
    <div className="main-container">
      <div className="home">
        <div className="box1">
          <p>Total Employees</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{total}</h1>
          </div>
        </div>
        <div className="box2">
          <p>Present Employees</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{present}</h1>
          </div>
        </div>
        <div className="box3">
          <p>Absent Employees</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{total}</h1>
          </div>
        </div>
        <div className="box4">
          <p>Employees on Leave</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{total}</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
