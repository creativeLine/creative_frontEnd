import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from "./Compenents/login/Login"
import Register from "./Compenents/register/Register";
import Home from './Compenents/Home/Home';
import Logout from "./Compenents/logout/Logout";
import Update from "./Compenents/update/Update";
import AddEmployee from "./Compenents/addEmployee/AddEmployee";
// Import other components as needed

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/logout",
      element: <Login/>
    },
    {
      path: "/update",
      element: <Update/>
    },

    {
      path: "/addEmployee",
      element: <AddEmployee/>
    }
    // Add additional routes here
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
      {/* Ensure all components using routing context are within RouterProvider */}
    </div>
  );
}

export default App;
