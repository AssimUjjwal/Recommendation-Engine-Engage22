import React, { useState, useEffect, useRef } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useParams } from 'react-router';

import './video-list.scss';
import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {

    const {category} = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // get youtube video list for detail section.
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {/* youtube video list */}
            <div className="video-list">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                >
                    {
                        videos.map((item, i) => (
                            <SwiperSlide key={i}>
                                <Video key={i} item={item}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
}

const Video = props => {

    const item = props.item;
    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 12 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
                allowFullScreen
            ></iframe>
            <div className="video__title">
                <h4>{item.name}</h4>
            </div>
        </div>
    )
}

export default VideoList;
