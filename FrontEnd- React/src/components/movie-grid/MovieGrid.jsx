import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';

import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';
import Button from '../button/Button';
import Input from '../input/Input'

import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import movie_names from "../../movie_names.json";

const MovieGrid = props => {

    const [items, setItems] = useState(null);
    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            // content of movie grid based on routes.
            let response = null;
            if (keyword === undefined) {
                // content for main page of grid.
                const params = {};
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.popular, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params});
                }
            } else {
                // content for specific keyword searched in search box.
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, {params});
            }
            response ? setItems(response.results) : setItems(null)
        }
        getList();
    }, [props.category, keyword]);


    return (
        <>
            {/* search bar. */}
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
            </div>

            {/* main grid containing movies/tv shows. */}
            <div className="movie-grid">
                {
                    items && items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>) 
                }
            </div>
        </>
    );
}


const MovieSearch = props => {

    const history = useHistory();
    const [movies, setMovies] = useState([]);
    const [suggestions, setSuggestions] = useState(null);
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    // function to executes when search button is pressed.
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    // function to give movie name search suggestions.
    const onChangeHandler = (text_value) => {
        let matches = [];
        if (text_value.length > 0) {
          matches = movies.filter((movie) => {
            const regex = new RegExp(`${keyword}`, "gi");
            return movie.title.match(regex);
          });
        }
        if (matches.length > 10) matches = matches.slice(0, 8);
    
        setSuggestions(matches);
        setKeyword(text_value);
    };
    
    // function to call when any suggestion is selected.
    const onSuggestHandler = (text_value) => {
        setKeyword(text_value);
        setSuggestions(null);
    };

    useEffect(() => {
        // load movie names for suggestions.
        const loadMovieNames = () => {
            setMovies(movie_names.movie_names);
        };
        
        // event listener for enter button to be pressed.
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        loadMovieNames();
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            {/* input bar */}
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => onChangeHandler(e.target.value)}
            />

            {/* button section  */}
            <Button className="small" onClick={goToSearch}>Search</Button>

            {/* suggestions ssection */}
            {suggestions && (
                <div className="suggestion_container">
                    {suggestions.map((suggestion, i) => {
                        return (
                            <div
                                className="suggestion"
                                onClick={() => onSuggestHandler(suggestion.title)}
                                key={i}
                            >
                                {suggestion.title}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default MovieGrid;
