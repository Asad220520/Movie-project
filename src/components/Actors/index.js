import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../API'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function Actors({ id }) {
  const [actors, setActors] = useState([])
  const getActors = (key) => {
    axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
      .then(res => setActors(res.data.cast))
  }
  useEffect(() => {
    getActors(API_KEY)
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div id='actors'>
      <div className="container">
        <Slider className="actors"{...settings}>
          {
            actors.map((el) => (
              <div key={el.id} className='actors__card'>
                <Link to={`/Movies/Details/actor/${el.id}`}>
                  {
                    el.profile_path ? (
                      <img
                        className='img'
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`}
                        alt=""
                      />
                    ) : (
                      <img
                        className='img'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yJWVwI9ZFnJhI3FIB5wIK4Ys7B8J-u5hfQ&usqp=CAU"
                        alt=""
                      />
                    )
                  }
                </Link>
                <strong>{el.name}</strong>
                <p>{el.character}</p>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Actors
