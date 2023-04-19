import React, { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';
function Home() {

  const navigate = useNavigate();
  const [details, setDetails] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      const logData = sessionStorage.getItem("loginData");
      if (logData) {
        const data = JSON.parse(logData);
        setDetails([...data]);
      }else{
        navigate('/')
      }
    }, 10)
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("loginData");
    navigate('/')
  };
  return (
    <>
      <nav>
        <div className="row g-0">
          <div className="col-12 d-flex bg-dark w-100 h-50 " >
            <div className="col-8">
              <p className="float-start text-light my-3 mx-sm-5 px-3 py-2 hello-name display-6">
                Hello {details[0] && details[0].name}
              </p>
            </div>
            <div className="col-4">
              <button className="btn btn-warning float-end mx-3 my-4 mx-sm-5 px-3 py-2" onClick={() => handleLogout()}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row h-100 g-0">
          <div className=" col-12 modaled border rounded-5 py-5 px-4 px-sm-5 d-flex flex-column justify-contnet-center align-items-center">
            <p className="display-6 pb-0 mb-0">You have registered </p>
            <span className="text-success successfully">Successfully</span>
            <div className="profilePic">
              <img
                src={details[0] && details[0].file}
                className="border my-4 rounded-circle"
                alt="Profile Image"
                width="150px"
                height="150px"
              />
            </div>
            <div className="pb-2 w-100">
              <span className="additional float-start">Additional Information: </span>
              <br />
            </div>
            <div className=" pb-1  w-100">
              <span className="email float-start">Email: <span className="items-email">{details[0] && details[0].email}</span></span>
              <br />
            </div>
            <div className=" pt-1  w-100">
              <span className="phone float-start">Phone No: <span className="items-phone">{details[0] && details[0].phone}</span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;