import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.requestPopular);
      const data = await response.data.results;
      setMovies(data);
    };
    fetchData();
  }, []);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  console.log("Movie", randomMovie);

  // to create read more like on paragraph
  const truncareString = (str,num) => {
    if(str?.length > num) {
        return str.slice(0,num) + "..."
    }else return str
  }
  return (
    <div className="w-full h-[550px]  text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt="Heading"
        />
      </div>
      <div className="ml-11 absolute top-[20%] lg:top-[30%]">
        <h1 className="my-3 text-2xl md:text-4xl font-bold">{randomMovie?.title}</h1>
        <div className="flex gap-2">
          <button className="  text-black border bg-gray-300 p-2 px-5">
            Play
          </button>
          <button className=" text-white border p-2 px-5">Watch Later</button>
        </div>
        <p className="text-sm text-gray-400 mt-4">Released Date : {randomMovie?.release_date}</p>
        <p className="w-[40%] text-sm my-1">{truncareString(randomMovie?.overview,150)}</p>
      </div>
    </div>
  );
};

export default Main;
