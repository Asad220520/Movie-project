import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../MovieCard'
import { API_KEY } from '../../API'

function PopularSlaider() {
  const [popular, setPopular] = useState([])
  const getPopular = (key) => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      .then((res) => setPopular(res.data.results))
  }
  useEffect(() => {
    getPopular(API_KEY)
  }, [])
  return (
    <div id='popularSlaider'>
      <div className="container">
        <h1 style={{color: 'red', padding: '20px 0'}}>PopularMovies</h1>
        <div className="popularSlaider">
          {
            popular.map((el) => <MovieCard el={el} key={el.id} />)
          }
        </div>
      </div>
    </div>
  )
}

export default PopularSlaider
