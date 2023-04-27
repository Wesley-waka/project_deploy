import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
// import styled from 'styled-components';

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-top: 4rem;
`;

const Card = styled.div`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;

const Image = styled.img``;

const CourseName = styled.h3`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  text-transform: capitalize;
`;

const EnrolledStudents = styled.p`
  font-size: 1.25rem;
  color: var(--clr-grey-5);
  margin-bottom: 0;
`;




const DeleteButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  rounded
  mt-6
`;

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://vs-app.herokuapp.com/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    }
    fetchData();
  }, []);

  async function handleDelete(id) {
    try {
      await fetch(`https://vs-app.herokuapp.com/courses/${id}`, { method: 'DELETE' });
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error(`Failed to delete course with id ${id}:`, error);
    }
  }

  return (
    <Wrapper>

      <CardContainer>
        {courses.map(course => (

          <Card key={course.id} className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
            {/* <Image src={`https://example.com/images/${course.id}.jpg`} alt={course.course_name} className="w-full object-cover" /> */}
            <div className="p-4">
              <CourseName className="font-bold text-lg mb-2">{course.course_name}</CourseName>
              <EnrolledStudents className="text-gray-600 text-sm">Enrolled Students: {course.enrolled_students.length}</EnrolledStudents>
              <DeleteButton onClick={() => handleDelete(course.id)} className="px-4 py-2 bg-red-600 text-white rounded-md mt-4 inline-block">Delete</DeleteButton>
            </div>
          </Card>


        ))
        }
      </CardContainer >
    </Wrapper>

  );
}

export default App;
