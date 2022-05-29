import React from 'react';
import { Link } from 'react-router-dom';

import './movie-card.scss';
import Button from '../button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

// Prepare movie Card for movie list.
const MovieCard = props => {
    const item  = props.item;

    // router link for movies and tv shows correspondingly.
    const link =props.category==='movie'? '/' + category[props.category] + '/' + item.id + '/' + item.title:'/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;
