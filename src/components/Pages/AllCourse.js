import React from "react";
import Dashboard from "./Dashboard";
import aboutImg from '../images/hero-bcg-6.jpg'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineLogin } from "react-icons/md";
import { BsBook, BsTable } from "react-icons/bs";
import { sample } from 'lodash';
import { useState } from "react";
// import CourseList from "./CourseList";
import ProductList from "./ProductList";
import { url } from "../utils/constants"
function AllCourse() {
    const [selectedOption, setSelectedOption] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseCategory, setCourseCategory] = useState('');

    const options = [aboutImg, aboutImg, aboutImg, aboutImg];
    const dashboardItems = [
        {
            path: "/admin/school",
            name: "Add School",
            icon: <FaSchool />,
        },
        {
            path: "/admin/educator",
            name: "Add Educator",
            icon: <FaChalkboardTeacher />,
        },
        {
            path: "/admin/student",
            name: "Add Student",
            icon: <MdOutlineSchool />,
        },
        {
            path: "/admin/course",
            name: "Add Course",
            icon: <BsBook />,
        },
        {
            path: "/admin/allcourse",
            name: "View Courses",
            icon: <BsTable />,
        },
    ];

    const handleButtonClick = () => {
        fetch(`https://vs-app.herokuapp.com/courses`, {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courseName: courseName,
                courseCategory: courseCategory,
                courseImage: randomOption
            })
        })
        const randomOption = sample(options);
        setSelectedOption(randomOption);
    };


    return (
        <>
            <div>
                <NavLink to="/admin">
                    <h1
                        className="text-5xl text-white font-bold pb-5 pl-0 "
                        style={{ paddingLeft: "20px" }}
                    >
                        V<span className="text-5xl text-yellow-400 ">S </span>
                    </h1>
                </NavLink>
                <Dashboard dashboardItems={dashboardItems} />
                <div className="bg-orange-400 absolute top-0 w-10/12 h-20" style={{ left: 250 }}>
                    {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
                    <div className=" text-4xl xl:font-bold font-weight: 600 px-20 py-5">
                        Administrator
                    </div>

                    {/* <Wrapper className='page relative section section-center px-30 py-25'>

                    </Wrapper> */}
                    {/* <div className="flex h-screen items-center justify-center py-25 px-72 my-20">
                        <ProductList />
                    </div> */}

                    <div  >
                        <ProductList />
                    </div>
                </div>

            </div>
        </>)

}


const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AllCourse;
