import React from "react";

import Typewriter from "typewriter-effect";


import "../Pages/Dashboard.css";
import EducatorSideBar from "./EducatorSideBar";

function EducatorDashboard() {

  return (
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
              className="text-yellow-400"
              options={{
                strings: [
                  "Your Educator",
                  "DASHBOARD.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        {/* side bar  */}

    <EducatorSideBar />
      </div>
    </>
  );
}

export default EducatorDashboard;
