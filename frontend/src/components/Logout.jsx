import React, { useEffect } from 'react'
import "../styles/Logout.css";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {

    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("auth");
        toast.success("Logout successfull");

        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, [navigate]);
   

  return (
    <div className='logout-main'>
    <h1>Logout Successful!</h1>
    <p>You will be redirected to the landing page in 3 seconds...</p>
  </div>
  )
}

export default Logout