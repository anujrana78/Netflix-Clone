import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Movie = ({ data }) => {
  const [like, setLike] = useState(false);

  return (
    
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer m-2">
        <img
          classname="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
          alt="something unique"
        />

        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  ">
          <p className="h-full white-space-normal text-white text-xs md:text-sm font-bold flex items-center justify-center text-center">
            {data.title}
          </p>
          <p>
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
