import React from 'react'
import GenresList from '../constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = ({}) => {
  return (
    <div>
      {GenresList.genere.map((item,index)=>index<4&&(
        <div className='p-8 px-8 md:px-16 ' key={index}>
            <h2 className='text-[20px] font-bold text-white'>{item.name}</h2>
            <MovieList genreId={item.id} />
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
