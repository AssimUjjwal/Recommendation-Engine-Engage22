import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.scss';
import './category-tabs.scss'
import MovieList from "../movie-list/MovieList";
import { category, movieType } from "../../api/tmdbApi";

function CategoryTabs() {
    // create array of category from key object pairs.
    let movie_types = Object.keys(movieType).map((key) => [key, movieType[key]]);
    //console.log(movie_types);
  return (
    <Tabs>
        {/* Category headlist title */}
        <TabList style={{display:'flex',justifyContent:'center', overflow:"auto"}}>
            {movie_types.map( (type,i) => (
                <Tab key={i}>{type[0]}</Tab>
            ))}
        </TabList>
        
        {/* Movie list corresponding to each category */}
        {movie_types.map( (type,i) => (
            <TabPanel key={i}>
                <MovieList category={category.movie} type={type[1]}/>
            </TabPanel>
        ))}
    </Tabs>
  );
};

export default CategoryTabs;
