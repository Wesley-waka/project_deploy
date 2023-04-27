import React from "react";
import LoginDashboard from "./LoginDashboard";
import StudentSideBar from "./StudentSideBar";

function Exam() {
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  // const email = sessionStorage.getItem("email");

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex">
            {/* <StudentDashboard /> */}

            <div
              className="flex flex-wrap gap-10 pt-5 pl-20"
              style={{ marginLeft: "200px", paddingTop: "100px" }}
            >
              {/* CARD 1 */}

              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Exam 1
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  Here are the your exams.
                </p>
                <a
                  href="/student/exam-page"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Start
                </a>
              </div>
            </div>

            {/* SIDE BAR  */}
            <StudentSideBar />
          </div>
        </>
      ) : (
        <>
          <div
            className="text-5xl"
            style={{
              text: "center",
              paddingTop: "200px",
              paddingLeft: "500px",
            }}
          >
            <h1> Login to access exams</h1>
          </div>
          <LoginDashboard />
        </>
      )}
    </>
  );
}

export default Exam;
