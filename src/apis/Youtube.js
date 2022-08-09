
import axios from 'axios';


const k = 'AIzaSyCxuPFjttzSPJC2JhDoqszbcZ4FW-W5gQs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet" ,
        maxResults: 5,
        key: k
    }
});