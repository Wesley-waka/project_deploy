import React from "react";

import { NavLink } from "react-router-dom";
import "../Pages/Dashboard.css";
import Logout from "./Logout";
function Dashboard({ dashboardItems, children }) {


  return (
    <div className="container  ">
      {/* SIDEBAR/ NAVBAR  */}

      {/* logo upper side  */}
      <div className="sidebar">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">
              R
            </h1>

            {/* <div className="bars">
            <FaBars  />
          </div> */}
          </div>

          {/* details side  */}

          <aside id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div
              className="h-full px-3 py-2 overflow-y-auto sidebar"
              style={{
                // backgroundColor: "blue",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "-20px",
              }}
            >
              <NavLink to="/admin">
                <h1
                  className="text-5xl text-white font-bold mx-20 pb-5 pl-10 "
                  style={{ paddingLeft: "0px" }}
                >
                  V<span className="text-5xl text-orange-500 ">S </span>
                </h1>
              </NavLink>
              <ul className="space-y-2 font-medium">
                {dashboardItems.map((item, index) => (
                  // <li>
                  <NavLink
                    to={item.path}
                    key={index}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  >
                    <div className="text-xl">
                      {item.icon}
                    </div>
                    <span className="flex-1 ml-3 text-2xl text-start">{item.name}</span>
                  </NavLink>
                  // </li>
                ))}
                <div style={{ paddingTop: "30px" }}>
                  <hr className="border-1 items-center my-10"></hr>
                </div>
              </ul>

              <Logout className="px-20" />
            </div>
          </aside>
        </div>
        <br />

        {/* CONTENT SIDE  */}

        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
