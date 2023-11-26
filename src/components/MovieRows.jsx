import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MovieRows({ title, fetchUrl }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchUrl])
    console.log(movies)

    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='flex justify-center items-center relative'>
                <div id={'slider'}>
                    {movies.map((movie, id) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 inline-block cursor-pointer relative hover:scale-105'>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} className='object-cover w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]' />
                            <div className='absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100'>
                                <p className='text-white font-bold w-full h-full flex justify-center items-center text-center text-xs md:text-sm whitespace-normal'>{movie?.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRows