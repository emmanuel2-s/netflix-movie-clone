import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Movie({ movie, movieHandler }) {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 inline-block cursor-pointer relative hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title || <Skeleton width={`40%`} />}
        className="object-cover h-auto block"
      />
      <div
        className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100"
        onClick={movieHandler}
      >
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 " size={20} />
          ) : (
            <FaRegHeart
              className="absolute top-4 left-4 text-white"
              size={20}
            />
          )}
        </p>
        <p className="text-white font-bold  h-full flex justify-center items-center text-center text-xs md:text-sm whitespace-normal">
          {movie?.title}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-gray-200 text-sm absolute bottom-4 left-4 text-center">
            <span>Released: {movie?.release_date}</span>
          </p>
          <p className="text-gray-200 text-sm absolute bottom-4 right-4 text-center">
            <span>Votes: {movie?.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
