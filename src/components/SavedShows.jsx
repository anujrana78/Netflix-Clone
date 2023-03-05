import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/authContext";
import { db } from "../firebase";
import Movie from "./Movie";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db,'users',`${user?.email}`)
  const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc (movieRef,{
                savedShows : result
            })
        } catch (error) {
            console.log(error)
        }
  }

  console.log(movies);
  return (
    <>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="rounded-full group- absolute opacity-50 hover:opacity-100 bg-white z-50 left-5 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((data, id) => {
            return (
              <div
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer m-2"
                key={id}
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${data?.img}`}
                  alt="something unique"
                />

                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  ">
                  <p className="h-full white-space-normal text-white text-xs md:text-sm font-bold flex items-center justify-center text-center">
                    {data.title}
                  </p>
                  <p onClick={() => deleteShow(data.id)}>
                    <AiOutlineClose className="absolute top-2  right-2 text-white" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          className="rounded-full absolute opacity-50 hover:opacity-100 bg-white z-50 right-5 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default SavedShows;
