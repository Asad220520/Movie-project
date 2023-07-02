import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../../components/API';
import { IoIosBookmark, IoIosHeart, IoIosStar, IoMdListBox, IoMdPlay } from 'react-icons/io';
import Actors from '../../components/Actors';
import Treyler from '../../components/Treyler';
import { LanguageContext } from '../../context';

function MovieDetail() {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [click, setClick] = useState({ listBox: false, heart: false, bookmark: false, star: false, fr: false });
  const {language} = useContext(LanguageContext)

  const getPopular = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
    ).then((res) => setDetails(res.data));
  }

  useEffect(() => {
    getPopular(API_KEY);
  }, [language]);
  const openModal = () => {
    setClick((prevState) => ({ ...prevState, fr: true }));
  };

  const { backdrop_path, title, tagline, overview, poster_path, vote_average, release_date, original_language, runtime, genres } = details;

  const [progressValue, setProgressValue] = useState(0);
  let progressEndValue = Math.round(vote_average * 10);

  useEffect(() => {
    let progressStartValue = 0;
    const progress = setInterval(() => {
      progressStartValue++;
      setProgressValue(progressStartValue);
      if (progressStartValue === progressEndValue || progressStartValue >= 101) {
        clearInterval(progress);
      }
    }, 10);
    return () => {
      clearInterval(progress);
    };
  }, [progressEndValue]);

  const circularProgressStyle = {
    background: `conic-gradient(#17c78f ${progressValue * 3.6}deg, #0f1b16 0deg)`,
  };
  //
  const [open, setOpen] = useState(false)
  const opens = () => {
    setOpen(true)
  }
  const closes = () => {
    setOpen(false)
  }
  //
  return (
    <>
      <div id='details' style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`
      }}>
        <div className="container">
          <div className="details">
            <div className='details__img'>
              <img onClick={opens} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`} alt="" />
            </div>
            <div onClick={closes} className="details__img-modal" style={{
              display: open ? 'block' : 'none'
            }}>
              <h2 onClick={closes}>X</h2>
              <img style={{
                width: '370px',
                height: '100%'
              }} onClick={opens} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`} alt="" />
            </div>
            <div className="details__img-modal-blur" onClick={closes} style={{
              display: open ? 'block' : 'none'
            }}></div>
            <div className="details__title">
              <h1>{title}</h1>
              <ul className="details__title-data">
                <li>{release_date}({original_language})</li>
                <li>● {genres?.map((el) => <span key={el.id}> {''}{el.name}</span>)}</li>
                <li>● {Math.floor(runtime / 60)}h {runtime % 60}m </li>
              </ul>
              <div className="details__title-content">
                <div className="circular-progress" style={circularProgressStyle}>
                  <span className="progress-value">{progressValue === 101 ? 'err' : progressValue}<sup>%</sup></span>
                </div>
                <h6 className="rating">Рейтинг</h6>
                <Link to={"#"}>
                  <ul className="icons">
                    <li
                      onClick={() => setClick((prevState) => ({ ...prevState, listBox: !prevState.listBox }))}
                      style={{ color: click.listBox ? 'red' : '' }}
                    >
                      <IoMdListBox className="icon" />
                    </li>
                    <li
                      onClick={() => setClick((prevState) => ({ ...prevState, heart: !prevState.heart }))}
                      style={{ color: click.heart ? 'red' : '' }}
                    >
                      <IoIosHeart className="icon" />
                    </li>
                    <li
                      onClick={() => setClick((prevState) => ({ ...prevState, bookmark: !prevState.bookmark }))}
                      style={{ color: click.bookmark ? 'red' : '' }}
                    >
                      <IoIosBookmark className="icon" />
                    </li>
                    <li
                      onClick={() => setClick((prevState) => ({ ...prevState, star: !prevState.star }))}
                      style={{ color: click.star ? 'red' : '' }}
                    >
                      <IoIosStar className="icon" />
                    </li>
                    <li onClick={openModal} style={{ color: click.fr ? 'red' : '' }}>
                      <IoMdPlay className="icon" />
                    </li>
                    <h5 onClick={openModal}>Воспроизвести трейлер</h5>
                  </ul>
                </Link>
                <Treyler showModal={click.fr} closeModal={() => setClick((prevState) => ({ ...prevState, fr: false }))} />
              </div>
              <i>{tagline}</i>
              <h3>Обзор</h3>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <Actors id={movieId} />
    </>
  )
}

export default MovieDetail;
