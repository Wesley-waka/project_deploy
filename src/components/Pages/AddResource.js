import React from "react";
import EducatorLoginSideBar from "./EducatorLoginSideBar";
import EducatorSideBar from "./EducatorSideBar";
function AddResource() {

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  // const email = sessionStorage.getItem("email");
  // console.log(email);

  return (
    <>

    {
      isLoggedIn ? (
<>
<div
      className="text-center text-5xl text-bold max-h-screen max-sm"
      style={{
        marginTop: "100px",
        backgroundImage: "https://bit.ly/3GP68X0",
      }}
    >
      <div
        style={{
          paddingTop: "10px",
          marginLeft: "300px",
          marginRight: "300px",
          paddingLeft: "200px",
        }}
      >
        <form>
          <div class="mb-6">
            <label
              for="topic"
              class="block mb-2 text-sm font-medium text-black"
            >
              Topic
            </label>
            <input
              type="text"
              id="topic"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="resource-type"
              class="block mb-2 text-sm font-medium text-black"
            >
              Resource type
            </label>
            <select
              id="resource-type"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            >
              <option value="">Select resource type</option>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="resource-link"
              class="block mb-2 text-sm font-medium text-black"
            >
              Resource link
            </label>
            <input
              type="url"
              id="resource-link"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="comments"
              class="block mb-2 text-sm font-medium text-black"
            >
              Comments
            </label>
            <textarea
              id="comments"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {/* FORM  */}
      <EducatorSideBar />
    </div>
</>
      )
      :
      (
        <>
         <div
            className="text-5xl"
            style={{
              text: "center",
              paddingTop: "200px",
              paddingLeft: "500px",
            }}
          >
            <h1> Login to add the resources</h1>
          </div>
          <EducatorLoginSideBar />
        </>

      )
    }




   
    </>
    
  );
}

export default AddResource;
