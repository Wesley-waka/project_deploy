import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Pages/Chat";
import Exam from "./components/Pages/Exam";
import Landing from "./components/Pages/Landing";
import Resource from "./components/Pages/Resource";
import Result from "./components/Pages/Result";
import Admin from "./components/Pages/Admin";
import StudentDashboard from "./components/Pages/StudentDashboard";
import Login from "./components/Pages/Login";
import AuthProvider from "./components/Pages/AuthContext";
import SchoolEntry from "./components/Pages/SchoolEntry";
import CourseEntry from "./components/Pages/CourseEntry";
import EducatorEntry from "./components/Pages/EducatorEntry";
import StudentEntry from "./components/Pages/StudentEntry";
import Educator from "./components/Pages/Educator";
import EducatorDashboard from "./components/Pages/EducatorDashboard";
import Attendance from "./components/Pages/Attendance";
import ScheduleExam from "./components/Pages/ScheduleExam";
import AddResource from "./components/Pages/AddResource";
// import ExamTimer from "./components/Pages/ExamTimer";
import ExamPage from "./components/Pages/ExamPage";
import Home from "./components/Pages/Home";
import PlagiarismChecker from "./components/Pages/PlagiarismChecker";
import SignUp from "./components/Pages/SignUp";
import AttendanceList from "./components/Pages/AttendanceList";
// import Test from "./components/Pages/Test";
// import Swipper from "./components/Pages/Swipper";
import AllCourse from "./components/Pages/AllCourse";


function App() {
  const token = localStorage.getItem("jwt");

  // RECOURCES 

  const [resource, setResource] = useState();

  useEffect(() => {
    fetch("https://vs-app.herokuapp.com/resources", {

      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setResource(res);
      });
  }, [token]);

  // SCHOOLS 

  const [schools, setSchools] = useState([]);
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

  useEffect(() => {
    fetch("https://vs-app.herokuapp.com/schools", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSchools(data);
      })
      .catch((error) => {
        console.error("Error fetching schools:", error);
      });
  }, []);





  // EDUCATORS 

  const [educators, setEducators] = useState();
  const [selectedEducatorId, setSelectedEducatorId] = useState(null);


  useEffect(() => {
    fetch("https://vs-app.herokuapp.com/educators", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setEducators(data));
  }, [token]);


  // COURSES 

  const [courses, setCourses] = useState();
  const [selectedCoursesId, setSelectedCoursesId] = useState(null);


  useEffect(() => {
    fetch("https://vs-app.herokuapp.com/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, [token]);

  const courseId = Array.isArray(courses) ? courses.map(course => {
    return (
      <div> {course.course_id} </div>
    )


  }) : null

  // console.log(courseId)



  // // STUDENT 
  const [students, setStudents] = useState();
  const [selectedStudentId, setSelectedStudentId] = useState(null);


  useEffect(() => {
    fetch("https://vs-app.herokuapp.com/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setEducators(data));
  }, [token]);


  // EXAM 

  const [exams, setExams] = useState();
  const [selectedExamId, setSelectedExamId] = useState(null);


  useEffect(() => {
    fetch("https://vs-app.herokuapp.com/exams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [token]);




  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* <Route path="/swiper" element={<Swipper />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/student" element={<StudentEntry schoolId={selectedSchoolId} />} />
          <Route path="/admin/course" element={<CourseEntry schoolId={selectedSchoolId} />} />
          <Route path="/admin/educator" element={<EducatorEntry schoolId={selectedSchoolId} />} />
          <Route path="/admin/allcourse" element={<AllCourse schoolId={selectedSchoolId} />} />

          <Route path="/admin/school" element={<SchoolEntry />} />

          <Route path="/student" element={<StudentDashboard />} />
          <Route
            path="/student/resources"
            element={<Resource resource={resource} />}
          />
          <Route path="student/exams" element={<Exam />} />
          <Route path="student/exam-page" element={<ExamPage />} />
          <Route path="student/results" element={<Result />} />
          <Route path="student/chat" element={<Chat coursesId={courseId} />} />

          <Route path="/educator" element={<EducatorDashboard />} />
          <Route path="/educator/add-resources" element={<AddResource />} />
          <Route path="/educator/schedule-exam" element={<ScheduleExam />} />
          <Route path="/educator/attendance" element={<Attendance />} />
          <Route path="/educator/:courseId/attendance/list" element={<AttendanceList />} />
          <Route
            path="/login"
            element={
              <Login
                schools={schools}
                selectedSchoolId={selectedSchoolId}
                setSelectedSchoolId={setSelectedSchoolId}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/educator" element={<Educator />} />

          <Route path="/plagiarism" element={<PlagiarismChecker />} />



        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;