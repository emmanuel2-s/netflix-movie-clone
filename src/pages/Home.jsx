import React from 'react'
import MainPage from '../components/MainPage'
import MovieRows from '../components/MovieRows'
import requests from '../Api/api'

function Home() {
    return (
        <div>
            <MainPage />
            <MovieRows RowId='1' title='UpComing' fetchUrl={requests.requestUpComing} />
            <MovieRows RowId='2' title='Most Popular' fetchUrl={requests.requestPopular} />
            <MovieRows RowId='3' title='Trending' fetchUrl={requests.requestTrending} />
            <MovieRows RowId='4' title='Top Rated' fetchUrl={requests.requestTopRated} />
            <MovieRows RowId='5' title='Horror' fetchUrl={requests.requestHorror} />
        </div>
    )
}

export default Home