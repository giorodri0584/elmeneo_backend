import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import VideoCard from './video_card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import youtubeApi from '../../api/youtube';

const YoutubeVideo = () => {
    const [video,setVideo] = useState(null);
    const [videoId,setVideoId] = useState('');

    const getVideo = async (event) => {
        event.preventDefault();
        if(videoId !== '') {
            console.log(videoId);
            const url = `http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${videoId}&format=json`;
            const response = await axios.get(url);
            // const response = await youtubeApi.get('/search', {params: {
            //     q: videoId
            //     }
            //  });
            const vid = response.data //response.data.items[0].snippet;
            // const channelImageUrl = await getVideoAuthorImage(response.data.items[0].snippet.channelId);
            const channelImageUrl = await getVideoAuthorImage(vid.author_name);
            const video = {
                videoId: videoId,
                title: vid.title,
                videoImageUrl: vid.thumbnail_url,
                channelId: vid.author_name,
                channelTitle: vid.author_name,
                channelImageUrl: channelImageUrl,
                channelUrl: vid.author_url
            };
            console.log(video);
            setVideo(video);
        }
    }
    const getVideoAuthorImage = async (channerlId) => {
        const response = await youtubeApi.get('/search', {params: {
            q: channerlId
            }
         });
        return response.data.items[0].snippet.thumbnails.default.url;
    }
    const searchVideoChanged = (event) => {
        console.log("input changed");
        const video = event.target.value;
            if(video){
                try{
                    var videoId = video.split('v=')[1];
                    var ampersandPosition = videoId.indexOf('&');
                    if(ampersandPosition != -1) {
                        videoId = videoId.substring(0, ampersandPosition);
                    }
                    if(videoId.length === 11){
                        setVideoId(videoId);
                    }
                }catch (e) {
                    console.log(e);
                }
        }else {
            setVideo(null);
        }
    }

    return (
        <div>
            <h2>Youtube Video</h2>
            <form onSubmit={getVideo} noValidate autoComplete="off">
                <Grid container>
                    <Grid item md={10}>
                <TextField 
                    id="outlined-basic" 
                    label="YouTube Video" 
                    variant="outlined" 
                    size="small" 
                    fullWidth 
                    onChange={searchVideoChanged}
                />
                </Grid>
                <Grid item md={2}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        style={{marginLeft: 8}}
                        onClick={getVideo}
                    >Buscar</Button>
                </Grid>
                </Grid>
            </form>
            <br />
            <div>
                {video !== null ? <VideoCard video={video} /> : null }
            </div>
            <div><pre>{JSON.stringify(video, null, 2) }</pre></div>
        </div>
    );
}

export default YoutubeVideo;