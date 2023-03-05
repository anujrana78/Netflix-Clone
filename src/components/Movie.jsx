import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserAuth } from "../context/authContext";
import { db } from "../firebase";


const Movie = ({ data }) => {
  const [like, setLike] = useState(false);
  const {user} = UserAuth()
  const [saved,setSaved] = useState(false)

  const movieID = doc(db,'users',`${user?.email}`)

  const savedShow = async() => {
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID,{
        savedShows : arrayUnion({
          id: data.id,
          title : data.title,
          img : data.backdrop_path
        })
      })
    }else{
      alert("Please login to save movie")
    }
  }

  return (
    
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer m-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
          alt="something unique"
        />

        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  ">
          <p className="h-full white-space-normal text-white text-xs md:text-sm font-bold flex items-center justify-center text-center">
            {data.title}
          </p>
          <p onClick={savedShow}>
            {like ? (
              <AiFillHeart className="absolute top-4 left-4 text-white" />
            ) : (
              <AiOutlineHeart className="absolute top-4 left-4 text-white" />
            )}
          </p>
        </div>
      </div>
    
  );
};

export default Movie;
