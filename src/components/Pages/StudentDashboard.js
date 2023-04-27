import React from "react";

import Typewriter from "typewriter-effect";
import StudentSideBar from "./StudentSideBar";

import "../Pages/Dashboard.css";
import LoginDashboard from "./LoginDashboard";

// import Dashboard from "./Dashboard";

function StudentDashboard() {
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;


  return (
    <>
      {isLoggedIn ? (
        <>
          <div
            className="text-center text-5xl text-bold max-h-screen max-sm"
            style={{
              marginTop: "100px",
              backgroundImage: "https://bit.ly/3GP68X0",
            }}
          >
            <div className="">
              <h1
                className="pb-20 pt-20 font-extrabold"
                style={{ marginLeft: "200px" }}
              >
                {" "}
                Hello and welcome to
              </h1>
              <div
                className=" text-orange-500 font-black"
                style={{ marginLeft: "230px" }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Your dream school where you can",
                      "achieve your dream to learn.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <StudentSideBar />
          </div>
        </>
      ) : (
        <>
          <div
            className="text-center text-5xl text-bold max-h-screen max-sm"
            style={{
              marginTop: "100px",
              backgroundImage: "https://bit.ly/3GP68X0",
            }}
          >
            <div className="">
              <h1
                className="pb-20 pt-20 font-extrabold"
                style={{ marginLeft: "200px" }}
              >
                {" "}
                Hello and welcome to
              </h1>
              <div
                className=" text-orange-500 font-black"
                style={{ marginLeft: "230px" }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Your dream school where you can",
                      "achieve your dream to learn.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <LoginDashboard />
          </div>
        </>
      )}
    </>
  );
}

export default StudentDashboard;
