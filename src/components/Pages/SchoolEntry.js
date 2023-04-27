import React from "react";
import Dashboard from "./Dashboard";
import aboutImg from '../images/hero-bcg-3.jpg'
import styled from 'styled-components';
import { FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { BsBook, BsTable } from "react-icons/bs";

function SchoolEntry() {
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
    return (
        <>
            <div>

                <Dashboard dashboardItems={dashboardItems} />
                <div className="bg-orange-400 absolute top-0 w- h-20" style={{ left: 200 }}>
                    {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
                    <div className=" text-4xl xl:font-bold font-weight: 600 px-20 py-5">
                        Administrator
                    </div>

                    <Wrapper className='page relative section section-center px-5 py-20'>
                        <img src={aboutImg} className='mx-10' alt='nice desk' />
                        <article>
                            <div className="title">
                                <h2 className="text-2xl font-bold">Add School</h2>
                                <div className="w-16 h-1 bg-gray-700"></div>
                            </div>

                            <div className="flex justify-center items-center h-screen">
                                <form className="bg-white shadow-md rounded px-8 pt-0 pb-8 mb-60 w-1/2">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                            School Name
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                            School Location
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    {/* <div className="mb-6">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                        />
                                    </div> */}
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </article>
                    </Wrapper>


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

export default SchoolEntry;
