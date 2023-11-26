import React from 'react'
import MainPage from '../components/MainPage'
import MovieRows from '../components/MovieRows'
import requests from '../Api/api'

function Home() {
    return (
        <div>
            <MainPage />
            <MovieRows title='UpComing' fetchUrl={requests.requestUpComing} />
            <MovieRows title='Most Popular' fetchUrl={requests.requestPopular} />
            <MovieRows title='Trending' fetchUrl={requests.requestTrending} />
            <MovieRows title='Top Rated' fetchUrl={requests.requestTopRated} />
            <MovieRows title='Horror' fetchUrl={requests.requestHorror} />
        </div>
    )
}

export default Home