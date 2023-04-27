import React from 'react'
import orangeImage from "../images/orange.jpg"
import { useNavigate } from 'react-router-dom'

function CardCourse({name, courseId}) {
    const navigate = useNavigate()
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={orangeImage} alt="Course Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <button className="bg-orange-500 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-lg transition-colors duration-300" onClick={()=> navigate(`/educator/${courseId}/attendance/list`)} >
          Mark Attendance
        </button>
      </div>
    </div>
  )
}

export default CardCourse