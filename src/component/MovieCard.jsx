import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card-container'>
            <div className='w-[189px]
            md:w-[230px] rounded-lg hover:border-[3px] border-gray-400 hover:ease-in transition-all hover:scale-110 duration-150 cursor-pointer
            '>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt="" />
            </div>
           
            <div className='text-container mt-4'>
                <h2 className='text-start text-white text-[17px] whitespace-nowrap overflow-hidden'>{movie.title}</h2>
            </div>
        </div>
    )
}

export default MovieCard;
