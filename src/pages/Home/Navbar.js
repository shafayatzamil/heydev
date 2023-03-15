import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

  const { authecticUser,setAuthenticUser} = useContext(AuthContext);


  const handlelogout= ()=>{
    // console.log("clicked");
    localStorage.removeItem("user");
    toast.success("Logout sucessfull");
    setAuthenticUser(null);
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/users">
                <li>
                  <div className="btn btn-ghost font-bold ">All users</div>
                </li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <div className="btn btn-ghost normal-case text-xl">Heydev</div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/users">
              <li>
                <div className="btn btn-ghost font-bold ">All users</div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">


        {/* navbar  logout  */}
          {
            authecticUser?<>
            <div className="flex justify-center items-center gap-2 mr-2"> <h2 className="text-lg font-bold text-gray-600">{authecticUser.name}</h2> <img src="https://www.svgrepo.com/show/111216/user.svg" className="w-12 rounded-full" alt="" /></div>
            <div className="btn btn-outline" onClick={handlelogout} >logout</div>            
            </>
            :
            <>
            <Link to="register">
            <div className="btn btn-outline">Register</div>
          </Link>
            
            </>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
