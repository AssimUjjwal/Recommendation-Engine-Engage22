import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../../components/button/Button';
import HeroSlide from '../../components/hero-slide/HeroSlide';
import MovieList from '../../components/movie-list/MovieList';
import CategoryTabs from '../../components/category-tabs/CategoryTabs';

import { category, movieType, tvType } from '../../api/tmdbApi';

const Home = () => {
    return (
        <>
            {/* hero slide section. */}
            <HeroSlide/>

            {/* movielist container. */}
            <div className="container">
                {/* trending movies. */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                {/* upcomming movies. */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Upcoming Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming}/>
                </div>

                {/* top rated movies. */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                {/* movies category tabs. */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Category</h2>
                    </div>
                    <CategoryTabs/>
                </div>

                {/* popular tv shows. */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                {/* top rated tv shows. */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>

                {/* upcomming tv shows. */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>On the air</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.upcoming}/>
                </div>
            </div>
        </>
    );
}

export default Home;
