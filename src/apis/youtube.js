import Axios from 'axios';

const Key = 'AIzaSyBBSYkulYKr_P6dr3Il7rSi-rPBapq4BDE'

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:Key
    }
})

