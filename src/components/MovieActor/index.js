import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../API";
import { Link } from "react-router-dom";

function MovieActor({ id }) {
  const [movieActor, setMovieActor] = useState([]);
  const getMovieActor = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
    ).then((res) => setMovieActor(res.data.cast));
  };
  useEffect(() => {
    getMovieActor(API_KEY);
  }, []);
  return (
    <div id="movieActor">
      <div className="movieActor">
        {movieActor.map((el) => (
          <div className="movieActor__card" key={el.id}>
            <Link to={`/Movies/Details/${el.id}`}>
              {el.poster_path ? (
                <img
                  className="image"
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`}
                  alt="Movie Poster"
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&usqp=CAU"
                  alt="fdsa"
                />
              )}
              <h5>{el.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieActor;
