import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../MovieCard'
import { API_KEY } from '../../API'

function TopRatedSlaider() {
  const [popular, setPopular] = useState([])
  const getPopular = (key) => {
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
      .then((res) => setPopular(res.data.results))
  }
  useEffect(() => {
    getPopular(API_KEY)
  }, [])
  console.log(popular);
  return (
    <div id='topRatedSlaider'>
      <div className="container">
      <h1 style={{color: 'red', padding: '20px 0'}}>TopRatedMovies</h1>
        <div className="topRatedSlaider">
          {
            popular.map((el) => <MovieCard el={el} key={el.id}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default TopRatedSlaider
