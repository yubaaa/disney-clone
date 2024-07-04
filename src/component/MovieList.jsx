import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const MovieList = ({ genreId }) => {
    const [movieListing, setMovieListing] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            console.log(resp.data.results);
            setMovieListing(resp.data.results);
        });
    };

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='relative mb-8'>
            <div className='hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10'>
                <div className='bg-gradient-to-r from-black h-full w-8 absolute top-0 left-0'></div>
                <HiChevronLeft 
                    className='text-white text-[30px] relative'
                    onClick={scrollLeft}
                />
            </div>
            <div className='flex overflow-x-scroll scrollbar-none w-full gap-8 pt-5 px-3 pb-5' ref={scrollRef}>
                {movieListing.map((movie, index) => (
                    <div key={index} className='flex-shrink-0'>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
            <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10'>
                <div className='bg-gradient-to-l from-black h-full w-8 absolute top-0 right-0'></div>
                <HiChevronRight 
                    className='text-white text-[30px] relative'
                    onClick={scrollRight}
                />
            </div>
        </div>
    );
};

export default MovieList;
