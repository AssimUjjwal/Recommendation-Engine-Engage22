import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import Button, { OutlineButton } from '../../components/button/Button';
import { TrailerModal } from '../../components/hero-slide/HeroSlide';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList from '../../components/cast-list/CastList';
import VideoList from '../../components/video-list/VideoList';
import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {

    const { category, id, title } = useParams();
    let hisrory = useHistory();
    const [item, setItem] = useState(null);
    const [recommendedMovies, setRecommendedMovies] = useState(null);
    const { isAuthenticated } = useAuth0();
    const recommend_movie="recommend_movie";

    // function to show up the modal ie. trailer video.
    const setModalActive = async () => {
        if(isAuthenticated) {
            const modal = document.querySelector(`#modal_${item.id}`);
            const videSrc = category==='movie'? `https://www.2embed.ru/embed/tmdb/movie?id=${item.id}`:`https://www.2embed.ru/embed/tmdb/tv?id=${item.id}&s=1&e=1`
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
            modal.classList.toggle('active');
        }else{
            alert("Please do Sign in to watch Trailer");
        }
    }

    useEffect(() => {
        // get detail of movie item.
        const getDetail = async () => {
            const responseDetail = await tmdbApi.detail(category, id, {params:{}});
            setItem(responseDetail);
            window.scrollTo(0,0);
        }

        // get recommendation of movie item.
        const getRecommendations = async () => {
            const request = new FormData();
            request.append("movie_name", title);
            request.append("number_of_recommendations", 10);

            const recommendationResponse = await tmdbApi.getRecommendation( recommend_movie,request );
            let recommendations_movie_data = null;

            if(! recommendationResponse.error) {recommendations_movie_data = await Promise.all(recommendationResponse.recommendations.map( async (recommended_movie) => {
                    return await tmdbApi.detail(category, recommended_movie.movie_id, {params: {}});
                }));
            } else recommendations_movie_data=null;
           
            setRecommendedMovies(recommendations_movie_data);
        }
        getDetail();
        category==='movie' && getRecommendations();
    }, [category, id, title]);

    return (
        <>
            {
                item && (
                    <>
                        {/* banner for detail section. */}
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>

                        {/* movie details section. */}
                        <div className="mb-3 movie-content container">
                            {/* movie poster */}
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>

                            {/* movie info content. */}
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>

                                <p>{item.tagline}</p>
                                <p >{item.overview}</p>

                                <p className="overview">IMDB RATING : {item.vote_average} | { (item.adult)? '18+': '16+' }
                                </p>
                                <p className="overview">RUNTIME : {Math.floor(item.runtime/60)} hrs {item.runtime%60} mins</p>
                                <p className="overview">RELEASE DATE : {item.release_date}</p>
                                
                                <div className="btns">
                                    <Button onClick={() => hisrory.push(`/${category}`)}>
                                        Watch more
                                    </Button>
                                    <OutlineButton onClick={setModalActive}>
                                        Watch trailer
                                    </OutlineButton>
                                </div>
                            </div>

                            {/* movie trailer model. */}
                            {
                                <TrailerModal item={item}/>
                            }
                        </div>

                        {/* movie related containers. */}
                        <div className="container">
                            {/* movie cast section. */}
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Casts</h2>
                                </div>
                                <CastList id={item.id}/>
                            </div>
                            
                            {/* movie youtube video section. */}
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Youtube Videos</h2>
                                </div>
                                <VideoList id={item.id}/>
                            </div>
                            
                            {/* movie recommended video section. */}
                            {
                                (recommendedMovies !== null && category==='movie') ? 
                                <div className="section mb-3">
                                    <div className="section__header mb-2">
                                        <h2>Recommended</h2>
                                    </div>
                                    <MovieList category={category} type="recommended" recommendedMovies={recommendedMovies}/>
                                </div> : 
                                <div className="section mb-3">
                                    <div style={{textAlign : "center"}} className="section__header mb-2" >
                                        <h2>Recommended</h2>
                                    </div>
                                    <div style={{textAlign : "center"}} className="mb-2" >
                                        <h2>OOPS !! Searched movie is not in our Database to predit Recommendation. </h2>
                                    </div>
                                    <div style={{textAlign : "center"}} className="mb-2" >
                                        <h2>Try another movie...</h2>
                                    </div>
                                </div>
                            }

                            {/* movie similar section. */}
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;
