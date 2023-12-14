import React from 'react'
import Moviecards from './Moviecard';

function Movielists({movies}) {
    console.log(movies)
  return (
    <div>{
        movies.map(element=><Moviecards movie={element}/>)}
    </div>
  )
}

export default Movielists;