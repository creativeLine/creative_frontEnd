import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

   const token =  localStorage.removeItem("token")
    console.log(token);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Performing logout'); // Check if this is printed

    // Perform logout logic here

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
