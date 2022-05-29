import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide, Swiper } from 'swiper/react';


import './movie-list.scss';
import tmdbApi, { category } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // get list of movies to display in swiper.
        const getList = async () => {
            let response = null;
            let params = {};


            if (props.type === 'similar') {
                // similar section of detail page.
                response = await tmdbApi.similar(props.category, props.id);
                setItems(response.results);
            } else if (props.type === 'recommended' && props.category==='movie'){
                // recommended section of detail page.
                setItems(props.recommendedMovies);
            } else {
                if (props.type === 'upcoming' || props.type === 'popular' || props.type === 'top_rated') {
                    // tv and movie list for home page.
                    switch(props.category) {
                        case category.movie:
                            response = await tmdbApi.getMoviesList(props.type, {params});
                            break;
                        default:
                            response = await tmdbApi.getTvList(props.type, {params});
                    }
                    setItems(response.results);
                } else {
                    // movie category wise list.
                    switch(props.category) {
                        case category.movie:
                            // response = await axios({
                            //     url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.apiKey}&with_genres=${props.type}`,
                            //     method: 'get'
                            // });
                            response = await tmdbApi.getMoviesListByGenere(props.category,{params:{with_genres:props.type}});
                            break;
                        default:
                            response = await tmdbApi.getMoviesListByGenere(props.category, {params:{with_genres:props.type}});
                    }
                    setItems(response.results);
                }
            }
        }
        getList();
    }, [props.category, props.id, props.recommendedMovies, props.type]);
    

    return (
        <div className="movie-list">
            {/* formation of movie list on different section of website. */}
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items && items[0] && items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;
