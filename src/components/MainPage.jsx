import React, { useEffect, useState } from 'react'
import requests from '../Api/api'
import axios from 'axios'

function MainPage() {

    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    // console.log(movie)

    useEffect(() => {
        axios.get(requests.requestPopular).then((res) => {
            setMovies(res.data.results)
        })

    }, [])

    const trimString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }


    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                {/* overlay start*/}
                <div className='w-full h-[550px] bg-gradient-to-r from-black absolute'></div>
                {/* stop */}
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className='object-cover w-full h-full' />
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='font-bold text-3xl md:5xl'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='font-bold p-2 px-5 border border-[#00df9a] bg-[#00df9a] '>Play</button>
                        <button className='font-bold p-2 px-5 border border-[#00df9a] ml-4'>Watch Later</button>
                    </div>
                    <p className='text-sm font-bold text-gray-400'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] text-gray-300'>{trimString(movie?.overview, 200)}</p>
                </div>
            </div>

        </div>
    )
}

export default MainPage