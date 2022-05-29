import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './hero-slide.scss';

const HeroSlide = () => {

    SwiperCore.use([Autoplay]);
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        // get list of popular or trending movies.
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 5));
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            {/* hero slide items and info */}
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{delay: 8000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* hero slide items trailer video modal */}
            {
                movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
            }
        </div>
    );
}

{/* hero slide items and info */}
const HeroSlideItem = props => {

    let hisrory = useHistory();

    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        // get trailer videos key from tmdb database
        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }
        // toggle the modal.
        modal.classList.toggle('active');
    }

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
                {/* movie info */}
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <p>{item.tagline}</p>
                    <div className="overview">{item.overview}</div>
                    <p className="overview" style={{color:"red"}}>IMDB RATING : {item.vote_average} | { (item.adult)? '18+': '16+' }</p>
                    <p className="overview">RELEASE DATE : {item.release_date}</p>
                    <div className="btns">
                        <Button onClick={() => hisrory.push('/movie/' + item.id)}>
                            Watch more
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>

                {/* movie image card */}
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

{/* hero slide items trailer video modal */}
export const TrailerModal = props => {
    const item = props.item;
    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} frameBorder="0" width="100%" height="100%" title="trailer" allowFullScreen></iframe>
            </ModalContent>
        </Modal>
    )
}

export default HeroSlide;
