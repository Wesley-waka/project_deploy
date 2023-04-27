import React from "react";
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import heroBcg from '../images/hero-bcg.jpg';
import Services from './Services';
import "../Pages/Dashboard.css";
import Dashboard from "./Dashboard";
// import FeaturedSchool from "./FeaturedSchool";


function Educator({ children }) {

  const dashboardItems = [
    {
      path: "Examschedule",
      name: "Schedule Exam",
      d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",

    },
    {
      path: "Resources",
      name: "Add Resource",
      d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      path: "Attendance",
      name: "Mark Attendance",
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    },
  ];

  // fetch("https://crowd-app.onrender.com")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  // <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  //   <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
  // </svg>


  return (
    <>




      <div >
        <NavLink to="/admin">
          <h1
            className="text-5xl text-white font-bold pb-5 pl-0 "
            style={{ paddingLeft: "20px" }}
          >
            V<span className="text-5xl text-yellow-400 ">S </span>
          </h1>
        </NavLink>
        <Dashboard dashboardItems={dashboardItems} />
        <main>{children}</main>

        <div className="bg-orange-400 absolute top-0  h-20" style={{ left: 200 }}>
          {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
          <div className=" text-4xl xl:font-bold font-weight: 600 px-20 py-5">
            Educator
          </div>

          <Wrapper className='section-center px-28 w-86'>
            <article className='content'>
              <h1 className="text-4xl xl:font-bold font-weight: 600 right-1 px-20 py-5">
               Virtual School
              </h1>
              <p className="sm:font-thin">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
                sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
                alias?
              </p>
              {/* <button className="hero-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to='/products' >
                shop now
              </button> */}
            </article>
            <article className='img-container '>
              <img src={heroBcg} alt='nice table' className='main-img' />
            </article>

          </Wrapper>
          <Services className='absolute' />
          {/* <FeaturedSchool /> */}
          {/* </div> */}

        </div>

      </div>
    </>
  );
}
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
    
  }

  p {
    line-height: 2;
    max-width: 45rem;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    padding-right: 7rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      left:0%;
      
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;


    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      border-radius: var(--radius);
    }
  }
`
export default Educator;




