import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../API'
import MovieCard from '../MovieCard'
import { Link } from 'react-router-dom'

function MovieActor({ id }) {
  const [movieActor, setMovieActor] = useState([])
  const getMovieActor = (key) => {
    axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
      .then(res => setMovieActor(res.data.cast))
  }
  console.log('mov', movieActor);
  useEffect(() => {
    getMovieActor(API_KEY)
  }, [])
  return (
    <div id='movieActor'>
      <div className="movieActor">
        {movieActor.map(el => (
          <div className='movieActor__card'>
            <Link to={`/Movies/Details/${el.id}`}>
              <img className="image" src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt="Movie Poster" />
              <h5>{el.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieActor
