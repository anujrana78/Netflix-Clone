import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      await logOut()
      navigate("login")
    } catch(error){
      console.log("On Logout from navbar",error)
    }
  }

  return (
    <>
      {!user?.email && (
        <div className="flex items-center justify-between p-6 z-[100] w-full absolute">
          <Link to="/">
            <h1 className="text-red-600 lg:text-4xl text-4xl font-bold cursor-pointer ">
              {" "}
              NETFLIX
            </h1>
          </Link>
          <div className="flex items-center justify-between p-4 gap-4">
            <Link to="login">
              <button className="text-white">Sign in</button>
            </Link>
            <Link to="signup">
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
      {user?.email && (
        <div className="flex items-center justify-between p-6 z-[100] w-full absolute">
          <Link to="/">
            <h1 className="text-red-600 lg:text-4xl text-4xl font-bold cursor-pointer ">
              {" "}
              NETFLIX
            </h1>
          </Link>
          <div className="flex items-center justify-between p-4 gap-4">
            <Link to="account">
              <button className="text-white">Account</button>
            </Link>
            <Link to="/">
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
                Log Out
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
