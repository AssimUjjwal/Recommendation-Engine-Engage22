import axiosClient from "./axiosClient";
import axiosClient_RecEng from "./axiosClient_RecEng";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    Action: '28',
    Adventure: '12',
    Comedy: '35',
    Documentary: '99',
    Drama: '18',
    Romance: '10749',
    ScienceFiction: '878',
    Horror: '27'
}
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    upcoming: 'on_the_air'
}
// export const movieType = {
//     upcoming: 'upcoming',
//     popular: 'popular',
//     top_rated: 'top_rated',
//     Action: 'Action',
//     Adventure: 'Adventure',
//     Comedy: 'Comedy',
//     Documentary: 'Documentary',
//     Drama: 'Drama',
//     Romance: 'Romance',
//     ScienceFiction: 'Science Fiction',
//     Horror: 'Horror',
//     Horror: 'Horror'
// }

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getMoviesListByGenere: (cate, params) => {
        const url = 'discover/' + category[cate]; 
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    getRecommendation : (recommend_movie,params) => {
        const url = recommend_movie;
        return axiosClient_RecEng.post(url, params);
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;