const api_key = "e43e1ceda9e2aca53420ec9a76107981"


//api endpoints
const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`,
    requestHorror : `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
}


export default requests
