import React, { useContext } from "react";
import { AuthContext } from "../Pages/AuthContext";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

function Logout() {
    const { logout } = useContext(AuthContext);
    return (
        // <li>
        <>
            <NavLink
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                style={{ marginTop: "200px" }}
                to="/login"
            >
                <div className="text-xl">
                    <FaSignOutAlt />
                </div>
                <span className="flex-1 ml-3 text-2xl text-start">
                    <button
                        onClick={() => {
                            logout();
                        }}
                    >
                        Logout
                    </button>
                </span>
            </NavLink>
            {/* </li> */}
        </>

    )
}

export default Logout;
