import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import studentImage from "../images/happy-removebg-preview.png"
import patternImage from "../images/pattern.jpg"
import brandImage from "../images/brand.jpeg"
import girlImage from "../images/girl.jpg"
import girl1Image from "../images/girl1.jpg"
import manImage from "../images/man.jpg"
import artImage from "../images/art.jpeg"
import whiteImage from "../images/white.jpg"
import orangeImage from "../images/orange.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold text-white">VS</a>
        <button className="text-white text-xl focus:outline-none sm:hidden">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </button>
        <ul className="hidden sm:flex sm:items-center">
        <li className="mr-6">
    <Link to="/login" className="text-white hover:text-gray-300">Dashboard</Link>
  </li>
  <li className="mr-6">
    <Link to="/success" className="text-white hover:text-gray-300">Success</Link>
  </li>
  <li className="mr-6">
    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
  </li>
  <li>
    <Link to="/contact" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-full">Contact Us</Link>
  </li>
        </ul>
      </div>
    </nav>

    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-100 py-12 md:py-24">
    <div className="md:w-1/2 lg:w-2/5 px-4 md:px-0">
    <div className="p-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">
        Explore the world’s knowledge, cultures, and ideas
    </h1>
    <p className="text-gray-700 text-lg mb-6">
        Virtual schools helps you gain skills that will be useful to expand the Kenyan economy.
    </p>
    <button className="bg-orange-500 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-lg transition-colors duration-300">
          Get Started
    </button>
    </div>
    </div>
    <div className="md:w-1/2 lg:w-3/5 mt-8 md:mt-0 pr-7">
    <div className="relative">
        <img src={patternImage} alt="Pattern" className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl" />
        <img src={studentImage} alt="Student" className="relative z-10 mx-auto w-4/5 md:w-3/4 lg:w-2/3" />
    </div>
   
    <div className="relative z-10 mx-auto flex items-center justify-center lg:justify-start w-64 h-20 rounded-full bg-orange-500 text-black -mt-6">
  <div className="w-8 h-8 flex items-center justify-center mr-2">
    <FontAwesomeIcon icon={faSchool} />
  </div>
  <div className="text-center flex-grow">
    <div className="text-sm font-bold">Total schools</div>
  </div>
  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center -mr-4">
    <div className="text-white text-lg font-bold">100+</div>
  </div>
</div>
    </div>
    </section>

    {/* timeline divider */}

    <div className="relative pt-20 pb-24">
  <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${orangeImage})` }}></div>
  
  <div className="container mx-auto px-4">
    <div className="relative flex flex-col min-w-0 break-words bg-white bg-opacity-0 p-4 w-full mb-6 shadow-xl rounded-lg mt-64">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img src={brandImage} alt="School" className="rounded-md" />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 px-4 mb-8 flex items-center justify-center">
          <div className="bg-blue-700 bg-opacity-50 p-4 rounded-3xl">
            <p className="text-lg font-bold text-black-800 text-center leading-relaxed">
              There are plenty of programmes that teach tech skills. At Vs, our “secret sauce” comes from our career-focused approach to learning. We develop well-rounded tech professionals who are equipped with both the technical proficiencies and soft skills that will enable them to thrive in the future of work.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8 flex items-center justify-center">
          <div className="bg-blue-700 bg-opacity-50 p-4 rounded-3xl">
            <p className="text-lg font-bold text-black-800 text-center leading-relaxed">
            Apply your learning through real-world examples and experience Virtual School’s signature case method. Tech leaders will share challenges they’ve faced. As the story unfolds, you’ll leverage course concepts, vital tools and frameworks, and the diversity of your peers’ perspectives to analyze the problem and determine a path forward. 
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative">
            <img src={artImage} alt="School" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* testimonial */}

<div className="relative py-20 bg-gray-100">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${whiteImage})` }}>
    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
  </div>
  <div className="container mx-auto px-4">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
      <div className="px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Testimonials</h2>
        <div className="flex flex-wrap -mx-4">
         
        <div className="w-full md:w-1/3 px-4">
  <div className="relative">
    <div className="testimonial-image text-center">
      <img className="object-cover w-32 h-32 rounded-full border border-white mx-auto" src={girlImage} alt="Testimonial 1" />
    </div>
    <div className="testimonial-triangle"></div>
  </div>
  <div className="mt-8 text-center">
    <p className="text-lg font-medium text-gray-800 mb-8">"Problem solving skills are more important than the ability to purely write code. Virtual Schools created a habit loop of researching, learning, then applying. That, combined with the deadline-driven projects, created a time crunch mentality that pushed us to code at a high-level, international standard."</p>
    <p className="text-gray-600">Connie, Happy Student.</p>
  </div>
