import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../API'
import { Link, useParams } from 'react-router-dom'

function Search() {
  const { movieName } = useParams()
  const [mov, setMov] = useState([])
  const getValue = (key) => {
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
      .then(res => setMov(res.data.results))
  }
  useEffect(() => {
    getValue(API_KEY)
  }, [mov])

  return (
    <div id='search'>
      <div className="container">
        <div className="search">
          {
            mov.map(el => (
              <Link to={`/Movies/Details/${el.id}`} key={el.id}>
                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt="Movie Poster" />
                <p>{el.title?.slice(0, 15)}... </p>
                <b>{el.release_date}</b>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Search
