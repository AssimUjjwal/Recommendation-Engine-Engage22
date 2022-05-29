const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    baseUrl_RecEng: 'https://recommendation-engine-assim.herokuapp.com//',
    apiKey: 'f2ea12b22e7afbfd7bf179d7bcbe392b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;