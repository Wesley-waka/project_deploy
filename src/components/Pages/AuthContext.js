import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { url } from "../utils/constants";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [change, setOnChange] = useState(false);

  let storedUser = localStorage.getItem("user");

  let parsedUser = null;

  try {
    parsedUser = JSON.parse(storedUser);
  } catch (error) {
    console.log("Error parsing user from localStorage:", error);
  }

  const [user, setUser] = useState(parsedUser || null);

  const login = (email, password) => {
    fetch("https://vs-app.herokuapp.com/login", {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.student) {
          setOnChange(!change);
          setUser(data.student);

          localStorage.setItem("user", JSON.stringify(data.student));
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("email", data.student.email);

          sessionStorage.setItem("jwtToken", data.jwt);
          navigate("/student");
        } else if (data.admin) {
          setOnChange(!change);
          setUser(data.admin);

          localStorage.setItem("user", JSON.stringify(data.admin));
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("email", data.admin.email);

          navigate("/admin");
        } else if (data.educator) {
          setOnChange(!change);
          setUser(data.educator);

          localStorage.setItem("user", JSON.stringify(data.educator));
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("email", data.educator.email);

          navigate("/educator");
        } else if (data.error) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "error",
            title: "Oops...",
            text: data.error,
          });
        }
      })
      .catch((error) => console.log("Login error:", error));
  };

  const register = (name, email, password) => {
    fetch("https://vs-app.herokuapp.com/signup", {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Register error:", error));
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
}
