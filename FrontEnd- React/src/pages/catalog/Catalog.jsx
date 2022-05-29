import React from 'react';
import { useParams } from 'react-router';

import PageHeader from '../../components/page-header/PageHeader';
import { category as cate } from '../../api/tmdbApi';
import MovieGrid from '../../components/movie-grid/MovieGrid';

const Catalog = () => {
    const { category } = useParams();

    return (
        <>
            {/* page header section */}
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>

            {/* catlog or movie grid section */}
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;
