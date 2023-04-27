import React from "react";
import StudentSideBar from "./StudentSideBar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import LoginDashboard from "./LoginDashboard";

function Resource({ resource }) {
  
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  return (
    <>
      {isLoggedIn ? (
        <>
          <div>
            <div
              style={{
                paddingTop: "100px",
                paddingLeft: "20px",
                marginLeft: "250px",
                marginRight: "10px",
              }}
            >
              <Swiper
                slidesPerView={3}
                spaceBetween={16}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {resource &&
                  resource.map((resources) => {
                    return (
                      <>
                        <div style={{ marginTop: "10px" }}>
                          <SwiperSlide>
                            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                              <a href="/">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-orange-500 dark:text-white">
                                  {resources.resource_name}
                                </h5>
                              </a>
                              <p class="mb-3 font-normal text-black dark:text-gray-400">
                                {resources.subject}
                              </p>

                              {/* <p class="mb-3 font-normal text-black dark:text-gray-400">
     {resources.file}
    </p> */}
                              <a
                                href="/"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                View
                              </a>
                            </div>
                          </SwiperSlide>
                        </div>
                      </>
                    );
                  })}
              </Swiper>
            </div>
            <div>
              <StudentSideBar />
            </div>
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
            <h1> Login to access the resources</h1>
          </div>
          <LoginDashboard />
        </>
      )}
    </>
  );
}

export default Resource;
