import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AttendanceCard from "./AttendanceCard";
import { url } from '../utils/constants';

function AttendanceList() {
  const id = useParams().courseId
  const [enrolledStudents, setEnrolledStudents] = useState([])
  const token = localStorage.getItem("jwt");
  const [courseId, setCourseId] = useState([])
  useEffect(() => {
    fetch(`https://vs-app.herokuapp.com/courses/${id}`, {
      method: "GET",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEnrolledStudents(data.enrolled_students)
        setCourseId(data.id)
      });
  }, [])

  return (
    <div className="rounded-md border border-gray-300  m-3 ">
      <div className="flex flex-col">
        <div className="flex flex-row border-b bg-orange-600 border-gray-200 py-2 font-bold">
          <div className="w-1/12 px-4">No.</div>
          <div className="w-4/12 px-4">Name</div>
          <div className="w-4/12 px-4">Email</div>
          <div className="w-3/12 px-4">Attendance Status</div>
        </div>

        {enrolledStudents.map((student, index) => (
          <AttendanceCard student={student} num={index} courseId={courseId} />
        ))}
      </div>
    </div>




  )
}

export default AttendanceList