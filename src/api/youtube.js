import axios from 'axios';
 const API_KEY = 'AIzaSyBQBEouY2lIeM1hFBqDvxgEIv5djFQOl9I';

 export default axios.create({
     baseURL: "https://www.googleapis.com/youtube/v3/", params: {
         part: 'snippet',
         //type: 'channel',
         maxResults: 5,
         key: API_KEY
     },
     headers: {}
 });