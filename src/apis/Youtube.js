import axios from 'axios';
import keys from '../keys';

const k = keys.GOOGLE_API_KEY; // Enter Google API Key

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: k,
  },
});
