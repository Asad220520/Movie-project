import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../MovieCard'
import axios from 'axios'
import { API_KEY } from '../API'
import { LanguageContext } from '../../context'

function Popular() {
  const [popular, setPopular] = useState([])
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(false);
  const {language} = useContext(LanguageContext)
  const getPopular = (key) => {
    setLoading(true);
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${count}`
    )
      .then((res) => setPopular(res.data.results))
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getPopular(API_KEY);
  }, [count, language]);

  // ----Count----
  const handleNextClick = () => {
    setLoading(true);
    setCount(count + 1);
  };
  const handleBakcClick = () => {
    setLoading(true);
    setCount(count > 1 ? count - 1 : 1);
  };
  // style btn div
  const div = {
    display: 'flex',
    gap: '15px',
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
    cursor: 'pointer'
  }
  // ==========

  // -----loading-----
  if (loading) {
    return (
      <div className="preloader">
        <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="big-circle" d="M101 51C101 78.6142 78.6142 101 51 101C23.3858 101 1 78.6142 1 51" stroke="#252525" strokeWidth="2" />
          <path className="small-circle" d="M91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51" stroke="#252525" strokeWidth="2" />
        </svg>
      </div>
    );
  }
  // ===========
  return (
    <div id='popular'>
      <div className="container">
        <div className="popular">
          {
            popular.slice(0,10).map((el) => <MovieCard el={el} key={el.id} />)
          }
        </div>
        <div style={div}>
          <button onClick={handleBakcClick} style={back} disabled={count === 1}>Back | {count}</button>
          <button onClick={handleNextClick} style={next}>next | {count}</button>
        </div>
      </div>
    </div>
  )
}

export default Popular

// window.scrollTo({ top: 0, behavior: 'smooth' });
