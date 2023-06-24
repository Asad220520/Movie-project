import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../API';
import YouTube from 'react-youtube';

function Treyler(props) {
  const [detailsTr, setDetailsTr] = useState([]);
  const { movieId } = useParams();

  const getTrailer = (key) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`)
      .then((res) => setDetailsTr(res.data.results))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTrailer(API_KEY);
  }, []);

  return (
    <div id="treyler">
      {props.showModal && (
        <div onClick={props.closeModal} className="modal-overlay">
          <div className="modal-content">
            <button className="close" onClick={props.closeModal}>
              X
            </button>
            {detailsTr.slice(0, 1).map((el) => (

              <YouTube className='youtybe' key={el.id} videoId={el.key} />
            ))}
          </div>
        </div>
      )}
    </div>

  );
}

export default Treyler;
