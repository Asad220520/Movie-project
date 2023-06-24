import React from 'react';
import { RiStarSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function MovieCard({ el }) {
  return (
    <div className='movieCard'>
      <div className="popular">
        <Link to={`/Movies/Details/${el.id}`}>
          <img className="image" src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt="Movie Poster" />
        </Link>
          <p>{el.title}</p>
          <i><span><RiStarSFill /></span>{el.vote_average}</i>
          <b>{el.release_date}</b>

      </div>
    </div>
  );
}

export default MovieCard;
