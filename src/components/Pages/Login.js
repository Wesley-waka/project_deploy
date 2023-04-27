





import React, { useState, useContext, } from "react";


import { AuthContext } from "../Pages/AuthContext";
import {
  // useNavigate,
  NavLink,
} from "react-router-dom";

function Login({ schools, selectedSchoolId, setSelectedSchoolId }) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  // const token = localStorage.getItem("jwt");



  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleSchoolSelect = (event) => {
    const schoolId = event.target.value;
    setSelectedSchoolId(schoolId);
  };

  // console.log(login);
  // {
  //   fetch("https://vs-app.herokuapp.com//educators")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  // }
  return (
    <div>

      <div className="items-center pt-5 pl-32" style={{ paddingLeft: "500px" }}>
        <a href="/">
          <h1
            className="text-5xl text-blue-800 font-bold pb-5 pl-20"
            style={{ paddingLeft: "140px" }}
          >
            V<span className="text-5xl text-orange-500 ">S </span>
          </h1>
        </a>

        <div className="w-full max-w-sm p-4 bg-white border border-black rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full 
              p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="virtualschool@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start"></div>
            </div>
            <div>


              <div>
                <select value={selectedSchoolId} onChange={handleSchoolSelect}>
                  {" "}
                  <option value="">Select a school</option>{" "}
                  {schools && schools.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.school_name}
                    </option>
                  ))}
                </select>
                <p>Selected school ID: {selectedSchoolId}</p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <NavLink
                to="/signup"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


// }
