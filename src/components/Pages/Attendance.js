import React, { useEffect, useState } from "react";
import CardCourse from "./CardCourse";
import EducatorLoginSideBar from "./EducatorLoginSideBar";
import { url } from "../utils/constants"

function Attendance() {
  const token = localStorage.getItem("jwt");
  const [educatorId, setEducatorId] = useState();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`https://vs-app.herokuapp.com/loggedin`, {
      method: "GET",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEducatorId(data.educator.id);
        fetch(`https://vs-app.herokuapp.com/educator_courses/${data.educator.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setCourses(data));
      });
  }, []);



  return (
    <>
      <div
        className="text-3xl"
        style={{
          text: "center",
          paddingTop: "200px",
          paddingLeft: "500px",
        }}
      >
        <div className="flex flex-wrap justify-center">
          {courses.map((course) => (
            <CardCourse key={course.course_name} courseId={course.id} name={course.course_name} />
          ))}
        </div>
      </div>
      <EducatorLoginSideBar />
    </>
  );
}

export default Attendance;
