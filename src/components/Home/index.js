import React from 'react'
import PopularSlaider from '../Slaider/PopularSlaider'
import TopRatedSlaider from '../Slaider/TopRatedSlaider'

function Home() {
  return (
    <>
    <div id='home'>
      <div className="container">
        <div className="home">
        </div>
      </div>
    </div>
    <PopularSlaider/>
    <TopRatedSlaider/>
    </>
  )
}

export default Home
