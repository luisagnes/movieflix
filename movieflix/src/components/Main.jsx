import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../requests'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.lenght)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    }, [])
    console.log(movies)

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
        <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
    </div>
  )
}

export default Main