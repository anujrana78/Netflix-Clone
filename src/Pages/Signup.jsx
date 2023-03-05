import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {UserAuth} from '../context/authContext'

const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>  {
    e.preventDefault()
    try{
      await signUp(email,password)
      navigate('/')
    }catch(error){
          console.log(error.message)
    }
     
  }
  console.log(email)

  return (
    <>
      <>
        <div className="w-full h-screen">
          <img
            className=" lg:block md:block sm:hidden absolute w-full h-full object-cover"
            src={
              "https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/28f1134c-c804-4cbe-be0b-b5d5281deba1/NP-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            }
            alt="IMG"
          />
          <div className="bg-black/60 h-screen left-0 right-0 fixed w-full"></div>

          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/60 text-white ">
              <form className="flex flex-col gap-2  p-10" onSubmit={handleSubmit}>
                <h1 className="text-white font-bold text-4xl my-4 ">Sign Up</h1>
                <input
                  className="bg-gray-700 pr-20 pl-5 py-3 text-white "
                  type="email"
                  placeholder="Email or phone number"
                  autoComplete="email"
                  onChange={(e) => (setEmail(e.target.value))}
                ></input>
                <input
                  className="bg-gray-700 pr-20 pl-5 py-3     "
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={e => (setPassword(e.target.value))}
                ></input>
                <button className="bg-red-700 text-white text-1xl px-15 py-4     mt-10     rounded-sm font-bold ">
                  Sign Up
                </button>
              </form>
              <div className="text-gray-500 flex mx-10 justify-between">
                <div className="flex gap-2 justify-center">
                  <input type="checkbox" id="remember" />
                  <p>Remember Me</p>
                </div>
                <p className=" text-gray-500">Need Help?</p>
              </div>
              <div className="mx-10 mt-12 text-gray-500">Already subscribed to Netflix? <span className="text-white"><Link to="/login">Sign in </Link></span></div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Signup;
