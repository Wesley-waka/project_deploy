// import React from "react";
// import LoginDashboard from "./LoginDashboard";
// import PlagiarismChecker from "./PlagiarismChecker";
// import StudentSideBar from "./StudentSideBar";
// function Chat() {
//   const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
//   return (
//     <>
//     { isLoggedIn ? (
//       <div>
//         <PlagiarismChecker />
//         <StudentSideBar />
//       </div>
//     )
//   : (
//     <>
//     <div className="text-5xl" style={{ text:"center", paddingTop:"200px", paddingLeft:"500px"}} >
//      <h1> Login to access the chat section</h1>
//     </div>
//      <LoginDashboard />
//      </>
//   )
//   }

//     </>
//   );
// }

// export default Chat;

// import React, { useState, useEffect } from 'react';

// const Chat = ({ courseId }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState();

//   // const [chats, setChats] = useState();

//   const token = localStorage.getItem("jwt");

//   useEffect(() => {
//     // TODO: fetch messages for the given course ID from the server

//     fetch("/chats", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setMessages(data));

//     // ]);
//   }, [courseId]);

//   const handleNewMessageChange = (event) => {
//     setNewMessage(event.target.value);
//   };

//   const handleSendMessage = (event) => {
//     event.preventDefault();
//     // TODO: send the new message to the server
//     const newId = messages.length + 1;
//     const newMessageObj = { id: newId, sender: 'You', text: newMessage };
//     setMessages([...messages, newMessageObj]);
//     setNewMessage('');
//   };

//   const renderMessage = (message) => (
//     <div key={message.id}>
//       <strong>{message.student_id}: </strong>
//       {message.message}
//     </div>
//   );

//   const renderMessages = () => {
//     return messages.map(renderMessage);
//   };

//   return (
//     <div>
//       <h1>Course Chat</h1>
//       <div>{renderMessages()}</div>
//       <form onSubmit={handleSendMessage}>
//         <input
//           type="text"
//           placeholder="Type your message here"
//           value={newMessage}
//           onChange={handleNewMessageChange}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chat;

import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { url } from "../utils/constants";

const Chat = ({ coursesId, studentId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");




  const token = localStorage.getItem("jwt");

  const { id } = useParams

  // console.log(coursesId)


  const filteredMessages = messages.filter(
    (message) => message.course === coursesId
  );

  console.log(filteredMessages)



  useEffect(() => {
    // Fetch messages from the server for the current course and student
    fetch(`https://vs-app.herokuapp.com/chats`, {
      method: "GET",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // const user = {
    //     name: name,
    //   email: email,
    //   schoolId: schoolId
    // };
    // console.log(user);

    fetch(`https://vs-app.herokuapp.com/students`, {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        student_id: student,
        course_id: course,
        message: messages,
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log(response));
  }

  const renderMessage = (message) => (
    <div key={message.id}>
      <strong>{message.student_id}: </strong>
      {message.message}
    </div>
  );

  const renderMessages = () => {
    return filteredMessages.map(renderMessage);
  };

  return (
    <div>
      <h1>Course Chat</h1>
      <div>{renderMessages()}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here"
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
