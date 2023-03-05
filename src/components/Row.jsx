import axios from "axios";
import React, { useState, useEffect } from "react";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

import Movie from "./Movie";

const Row = ({ title, fetchUrl,rowID }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      const data = await response.data.results;
      setMovie(data);
    };
    fetchData();
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight= () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft =  slider.scrollLeft + 500;
    // alert("Hi")
  }

  return (
    <>
      <h2 className="text-white font-bold text-2xl m-5">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft className="rounded-full group- absolute opacity-50 hover:opacity-100 bg-white z-50 left-5 hidden group-hover:block" size={40} onClick={slideLeft}/>
        <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movie.map((data,id) => {
            return (
               <Movie key={id}data={data}/>
            );
          })}
        </div>
        <MdChevronRight className="rounded-full absolute opacity-50 hover:opacity-100 bg-white z-50 right-5 hidden group-hover:block"size={40} onClick={slideRight}/>
      </div>
    </>
  );
};

export default Row;
