import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    const intervalRef = useRef(null);

    useEffect(() => {
        getTrendingMovies();

        // Start automatic scrolling
        intervalRef.current = setInterval(() => {
            sliderRight(elementRef.current);
        }, 7000);

        return () => {
            // Clear interval on component unmount
            clearInterval(intervalRef.current);
        };
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };

    const sliderRight = (element) => {
        if (element) {
            const maxScrollLeft = element.scrollWidth - element.clientWidth;
            if (element.scrollLeft + screenWidth - 110 > maxScrollLeft) {
                element.scrollLeft = 0;
            } else {
                element.scrollLeft += screenWidth - 110;
            }
        }
    };

    const sliderLeft = (element) => {
        if (element) {
            if (element.scrollLeft - (screenWidth - 110) < 0) {
                element.scrollLeft = element.scrollWidth - element.clientWidth;
            } else {
                element.scrollLeft -= screenWidth - 110;
            }
        }
    };

    const startScrolling = () => {
        intervalRef.current = setInterval(() => {
            sliderRight(elementRef.current);
        }, 7000);
    };

    const stopScrolling = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'
                onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef} 
            onMouseEnter={stopScrolling}
            onMouseLeave={startScrolling}

            >
                {movieList.map((item, index) => (
                    <img
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className='cursor-pointer min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-300 transition-all duration-160 ease-in flex-shrink-0'
                        key={index}
                        alt={item.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;


