import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../components/API'
import MovieActor from '../../components/MovieActor'

function ActorDetail() {
  const { actorId } = useParams()
  const [actorDetails, setActorDetails] = useState({})
  const [isBio, setIsBio] = useState(false)

  const getActorDetails = (key) => {
    axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`)
      .then(res => setActorDetails(res.data))
  }

  useEffect(() => {
    getActorDetails(API_KEY)
  }, [])

  const { profile_path, name, biography, also_known_as, birthday, place_of_birth } = actorDetails


  return (
    <div id='actorDetail'>
      <div className="container">
        <div className="actorDetail">
          <div className="actorDetail__img">
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt="" />
          </div>
          <div className="actorDetail__title">
            <h1>{name}</h1>
            <h3>Биография</h3>
            <p>
              {isBio ? biography :biography?.slice(0, 100)}
              <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => {setIsBio(!isBio)}}>{isBio ? '...close' : '...read'}</span>
            </p>
            <div className="actorDetail__title-biography">
              <div className="actorDetail__title-biography-li">
                <h3>Также известность как</h3>
                <ul>{also_known_as?.map(el => <li key={el}>{el}</li>)}</ul>
              </div>
              <div className="actorDetail__title-biography-li">
                <h3>Дата рождения</h3>
                <p>{birthday ? birthday : '---'}</p>
              </div>
              <div className="actorDetail__title-biography-li">
                <h3>Место рождения</h3>
                <p>{place_of_birth}</p>
              </div>
            </div>
            <MovieActor id={actorId}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActorDetail
