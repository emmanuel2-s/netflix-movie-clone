import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { notifyError } from "../Api/toast";

function MovieRows({ title, fetchUrl, RowId }) {
  const [movies, setMovies] = useState([]);
  const [movieTrailerUrl, setMovietrailerUrl] = useState("");

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const SlideLeft = () => {
    let slider = document.getElementById("slider" + RowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    let slider = document.getElementById("slider" + RowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const movieClicked = (movie) => {
    if (movieTrailerUrl) {
      setMovietrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setMovietrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          return notifyError("No internet connection");
        });
    }
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={SlideLeft}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block z-10 left-0"
        />
        <div
          id={"slider" + RowId}
          className="relative w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie, id) => (
            <Movie
              key={id}
              movie={movie}
              movieHandler={() => movieClicked(movie)}
            />
          ))}
        </div>
        <MdChevronRight
          size={40}
          onClick={SlideRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block z-10 right-0"
        />
      </div>
      {movieTrailerUrl && <YouTube videoId={movieTrailerUrl} opts={opts} />}
    </div>
  );
}

export default MovieRows;
