import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../MovieCard'
import axios from 'axios'
import { API_KEY } from '../API'
import { LanguageContext } from '../../context'

function TopRated() {
  const [popular, setPopular] = useState([])
  const [count, setCount] = useState(1)
  const {language} = useContext(LanguageContext)
  const getPopular = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${count}`
    ).then((res) => setPopular(res.data.results));
  }
  useEffect(() => {
    getPopular(API_KEY);
  }, [count, language]);

  // ----Count----
  const handelNext = () => {
    setCount(count + 1)
  }
  const handelBack = () => {
    setCount(count > 1 ? count - 1 : 1)
  }
  // style btn div
  const div = {
    display: "flex",
    gap: '20px',
    justifyContent: 'center',
    margin: '0px auto',
    marginRight: '45px',
    padding: '30px 0'
  }
  const back = {
    with: '100px',
    borderRadius: '8px',
    background: count === 1 ? '#403c3c' : '#000',
    cursor: count === 1 ? 'not-allowed' : 'pointer',
    border: '1px solid #fff',
    color: '#fff',
    padding: '3px 10px',
  }
  const next = {
    width: '100px',
    borderRadius: '8px',
    background: 'red',
    color: '#fff',
    padding: '3px 10px',
    cursor: 'pointer',
  }
  // ==========
  return (
    <div id='popular'>
      <div className="container">
        <div className="popular">
          {
            popular.map((el) => <MovieCard el={el} key={el.id} />)
          }
        </div>
        <div style={div}>
          <button onClick={handelBack} style={back}>Back | {count}</button>
          <button onClick={handelNext} style={next}>next | {count}</button>
        </div>
      </div>
    </div>
  )
}

export default TopRated
