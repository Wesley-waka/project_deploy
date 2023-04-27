import React from "react";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import "../Pages/Dashboard.css";
import { MdOutlineLogin } from "react-icons/md";
// import { GoSignIn } from "react-icons/go";


function Landing() {



  const styles = {
    backgroundImage: 'src/components/images/hero-bcg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };


  return (
    <div
      className="text-center text-5xl text-bold max-h-screen"
      style={{ marginTop: "100px" }}
      // style={styles}
    >
      <div className="" >




        <h1 className="pb-20 font-extrabold" style={{ marginLeft: "200px", styles }}>
          {" "}
          Hello and welcome to
        </h1>
        <div
          className=" text-orange-500 font-black"
          style={{ marginLeft: "230px" }}
        >
          <Typewriter
            className="text-orange-500"
            options={{
              strings: [
                "Virtual classroom.",
                "",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>


      </div>



      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-2 overflow-y-auto sidebar"
          style={{
            // backgroundColor: "blue",
            paddingTop: "30px",
            paddingLeft: "20px",
            paddingRight: "-20px",
          }}
        >
          <NavLink to="/">
            <h1
              className="text-5xl text-white font-bold pb-5 pl-0"
              style={{ paddingLeft: "0px" }}
            >
              V<span className="text-5xl text-orange-500 ">S </span>
            </h1>
          </NavLink>
          <ul className="space-y-2 font-medium">




            <li>
              <NavLink
              style={{ marginTop:"400px" }}
                to="/login"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
              >
                <div className="text-xl">
                  <MdOutlineLogin />
                </div>
                <span className="flex-1 ml-3 text-2xl text-start">Login</span>
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                to="/signUp"
              >
                <div className="text-xl">
                  <GoSignIn />
                </div>
                <span className="flex-1 ml-3 text-2xl text-start">Sign Up</span>
              </NavLink>
            </li> */}
            <div style={{ paddingTop: "10px" }}>
              <hr className="border-4 items-center pr-10"></hr>
            </div>
          </ul>
        </div>
      </aside>




    </div>
  );
}

export default Landing;
