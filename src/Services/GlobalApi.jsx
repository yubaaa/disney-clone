import axios from "axios"

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='931e11480fbe2c0bcc3412a9686631ac'

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

export default {
    getTrendingVideos

};