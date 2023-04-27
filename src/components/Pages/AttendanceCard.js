import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from "../utils/constants"

function AttendanceCard({ student, num, courseId }) {
  const [enrolledStudents, setEnrolledStudents] = useState([])
  const id = useParams().courseId
  const token = localStorage.getItem("jwt");
  const [status, setStatus] = useState(null)



  function handleClick() {
    fetch(`https://vs-app.herokuapp.com/attendances`, {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        student_id: student.id,
        educator_id: parseInt(id),
        course_id: courseId,
        status: status,
      })
    }).then(r => r.json())
      .then(data => console.log(data))
  }

  function handleChange(e) {
    if (e.target.value === "present") {
      setStatus(true)
    } else if (e.target.value === "absent") {
      setStatus(false)
    } else if (e.target.value === "pending") {
      setStatus(null)
    }
  }
  console.log(status)
  return (
    <div className="border border-gray-200 rounded-lg shadow-md my-2">
      <div className="flex flex-row border-b border-gray-200 py-2">
        <div className="w-1/12 px-4">{num}</div>
        <div className="w-4/12 px-4">{student.student_name}</div>
        <div className="w-4/12 px-4">{student.email}</div>
        <div className="w-3/12 px-4">
          <select className="border border-gray-400 rounded-md py-2 px-4" onChange={handleChange}>
            <option value="pending" className="text-yellow-500 font-bold">Pending</option>
            <option value="present" className="text-green-500 font-bold">Present</option>
            <option value="absent" className="text-red-500 font-bold">Absent</option>
          </select>
          <button className="bg-blue-500 text-white py-2 px-4 ml-4 rounded-md" onClick={handleClick}>Edit Status</button>
        </div>
      </div>
    </div>
  )
}

export default AttendanceCard