</div>

<div className="w-full md:w-1/3 px-4">
  <div className="relative">
    <div className="testimonial-image text-center">
      <img className="object-cover w-32 h-32 rounded-full border border-white mx-auto" src={manImage} alt="Testimonial 1" />
    </div>
    <div className="testimonial-triangle"></div>
  </div>
  <div className="mt-8 text-center">
    <p className="text-lg font-medium text-gray-800 mb-8">" Virtual Schools provided powerful lessons in self-awareness, which helped me understand who I am as a person as well as my passions and interests. It helped me become clear about my purpose in life and my vision. As a problem-solver, I got to see myself as a leader who has potential solutions for these problems. The whole experience was amazing."</p>
    <p className="text-gray-600">John Mwangi</p>
  </div>
</div>

<div className="w-full md:w-1/3 px-4">
  <div className="relative">
    <div className="testimonial-image text-center">
      <img className="object-cover w-32 h-32 rounded-full border border-white mx-auto" src={girl1Image} alt="Testimonial 1" />
    </div>
    <div className="testimonial-triangle"></div>
  </div>
  <div className="mt-8 text-center">
    <p className="text-lg font-medium text-gray-800 mb-8">"Virtual Schools showed me the depth and scope of the tech field and what it would take to work for a global tech company."</p>
    <p className="text-gray-600">Brenda.</p>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

{/* footer */}

<footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container mx-auto px-4">

      <div className="flex flex-wrap mx-4 items-center justify-center">
  <div className="w-full md:w-1/3 px-4">
    <h3 className="text-lg font-semibold mb-4">Explore Virtual Schools</h3>
    <ul className="list-none">
      <li><Link to="/">By School</Link></li>
      <li><Link to="/">By Courses</Link></li>
      <li><Link to="/">Collections</Link></li>
      <li><Link to="/">Educators</Link></li>
    </ul>
  </div>
  <div className="w-full md:w-1/3 px-4 mx-auto">
    <h3 className="text-lg font-semibold mb-4">Data for Research</h3>
    <ul className="list-none">
      <li><Link to="/">Get Access</Link></li>
      <li><Link to="/">Get Support</Link></li>
      <li><Link to="/">Research Basics</Link></li>
      <li><Link to="/">About Virtual Schools</Link></li>
      <li><Link to="/">Mission and History</Link></li>
      <li><Link to="/">What's in Virtual Schools</Link></li>
    </ul>
  </div>
  <div className="w-full md:w-1/3 px-4 mx-auto">
    <h3 className="text-lg font-semibold mb-4">News &amp; Events</h3>
    <ul className="list-none">
      <li><Link to="/">News</Link></li>
      <li><Link to="/">Webinars</Link></li>
      <li><Link to="/">VS Labs</Link></li>
      <li><Link to="/">VS Daily</Link></li>
      <li><Link to="/">Careers</Link></li>
      <li><Link to="/">Contact Us</Link></li>
      <li><Link to="/">For Librarians</Link></li>
      <li><Link to="/">For Publishers</Link></li>
    </ul>
  </div>
</div>

       
        
      </div>
      <div className="flex flex-wrap justify-between mt-8">
          <div className="text-sm text-gray-500">
            Virtual Schools is part of MORINGA, a not-for-profit organization helping the academic community use digital technologies to preserve the scholarly record and to advance research and teaching in sustainable ways.
          </div>
          <div className="text-sm text-gray-500">
            ©2000‍–{new Date().getFullYear()} MORINGA®. All Rights Reserved. VS®, the VS logo, VPASS®, VSArtstor®, Reveal Digital™ and MORINGA® are registered trademarks of MORINGA.
          </div>
        </div>
      <div className="flex flex-wrap justify-between mt-8">
          <div className="text-sm text-gray-500">
            <Link to="/">Terms &amp; Conditions of Use</Link> | <Link to="/">Privacy Policy</Link> | <Link to="/">Accessibility</Link> | <Link to="/">Cookie Policy</Link> | <Link to="/">Cookie Settings</Link>
          </div>
        </div>
    </footer>

    </>
  )
}

export default Home