import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './cast-list.scss'

const CastList = props => {

    const {category} = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        // get top 5 cast list info
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);

    return (
        // Cast list row with image, name and charachter.
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts__item__name">{`${item.character} : ${item.name}`}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;
